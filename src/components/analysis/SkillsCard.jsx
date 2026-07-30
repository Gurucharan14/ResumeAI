function SkillsCard({
  title,
  skills = [],
  color = "green",
}) {
  const styles = {
    green: {
      badge: "bg-green-50 text-green-700 border-green-200",
      count: "bg-green-100 text-green-700",
    },
    red: {
      badge: "bg-red-50 text-red-700 border-red-200",
      count: "bg-red-100 text-red-700",
    },
  };

  const theme = styles[color] || styles.green;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-800">
          {title}
        </h3>

        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${theme.count}`}
        >
          {skills?.length ?? 0}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills?.length === 0 ? (
          <span className="text-sm text-gray-400">
            No skills
          </span>
        ) : (
          skills.map((skill, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full border text-xs font-medium ${theme.badge}`}
            >
              {skill}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default SkillsCard;