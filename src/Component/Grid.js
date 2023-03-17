import React, { useEffect, useState } from "react";

const Grid = () => {
  const [capsules, setCapsules] = useState([]);

  useEffect(function () {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((resp) => {
        return resp.json();
      })
      .then((response) => {
        console.log(response);
        setCapsules(response);
      });
  }, []);

  return (
    <div className="grid">
      {capsules.map((item) => (
        <div key={item.capsule_serial}>
          <div className="grid-item">
            <h1>{item.capsule_serial}</h1>
            <div>{item.capsule_id}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
