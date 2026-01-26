# Berget AI Brand Guidelines

## Brand Identity

Berget AI's brand identity embodies Nordic clarity, technical precision, and sustainable innovation. Our visual language communicates trustworthiness, European values, and cutting-edge AI capabilities while maintaining a human touch.

## Logo

Our logo consists of a stylized mountain symbol (representing "Berget," which means "the mountain" in Swedish) paired with our wordmark "Berget AI." The logo should always be presented with adequate clear space around it, equal to the height of the "B" in Berget.

### Logo Variations
- **Primary Logo**: Full color on dark backgrounds
- **Reversed Logo**: White version for dark backgrounds
- **Monochrome Logo**: Single color version for limited color applications

### Logo Usage Guidelines
- Never distort, rotate, or alter the proportions of the logo
- Maintain minimum size requirements (24px height for digital, 10mm for print)
- Always use approved logo files, never recreate the logo
- Maintain clear space around the logo

## Typography

### Primary Fonts
- **Headings**: Ovo (serif)
  - Used for all headings (h1-h6)
  - Adds sophistication and distinctiveness
  - Letter spacing: -0.05em

- **Body Text**: DM Sans (sans-serif)
  - Used for all body text, buttons, and UI elements
  - Clean, modern, and highly readable
  - Font features: 'ss01', 'ss02', 'cv01', 'cv02'

### Font Sizes
- **Headings**:
  - H1: 2.25rem (36px) - font-medium
  - H2: 1.5rem (24px) - font-medium
  - H3: 1.25rem (20px) - font-medium
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)
- **Micro**: 0.75rem (12px)

## Color Palette

### Primary Colors
- **Background**: #1A1A1A (Dark gray/black)
  - Main background color for all applications
  - Creates a sophisticated, technical foundation

- **Primary Green**: #52B788 (Mint green)
  - Primary brand color
  - Represents sustainability, growth, and innovation
  - Used for primary buttons, accents, and key UI elements

- **Secondary Green**: #74C69D (Light mint)
  - Complementary to Primary Green
  - Used for gradients, secondary elements, and hover states

- **Accent Gold**: #FFB700 (Amber gold)
  - Used sparingly for highlights, call-to-actions, and special elements
  - Creates contrast and draws attention to important elements

### Text Colors
- **Primary Text**: #FFFFFF (White)
  - Main text color on dark backgrounds
  - High contrast for readability

- **Secondary Text**: rgba(255, 255, 255, 0.6) (60% white)
  - Used for secondary information, descriptions, and supporting text

- **Tertiary Text**: rgba(255, 255, 255, 0.4) (40% white)
  - Used for less important information, captions, and metadata

### Functional Colors
- **Success**: #22C55E (Green)
- **Error**: #FF0033 (Red)
- **Warning**: #F59E0B (Amber)
- **Info**: #3B82F6 (Blue)

## Gradients

Gradients are a key part of our visual identity, adding depth and dimension to our interfaces.

### Primary Gradient
- From: #52B788 (Primary Green)
- To: #74C69D (Secondary Green)
- Direction: Bottom-right (to-br)
- Usage: Buttons, cards, feature highlights

### Accent Gradient
- From: #52B788 (Primary Green)
- Via: #74C69D (Secondary Green)
- To: #FFB700 (Accent Gold)
- Direction: Bottom (to-b)
- Usage: Hero sections, important UI elements, backgrounds

## Visual Elements

### Background Effects

#### Grid Pattern
A subtle grid pattern (24px × 24px) with thin white lines (opacity 0.02) adds texture and depth to backgrounds without being distracting.

#### Bokeh Effect
Soft, blurred circular elements that float in the background create an atmospheric, technical feel. These should be used sparingly and with low opacity (0.15-0.3).

#### Network Visualization
Animated network visualizations with nodes and connecting lines represent AI connections and data flow. These should be subtle and not interfere with content readability.

### UI Components

#### Cards
- Rounded corners (border-radius: 0.75rem)
- Subtle border (border: 1px solid rgba(255, 255, 255, 0.1))
- Slight backdrop blur (backdrop-filter: blur(16px))
- Optional hover effects: slight elevation, border brightening

#### Buttons
- Rounded shape (border-radius: 0.75rem)
- Clear hierarchy between primary, secondary, and tertiary buttons
- Consistent padding (0.75rem 1.5rem)
- Subtle hover and active states

### Iconography

We use Lucide icons throughout our interface for their clean, consistent style.

> **Philosophy**: Icons complement text, they don't compete with it. Icons guide the eye without stealing attention.

#### Icon Principles

1. **Monochrome First**: Icons inherit text color by default - no arbitrary colors
2. **Contextual**: In alerts and status messages, icons match the semantic color
3. **Functional**: Every icon serves a purpose, never purely decorative
4. **Consistent**: Same icon for same meaning across the entire system
5. **Minimal**: Clean designs without backgrounds or borders

#### Icon Colors

- **Default**: Icons inherit surrounding text color
  ```
  text-white, text-muted-foreground, etc.
  ```

- **Alerts & Status**: Icons match semantic context
  ```
  Success alerts: green
  Error alerts: red
  Warning alerts: yellow
  Info alerts: blue
  ```

- **Marketing Context** (only): Brand colors for emphasis
  ```
  Moss: #52B788
  Sage: #74C69D
  Gold: #FFB700
  ```

#### Icon Sizes

- **Small** (12px / w-3 h-3): Inline with small text, badges
- **Medium** (16px / w-4 h-4): Inline with body text, alerts
- **Standard** (20px / w-5 h-5): Buttons, navigation
- **Large** (24px / w-6 h-6): Emphasized elements
- **X-Large** (32px / w-8 h-8): Feature cards, marketing
- **2X-Large** (48px / w-12 h-12): Hero sections

#### Standard Icon Mappings

Always use these icons for consistency:

- **Status**: CheckCircle (success), XCircle (error), AlertTriangle (warning), Info (info)
- **Actions**: Plus (add), X (close), Pencil (edit), Trash2 (delete)
- **Features**: Cloud (serverless), Zap (speed), Shield (security), Database (data)
- **Navigation**: ArrowRight (forward), ArrowLeft (back), ChevronDown (expand)

See complete icon guide in design system documentation.

#### What NOT to Do

- ❌ Don't add backgrounds or borders to icons
- ❌ Don't use random colors (purple, pink, etc.)
- ❌ Don't use decorative icons without functional purpose
- ❌ Don't mix different icons for the same meaning
- ❌ Don't wrap icons in unnecessary containers

## Photography & Imagery

### Photography Style
- Clean, high-contrast images
- Technical subjects with human elements
- Nordic/Scandinavian aesthetic when possible
- Subtle color grading that complements our color palette

### Illustration Style
- Simple, geometric illustrations with clean lines
- Technical themes with abstract representations of AI, data, and connectivity
- Limited color palette using brand colors
- Consistent stroke weights and styling

## Animation Guidelines

### Principles
- Subtle and purposeful (never animate for animation's sake)
- Quick and responsive (animations should not delay user interaction)
- Smooth easing functions (cubic-bezier(0.4, 0, 0.2, 1))

### Timing
- Fast interactions: 150-200ms
- Standard transitions: 200-300ms
- Emphasis animations: 300-500ms

### Motion
- Prefer transforms over opacity changes when possible
- Use consistent direction for related elements
- Maintain spatial relationships during transitions

## Voice & Tone

### Brand Voice
- Clear and direct
- Technical but accessible
- Confident without being arrogant
- European perspective with global relevance

### Writing Guidelines
- Use active voice
- Be concise and purposeful
- Avoid jargon unless necessary for the audience
- Maintain a balance of technical precision and human warmth

## Accessibility

All design elements must meet WCAG 2.1 AA standards:
- Maintain minimum contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Ensure all interactive elements have clear focus states
- Never use color alone to convey meaning
- Design with screen readers and assistive technologies in mind

## Application Examples

### Website
- Dark background with subtle grid pattern
- Green accents for important elements
- Clean typography with clear hierarchy
- Subtle animations for scrolling and interactions

### Dashboard
- Functional layout with clear information hierarchy
- Consistent card-based UI components
- Data visualizations using brand color palette
- Subtle background effects that don't distract from data

### Marketing Materials
- Bold use of gradients and brand colors
- Strong typography with Ovo for headlines
- Technical imagery balanced with human elements
- Consistent logo placement and clear space
