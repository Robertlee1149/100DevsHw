//Grasshoper terminal game move function
function move (position, roll) {
  return (roll*2) + position
}

//Sum of odd numbers
function rowSumOddNumbers(n) {
	return n**3 //consecutive odd numbers to the nth row is always n**3
}

//You only need one - beginner
function check(a, x) {
  if(a.includes(x)){
    return true
  }else{
    return false
  }
}

//get the middle character
function getMiddle(s) {
    const middleIndex = Math.floor(s.length / 2)
    if (s.length % 2 === 1) {
        return s[middleIndex]
    } else {
        return s[middleIndex - 1] + s[middleIndex]
    }

}

//string repeat
function repeatStr (n, s) {
  return s.repeat(n)
}
