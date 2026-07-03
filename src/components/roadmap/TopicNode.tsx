import { Handle, Position } from "@xyflow/react";
import type { RoadmapNodeData } from "../../types/roadmap";

interface Props {
  data: RoadmapNodeData;
}

function TopicNode({ data }: Props) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
      />

      <div
        className="
        w-56
        rounded-2xl
        border
        border-slate-700
        bg-slate-900
        p-4

        shadow-xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-105
      "
      >
        <div
          className="mx-auto mb-4 h-5 w-5 rounded-full"
          style={{
            background: data.color,
          }}
        />

        <h3 className="text-center text-white font-semibold">
          {data.title}
        </h3>

        <p className="mt-3 text-center text-sm text-slate-400">
          {data.problems} Problems
        </p>

        <div className="mt-4 h-2 rounded-full bg-slate-700">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${data.progress}%`,
              background: data.color,
            }}
          />
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
      />
    </>
  );
}

export default TopicNode;