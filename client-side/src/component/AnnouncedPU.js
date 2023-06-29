// import axios from "axios";
// import { useQuery } from "react-query";

// export default function AnnouncedPU() {
//   const { isLoading, data, error } = useQuery(["PU"], () =>
//     axios.get("http://localhost:4000/PU_votes").then((res) => res.data)
//   );

//   if (isLoading) return "Loading...";

//   if (error) return "An error has occurred: " + error.message;
//   // Remove specific properties from each object
//   const modifiedData = data.map(
//     ({ entered_by_user, date_entered, user_ip_address, ...rest }) => rest
//   );

//   const tableHeading = modifiedData[0];

//   // Get the keys of the first object
//   const headings = Object.keys(tableHeading);

//   // get table heading data
//   const ThData = () => {
//     return headings.map((data) => {
//       return <th key={data.result_id}>{data}</th>;
//     });
//   };

//   // get table row data
//   const tdData = () => {
//     return modifiedData.map((data) => {
//       return (
//         <tr>
//           {headings.map((v) => {
//             return <td>{data[v]}</td>;
//           })}
//         </tr>
//       );
//     });
//   };

//   return (
//     <>
//       <table className="table">
//         <thead>
//           <tr>{ThData()}</tr>
//         </thead>
//         <tbody>{tdData()}</tbody>
//       </table>
//     </>
//   );
// }
