// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [bookData, setBookData] = useState([]);

  const getData = () => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => setBookData(res.data.books))
      .catch((err) => {
        console.warn("Status Code=404");
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-container">
      {bookData.map((el, i) => (
        <div className="title" key={i}>
          <h2>{el.title}</h2>
          <div className="flex">
            <img src={el.imageLinks.thumbnail} alt={el.title} />
            <p>{el.description}</p> 
          </div>
          <div className="display">
            {el.authors.map((author, index) => (
              <h3 key={index}>{author}</h3>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
