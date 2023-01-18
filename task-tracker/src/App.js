import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor",
      day: "Feb 5",
      reminder: true,
    },
    {
      id: 2,
      text: "School",
      day: "Feb 6",
      reminder: true,
    },
    {
      id: 3,
      text: "Food",
      day: "Feb 7",
      reminder: false,
    },
  ]);

  // delete item function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Reminder Function
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks, add some!"
      )}
    </div>
  );
};

export default App;
