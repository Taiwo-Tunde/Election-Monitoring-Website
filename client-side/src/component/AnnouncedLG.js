import axios from "axios";
import { useQuery } from "react-query";

export default function AnnouncedLG() {
  const { isLoading, data, error } = useQuery(["LG"], () =>
    axios.get("http://localhost:4000/Local_Government").then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const tableHeading = data[0];

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
    return data.map((data) => {
      return (
        <tr>
          {headings.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  console.log(headings);

  return (
    <>
      <table className="table">
        <thead>
          <tr>{ThData()}</tr>
        </thead>
        <tbody>{tdData()}</tbody>
      </table>
    </>
  );
}
