import type { RoadmapNodeData } from "../types/roadmap";

export const dsaRoadmap: RoadmapNodeData = {
  id: "dsa",

  title: "DSA Roadmap",

  color: "#2563eb",

  icon: "roadmap",

  difficulty: "Easy",

  estimatedHours: 200,

  problems: 420,

  completed: 0,

  progress: 0,

  description: "Complete DSA preparation roadmap.",

  resources: [],

  children: [
    {
      id: "arrays",

      title: "Arrays & Hashing",

      color: "#3b82f6",

      icon: "boxes",

      difficulty: "Easy",

      estimatedHours: 12,

      problems: 47,

      completed: 0,

      progress: 0,

      description:
        "Learn arrays, hashing, prefix sums and basic data manipulation.",

      resources: [],

      children: [
        {
          id: "prefix-sum",

          title: "Prefix Sum",

          color: "#60a5fa",

          icon: "circle",

          difficulty: "Easy",

          estimatedHours: 3,

          problems: 10,

          completed: 0,

          progress: 0,

          description: "Prefix sum pattern.",

          resources: [],
        },

        {
          id: "sliding-window",

          title: "Sliding Window",

          color: "#60a5fa",

          icon: "circle",

          difficulty: "Medium",

          estimatedHours: 5,

          problems: 15,

          completed: 0,

          progress: 0,

          description: "Sliding window pattern.",

          resources: [],
        },

        {
          id: "two-pointer",

          title: "Two Pointer",

          color: "#60a5fa",

          icon: "circle",

          difficulty: "Medium",

          estimatedHours: 4,

          problems: 12,

          completed: 0,

          progress: 0,

          description: "Two pointer pattern.",

          resources: [],
        },
      ],
    },

    {
      id: "trees",

      title: "Trees",

      color: "#22c55e",

      icon: "tree",

      difficulty: "Medium",

      estimatedHours: 18,

      problems: 42,

      completed: 0,

      progress: 0,

      description: "Binary Trees, BST and traversals.",

      resources: [],

      children: [
        {
          id: "dfs",

          title: "DFS",

          color: "#4ade80",

          icon: "circle",

          difficulty: "Medium",

          estimatedHours: 4,

          problems: 12,

          completed: 0,

          progress: 0,

          description: "Depth First Search.",

          resources: [],
        },

        {
          id: "bfs",

          title: "BFS",

          color: "#4ade80",

          icon: "circle",

          difficulty: "Medium",

          estimatedHours: 4,

          problems: 12,

          completed: 0,

          progress: 0,

          description: "Breadth First Search.",

          resources: [],
        },
      ],
    },
  ],
};