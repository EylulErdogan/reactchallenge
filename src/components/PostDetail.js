import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../apiConfig";
import Navbar from "./Navbar";

export default function PostDetail() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [updateData, setUpdateData] = useState({ title: "", body: "" });
  useEffect(() => {
    axios
      .get(`${apiUrl}/posts/${params.id}`)
      .then((res) => {
        setPost(res.data);
        axios
          .get(`${apiUrl}/users/${res.data.userId}`)
          .then((userRes) => {
            setUser(userRes.data);
          })
          .catch((userErr) => {
            console.error(userErr);
          });
      })
      .catch((err) => {
        console.error(err);
      });


    axios
      .get(`${apiUrl}/posts/${params.id}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params.id]);

  const handleUpdateClick = () => {
    axios
      .put(`${apiUrl}/posts/${params.id}`, {
        title: updateData.title,
        body: updateData.body,
      })
      .then((res) => {
        console.log("Güncellenmiş Post:", res.data);
        setPost(res.data);
        setUpdateData({ title: "", body: "" });
      })
      .catch((error) => {
        console.error("Güncelleme sırasında hata oluştu:", error);
      });
  };

  return (
    <div className="container">
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5rem",
        }}
      >
        <div style={{ width: "40%" }}>
          <div className="card mb-5">
            <div className="card-body">
              <h5 className="card-title">
                {user.name} {user.username}
              </h5>
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
          <div
            className="form-group mb-5 w-100"
            style={{ display: "inline-block" }}
          >
            <input
              name="title"
              className="form-control w-100 mb-3"
              placeholder="title"
              value={updateData.title}
              onChange={(e) =>
                setUpdateData({ ...updateData, title: e.target.value })
              }
            ></input>
            <textarea
              name="body"
              className="form-control mb-3"
              placeholder="body"
              value={updateData.body}
              onChange={(e) =>
                setUpdateData({ ...updateData, body: e.target.value })
              }
            ></textarea>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                className="btn btn-info"
                onClick={handleUpdateClick}
              >
                Güncelle
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <h2>Yorumlar</h2>
          <div>
            <ul>
              {comments?.map((comment) => (
                <ul key={comment.id}>
                  <li>
                    <div style={{fontSize:"18px", fontWeight:700}}>{comment.name}</div>
                    <div style={{fontSize:"16px"}}>{comment.body}</div>
                    <div style={{fontSize:"12px"}}>{comment.email}</div>
                  </li>
                </ul>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
