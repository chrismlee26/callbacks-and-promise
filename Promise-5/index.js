function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    if (timeOfDay === 'breakfast') {
      resolve('Jian Bing')
    }
    if (timeOfDay === 'lunch') {
      resolve('Salad')
    }
    if (timeOfDay === 'dinner') {
      resolve('Steak')
    }
      reject('I\'m not hungry right now.')
  })
}


// Call your function and resolve the promise here! 
whatToEat('dinner').then((n) => {
  console.log(n)
})
.catch((err) => {
  console.log(err)
}) 


// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 

// If the `timeOfDay` is anything else reject the promise with 
// the 'message' I'm not hungry right now.  