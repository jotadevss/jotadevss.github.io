// Financial Data Constants for Construction Project Dashboard
// All values in Brazilian Real (BRL)

export interface Inflow {
  date: string;
  contributor: string;
  value: number;
}

export interface Expense {
  category: string;
  value: number;
}

export interface KPIs {
  totalInflows: number;
  constructionCost: number;
  adminFee: number;
  totalSpent: number;
  balance: number;
}

// Cash Inflows (Entradas)
export const inflows: Inflow[] = [
  { date: '02/05/2025', contributor: 'Guilherme', value: 60000.00 },
  { date: '06/06/2025', contributor: 'Guilherme', value: 40000.00 },
  { date: '10/06/2025', contributor: 'Guilherme', value: 20000.00 },
  { date: '23/07/2025', contributor: 'Guilherme', value: 40000.00 },
  { date: '23/08/2025', contributor: 'Guilherme', value: 40000.00 },
  { date: '02/09/2025', contributor: 'Guilherme', value: 20000.00 },
  { date: '06/10/2025', contributor: 'Guilherme', value: 30000.00 },
  { date: '08/10/2025', contributor: 'Guilherme', value: 20000.00 },
  { date: '17/10/2025', contributor: 'Guilherme', value: 10000.00 },
  { date: '07/11/2025', contributor: 'Guilherme', value: 30000.00 },
  { date: '03/12/2025', contributor: 'Guilherme', value: 20000.00 },
  { date: '05/11/2025', contributor: 'Guilherme', value: 6102.00 },
];

// Categorized Construction Expenses
export const expenses: Expense[] = [
  { category: 'Mão de Obra', value: 113800.00 },
  { category: 'Alvenaria', value: 32829.18 },
  { category: 'Ferro', value: 21519.47 },
  { category: 'Piso', value: 16746.62 },
  { category: 'Esquadrias', value: 15240.80 },
  { category: 'Outros', value: 13693.36 },
  { category: 'Pintura', value: 13098.77 },
  { category: 'Elétrica', value: 12073.31 },
  { category: 'Hidráulica', value: 11652.59 },
  { category: 'Bancadas', value: 8900.00 },
  { category: 'Climatização', value: 7302.00 },
  { category: 'Documentação', value: 7090.05 },
  { category: 'Porta', value: 6945.00 },
  { category: 'Impermeabilização Teto', value: 6740.00 },
  { category: 'Gesso', value: 4947.50 },
  { category: 'Ferramenta', value: 2645.21 },
  { category: 'Preliminares', value: 1000.00 },
  { category: 'Coberta', value: 704.88 },
  { category: 'Gás', value: 604.10 },
  { category: 'Impermeabilização', value: 451.73 },
  { category: 'Madeira', value: 308.00 },
];

// Key Performance Indicators
export const kpis: KPIs = {
  totalInflows: 336102.00,
  constructionCost: 298292.57,
  adminFee: 43828.59,
  totalSpent: 342121.15,
  balance: -6019.15,
};

// Helper function to format currency in Brazilian Real
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

// Helper function to format date
export function formatDate(dateStr: string): string {
  const [day, month, year] = dateStr.split('/');
  return `${day}/${month}/${year}`;
}

// Get expenses sorted by value (descending)
export function getExpensesSorted(): Expense[] {
  return [...expenses].sort((a, b) => b.value - a.value);
}
