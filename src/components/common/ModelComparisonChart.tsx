import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Card } from '@/components/ui/card'

interface ModelComparisonChartProps {
  className?: string
}

const data = [
  {
    year: '2020',
    open: 27,
    closed: 40,
    openModel: 'BLOOM-176B',
    closedModel: 'text-davinci-001',
  },
  {
    year: '2021',
    open: 27,
    closed: 40,
    openModel: 'BLOOM-176B',
    closedModel: 'text-davinci-001',
  },
  {
    year: '2022',
    open: 34,
    closed: 60,
    openModel: 'LLaMa-1 65B',
    closedModel: 'GPT-4',
  },
  {
    year: '2023',
    open: 64,
    closed: 86,
    openModel: 'LLaMa-2 70B',
    closedModel: 'Claude 3 Opus',
  },
  {
    year: '2024',
    open: 86,
    closed: 88,
    openModel: 'Llama 3 70B',
    closedModel: 'Claude 3 Opus',
  },
]

export function ModelComparisonChart({ className }: ModelComparisonChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(255,255,255,0.05)"
            vertical={false}
          />
          <XAxis
            dataKey="year"
            stroke="rgba(255,255,255,0.5)"
            tickLine={false}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tick={{ fontSize: 12 }}
            label={{
              value: 'Release Date',
              position: 'bottom',
              offset: 0,
              style: { fill: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 12 },
            }}
          />
          <YAxis
            stroke="rgba(255,255,255,0.5)"
            tickLine={false}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tick={{ fontSize: 12 }}
            label={{
              value: 'Accuracy (%)',
              angle: -90,
              position: 'left',
              offset: 12,
              style: { fill: 'rgba(255,255,255,0.6)', fontSize: 12 },
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
              padding: '12px',
            }}
            labelStyle={{ color: 'rgba(255,255,255,0.6)', marginBottom: '8px', fontSize: '12px' }}
            itemStyle={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px' }}
            formatter={(value: number, name: string, props: any) => {
              const modelKey = name === 'open' ? 'openModel' : 'closedModel'
              const model = props.payload[modelKey]
              return [`${value}% (${model})`, name === 'open' ? 'Open Source Models' : 'Closed Source Models']
            }}
          />
          <Legend
            formatter={(value) =>
              value === 'open' ? 'Open Source Models' : 'Closed Source Models'
            }
            wrapperStyle={{
              fontSize: '12px',
              paddingTop: '20px'
            }}
          />
          <Line
            type="monotone"
            dataKey="open"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: '#3B82F6', r: 4 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="closed" 
            stroke="#EF4444"
            strokeWidth={2}
            dot={{ fill: '#EF4444', r: 4 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
