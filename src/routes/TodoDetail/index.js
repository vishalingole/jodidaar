import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { Link } from "react-router-dom";

const TodoDetail = () => {
  const { id, userId } = useParams();
  const [todoDetail, setTodoDetail] = useState([]);
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    if (id !== "") getTodoDetail();
    if (userId !== "") getUserDetail();
  }, []);

  const getTodoDetail = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((resp) => resp.json())
      .then((data) => setTodoDetail(data));
  };

  const getUserDetail = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((resp) => resp.json())
      .then((data) => setUserDetail(data));
  };
  return (
    <>
      <div className="todo-detail-wrapper">
        <Link to="/">Home</Link>
        <div>
          <b>item number :</b>
          {todoDetail && todoDetail.id ? todoDetail.id : ""}
        </div>
        <div>
          <b> creator : </b>
          {userDetail && userDetail.name ? userDetail.name : ""}
        </div>
        <div>
          <b> title : </b>
          {todoDetail && todoDetail.title ? todoDetail.title : ""}
        </div>
      </div>
    </>
  );
};
export default TodoDetail;
