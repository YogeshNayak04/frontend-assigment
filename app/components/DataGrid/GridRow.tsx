import { Company, Row } from "@/app/types";
import { MoreVertical, Play } from "lucide-react";

interface GridRowProps {
  row: Row;
  company: Company;
}

export const GridRow: React.FC<GridRowProps> = ({ row, company }) => {
  const getStatusIcon = (type?: string) => {
    switch (type) {
      case 'loading':
        return '⏳';
      case 'error':
        return '⚠️';
      case 'success':
        return '✅';
      default:
        return '⏳';
    }
  };

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <button className="text-blue-500 p-1 hover:bg-blue-50 rounded">
            <Play className="w-4 h-4" />
          </button>
          <span className="text-sm">{row.timestamp}</span>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <span>{getStatusIcon(row.statusType)}</span>
          {row.link ? (
            <a href={row.link} className="text-blue-500 hover:underline text-sm">
              {row.status}
            </a>
          ) : (
            <span className="text-sm text-gray-600">{row.status}</span>
          )}
        </div>
      </td>
      <td className="p-4">
        {company ? (
          <div className="flex items-center gap-2">
            <span>{company.icon}</span>
            <span className="text-sm">{company.name} - {company.status}</span>
          </div>
        ) : (
          <span className="text-sm text-gray-400">Loading data, Please wait</span>
        )}
      </td>
      <td className="p-4">
        <button className="opacity-0 group-hover:opacity-100">
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </button>
      </td>
    </tr>
  );
};