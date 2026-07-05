import { Handle, Position } from "@xyflow/react";
import { motion } from "framer-motion";

import type { RoadmapNodeData } from "../../types/roadmap";

import ProgressRing from "./ProgressRing";
import NodeIcon from "./NodeIcon";

interface Props {
  data: RoadmapNodeData;
}

function TopicNode({ data }: Props) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ opacity: 0 }}
      />

      <motion.div
        whileHover={{
          scale: 1.15,
          y: -6,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 20,
        }}
        className="group relative flex flex-col items-center cursor-pointer"
      >
        {/* Glow */}
        <div
          className="absolute h-28 w-28 rounded-full blur-3xl opacity-25 transition-all duration-300 group-hover:opacity-70"
          style={{
            background: data.color,
          }}
        />

        {/* Progress Ring */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <ProgressRing
            progress={data.progress}
            color={data.color}
            size={88}
          />

          {/* Circle */}
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border-2
              bg-slate-900
              text-white
              shadow-xl
              transition-all
              duration-300
              group-hover:shadow-2xl
            "
            style={{
              borderColor: data.color,
            }}
          >
            <NodeIcon title={data.title} />
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-center text-sm font-semibold text-white">
          {data.title}
        </h3>

        {/* Problem Count */}
        <p className="mt-1 text-xs text-slate-400">
          {data.problems} Problems
        </p>

        {/* Progress */}
        <p
          className="mt-1 text-xs font-semibold"
          style={{
            color: data.color,
          }}
        >
          {data.progress}% Complete
        </p>
      </motion.div>

      <Handle
        type="source"
        position={Position.Right}
        style={{ opacity: 0 }}
      />
    </>
  );
}

export default TopicNode;