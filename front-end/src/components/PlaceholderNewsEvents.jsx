import React from "react";

function PlaceholderNewsEvents() {
  return (
    <div className="mt-[5%] mb-[5%] w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center flex-wrap">
        <div className="px-6 flex flex-col items-center justify-center pt-4 pb-2">
          <div className="h-4 bg-gray-300 w-[100px] lg:w-[200px] mb-2"></div>
          <div className="h-4 bg-gray-300 w-[300px] lg:w-[600px] mb-2"></div>
          <div className="h-4 bg-gray-300 w-[300px] lg:w-[600px] mb-2"></div>
        </div>
        <div className="flex flex-col-reverse items-center justify-center gap-10 flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:mt-6 animate-pulse">
          <div className="h-[300px] lg:h-[560px] w-[600px] rounded-[12px] bg-gray-300"></div>
          <div>
            <div className="px-6 py-4 ">
              <div className="h-6 bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300 w-[300px] lg:w-[600px]"></div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="h-4 bg-gray-300 w-[500px] lg:w-[500px] mb-2"></div>
              <div className="h-4 bg-gray-300 w-[300px] lg:w-[400px] mb-2"></div>
              <div className="h-4 bg-gray-300 w-[200px] lg:w-[300px] mb-2"></div>
              <div className="h-4 bg-gray-300 w-[300px] lg:w-[200px] mb-2"></div>
              <div className="h-4 bg-gray-300 w-[200px] lg:w-[500px] mb-2"></div>
              <div className="h-4 bg-gray-300 w-[300px] lg:w-[400px] mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceholderNewsEvents;
