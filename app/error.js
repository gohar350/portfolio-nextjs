"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "65vh",
        textAlign: "center",
      }}
    >
      <h1 className={"page_title"}>Something went wrong!</h1>
      <Link href="/">
        <button className="button button_primary">Return Home</button>
      </Link>
    </div>
  );
}
