import { useEffect, useRef } from 'react'

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const container = canvas.parentElement
    if (!container) return

    // Create nodes in a grid pattern
    const gridSize = Math.ceil(Math.sqrt(50)) // For 50 nodes
    const spacingX = canvas.width / (gridSize + 1)
    const spacingY = canvas.height / (gridSize + 1)
    
    const nodes = Array.from({ length: 50 }, (_, i) => {
      const row = Math.floor(i / gridSize)
      const col = i % gridSize
      return {
        x: spacingX * (col + 1), // +1 to add margin from edges
        y: spacingY * (row + 1),
        radius: Math.random() * 1.5 + 1,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        connections: [] as number[],
        lastSparkTime: 0,
      }
    })

    const resize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height

      // Maintain grid pattern when resizing
      const gridSize = Math.ceil(Math.sqrt(nodes.length))
      const spacingX = canvas.width / (gridSize + 1)
      const spacingY = canvas.height / (gridSize + 1)
      
      nodes.forEach((node, i) => {
        const row = Math.floor(i / gridSize)
        const col = i % gridSize
        node.x = spacingX * (col + 1)
        node.y = spacingY * (row + 1)
      })

      // Recalculate connections
      nodes.forEach((node, i) => {
        node.connections = []
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < canvas.width * 0.2) {
              // Relative to canvas width
              node.connections.push(j)
            }
          }
        })
      })
    }

    const resizeObserver = new ResizeObserver(() => {
      resize()
    })
    resizeObserver.observe(container)
    resize()

    // Spark effect class
    class Spark {
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 2
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.maxLife = 10
        this.life = this.maxLife
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life--
        return this.life > 0
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = this.life / this.maxLife
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x - this.vx, this.y - this.vy)
        ctx.stroke()
      }
    }

    const sparks: Spark[] = []

    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 200) {
            node.connections.push(j)
          }
        }
      })
    })

    // Particles for each connection
    const particles: {
      nodeIndex: number
      targetIndex: number
      progress: number
    }[] = []
    nodes.forEach((node, i) => {
      node.connections.forEach((targetIndex) => {
        particles.push({
          nodeIndex: i,
          targetIndex,
          progress: Math.random(),
        })
      })
    })

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -0.8
          node.x = Math.max(0, Math.min(canvas.width, node.x))
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -0.8
          node.y = Math.max(0, Math.min(canvas.height, node.y))
        }

        node.vx += (Math.random() - 0.5) * 0.02
        node.vy += (Math.random() - 0.5) * 0.02

        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
        if (speed > 0.8) {
          node.vx = (node.vx / speed) * 0.8
          node.vy = (node.vy / speed) * 0.8
        }
      })

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)'
      ctx.lineWidth = 0.5
      nodes.forEach((node) => {
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex]
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(target.x, target.y)
          ctx.stroke()
        })
      })

      // Draw nodes
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Update and draw particles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
      particles.forEach((particle) => {
        const sourceNode = nodes[particle.nodeIndex]
        const targetNode = nodes[particle.targetIndex]

        const prevProgress = particle.progress
        particle.progress += 0.002

        // Check if particle just reached target node
        if (prevProgress < 1 && particle.progress >= 1) {
          // Create spark effect
          for (let i = 0; i < 5; i++) {
            sparks.push(new Spark(targetNode.x, targetNode.y))
          }
        }

        if (particle.progress >= 1) particle.progress = 0

        const x =
          sourceNode.x + (targetNode.x - sourceNode.x) * particle.progress
        const y =
          sourceNode.y + (targetNode.y - sourceNode.y) * particle.progress

        ctx.beginPath()
        ctx.arc(x, y, 1, 0, Math.PI * 2)
        ctx.fill()
      })

      // Update and draw sparks
      ctx.lineWidth = 2
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i]
        if (!spark.update()) {
          sparks.splice(i, 1)
        } else {
          spark.draw(ctx)
        }
      }

      // Subtle pulse effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
      nodes.forEach((node) => {
        const pulseSize = Math.sin(time / 2000 + node.x + node.y) * 1.5 + 2
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius + pulseSize, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(draw)
    }

    animationFrameRef.current = requestAnimationFrame(draw)

    return () => {
      resizeObserver.disconnect()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 opacity-40 pointer-events-none"
    />
  )
}
