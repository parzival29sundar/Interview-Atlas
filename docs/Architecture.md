# Roadmap Engine

Current Architecture

RoadmapContext
    ↓
RoadmapCanvas
    ↓
RoadmapBuilder
    ↓
React Flow

Roadmap Data

Roadmap
 ├ Topic
 │  ├ Pattern
 │  ├ Pattern
 │  └ Pattern
 │
 └ Topic
    ├ Pattern
    └ Pattern

RoadmapBuilder recursively traverses the roadmap tree and generates:

- React Flow Nodes
- React Flow Edges

Expansion State

expandedNodes: string[]

Currently supports accordion expansion where only one branch is expanded at a time.