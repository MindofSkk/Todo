import React, { useState } from "react";
import styles from "./css/Todo.module.css";
import axios from "axios";
import { useEffect } from "react";
export const Todo = () => {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);

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
        // alert("Data post Sucessfully");
        getdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get("http://localhost:8080/todo")
      .then((res) => {
        // console.log("res",res.data);
        let a = res.data.reverse();
        setTodo(a);
        console.log(todo);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const deltetodo = (id) => {
    axios
      .delete(`http://localhost:8080/todo/${id}`)
      .then((res) => {
        getdata();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className={styles.FirstBox}>
        <h1> Full Stack : Todo</h1>
        <textarea
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter The Task"
          name=""
          id=""
          cols="50"
          rows="3"
        />
        {/* <input
          type="text"
          placeholder="Enter The Task"
          onChange={(e) => setData(e.target.value)}
        />  */}
        <br />
        <br />
        <button className={styles.btn} onClick={add}>
          Add Task
        </button>
      </div>

      <div className={styles.table}>
        {todo.map((e, index) => {
          return (
            <div key={index}>
              <p className={styles.todotext}> 🎯 {e.task}</p>
              <button
                onClick={() => deltetodo(e._id)}
                className={styles.deltebtn}
              >
                {" "}
                Delete ❌
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
