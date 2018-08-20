// add solution here
function theBeatlesPlay ( musicians, instruments){
  var temp =[]
  for (i = 0; i < musicians.length ; i++){
  temp.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return temp
}
function johnLennonFacts (facts){
  return
}
function iLoveTheBeatles(n){
  var temp = []
  do{
    temp.push("I love the Beatles!")
    n++
  } while (n < 15)
  return temp
}