import React, { useEffect, useState } from "react";

export default function index() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://random-data-api.com/api/address/random_address").then(
      (response) => response.json().then((data) => setData(data))
    );
  }, []);

  return (
    <div>
      {Object.keys(data).map((key) => (
        <div key={key}>
          <strong>{key}: </strong>
          <span>{data[key]}</span>
        </div>
      ))}
    </div>
  );
}
