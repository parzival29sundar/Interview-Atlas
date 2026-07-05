import {
  Boxes,
  Binary,
  Network,
  TreePine,
  ScanSearch,
} from "lucide-react";

interface Props {
  title: string;
}

function NodeIcon({ title }: Props) {
  switch (title.toLowerCase()) {
    case "arrays & hashing":
      return <Boxes size={28} />;

    case "strings":
      return <Binary size={28} />;

    case "linked list":
      return <Network size={28} />;

    case "trees":
      return <TreePine size={28} />;

    default:
      return <ScanSearch size={28} />;
  }
}

export default NodeIcon;