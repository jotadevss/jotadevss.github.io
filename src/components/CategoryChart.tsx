import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts';
import type { Expense } from '../data/financials';

interface CategoryChartProps {
    expenses: Expense[];
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
        value: number;
        payload: Expense;
    }>;
}

// Custom tooltip with sharp corners
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        const data = payload[0];
        const formattedValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(data.value);

        return (
            <div
                style={{
                    backgroundColor: '#111111',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '0px',
                    fontSize: '12px',
                    fontWeight: 300,
                }}
            >
                <p style={{ margin: 0, fontWeight: 400 }}>{data.payload.category}</p>
                <p style={{ margin: '4px 0 0 0' }}>{formattedValue}</p>
            </div>
        );
    }
    return null;
};

export default function CategoryChart({ expenses }: CategoryChartProps) {
    // Sort expenses by value descending
    const sortedExpenses = [...expenses].sort((a, b) => b.value - a.value);

    // Calculate chart height based on number of categories
    const chartHeight = Math.max(500, sortedExpenses.length * 32);

    return (
        <div style={{ width: '100%', height: chartHeight }}>
            <style>{`
                .recharts-wrapper,
                .recharts-surface,
                .recharts-layer,
                .recharts-cartesian-axis-tick,
                .recharts-bar-rectangle,
                *:focus {
                    outline: none !important;
                    box-shadow: none !important;
                }
            `}</style>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={sortedExpenses}
                    layout="vertical"
                    margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
                    barCategoryGap={8}
                    accessibilityLayer={false}
                >
                    <XAxis
                        type="number"
                        axisLine={{ stroke: '#E4E4E7' }}
                        tickLine={true}
                        tick={{
                            fontSize: 11,
                            fontWeight: 200,
                            fill: '#71717A',
                            fontFamily: 'Plus Jakarta Sans',
                            focusable: true,
                        }}
                        tickFormatter={(value) =>
                            new Intl.NumberFormat('pt-BR', {
                                notation: 'compact',
                                compactDisplay: 'short',
                            }).format(value)
                        }
                    />
                    <YAxis
                        type="category"
                        dataKey="category"
                        axisLine={false}
                        tickLine={true}
                        tickMargin={10}
                        tick={{
                            fontSize: 12,
                            fontWeight: 300,
                            fill: '#111111',
                            fontFamily: 'Plus Jakarta Sans',
                        }}
                        width={140}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={false}
                    />
                    <Bar dataKey="value" radius={0} maxBarSize={24} minPointSize={5}>
                        {sortedExpenses.map((_, index) => (
                            <Cell key={`cell-${index}`} fill="#111111" />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
