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
    <Card className={className}>
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
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="year"
            stroke="rgba(255,255,255,0.6)"
            label={{
              value: 'Release Date',
              position: 'bottom',
              style: { fill: 'rgba(255,255,255,0.6)' },
            }}
          />
          <YAxis
            stroke="rgba(255,255,255,0.6)"
            label={{
              value: 'Accuracy (%)',
              angle: -90,
              position: 'left',
              style: { fill: 'rgba(255,255,255,0.6)' },
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
            }}
            labelStyle={{ color: 'rgba(255,255,255,0.8)' }}
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
          />
          <Line
            type="monotone"
            dataKey="open"
            stroke="rgb(59, 130, 246)"
            strokeWidth={2}
            dot={{ fill: 'rgb(59, 130, 246)' }}
          />
          <Line
            type="monotone"
            dataKey="closed"
            stroke="rgb(239, 68, 68)"
            strokeWidth={2}
            dot={{ fill: 'rgb(239, 68, 68)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
