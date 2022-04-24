import React, { useEffect, useState } from "react";
import "./Api.css";

const API = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div className="main">
        {users.map((collectData) => {
          return (
            <div className="single-div">
                <h4>Country: {collectData.name.common}</h4>  
                <h4>
                  Language:{" "}
                  {collectData.languages &&
                    Object.values(collectData.languages).map((lan) => (
                      <>
                        <span>{lan}</span>
                      </>
                    ))}
                </h4>
                <h4>
                  {" "}
                  <img src={collectData.flags.png} alt="Country Flag" />{" "}
                </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default API;
