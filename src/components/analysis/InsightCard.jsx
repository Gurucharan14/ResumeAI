function InsightCard({
  title,
  items = [],
  type = "success",
}) {
  const styles = {
    success: {
      icon: "✓",
      titleColor: "text-green-700",
      iconBg: "bg-green-100",
      iconText: "text-green-700",
    },

    warning: {
      icon: "!",
      titleColor: "text-orange-700",
      iconBg: "bg-orange-100",
      iconText: "text-orange-700",
    },
  };

  const theme = styles[type] || styles.success;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-full">

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">

        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full ${theme.iconBg} ${theme.iconText} text-sm font-bold`}
        >
          {theme.icon}
        </div>

        <h3 className={`text-sm font-semibold ${theme.titleColor}`}>
          {title}
        </h3>

      </div>

      {/* Content */}
      {items?.length === 0 ? (
        <p className="text-sm text-gray-400">
          Nothing to show
        </p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              <span
                className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full ${theme.iconBg} ${theme.iconText} text-xs font-bold flex-shrink-0`}
              >
                {theme.icon}
              </span>

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

export default InsightCard;