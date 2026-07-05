export interface Resource {
  title: string;
  url: string;
  type: "youtube" | "article" | "practice";
}

export interface RoadmapNodeData {
  id: string;

  title: string;

  color: string;

  problems: number;

  completed: number;

  progress: number;

  difficulty: "Easy" | "Medium" | "Hard";

  estimatedHours: number;

  icon: string;

  description: string;

  resources: Resource[];

  children?: string[];
}