export const save = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value))
}

export const load = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data)
}