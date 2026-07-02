import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";
import StatusBar from "./StatusBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex h-screen flex-col">

      <Navbar />

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex flex-1 bg-slate-950">
            <Outlet />
        </main>

      </div>

      <StatusBar />

    </div>
  );
}

export default MainLayout;