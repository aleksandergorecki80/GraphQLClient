import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const Book = () => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: "62f3fb488789f063259b9be9" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);

  return <>Book</>;
};

export default Book;
