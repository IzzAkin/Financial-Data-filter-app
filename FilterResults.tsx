'use client';

import React from 'react';
import { FinancialData } from '../types/financialTypes';

interface FilterResultsProps {
  filteredData: any[];
}

export default function FilterResults({ filteredData }: FilterResultsProps) {
  return (
    <div className="mb-4">
      <p className="text-gray-600">Found {filteredData.length} results</p>
    </div>
  );
} 