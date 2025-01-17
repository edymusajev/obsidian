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
  const [count, setCount] = useState(0);

  return (
    // main layout
    <div className="h-screen w-screen flex">
      {/* left panel */}
      <div className="h-screen w-80 bg-stone-50 border-r flex-none">
        <div className="h-10 w-full border-b drag bg-stone-50"></div>
        <div className="w-12 h-full border-r flex flex-col items-center gap-1.5 py-2">
          <button className="hover:bg-stone-200 px-1.5 py-1 rounded">
            <FileSearch
              size={18}
              strokeWidth={1.8}
              className="text-stone-500"
            />
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
          </button>
        </div>
      </div>
      <div className="h-10 w-full border-b drag bg-stone-50"></div>
    </div>
  );
}

export default App;
