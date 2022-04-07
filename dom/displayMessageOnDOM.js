const displayMessageOnDOM = (message, elementToCreate, elementToBeAppended ) => {
    const elementToAppend = document.createElement(elementToCreate)
    elementToAppend.textContent = message
    if(elementToBeAppended) {
        document.getElementById(elementToBeAppended).append(elementToAppend)
    }
}

module.exports = { displayMessageOnDOM }