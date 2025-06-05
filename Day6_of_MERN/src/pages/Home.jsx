import { useState ,useEffect } from "react";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center border border-blue-200">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Current Time</h1>
        <p className="text-5xl font-mono text-gray-800">{currentTime}</p>
      </div>
    </div>
  );
};

export default Home;
