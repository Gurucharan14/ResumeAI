import { Sparkles, CheckCircle2 } from "lucide-react";

function SuggestionsCard({ suggestions = [] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">

        <Sparkles
          size={18}
          className="text-purple-600"
        />

        <h3 className="text-sm font-semibold text-gray-800">
          AI Suggestions
        </h3>

      </div>

      {/* Content */}
      {suggestions?.length === 0 ? (

        <p className="text-sm text-gray-400">
          No suggestions available.
        </p>

      ) : (

        <ul className="space-y-2">

          {suggestions.map((item, index) => (

            <li
              key={index}
              className="flex items-start gap-3 rounded-lg px-2 py-2 hover:bg-gray-50 transition"
            >

              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-purple-600"
              />

              <p className="text-sm leading-5 text-gray-700">
                {item}
              </p>

            </li>

          ))}

        </ul>

      )}

    </div>
  );
}

export default SuggestionsCard;