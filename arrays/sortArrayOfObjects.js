// sort by property of the object
const sortArrayOfObjects = (array, sortCriteria) => {
    if (sortCriteria) {
        array.sort((a, b) => {
            if (normalizeString(a[sortCriteria]) < normalizeString(b[sortCriteria])) { return -1; }
            if (normalizeString(a[sortCriteria]) > normalizeString(b[sortCriteria])) { return 1; }
            return 0;
        });
    }
    return array;
}

// where normalizeString is:
const normalizeString = (input = '') => {
    let str = String(input);
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    Object.keys(normalizeSwaps).forEach((swap) => {
        normalizeSwaps[swap].forEach((s) => {
            str = str.replace(new RegExp(s, 'g'), swap);
        });
    });
    return str;
}

module.exports = { sortArrayOfObjects }

