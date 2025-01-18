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
    <div className="flex h-screen w-screen">
      {/* workspace ribbon */}
      <div className="before-w-11 mt-10 flex h-full w-11 flex-none flex-col items-center gap-1.5 border-r before:absolute before:left-0 before:top-0 before:h-10 before:w-11 before:border-b before:bg-stone-50 before:content-['']"></div>

      <div className="h-full w-full">
        {/* tab header container */}
        <div className="drag h-10 w-full border-b bg-stone-50"></div>
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
