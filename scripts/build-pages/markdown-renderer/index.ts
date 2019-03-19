import marked from 'marked';
import heading from './heading';
import code from './code';
import link from './link';

const renderer = new marked.Renderer();
renderer.heading = heading;
renderer.code = code;
renderer.link = link;

export default (markdown: string, baseUrl?: string) => marked(markdown, { baseUrl, renderer });
