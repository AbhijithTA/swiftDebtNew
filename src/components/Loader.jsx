const Loader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 w-full h-full border-4 border-gray-300 rounded-full animate-spin-slow border-t-transparent"></div>
  
          <div className="absolute inset-2 w-3/4 h-3/4 border-4 border-blue-500 rounded-full animate-spin border-b-transparent"></div>
        </div>
      </div>
    );
  };
  
  export default Loader;
  