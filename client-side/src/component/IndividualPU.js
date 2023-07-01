import axios from "axios";
import { useQuery } from "react-query";

export const IndividualPU = () => {
  const { data } = useQuery(["PU"], () =>
    axios.get("http://localhost:4000/PU_votes").then((res) => res.data)
  );

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
    const { polling_unit_uniqueid } = data;
    if (!acc[polling_unit_uniqueid]) {
      acc[polling_unit_uniqueid] = [];
    }
    acc[polling_unit_uniqueid].push(data);
    return acc;
  }, {});

  // Get the unique polling_unit_uniqueid values
  const uniquePollingUnitIds = Object.keys(pollingUnitDataMap);

  // Create table components dynamically for each polling_unit_uniqueid
  const tables = uniquePollingUnitIds.map((unitId) => {
    const tableData = pollingUnitDataMap[unitId];
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
      <div key={unitId}>
        <h3> RESULTS FOR POLLING UNIT {unitId} </h3>
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
};
