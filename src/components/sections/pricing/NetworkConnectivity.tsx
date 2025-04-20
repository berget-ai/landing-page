import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PricingRow } from './types'

const networkPricing: PricingRow[] = [
  {
    name: 'Shared IPv4 address',
    flavour: 'Network',
    price: 'Included',
  },
  {
    name: 'Dedicated IPv4 address',
    flavour: 'Network',
    price: '€49 / month',
  },
  {
    name: 'VPN Connection',
    flavour: 'VPN',
    price: '€99 / month',
  },
  {
    name: 'Egress traffic',
    flavour: 'Network',
    price: 'Free up to 1TB/month',
  },
]

export function NetworkConnectivity() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Network & Connectivity</h3>
      <p className="text-white/60">Secure and high-performance network connectivity options.</p>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[400px]">Service</TableHead>
            <TableHead className="w-[200px]">Type</TableHead>
            <TableHead className="w-[200px]">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {networkPricing.map((service) => (
            <TableRow key={service.name} className="group">
              <TableCell className="font-medium w-[400px]">{service.name}</TableCell>
              <TableCell className="w-[200px]">{service.flavour}</TableCell>
              <TableCell className="w-[200px]">{service.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}