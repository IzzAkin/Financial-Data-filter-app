import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    {
      date: '2023',
      revenue: 383000000000,
      netIncome: 96995000000,
      grossProfit: 170782000000,
      eps: 6.13,
      operatingIncome: 114836000000
    },
    {
      date: '2022',
      revenue: 394328000000,
      netIncome: 99803000000,
      grossProfit: 169103000000,
      eps: 6.15,
      operatingIncome: 119437000000
    }
  ];

  return NextResponse.json(data);
} 