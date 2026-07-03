import "@xyflow/react/dist/style.css";

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";

import {
  initialNodes,
  initialEdges,
} from "../../constants/roadmap";

import RootNode from "./RootNode";
import TopicNode from "./TopicNode";

const nodeTypes = {
  rootNode: RootNode,
  topicNode: TopicNode,
};

function RoadmapCanvas() {
  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
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