import React, { Component } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const List = (props) => {
  const { data, bckgColor } = props;
  const { id, title } = data
  const navigate = useNavigate();
  
  const viewDetail = (listData) => {
    const { id, userId } = listData;
    navigate(`/todo-detail/${id}/${userId}`);
  };

  return (
    <>
      <>
        <div
          className="card"
          key={id}
          style={{ backgroundColor: bckgColor }}
          onClick={() => viewDetail(data)}
        >
          <div className="card-content">
            #{id}
            <br />
            {title}
          </div>
        </div>
      </>

    </>
  );
};

export default List;
