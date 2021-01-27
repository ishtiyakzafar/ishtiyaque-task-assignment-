import React from "react";

const Card = ({ data, deleteCard }) => {
  const removecard = () => {
    deleteCard(data.id);
  };
  return (
    <>
      <div
        className="card m-2 style__Card"
        style={{ width: "15rem", height: "23rem" }}
      >
        <div className="card-body style__body">
          <h6 className="card_id">Card No-{data.id}</h6>
          <h5 className="card-title style__title">{data.title}</h5>
          <p className="card-text style__bodyText">{data.body}</p>
          <button onClick={removecard} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
