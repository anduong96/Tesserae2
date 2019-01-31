export const generateID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});

export const deepCopy = (target) => JSON.parse(JSON.stringify(target))

export const wordToTitle = (word) => word.charAt(0).toUppercase() + word.substr(1).toLowerCase()

export const toTitle = (str) => str.split(' ').map(wordToTitle).join(' ')

export const toConstant = (str) => str
    .replace(/[#].*$/gm, '')
    .trim()
    .split(/\s+/)
    .reduce((sum, itm) => {
        sum[itm] = itm;
        return sum;
}, {});
