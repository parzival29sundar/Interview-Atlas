import { buildDSARoadmap } from "../lib/roadmap/RoadmapBuilder";

const roadmap = buildDSARoadmap();

export const initialNodes = roadmap.nodes;
export const initialEdges = roadmap.edges;