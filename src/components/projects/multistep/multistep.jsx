import React from "react";

function Multistep() {
  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <div className="border-collapse border border-black w-full h-full md:w-4/5 md:h-4/5 rounded-lg shadow-lg p-3">
          <div className="grid md:grid-cols-3 md:grid-rows-1 grid-rows-4 gap-0 h-full">
            <div className="bg-blue-500 rounded-xl"></div>
            <div className="bg-black row-span-4 md:col-span-2"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Multistep;
