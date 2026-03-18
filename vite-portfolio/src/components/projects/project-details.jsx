
export function ProjectDetail({ title, description, features }) {
  return (
    <div className="w-full overflow-y-scroll">

        <div className="space-y-4">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-blue-600 ">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>

          {features && features.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-3">
                Características principales
              </h5>
              <ul className="space-y-2">
                {features.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="text-blue-700 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
  
    </div>
  );
}