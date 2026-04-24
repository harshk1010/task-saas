import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}