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

  console.log(modifiedVotes);

  const itemsWithUniqueId8 = modifiedVotes.filter(
    (item) => item.polling_unit_uniqueid === "8"
  );

  const tableHeading = itemsWithUniqueId8[0];

  // Get the keys of the first object
  const headings = Object.keys(tableHeading);

  // get table heading data
  const ThData = () => {
    return headings.map((data) => {
      return <th key={data.result_id}>{data}</th>;
    });
  };

  // get table row data
  const tdData = () => {
    return itemsWithUniqueId8.map((data) => {
      return (
        <tr>
          {headings.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };
  //   console.log(itemsWithUniqueId8); // Output: Array of objects with polling_unit_uniqueid of "8"

  return (
    <div>
      <table className="table">
        <thead>
          <tr>{ThData()}</tr>
        </thead>
        <tbody>{tdData()}</tbody>
      </table>
    </div>
  );
};
