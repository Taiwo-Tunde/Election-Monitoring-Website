import axios from "axios";
import { useQuery } from "react-query";

export default function AnnouncedPU() {
  const { isLoading, data, error } = useQuery(["PU"], () =>
    axios.get("http://localhost:4000/Local_Government").then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // Get all items with a specific polling_unit_uniqueid
  if (!Array.isArray(data)) {
    return null; // or display an error message
  }

  // Remove specific properties from each object
  const modifiedVotes = data.map(
    ({ entered_by_user, date_entered, user_ip_address, ...rest }) => rest
  );

  // Create a map of polling_unit_uniqueid to their corresponding data
  const pollingUnitDataMap = modifiedVotes.reduce((acc, data) => {
    const { lga_name } = data;
    if (!acc[lga_name]) {
      acc[lga_name] = [];
    }
    acc[lga_name].push(data);
    return acc;
  }, {});

  // Get the unique polling_unit_uniqueid values
  const lga_name = Object.keys(pollingUnitDataMap);

  // Create table components dynamically for each polling_unit_uniqueid
  const tables = lga_name.map((lgId) => {
    const tableData = pollingUnitDataMap[lgId];
    const tableHeading = tableData[0];
    const headings = Object.keys(tableHeading);

    const ThData = () => {
      return headings.map((data) => {
        return <th key={data.result_id}>{data}</th>;
      });
    };

    const tdData = () => {
      return tableData.map((data) => {
        return (
          <tr key={data.result_id}>
            {headings.map((v) => {
              return <td key={v}>{data[v]}</td>;
            })}
          </tr>
        );
      });
    };

    return (
      <div key={lgId}>
        <h3> RESULTS FOR Local Government {lgId} </h3>
        <table className="table">
          <thead>
            <tr>{ThData()}</tr>
          </thead>
          <tbody>{tdData()}</tbody>
        </table>
      </div>
    );
  });

  return <div>{tables}</div>;
}
