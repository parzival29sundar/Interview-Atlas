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

import {
  initialEdges,
  initialNodes,
} from "../../constants/roadmap";

const nodeTypes = {
  rootNode: RootNode,
  topicNode: TopicNode,
};

const edgeTypes = {
  default: GradientEdge,
};

function RoadmapCanvas() {
  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
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