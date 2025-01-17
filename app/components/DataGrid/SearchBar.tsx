import { ArrowUpDown, Download, Search, Share, Sparkles, Trash2 } from "lucide-react";

export const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none focus:outline-none text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">1/1 Row</span>
          <span className="text-sm text-gray-500">3/3 Column</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-600">
            <span>0</span> Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-600">
            <ArrowUpDown className="w-4 h-4" /> Sort
          </button>
        </div>
        <div className="h-6 w-px bg-gray-200" />
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 bg-gray-900 text-white rounded-lg flex items-center gap-2 text-sm">
            <Sparkles className="w-4 h-4" /> Enrich
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <Share className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <Download className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <Trash2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};