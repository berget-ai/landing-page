import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PricingRow } from './types'

const computeResources: PricingRow[] = [
  {
    name: 'CPU Core',
    description: 'Compute',
    price: '€0.04 / vCPU / hour',
  },
  {
    name: 'RAM Memory',
    description: 'Memory',
    price: '€0.005 / GB / hour',
  },
  {
    name: 'Storage',
    description: 'Disk',
    price: '€0.005 / GB / hour',
  },
  {
    name: 'AMD MI300 GPU',
    description: 'GPU',
    price: '€4.49 / hour',
  },
]

export function ComputeResources() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-ovo">Compute Resources</h3>
      <p className="text-white/80">
        Flexible compute resources for running your own models and applications.
      </p>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[400px]">Resource</TableHead>
            <TableHead className="w-[200px]">Type</TableHead>
            <TableHead className="w-[200px]">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {computeResources.map((resource) => (
            <TableRow key={resource.name} className="group">
              <TableCell className="font-medium w-[400px]">
                {resource.name}
              </TableCell>
              <TableCell className="w-[200px]">
                {resource.description}
              </TableCell>
              <TableCell className="w-[200px]">{resource.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
