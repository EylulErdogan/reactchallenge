import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { apiUrl } from "./apiConfig";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import Card from "./components/Card";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios
      .get(`${apiUrl}/posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {posts?.map((post) => (
          <Card key={post.id} item={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
