import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.subject === filter);

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <Header />
      <TaskForm addTask={addTask} />
      <Filter setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
