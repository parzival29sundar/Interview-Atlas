import { Handle, Position } from "@xyflow/react";
import type { RoadmapNodeData } from "../../types/roadmap";

interface Props {
  data: RoadmapNodeData;
}

function RootNode({ data }: Props) {
  return (
    <>
      <Handle
        type="source"
        position={Position.Right}
      />

      <div
        className="
        w-72

        rounded-3xl

        bg-gradient-to-r

        from-blue-700

        to-indigo-700

        p-6

        shadow-2xl
      "
      >
        <h2 className="text-center text-2xl font-bold text-white">
          {data.title}
        </h2>

        <p className="mt-4 text-center text-blue-100">
          {data.problems} Total Problems
        </p>
      </div>
    </>
  );
}

export default RootNode;