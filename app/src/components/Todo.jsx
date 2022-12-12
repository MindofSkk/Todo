import React, { useState } from "react";
import styles from "./css/Todo.module.css";
import axios from "axios";
import { useEffect } from "react";
export const Todo = () => {
  const [data, setData] = useState("");

  
  const add = () => {
    console.log("hello");
    console.log(data);
    post(data);
  };

  const post = (data) => {
    axios
      .post("http://localhost:8080/todo", {
        task: data,
      })
      .then((res) => {
        alert("Data post Sucessfully");

      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/todo")
      .then((res) => {
      console.log("res",res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className={styles.FirstBox}>
        <h1>Todo</h1>
        <input
          type="text"
          placeholder="Enter The Task"
          onChange={(e) => setData(e.target.value)}
        />
        <button className={styles.btn} onClick={add}>
          Add Task
        </button>
      </div>
    </div>
  );
};
