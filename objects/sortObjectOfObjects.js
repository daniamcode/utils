const sortObjectOfObjects = (data, attribute) => {
    const array = []
    for (const prop in data) {
      if (data.hasOwnProperty(prop)) {
        const object = {}
        object[prop] = data[prop]
        object.tempSortName = data[prop][attribute]
        array.push(object)
      }
    }

    array.sort(function (a, b) {
      const at = a.tempSortName
      const bt = b.tempSortName
      return at > bt ? -1 : (at < bt ? 1 : 0)
    })

    const result = []
    for (let i = 0, l = array.length; i < l; i++) {
      const object = array[i]
      delete object.tempSortName
      for (const prop in object) {
        if (object.hasOwnProperty(prop)) {
          var id = prop
        }
      }
      const item = object[id]
      result.push(item)
    }
    return result
}

module.exports = { sortObjectOfObjects }