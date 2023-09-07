import React, { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  // Nuevo estado para la lista aleatoria
  const [randomizedTasks, setRandomizedTasks] = useState([]); 
  
  const [randomAyline, setRandomAyline] = useState([]);
  const [randomJose, setRandomJose] = useState([]);

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const randomizeTasks = () => {

    let randomized = [...tasks];
  
    // Usar el algoritmo de Fisher-Yates para mezclar aleatoriamente los elementos
    for (let i = randomized.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomized[i], randomized[j]] = [randomized[j], randomized[i]];
    }
    setRandomizedTasks(randomized);
    const letraF = [];
    const letraD = [];
    for(let i=0; i<randomized.length; i++){
      if(randomized[i].charAt(0)==="F"){
        letraF.push(randomized[i]);
      }
      else if (randomized[i].charAt(0)==="D"){
        letraD.push(randomized[i]);
      }
    }
    const mitadF = Math.ceil(letraF.length / 2);
    const aylineF = letraF.slice(0, mitadF);
    const joseF = letraF.slice(mitadF);

    const mitadD = Math.ceil(letraD.length / 2);
    const aylineD = letraD.slice(0, mitadD);
    const joseD = letraD.slice(mitadD);

    const ayline = [...aylineD, ...aylineF];
    const jose = [...joseD, ...joseF];
    setRandomAyline(ayline);
    setRandomJose(jose);
  };

  return (
    <div>
      <Navbar />
      <h1 className="titulo">Todo List</h1>
      <div>
        <input
          className="entrada"
          type="text"
          placeholder="Add a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="btn-add" onClick={addTask}>
          Add
        </button>
        <button className="btn-randomize" onClick={randomizeTasks}>
          Randomize
        </button>
      </div>
      <div>
        <h2>Original List</h2>
        <ul className="lista-tareas">
          {tasks.map((task, index) => (
            <li className="item" key={index}>
              {task}{" "}
              <button className="btn-rmv" onClick={() => removeTask(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/*<div>
        <h2>Randomized List</h2>
        <ul className="lista-tareas">
          {randomizedTasks.map((task, index) => (
            <li className="item" key={index}>
              {task}
            </li>
          ))}
        </ul>
      </div>*/}
      <div>
        <h2>Lista de Ayline</h2>
      <ul className="lista-tareas">
          {randomAyline.map((task, index) => (
            <li className="item" key={index}>
              {task}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Lista de Jose</h2>
      <ul className="lista-tareas">
          {randomJose.map((task, index) => (
            <li className="item" key={index}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
