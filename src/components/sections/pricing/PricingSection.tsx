import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PricingSectionProps } from './types'

export function PricingSection({ title, rows }: PricingSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[400px]">Service</TableHead>
            <TableHead>Price (EUR)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className="group">
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {row.name}
                  {row.badge && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-white/10 text-white/60 group-hover:bg-white/15">
                      {row.badge}
                    </span>
                  )}
                  {row.tooltip && (
                    <span className="text-sm text-white/40" title={row.tooltip}>
                      ℹ️
                    </span>
                  )}
                </div>
                {row.description && (
                  <div className="text-sm text-white/60 mt-1">
                    {row.description}
                  </div>
                )}
              </TableCell>
              <TableCell>{row.eur || '—'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}