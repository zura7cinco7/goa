export const store = (key,value) =>{
    localStorage.setItem(key,JSON.stringify(value));
}

export const get = (key) => {
    return JSON.parse(localStorage.getItem(key))
}