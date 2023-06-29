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

  // FOR POLING UNIT 9

  const itemsWithUniqueId9 = modifiedVotes.filter(
    (item) => item.polling_unit_uniqueid === "9"
  );

  // get table heading data
  const ThDataUnit9 = () => {
    return headings.map((data) => {
      return <th key={data.result_id}>{data}</th>;
    });
  };

  // get table row data
  const tdDataUnit9 = () => {
    return itemsWithUniqueId9.map((data) => {
      return (
        <tr>
          {headings.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  // FOR POLING UNIT 10

  const itemsWithUniqueId10 = modifiedVotes.filter(
    (item) => item.polling_unit_uniqueid === "10"
  );

  // get table heading data
  const ThDataUnit10 = () => {
    return headings.map((data) => {
      return <th key={data.result_id}>{data}</th>;
    });
  };

  // get table row data
  const tdDataUnit10 = () => {
    return itemsWithUniqueId10.map((data) => {
      return (
        <tr>
          {headings.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  // FOR POLING UNIT 11

  const itemsWithUniqueId11 = modifiedVotes.filter(
    (item) => item.polling_unit_uniqueid === "11"
  );

  // get table heading data
  const ThDataUnit11 = () => {
    return headings.map((data) => {
      return <th key={data.result_id}>{data}</th>;
    });
  };

  // get table row data
  const tdDataUnit11 = () => {
    return itemsWithUniqueId11.map((data) => {
      return (
        <tr>
          {headings.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div>
      <h3> RESULTS FOR POLING UNIT 8 </h3>
      <table className="table">
        <thead>
          <tr>{ThData()}</tr>
        </thead>
        <tbody>{tdData()}</tbody>
      </table>

      <h3> RESULTS FOR POLING UNIT 9 </h3>
      <table className="table">
        <thead>
          <tr>{ThDataUnit9()}</tr>
        </thead>
        <tbody>{tdDataUnit9()}</tbody>
      </table>

      <h3> RESULTS FOR POLING UNIT 10 </h3>
      <table className="table">
        <thead>
          <tr>{ThDataUnit10()}</tr>
        </thead>
        <tbody>{tdDataUnit10()}</tbody>
      </table>

      <h3> RESULTS FOR POLING UNIT 11 </h3>
      <table className="table">
        <thead>
          <tr>{ThDataUnit11()}</tr>
        </thead>
        <tbody>{tdDataUnit11()}</tbody>
      </table>
    </div>
  );
};
