import React from "react";

const ChildA = () => {
  return (
    <div className="p-6 text-center max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        This is a dummy project to practice React routing and previous lessons.
      </h2>

      <div className="aspect-video w-full max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dz458ZkBMak?autoplay=1&mute=1"
          title="React Routing Practice Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ChildA;
