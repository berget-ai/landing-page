import fs from 'fs'
import path from 'path'
import { createCanvas, loadImage } from 'canvas'

async function generatePNG(svgPath, outputPath, size) {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')

  // Load the SVG
  const img = await loadImage(svgPath)

  // Calculate aspect ratio to maintain proportions
  const aspectRatio = img.width / img.height
  const height = size / aspectRatio

  // Draw the image centered
  ctx.drawImage(img, 0, 0, size, height)

  // Save as PNG
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(outputPath, buffer)

  console.log(`Generated ${outputPath}`)
}

async function main() {
  const sizes = [16, 32, 64, 128]
  const __dirname = path.dirname(new URL(import.meta.url).pathname)
  const svgPath = path.join(__dirname, '../public/logos/logo.svg')

  for (const size of sizes) {
    const outputPath = path.join(__dirname, `../public/logos/logo-${size}.png`)
    await generatePNG(svgPath, outputPath, size)
  }
}

main().catch(console.error)
