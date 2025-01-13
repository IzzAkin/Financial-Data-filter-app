'use client';

import React, { useState, useEffect } from 'react';
import FilterPanel from './FilterPanel';
import DataTable from './DataTable';
import { FinancialData, FilterCriteria, SortField, SortOrder } from '../types/financialTypes';
import FilterResults from './FilterResults';

export default function FinancialDashboard() {
  const [data, setData] = useState<FinancialData[]>([]);
  const [filteredData, setFilteredData] = useState<FinancialData[]>([]);
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [showResults, setShowResults] = useState(false);
  const [filters, setFilters] = useState<FilterCriteria>({
    startYear: '',
    endYear: '',
    minRevenue: '',
    maxRevenue: '',
    minNetIncome: '',
    maxNetIncome: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          '/api/financial-data'
        );
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
        setFilteredData([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...data];
    // ... existing filter logic ...
    setFilteredData(filtered);
  }, [data, filters, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Apple Financial Metrics</h1>
      <FilterPanel filters={filters} onFilterChange={setFilters} />
      <button
        onClick={() => setShowResults(!showResults)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {showResults ? 'Hide Results' : 'Show Results'}
      </button>
      {showResults && <FilterResults filteredData={filteredData} />}
      <DataTable 
        data={filteredData}
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
    </main>
  );
} 