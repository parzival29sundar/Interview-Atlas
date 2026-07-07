import "@xyflow/react/dist/style.css";

import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
} from "@xyflow/react";

import RootNode from "./RootNode";
import TopicNode from "./TopicNode";
import GradientEdge from "./GradientEdge";

import { buildDSARoadmap } from "../../lib/roadmap/RoadmapBuilder";

import { useRoadmap } from "../../contexts/RoadmapContext";

const nodeTypes = {
  rootNode: RootNode,
  topicNode: TopicNode,
};

const edgeTypes = {
  gradient: GradientEdge,
};

function RoadmapCanvas() {
  const { expandedNodes } =
    useRoadmap();

  const { nodes, edges } =
    buildDSARoadmap(expandedNodes);

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />

        <Controls />

        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default RoadmapCanvas;