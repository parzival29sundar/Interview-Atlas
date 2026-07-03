import type { Edge, Node } from "@xyflow/react";
import { dsaTopics } from "../../constants/dsa";

export function buildDSARoadmap(): {
  nodes: Node[];
  edges: Edge[];
} {
  const nodes: Node[] = [
    {
      id: "root",
      type: "rootNode",
      position: {
        x: 100,
        y: 300,
      },
      data: {
        title: "DSA Roadmap",
        problems: 420,
        completed: 0,
        progress: 0,
        color: "#2563eb",
      },
    },
  ];

  const edges: Edge[] = [];

  dsaTopics.forEach((topic, index) => {
    nodes.push({
      id: topic.id,
      type: "topicNode",
      position: {
        x: topic.x,
        y: topic.y,
      },
      data: {
        ...topic,
        completed: 0,
        progress: 0,
      },
    });

    edges.push({
      id: `edge-${index}`,
      source: "root",
      target: topic.id,
      animated: true,
    });
  });

  return {
    nodes,
    edges,
  };
}