import Navbar from "./Navbar";
import ActivityBar from "./ActivityBar";
import Workspace from "./Workspace";
import StatusBar from "./StatusBar";

function MainLayout() {
  return (
    <div className="flex h-screen flex-col">

      <Navbar />

      <div className="flex flex-1 overflow-hidden">

        <ActivityBar />

        <Workspace />

      </div>

      <StatusBar />

    </div>
  );
}

export default MainLayout;