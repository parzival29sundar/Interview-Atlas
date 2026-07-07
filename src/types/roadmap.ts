export interface Resource {
  title: string;
  url: string;
  type: "youtube" | "article" | "practice";
}

export interface RoadmapNodeData {
  id: string;

  title: string;

  color: string;

  icon: string;

  difficulty: "Easy" | "Medium" | "Hard";

  estimatedHours: number;

  problems: number;

  completed: number;

  progress: number;

  description: string;

  resources: Resource[];

  children?: RoadmapNodeData[];
}