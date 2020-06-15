import api from './api';
import apiIndex from './api-index';
import cli from './cli';
import defaultTemplate from './default';
import enterprisePlugin from './enterprise-plugin';
import error from './error';
import native from './native';
import releaseNotes from './release-notes';

export default {
  'default': defaultTemplate,
  'api-index': apiIndex,
  'api': api,
  'cli': cli,
  'enterprise-plugin': enterprisePlugin,
  'error': error,
  'native': native,
  'release-notes': releaseNotes,
};
