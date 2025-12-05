function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li style={{ marginBottom: "10px" }}>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {task.title} - {task.subject}
      </span>

      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TaskItem;
