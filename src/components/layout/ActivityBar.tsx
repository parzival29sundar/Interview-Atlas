import { activityItems } from "../../constants/activityBar";
import { useExplorer } from "../../contexts/ExplorerContext";

function ActivityBar() {
  const { activeSection, setActiveSection } = useExplorer();

  return (
    <aside className="flex w-16 flex-col items-center border-r border-[var(--border)] bg-[var(--sidebar)] py-3">

      {activityItems.map((item) => {
        const Icon = item.icon;

        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            title={item.title}
            onClick={() => setActiveSection(item.id)}
            className={`
              mb-2
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              transition-all
              duration-200

              ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }
            `}
          >
            <Icon size={22} />
          </button>
        );
      })}

    </aside>
  );
}

export default ActivityBar;