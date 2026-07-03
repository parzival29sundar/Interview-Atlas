import { explorerData } from "../../constants/explorerData";
import { useExplorer } from "../../contexts/ExplorerContext";
import TreeItem from "../common/TreeItem";

function Sidebar() {
  const { activeSection } = useExplorer();

  const nodes = explorerData[activeSection] ?? [];

  return (
    <aside className="w-72 border-r border-[var(--border)] bg-[var(--sidebar)]">

      <div className="border-b border-[var(--border)] p-4">

        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
          Explorer
        </h2>

      </div>

      <div className="p-2">

        {nodes.length === 0 ? (
          <p className="p-3 text-sm text-slate-500">
            Nothing here yet.
          </p>
        ) : (
          nodes.map((node) => (
            <TreeItem
              key={node.id}
              node={node}
            />
          ))
        )}

      </div>

    </aside>
  );
}

export default Sidebar;