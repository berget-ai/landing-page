import { Network, Cloud, Server, Lock } from 'lucide-react'

const mockConnections = [
  {
    name: 'AWS Direct Connect',
    type: 'AWS',
    status: 'Active',
    sourceIp: '10.0.0.1',
    destinationIp: '172.16.0.1',
    bandwidth: '1 Gbps',
    latency: '4.2ms',
    region: 'eu-north-1',
  },
  {
    name: 'Azure ExpressRoute',
    type: 'Azure',
    status: 'Active',
    sourceIp: '10.0.0.1',
    destinationIp: '192.168.0.1',
    bandwidth: '2 Gbps',
    latency: '3.8ms',
    region: 'northeurope',
  },
  {
    name: 'IPSec VPN',
    type: 'IPSec',
    status: 'Active',
    sourceIp: '10.0.0.1',
    destinationIp: '198.51.100.1',
    bandwidth: '500 Mbps',
    latency: '8.1ms',
    region: 'Stockholm',
  },
]

export function NetworkPreview() {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* Network Topology Visualization */}
      <div className="relative bg-[#1A1A1A] p-8">
        <div className="relative h-[400px]">
          {/* Center AI Cluster Node */}
          <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 rounded-full bg-[#E5DDD5]/10 flex items-center justify-center relative">
              <div className="w-24 h-24 rounded-full bg-[#E5DDD5]/20 flex items-center justify-center animate-pulse">
                <Server className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-[#E5DDD5]/20" />
              <div className="absolute inset-[-1rem] rounded-full border border-[#E5DDD5]/10 animate-ping" />
            </div>
            <div className="text-center mt-4">
              <p className="font-medium">AI Cluster</p>
              <p className="text-sm text-white/40">10.0.0.1/24</p>
            </div>
          </div>

          {/* Connection Lines and Remote Nodes */}
          {mockConnections.map((connection, index) => {
            const spacing = (index + 1) * (100 / (mockConnections.length + 1))
            const xOffset = spacing * 4

            return (
              <div
                key={connection.name}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(${xOffset}px, -50%)`,
                }}
              >
                {/* Connection Line */}
                <div className="absolute inset-0 w-0 h-0">
                  <svg
                    className="absolute top-1/2 right-full -translate-y-1/2"
                    style={{ width: '200px', height: '2px' }}
                  >
                    <defs>
                      <linearGradient
                        id={`grad-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#E5DDD5"
                          stopOpacity="0.1"
                        />
                        <stop
                          offset="100%"
                          stopColor="#E5DDD5"
                          stopOpacity="0.3"
                        />
                      </linearGradient>
                    </defs>
                    <line
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                      stroke={`url(#grad-${index})`}
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>

                {/* Remote Node */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 rounded-full bg-[#E5DDD5]/5 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-full bg-[#E5DDD5]/10 flex items-center justify-center">
                      {connection.type === 'AWS' && (
                        <Cloud className="w-8 h-8" />
                      )}
                      {connection.type === 'Azure' && (
                        <Network className="w-8 h-8" />
                      )}
                      {connection.type === 'IPSec' && (
                        <Lock className="w-8 h-8" />
                      )}
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-medium">{connection.name}</p>
                    <p className="text-sm text-white/40">{connection.region}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Connection List */}
        <div className="space-y-4">
          {mockConnections.map((connection) => (
            <div
              key={connection.name}
              className="flex items-center justify-between p-4 rounded-xl bg-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#E5DDD5]" />
                <div>
                  <h3 className="font-medium">{connection.name}</h3>
                  <p className="text-sm text-white/40">
                    {connection.type} • {connection.region}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-white/60">
                    {connection.bandwidth}
                  </p>
                  <p className="text-sm text-white/40">{connection.latency}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-white/10">
                  {connection.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-20" />
      </div>

      {/* Preview Label */}
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
        Preview
      </div>
    </div>
  )
}
