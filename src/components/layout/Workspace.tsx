import RoadmapCanvas from "../roadmap/RoadmapCanvas";
import DetailsPanel from "../details/DetailsPanel";

function Workspace() {
  return (
    <div className="flex h-full w-full bg-[#0f172a]">
      <div className="flex-1">
        <RoadmapCanvas />
      </div>

      <DetailsPanel />
    </div>
  );
}

export default Workspace;