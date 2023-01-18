import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState(
    [{
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
    ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
};

export default App;
