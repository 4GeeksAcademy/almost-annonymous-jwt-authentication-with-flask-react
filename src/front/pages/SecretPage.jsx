import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const SecretPage = () => {
  const token = sessionStorage.getItem("token");
  const [message, setMessage] = useState(null);
  const { dispatch } = useGlobalReducer();
  const super_duper_function = () => {
    const opts = {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token, // This tells the server the body is JSON
      },
    };
    fetch(
      "https://opulent-parakeet-wr5wj75j77grhgj7x-3001.app.github.dev/api/hello",
      opts
    )
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("There has been some error");
      })
      .then(data => {
        sessionStorage.setItem("message", data.message);
        setMessage(data.message)
        dispatch({
          type: "set_message",
          payload: data.message
        });
      })
      .catch((error) => {
        console.error("There was an error!!", error);
      });
  }
  return (
    <div className="text-center mt-5">
      <h1 className="display-4">This page can only be viewed by the logged in user</h1>
      <button onClick={super_duper_function} className="btn btn-primary">Click to see secure information</button>
      {message && <p>{message}</p>}
    </div>
  );
}; 