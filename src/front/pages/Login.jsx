import React, { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Login = () => {
  const { store, dispatch } = useGlobalReducer();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  console.log("This is your token", token);
  const handleClick = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // This tells the server the body is JSON
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch(
      "https://opulent-parakeet-wr5wj75j77grhgj7x-3001.app.github.dev/api/token",
      opts
    )
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("There has been some error");
      })
      .then(data => {
        console.log("this came from the backend", data);
        sessionStorage.setItem("token", data.access_token);
      })
      .catch((error) => {
        console.error("There was an error!!", error);
      });
  };

  return (
    <div className="text-center mt-5">
      <h1 className="display-4">Login</h1>
      {token && token != "" && token != undefined ? (
        "you are logged in with this token" + token
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}> Login </button>
        </div>
      )}
    </div>
  );
};
