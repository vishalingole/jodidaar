import React, { Component } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

/**
 * Renders a list item with a card layout.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.data - The data object containing the list item information.
 * @param {string} props.bckgColor - The background color of the card.
 * @returns {JSX.Element} The rendered List component.
 */
const List = (props) => {
  const { data, bckgColor } = props;
  const { id, title } = data;
  const navigate = useNavigate();

  /**
   * Navigates to the detail page of the selected list item.
   *
   * @param {Object} listData - The data object of the selected list item.
   */
  const viewDetail = (listData) => {
    const { id, userId } = listData;
    navigate(`/todo-detail/${id}/${userId}`);
  };

  return (
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
  );
};

export default List;
