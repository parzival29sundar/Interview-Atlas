import type { Edge, Node } from "@xyflow/react";

import { dsaRoadmap } from "../../constants/dsa";
import type { RoadmapNodeData } from "../../types/roadmap";

import { getLayoutedElements } from "./layout";

export function buildDSARoadmap(
  expandedNodes: string[]
): {
  nodes: Node[];
  edges: Edge[];
} {
  const nodes: Node[] = [];

  const edges: Edge[] = [];

  function traverse(
    current: RoadmapNodeData,
    parentId?: string,
    isRoot = false
  ) {
    nodes.push({
      id: current.id,

      type:
        current.id === "dsa"
          ? "rootNode"
          : "topicNode",

      position: {
        x: 0,
        y: 0,
      },

      data: current as unknown as Record<string, unknown>,
    });

    if (parentId) {
      edges.push({
        id: `${parentId}-${current.id}`,
        source: parentId,
        target: current.id,
        type: "gradient",
      });
    }

    const shouldShowChildren =
      isRoot ||
      expandedNodes.includes(current.id);

    if (!shouldShowChildren) {
      return;
    }

    current.children?.forEach((child) => {
      traverse(child, current.id);
    });
  }

  traverse(
    dsaRoadmap,
    undefined,
    true
  );

  return getLayoutedElements(
    nodes,
    edges
  );
}