import type { ExplorerNode } from "../types/explorer";

export const explorerData: Record<string, ExplorerNode[]> = {

  dashboard: [
    {
      id: "overview",
      title: "Overview",
      type: "file",
    },
    {
      id: "progress",
      title: "Progress",
      type: "file",
    },
    {
      id: "analytics",
      title: "Analytics",
      type: "file",
    },
  ],

  dsa: [

    {
      id: "ds",
      title: "Data Structures",
      type: "folder",

      children: [

        { id: "arrays", title: "Arrays", type: "file" },

        { id: "strings", title: "Strings", type: "file" },

        { id: "linkedlist", title: "Linked List", type: "file" },

        { id: "stack", title: "Stack", type: "file" },

        { id: "queue", title: "Queue", type: "file" },

        { id: "tree", title: "Tree", type: "file" },

        { id: "graph", title: "Graph", type: "file" },

      ],

    },

    {

      id: "algo",

      title: "Algorithms",

      type: "folder",

      children: [

        { id: "sorting", title: "Sorting", type: "file" },

        { id: "searching", title: "Searching", type: "file" },

        { id: "greedy", title: "Greedy", type: "file" },

        { id: "dp", title: "Dynamic Programming", type: "file" },

        { id: "backtracking", title: "Backtracking", type: "file" },

      ],

    },

  ],

  cs: [

    {
      id: "core",

      title: "Computer Science",

      type: "folder",

      children: [

        { id: "os", title: "Operating System", type: "file" },

        { id: "dbms", title: "DBMS", type: "file" },

        { id: "cn", title: "Computer Networks", type: "file" },

        { id: "oop", title: "OOP", type: "file" },

        { id: "sql", title: "SQL", type: "file" },

      ],

    },

  ],

  bookmarks: [],

  notes: [],

  profile: [],

  settings: [],

};