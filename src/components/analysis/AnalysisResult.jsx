import ScoreCard from "./ScoreCard";
import SkillsCard from "./SkillsCard";
import InsightCard from "./InsightCard";
import SuggestionsCard from "./SuggestionsCard";

function AnalysisResult({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="mt-5 space-y-4">

      {/* Overall Summary */}

      <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">

        <h3 className="text-sm font-semibold text-purple-700">
          Overall Assessment
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-700">
          Your resume achieved an
          <span className="font-semibold text-purple-700">
            {" "}ATS Score of {analysis.atsScore}%{" "}
          </span>
          and a{" "}
          <span className="font-semibold text-blue-700">
            Job Match of {analysis.matchScore}%.
          </span>
          {" "}Improve the missing skills and follow the AI suggestions below
          to increase your chances of passing ATS screening.
        </p>

      </div>

      {/* Score Cards */}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 items-stretch">

        <ScoreCard
          title="ATS Score"
          score={analysis.atsScore}
          color="#7C3AED"
          subtitle={
            analysis.atsScore >= 85
              ? "Excellent Resume"
              : analysis.atsScore >= 70
              ? "Good Resume"
              : "Needs Improvement"
          }
        />

        <ScoreCard
          title="Job Match"
          score={analysis.matchScore}
          color="#2563EB"
          subtitle={
            analysis.matchScore >= 85
              ? "Excellent Match"
              : analysis.matchScore >= 70
              ? "Good Match"
              : "Average Match"
          }
        />

      </div>

      {/* Skills */}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 items-stretch">

        <SkillsCard
          title="Matched Skills"
          skills={analysis.matchedSkills}
          color="green"
        />

        <SkillsCard
          title="Missing Skills"
          skills={analysis.missingSkills}
          color="red"
        />

      </div>

      {/* Insights */}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 items-stretch">

        <InsightCard
          title="Strengths"
          items={analysis.strengths}
          type="success"
        />

        <InsightCard
          title="Weaknesses"
          items={analysis.weaknesses}
          type="warning"
        />

      </div>

      {/* Suggestions */}

      <SuggestionsCard
        suggestions={analysis.suggestions}
      />

    </div>
  );
}

export default AnalysisResult;