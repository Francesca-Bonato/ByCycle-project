import React from "react";

function PlaceHolderHighlighter() {
  return (
    <div className=" w-full flex items-center justify-center">
      <div className="flex flex-row items-center justify-center flex-wrap">
        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row-reverse animate-pulse">
          <div className="h-[300px] lg:h-[560px] w-[600px] rounded-[12px] bg-gray-300"></div>
          <div>
            <div className="px-6 py-4 ">
              <div className="h-6 bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300 w-[300px] lg:w-[600px]"></div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="h-4 bg-gray-300 w-[200px] lg:w-[500px] mb-2"></div>
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

export default PlaceHolderHighlighter;
