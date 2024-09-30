import React, { useEffect, useState } from "react";

const ApiTest2 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredTitles, setFilteredTitles] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    setFilteredTitles(
      data
        .map((product) => {
          return product.title;
        })
        .filter((title) => {
          return title.toLowerCase().includes(search.toLowerCase());
        })
    );
  }, [search, data]);

  // console.log(titles);
  console.log(search);

  return (
    <div>
      <h1>Data Fetched</h1>

      <input
        className="p-2 "
        placeholder="searh products"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      {error && <p>{error.message}</p>}
      {/* <pre>{let a = JSON.stringify(data, null, 2)}</pre> */}
      <ul>
        {filteredTitles.length > 0 ? (
          filteredTitles.map((title, index) => {
            return <li key={index}>{title}</li>;
          })
        ) : (
          <p>Data not avaliable</p>
        )}
      </ul>
    </div>
  );
};

export default ApiTest2;
