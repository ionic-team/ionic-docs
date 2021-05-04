const getItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn(`Unable to get key "${key}" from localStorage:`, error);
    return null;
  }
};

const setItem = (key: string, value: string): string | null => {
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
};

const notify = (key: string, value: string) => {
  // tslint:disable-next-line
  if (window && typeof window.dispatchEvent === 'function') {
    const detail = { key, value };
    window.dispatchEvent(new CustomEvent('local-storage', { detail }));
  }
};

type LocalStorageGetter = () => string | null;
type LocalStorageSetter = (value: string) => string | null;

export const useLocalStorage = (key: string, defaultValue?: string): [
  LocalStorageGetter,
  LocalStorageSetter
] => {

  if (defaultValue !== undefined && getItem(key) === null) {
    setItem(key, defaultValue);
  }

  return [
    () => getItem(key),
    (value: string) => setItem(key, value)
  ];
};
