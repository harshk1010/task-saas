export default function Navbar({ onLogout }) {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-4 rounded-xl mb-6">
      <h1 className="text-xl font-bold">Task Manager</h1>
      <button
        onClick={onLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}