import {
  Calendar,
  Files,
  FileSearch,
  GitGraph,
  LayoutDashboard,
  Network,
  Terminal,
  Trees,
} from "lucide-react";
import { useState } from "react";

function App() {
  return (
    // main layout
    <div className="h-screen w-screen flex">
      {/* workspace ribbon */}
      <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-11 before:border-b before:h-10 before-w-11 before:bg-stone-50  flex-none h-full w-11 flex flex-col items-center gap-1.5 mt-10 border-r"></div>

      <div className=" w-full h-full">
        {/* tab header container */}
        <div className="h-10 w-full border-b drag bg-stone-50"></div>
      </div>
    </div>
  );
}

export default App;

{
  /* <button className="hover:bg-stone-200 px-1.5 py-1 rounded">
          <FileSearch size={18} strokeWidth={1.8} className="text-stone-500" />
        </button>
        <button className="hover:bg-stone-200 px-1.5 py-1 rounded">
          <Network size={18} strokeWidth={1.8} className="text-stone-500" />
        </button>
        <button className="hover:bg-stone-200 px-1.5 py-1 rounded">
          <LayoutDashboard
            size={18}
            strokeWidth={1.8}
            className="text-stone-500"
          />
        </button>
        <button className="hover:bg-stone-200 px-1.5 py-1 rounded">
          <Calendar size={18} strokeWidth={1.8} className="text-stone-500" />
        </button>
        <button className="hover:bg-stone-200 px-1.5 py-1 rounded">
          <Files size={18} strokeWidth={1.8} className="text-stone-500" />
        </button>
        <button className="hover:bg-stone-200 px-1.5 py-1 rounded">
          <Terminal size={18} strokeWidth={1.8} className="text-stone-500" />
        </button> */
}
