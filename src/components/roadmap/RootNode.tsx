import { Handle, Position } from "@xyflow/react";
import { motion } from "framer-motion";
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
        style={{ opacity: 0 }}
      />

      <motion.div
        whileHover={{
          scale: 1.06,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className="relative flex h-52 w-52 flex-col items-center justify-center"
      >
        {/* Outer Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl"
        />

        {/* Ring 1 */}
        <div className="absolute h-44 w-44 rounded-full border border-cyan-500/30" />

        {/* Ring 2 */}
        <div className="absolute h-34 w-34 rounded-full border border-cyan-400/50" />

        {/* Core */}
        <div className="absolute flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_50px_#06b6d4]">

          <span className="text-3xl font-bold text-white">
            DSA
          </span>

        </div>

        {/* Text */}
        <div className="absolute top-[105%] text-center">

          <h2 className="text-xl font-bold text-white">
            {data.title}
          </h2>

          <p className="mt-1 text-slate-400">
            {data.problems} Problems
          </p>

        </div>

      </motion.div>
    </>
  );
}

export default RootNode;