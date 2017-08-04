/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  console.log (hand);
  let value = 0
  for (var i = 0; i < hand.length; i++) {
    console.log("Looking at: ", hand[i]);
    if (hand[i]=="J" || hand[i] =="Q" || hand[i] =="K" ) {//if number, add the valu
      value += 10;
    } else if (hand[i]=="A") {
        if (value >=10){
          value += 11;
        }else if (value<=10){
          value += 1;
        }
    } else {
      value += parseInt(hand[i])
    }
  }
  console.log(value);
  return value;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
