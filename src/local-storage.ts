function getItem(key: string): string {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn(`Unable to get key "${key}" from localStorage:`, error);
    return null;
  }
}

function setItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn(`Unable to set key "${key}" of localStorage:`, error);
  }
}

type LocalStorageGetter = () => string;
type LocalStorageSetter = (value: string) => void;

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
