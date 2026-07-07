import { useRoadmap } from "../../contexts/RoadmapContext";

function DetailsPanel() {
  const { selectedTopic } = useRoadmap();

  if (!selectedTopic) {
    return (
      <aside
        className="
          w-80
          border-l
          border-slate-800
          bg-slate-900
          p-6
        "
      >
        <h2 className="text-lg font-semibold text-white">
          Topic Details
        </h2>

        <p className="mt-4 text-sm text-slate-400">
          Click a roadmap node to view details.
        </p>
      </aside>
    );
  }

  return (
    <aside
      className="
        w-80
        border-l
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      <h2 className="text-2xl font-bold text-white">
        {selectedTopic.title}
      </h2>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-xs uppercase text-slate-500">
            Difficulty
          </p>

          <p className="text-white">
            {selectedTopic.difficulty}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase text-slate-500">
            Problems
          </p>

          <p className="text-white">
            {selectedTopic.problems}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase text-slate-500">
            Estimated Time
          </p>

          <p className="text-white">
            {selectedTopic.estimatedHours} Hours
          </p>
        </div>

        <div>
          <p className="text-xs uppercase text-slate-500">
            Progress
          </p>

          <p className="text-white">
            {selectedTopic.progress}%
          </p>
        </div>

        <div>
          <p className="text-xs uppercase text-slate-500">
            Description
          </p>

          <p className="text-slate-300">
            {selectedTopic.description}
          </p>
        </div>
      </div>
    </aside>
  );
}

export default DetailsPanel;