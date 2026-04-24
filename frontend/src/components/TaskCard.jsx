export default function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
      <div>
        <p
          className={`font-medium ${
            task.status === "COMPLETED"
              ? "line-through text-gray-400"
              : ""
          }`}
        >
          {task.title}
        </p>
        <span className="text-sm text-gray-500">{task.status}</span>
      </div>

      <div className="flex gap-2">
        {task.status !== "COMPLETED" && (
          <button
            onClick={() => onComplete(task.id)}
            className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
          >
            Done
          </button>
        )}

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}