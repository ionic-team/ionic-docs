import marked from 'marked';
import heading from './heading';
import code from './code';

const renderer = new marked.Renderer();
renderer.heading = heading;
renderer.code = code;

export default (markdown: string) => marked(markdown, { renderer });
