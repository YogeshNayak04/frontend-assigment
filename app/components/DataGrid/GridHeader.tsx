import { Settings, Sparkles } from "lucide-react";

export const GridHeader: React.FC = () => {
  return (
    <thead>
      <tr className="border-b">
        <th className="bg-yellow-50 p-4 text-left">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white w-6 h-6 flex items-center justify-center rounded text-xs">A</span>
            <span className="font-medium">Input Column</span>
          </div>
        </th>
        <th className="p-4 text-left">
          <div className="flex items-center gap-2">
            <img src="./chatgpt.png" width={24} alt="" />
            <span className="font-medium">Action column</span>
          </div>
        </th>
        <th className="p-4 text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Enrich Company</span>
          </div>
        </th>
        <th className="p-4 w-48">
          <button className="flex items-center gap-2 text-gray-500 hover:bg-gray-50 py-2 px-3 rounded-lg text-sm">
            <span>+</span> Add Column
          </button>
        </th>
      </tr>
    </thead>
  );
};