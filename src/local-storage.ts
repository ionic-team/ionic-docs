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
    if (localStorage.getItem(key) === value) {
      return value;
    }

    localStorage.setItem(key, value);
    notify(key, value);
    return value;
  } catch (error) {
    console.warn(`Unable to set key "${key}" of localStorage:`, error);
    return null;
  }
}

function notify(key: string, value: string) {
  if (window && typeof window.dispatchEvent === 'function') {
    const detail = { key, value };
    window.dispatchEvent(new CustomEvent('local-storage', { detail }));
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
