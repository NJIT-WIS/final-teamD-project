import "client-only";

export function getLocalStorage(key, defaultValue) {
    const stickyValue = localStorage.getItem(key);

    return (stickyValue === null || stickyValue === 'undefined')
        ? defaultValue
        : JSON.parse(stickyValue);
}

export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}