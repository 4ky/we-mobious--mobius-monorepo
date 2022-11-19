/** ------------------------------------------------------------------------
 **                  import recommended rules applied tests
 *------------------------------------------------------------------------**/
import { default as add } from './____add'

add(1, 2)

/** ------------------------------------------------------------------------
 **                  eslint recommended rules applied tests
 *------------------------------------------------------------------------**/
const x = 0

// incorrect
if (x === -0) {
  // doSomething()...
}

if (x === 0) {
  // doSomething()...
}

// correct
if (Object.is(x, -0)) {
  // doSomething()...
}

/** ------------------------------------------------------------------------
 **                  n recommended rules applied tests
 *------------------------------------------------------------------------**/

// incorrect
const loadData = (err, data) => {
  // doSomething()
}
loadData()

// correct
const loadData2 = (err, data) => {
  if (err) {
    console.log(err.stack)
  }
  // doSomething()
}
loadData2()

const generateError = (err) => {
  if (err) {
    //
  }
}
generateError()

/** ------------------------------------------------------------------------
 **                  promise recommended rules applied tests
 *------------------------------------------------------------------------**/

const doSomething = () => {}
const myPromise = Promise.resolve()
// incorrect
myPromise.then(doSomething)
myPromise.then(doSomething, catchErrors) // catch() may be a little better
const doSomethingElse = () => {
  return myPromise.then(doSomething)
}

// correct
myPromise.then(doSomething).catch(() => {})
myPromise.then(doSomething).then(doSomethingElse).catch(() => {})

/** ------------------------------------------------------------------------
 **                  eslint-comments recommended rules applied tests
 *------------------------------------------------------------------------**/

// incorrect: uncomment the following line to see the error
// // eslint-disable-next-line no-unused-vars

// correct
// eslint-disable-next-line no-unused-vars -- just for test
const a = 1
