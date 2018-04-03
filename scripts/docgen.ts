import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';

export function getComponentHTML(component, hasDemo = false) {
  return `<h1>${component.tag}</h1>
    <p>hasDemo: ${hasDemo}</p>`;
}
