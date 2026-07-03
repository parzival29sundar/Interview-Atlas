export interface ExplorerNode {
  id: string;
  title: string;
  type: "folder" | "file";
  children?: ExplorerNode[];
}