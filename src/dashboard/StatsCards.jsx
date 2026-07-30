import { FileText, Sparkles, BarChart3 } from "lucide-react";

function StatsCards({ resumes = [] }) {
  const totalResumes = resumes.length;

  const analyzedResumes = resumes.filter(
    (resume) =>
      resume.score !== "--" &&
      resume.score !== null &&
      resume.score !== undefined
  );

  const averageATS =
    analyzedResumes.length > 0
      ? Math.round(
          analyzedResumes.reduce(
            (sum, resume) => sum + Number(resume.score),
            0
          ) / analyzedResumes.length
        )
      : 0;

  const stats = [
    {
      title: "Uploaded Resumes",
      value: totalResumes,
      icon: FileText,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      title: "AI Analyses",
      value: analyzedResumes.length,
      icon: Sparkles,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Average ATS",
      value: `${averageATS}%`,
      icon: BarChart3,
      color: "text-green-600",
      bg: "bg-green-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}
              >
                <Icon
                  className={stat.color}
                  size={24}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;