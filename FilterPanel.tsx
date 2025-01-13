'use client';

import React from 'react';
import { FilterCriteria } from '../types/financialTypes';

interface FilterPanelProps {
  filters: FilterCriteria;
  onFilterChange: (filters: FilterCriteria) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Year Range Filters */}
        <div className="space-y-2">
          <h3 className="font-medium">Year Range</h3>
          <div className="flex gap-2">
            <input
              type="number"
              name="startYear"
              placeholder="Start Year"
              value={filters.startYear}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="number"
              name="endYear"
              placeholder="End Year"
              value={filters.endYear}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* Revenue Range Filters */}
        <div className="space-y-2">
          <h3 className="font-medium">Revenue Range</h3>
          <div className="flex gap-2">
            <input
              type="number"
              name="minRevenue"
              placeholder="Min Revenue"
              value={filters.minRevenue}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="number"
              name="maxRevenue"
              placeholder="Max Revenue"
              value={filters.maxRevenue}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* Net Income Range Filters */}
        <div className="space-y-2">
          <h3 className="font-medium">Net Income Range</h3>
          <div className="flex gap-2">
            <input
              type="number"
              name="minNetIncome"
              placeholder="Min Net Income"
              value={filters.minNetIncome}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="number"
              name="maxNetIncome"
              placeholder="Max Net Income"
              value={filters.maxNetIncome}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel; 