declare module 'markdown-it' {
  interface MarkdownItOptions {
    html?: boolean;
    xhtmlOut?: boolean;
    breaks?: boolean;
    langPrefix?: string;
    linkify?: boolean;
    typographer?: boolean;
    quotes?: string | string[];
    highlight?: (str: string, lang: string) => string;
  }

  class MarkdownIt {
    constructor(options?: MarkdownItOptions | string);
    render(md: string): string;
    renderInline(md: string): string;
  }

  export default MarkdownIt;
}
