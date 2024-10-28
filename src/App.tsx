import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-w-full min-h-dvh bg-slate-100">
      <Outlet />
    </div>
  );
}

export default App;
