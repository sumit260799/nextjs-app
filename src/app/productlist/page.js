import React from "react";

const fetchData = async () => {
  const data = await fetch("https://dummyjson.com/products");
  return data.json();
};

const page = async () => {
  const myData = await fetchData();

  return (
    <div>
      {myData.products.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
              margin: "2rem",
            }}
          >
            <h1>{item.title}</h1>
            <p>{item.category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
