// case insensitive
const sortArray = (array) => array.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
})

module.exports = { sortArray }