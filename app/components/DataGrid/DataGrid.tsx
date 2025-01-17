"use client"
import React, { useState } from 'react';
import {  ChevronLeft, User, Grid, Figma, Puzzle,  } from 'lucide-react';
import { Row, Company } from '../../types';
import { SearchBar } from './SearchBar';
import { GridHeader } from './GridHeader';
import { GridRow } from './GridRow';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <input
            type="text"
            placeholder="Name of the file"
            className="text-sm border-none focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Auto Save</span>
            <div className="w-10 h-6 bg-emerald-500 rounded-full flex items-center px-1">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
          <button className="p-2 hover:bg-gray-50 rounded-full">
            <User className="w-5 h-5" />
          </button>
        </div>
      </nav>
      
      <div className="flex">
        <aside className="w-14 bg-white border-r h-[calc(100vh-48px)] flex flex-col items-center py-4 gap-4">
          <button className="p-2 bg-gray-100 rounded-lg">
            <Grid className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <Puzzle className="w-5 h-5 text-gray-400" />
          </button>

          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <img src="./venn-diagram.png" width={24} className='text-gray-400' alt="" />
          </button>
        </aside>
        
        <main className="flex-1">
          <DataGrid />
        </main>
      </div>
    </div>
  );
};

const DataGrid: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([
    { 
      id: 1, 
      timestamp: 'Oct 12, 2024 at 14:08 PM', 
      status: 'Bitscale Evaluation - Account relevancy check',
      statusType: 'success'
    },
    { 
      id: 2, 
      timestamp: 'Oct 12, 2024 at 14:08 PM', 
      status: 'cell data size exceeds limit',
      statusType: 'error'
    },
    { 
      id: 3, 
      timestamp: 'Oct 12, 2024 at 14:08 PM', 
      status: 'https://www.linkedin.com/bitS...',
      link: 'https://www.linkedin.com/bitScale',
      statusType: 'success'
    },
    { 
      id: 4, 
      timestamp: 'Oct 12, 2024 at 14:08 PM', 
      status: 'Loading data, Please wait',
      statusType: 'loading'
    },
    { 
      id: 5, 
      timestamp: 'Oct 12, 2024 at 14:08 PM', 
      status: 'Loading data, Please wait',
      statusType: 'loading'
    },
  ]);

  const companies: Company[] = [
    { name: 'Bitscale Evaluation', icon: '🔵', status: 'Account relevancy check' },
    { name: 'BMW Evaluation', icon: <img src="./bmw.svg" width={24} alt="" />, status: 'Relevancy check' },
    { name: 'Google Evaluation', icon:<img src="./google.svg" width={24} alt="" /> , status: 'Lilevancy check' },
    { name: 'Apple Evaluation', icon: <img src="./apple.svg" width={24} alt="" />, status: 'Olvancy check' },
    { name: 'Figma Evaluation', icon: <Figma />, status: 'Evancy check' },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <SearchBar />
      <div className="overflow-x-auto">
        <table className="w-full">
          <GridHeader />
          <tbody>
            {rows.map((row, index) => (
              <GridRow 
                key={row.id} 
                row={row} 
                company={companies[index]} 
              />
            ))}
            <tr>
              <td colSpan={4} className="p-2">
                <button className="text-gray-500 hover:bg-gray-50 py-1 px-3 rounded text-sm flex items-center gap-1">
                  <span>+</span> Add Row
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Layout;