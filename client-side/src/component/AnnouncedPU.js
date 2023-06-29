// components/Repositories.jsx

import React, { Fragment } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export default function AnnouncedPU() {
  const { isLoading, data, error } = useQuery(["repo"], () =>
    axios.get("http://localhost:4000/PU_votes").then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return <>helllll0</>;
}
