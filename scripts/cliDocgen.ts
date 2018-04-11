import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';

export function getVersionMarkup(doc): string {

  const markdown = doc['type'];

  return markdown;
}


