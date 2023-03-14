// Code your solutions in this file

function writeCards(array, event){
  let newArray = []
  let i = 0
  while (i < array.length) {
  	newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
	i++
  }
  return newArray
}
