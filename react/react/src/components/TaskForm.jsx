import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !subject) return;

    addTask({
      id: Date.now(),
      title,
      subject,
      completed: false,
    });

    setTitle("");
    setSubject("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="">Select subject</option>
        <option>Math</option>
        <option>Science</option>
        <option>History</option>
        <option>Programming</option>
      </select>

      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;
