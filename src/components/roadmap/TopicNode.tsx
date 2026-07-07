import { Handle, Position } from "@xyflow/react";
import { motion } from "framer-motion";

import type { RoadmapNodeData } from "../../types/roadmap";

import ProgressRing from "./ProgressRing";
import NodeIcon from "./NodeIcon";

import { useRoadmap } from "../../contexts/RoadmapContext";

interface Props {
  data: RoadmapNodeData;
}

function TopicNode({ data }: Props) {
  const {
    selectedTopic,
    setSelectedTopic,
    expandedNodes,
    toggleNode,
  } = useRoadmap();

  const isSelected =
    selectedTopic?.id === data.id;

  const isExpanded =
    expandedNodes.includes(data.id);

  function handleClick() {
    setSelectedTopic(data);

    if (data.children?.length) {
      toggleNode(data.id);
    }
  }

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ opacity: 0 }}
      />

      <motion.div
        onClick={handleClick}
        animate={{
          scale:
            isSelected || isExpanded
              ? 1.15
              : 1,
        }}
        whileHover={{
          scale: 1.12,
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
        className="group relative flex cursor-pointer flex-col items-center"
      >
        {/* Active Glow */}
        <div
          className="
            absolute
            rounded-full
            blur-3xl
            transition-all
            duration-300
          "
          style={{
            width:
              isSelected || isExpanded
                ? "140px"
                : "110px",

            height:
              isSelected || isExpanded
                ? "140px"
                : "110px",

            opacity:
              isSelected || isExpanded
                ? 0.8
                : 0.25,

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

          {/* Main Circle */}
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-slate-900
              text-white
              shadow-xl
              transition-all
              duration-300
            "
            style={{
              border: `3px solid ${data.color}`,
              boxShadow:
                isSelected || isExpanded
                  ? `0 0 25px ${data.color}`
                  : "",
            }}
          >
            <NodeIcon title={data.title} />
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-center text-sm font-semibold text-white">
          {data.title}
        </h3>

        {/* Problems */}
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

        {/* Expand Indicator */}
        {data.children &&
          data.children.length > 0 && (
            <div
              className="
                mt-2
                text-xs
                font-medium
                text-slate-400
              "
            >
              {isExpanded
                ? "− Collapse"
                : "+ Expand"}
            </div>
          )}
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