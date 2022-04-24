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
      <div className="api">
        {users.map((collectData) => {
          return (
            <div>
              <ul>
                <li className="style1">Country: {collectData.name.common}</li>
                <li className="style2">
                  Country Flag:{" "}
                  <img src={collectData.flags.png} alt="Country Flag" />{" "}
                </li>
                <li className="style3">
                  Language:{" "}
                  {collectData.languages &&
                    Object.values(collectData.languages).map((lan) => (
                      <>
                        <span>{lan}</span>
                      </>
                    ))}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default API;
