import { useState } from "react";

import {
  ChevronRight,
  ChevronDown,
  Folder,
  FileText,
} from "lucide-react";

import type { ExplorerNode } from "../../types/explorer";

interface TreeItemProps {
  node: ExplorerNode;
}

function TreeItem({ node }: TreeItemProps) {
  const [expanded, setExpanded] = useState(true);

  const isFolder = node.type === "folder";

  return (
    <div>

      <button
        onClick={() => isFolder && setExpanded(!expanded)}
        className="
          flex
          w-full
          items-center
          gap-2
          rounded-md
          px-2
          py-2
          text-left
          transition-colors
          hover:bg-slate-800
        "
      >
        {isFolder ? (
          expanded ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )
        ) : (
          <span className="w-4" />
        )}

        {isFolder ? (
          <Folder size={18} />
        ) : (
          <FileText size={18} />
        )}

        <span className="text-sm">
          {node.title}
        </span>
      </button>

      {expanded &&
        node.children?.map((child) => (
          <div
            key={child.id}
            className="ml-6"
          >
            <TreeItem node={child} />
          </div>
        ))}

    </div>
  );
}

export default TreeItem;