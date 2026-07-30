function ScoreCard({
  title,
  score,
  color,
  subtitle,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <p
            className="mt-1 text-sm font-medium"
            style={{ color }}
          >
            {subtitle}
          </p>
        </div>

        <h2
          className="text-4xl font-bold"
          style={{ color }}
        >
          {score}%
        </h2>

      </div>

      {/* Progress */}
      <div className="mt-5">

        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">

          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${score}%`,
              backgroundColor: color,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default ScoreCard;