import { useEffect, useState } from "react";
import API, { setToken } from "../api/api";
import Navbar from "../components/Navbar";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Fetch error:", err);

      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        setToken(null);
        window.location.href = "/";
      }
    }
  };

  const addTask = async (title) => {
    try {
      await API.post("/tasks", { title });
      fetchTasks();
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  const completeTask = async (id) => {
    try {
      await API.put(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

const logout = () => {
  localStorage.removeItem("token");
  setToken(null);

  window.location.href = "/";
};

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchTasks();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar onLogout={logout} />
      <AddTask onAdd={addTask} />

      <div className="grid gap-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={completeTask}
              onDelete={deleteTask}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No tasks yet. Add your first task 
          </p>
        )}
      </div>
    </div>
  );
}