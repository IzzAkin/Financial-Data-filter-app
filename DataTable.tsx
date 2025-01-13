'use client';

import React from 'react';
import { FinancialData, SortField, SortOrder } from '../types/financialTypes';

interface DataTableProps {
  data: FinancialData[];
  sortField: SortField;
  sortOrder: SortOrder;
  onSort: (field: SortField) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, sortField, sortOrder, onSort }) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) return '↕️';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            <th 
              className="px-6 py-3 cursor-pointer"
              onClick={() => onSort('date')}
            >
              Date {renderSortIcon('date')}
            </th>
            <th 
              className="px-6 py-3 cursor-pointer"
              onClick={() => onSort('revenue')}
            >
              Revenue {renderSortIcon('revenue')}
            </th>
            <th 
              className="px-6 py-3 cursor-pointer"
              onClick={() => onSort('netIncome')}
            >
              Net Income {renderSortIcon('netIncome')}
            </th>
            <th className="px-6 py-3">Gross Profit</th>
            <th className="px-6 py-3">EPS</th>
            <th className="px-6 py-3">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">{formatNumber(item.revenue)}</td>
              <td className="px-6 py-4">{formatNumber(item.netIncome)}</td>
              <td className="px-6 py-4">{formatNumber(item.grossProfit)}</td>
              <td className="px-6 py-4">{formatNumber(item.eps)}</td>
              <td className="px-6 py-4">{formatNumber(item.operatingIncome)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable; 