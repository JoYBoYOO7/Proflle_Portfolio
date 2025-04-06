"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error);
    // You can also send the error to a logging service here
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
