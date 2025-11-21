// Main presentation component
export { BlogPresentation as default } from './BlogPresentation';
export {
  BlogPresentation,
  SlideTitle,
  SlideHeading,
  SlideSubheading,
  SlideText,
  SlideList,
  SlideListItem,
  SlideCode,
  SlideTable,
  SlideTwoColumn,
  SlideHighlight,
  SlideFragment,
} from './BlogPresentation';

// Template and helper functions
export {
  PresentationTemplate,
  createTitleSlide,
  createContentSlide,
  createListSlide,
  createCodeSlide,
  createTableSlide,
  createTwoColumnSlide,
  ExamplePresentation,
} from './PresentationTemplate';

// Styles
import './PresentationStyles.css';