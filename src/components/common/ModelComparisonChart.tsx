import { useEffect, useRef } from 'react'
import { Chart, ChartConfiguration } from 'chart.js/auto'

interface ModelComparisonChartProps {
  className?: string
}

export function ModelComparisonChart({ className }: ModelComparisonChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<Chart>()

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: 'Open Source Models',
            data: [27, 27, 34, 64, 86],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
          },
          {
            label: 'Closed Source Models',
            data: [40, 40, 60, 86, 88],
            borderColor: 'rgb(239, 68, 68)',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'Accuracy (%)',
              color: 'rgb(255, 255, 255, 0.6)',
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.6)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Release Date',
              color: 'rgb(255, 255, 255, 0.6)',
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.6)',
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: 'rgba(255, 255, 255, 0.6)',
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const models: Record<string, string> = {
                  '2020': context.datasetIndex === 0 ? 'BLOOM-176B' : 'text-davinci-001',
                  '2022': context.datasetIndex === 0 ? 'LLaMa-1 65B' : 'GPT-4',
                  '2023': context.datasetIndex === 0 ? 'LLaMa-2 70B' : 'Claude 3 Opus',
                  '2024': context.datasetIndex === 0 ? 'Llama 3 70B' : 'Claude 3 Opus',
                }
                const year = context.label
                const model = models[year]
                return `${context.dataset.label}: ${context.parsed.y}% (${model || 'N/A'})`
              },
            },
          },
        },
      },
    }

    if (chartRef.current) {
      chartRef.current.destroy()
    }

    chartRef.current = new Chart(ctx, config)

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className={className}>
      <canvas ref={canvasRef} />
    </div>
  )
}
