import * as versions from './api-menu';

export default (version) => {
  console.log(version, versions)
  console.log(versions.data[version])
  return versions.data[version];
};
