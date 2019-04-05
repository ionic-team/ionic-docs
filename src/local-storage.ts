function getItem(key: string): string {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn(`Unable to get key "${key}" from localStorage:`, error);
    return null;
  }
}

function setItem(key: string, value: string): string {
  try {
    localStorage.setItem(key, value);
    return value;
  } catch (error) {
    console.warn(`Unable to set key "${key}" of localStorage:`, error);
    return null;
  }
}

type LocalStorageGetter = () => string;
type LocalStorageSetter = (value: string) => string;

export function useLocalStorage(key: string, defaultValue?: string): [
  LocalStorageGetter,
  LocalStorageSetter
] {

  if (defaultValue != null && getItem(key) === null) {
    setItem(key, defaultValue);
  }

  return [
    () => getItem(key),
    (value: string) => setItem(key, value)
  ];
}
