import React, { useEffect, useState } from "react";

const ApiTest3 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network issue"); 
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message); // Set error message
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p> // Display error if it exists
      ) : (
        data.map((element, index) => (
          <div key={index}>{element.title}</div> // Assuming element has a 'title' property
        ))
      )}
    </div>
  );
};

export default ApiTest3;
