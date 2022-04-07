# utils.js

A NPM library of all sorts of utils: https://www.npmjs.com/package/@daniamcode/utils

## Installation and Usage

Install the library with `npm install @daniamcode/utils`

#### ES6

```javascript
import { arrays } from '@daniamcode/utils'
import { dom } from '@daniamcode/utils'
import { objects } from '@daniamcode/utils'
import { strings } from '@daniamcode/utils'
```

## Utils

Here is a list of the utils currently available.

Util                                    | Location                               | Description
--------------------------------------- | -------------------------------------- | --------------------------------------
**sortArray(array)** | arrays.sortArray | sorts alphabetically.
**sortArrayOfObjects(array, sortCriteria)** | arrays.sortArrayOfObjects | sorts by a property of the objects.
**displayMessageOnDOM(message, elementToCreate, elementToBeAppended)** | dom.displayMessageOnDOM | displays a message on the DOM.
**sortObjectOfObjects(data, attribute)** | objects.sortObjectOfObjects | sorts by a property of the objects.
**isLowercase(string)** | strings.isLowercase | checks if string is in lowercase.
**capitalizeFirstLetter(string)** | strings.capitalizeFirstLetter | capitalizes the first letter of a string.