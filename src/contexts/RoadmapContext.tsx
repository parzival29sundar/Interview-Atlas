import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { RoadmapNodeData } from "../types/roadmap";

interface RoadmapContextType {
  selectedTopic: RoadmapNodeData | null;

  setSelectedTopic: (
    topic: RoadmapNodeData | null
  ) => void;

  expandedNodes: string[];

  toggleNode: (id: string) => void;
}

const RoadmapContext =
  createContext<RoadmapContextType | null>(null);

export function RoadmapProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedTopic, setSelectedTopic] =
    useState<RoadmapNodeData | null>(null);

  const [expandedNodes, setExpandedNodes] =
    useState<string[]>([]);

  function toggleNode(id: string) {
    setExpandedNodes((prev) => {
      if (prev.includes(id)) {
        return [];
      }

      return [id];
    });
  }

  return (
    <RoadmapContext.Provider
      value={{
        selectedTopic,
        setSelectedTopic,

        expandedNodes,
        toggleNode,
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
}

export function useRoadmap() {
  const context = useContext(RoadmapContext);

  if (!context) {
    throw new Error(
      "useRoadmap must be used inside RoadmapProvider"
    );
  }

  return context;
}