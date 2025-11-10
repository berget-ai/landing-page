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
  const __dirname = path.dirname(new URL(import.meta.url).pathname)
  const logosDir = path.join(__dirname, '../public/logos')
  
  // Generate general logo sizes (for favicon)
  const generalSizes = [16, 32, 64, 128]
  const generalSvgPath = path.join(logosDir, 'logo.svg')
  
  for (const size of generalSizes) {
    const outputPath = path.join(logosDir, `logo-${size}.png`)
    await generatePNG(generalSvgPath, outputPath, size)
  }
  
  // Generate colored logo sizes (for brand guidelines)
  const coloredSizes = [128, 256]
  const coloredLogos = [
    { svg: 'berget-logo-black.svg', prefix: 'berget-logo-black' },
    { svg: 'berget-logo-white.svg', prefix: 'berget-logo-white' }
  ]
  
  for (const logo of coloredLogos) {
    const svgPath = path.join(logosDir, logo.svg)
    for (const size of coloredSizes) {
      const outputPath = path.join(logosDir, `${logo.prefix}-${size}.png`)
      await generatePNG(svgPath, outputPath, size)
    }
  }
  
  // Generate standard size for general use
  await generatePNG(
    path.join(logosDir, 'berget-logo-white.svg'),
    path.join(logosDir, 'berget-logo-white.png'),
    256
  )
}

main().catch(console.error)
