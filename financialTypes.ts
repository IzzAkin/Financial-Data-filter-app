export interface FinancialData {
  date: string;
  revenue: number;
  netIncome: number;
  grossProfit: number;
  eps: number;
  operatingIncome: number;
}

export type SortField = 'date' | 'revenue' | 'netIncome' | 'grossProfit' | 'eps' | 'operatingIncome';
export type SortOrder = 'asc' | 'desc';

export interface FilterCriteria {
  startYear: string;
  endYear: string;
  minRevenue: string;
  maxRevenue: string;
  minNetIncome: string;
  maxNetIncome: string;
}