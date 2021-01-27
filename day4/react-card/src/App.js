import React, { useEffect, useState } from "react";
import Card from "./Component/Card";

const App = () => {
  const [data, setData] = useState([]);

  const [newdata, setnewData] = useState(() => {
    const localData = localStorage.getItem("mydata");
    return localData ? JSON.parse(localData) : [];
  });

  async function getdata() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsondata = await response.json();
    setData(jsondata);
  }
  getdata();

  const remove = (ID) => {
    setnewData((preval) => {
      return preval.filter((ele, ind) => {
        return ele.id !== ID;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("mydata", JSON.stringify(data));
  });

  return (
    <>
      <div className="container py-5">
        {newdata.map((ele, index) => {
          return <Card key={index} data={ele} deleteCard={remove} />;
        })}
      </div>
    </>
  );
};
export default App;
