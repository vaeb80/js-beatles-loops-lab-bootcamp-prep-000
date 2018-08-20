// add solution here
function theBeatlesPlay ( musicians, instruments){
  var temp = []
  for ( n = 0 ; n < musicians.length ; n++){
    temp.push(`${musicians[n]} plays ${instruments[n]}`)
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