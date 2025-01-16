const Shimmer = ({ count = 5 }) => {
  return (
    <div className="res-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card p-4 rounded-lg shadow-md bg-gray-200 animate-pulse"
          >
            <div className="shimmer-logo bg-gray-300 h-40 w-full rounded-md"></div>
            <div className="mt-4 space-y-2">
              <div className="h-6 bg-gray-300 rounded-md"></div>
              <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
