

 function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(x) {
  console.log("Found Waldo at index"+ x +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

console.log("--------------------------------------------")



 function findWaldo(arr, found) {

  arr.forEach(function (input){
    if(input === "Waldo"){
    found (input)}
    })

}

function actionWhenFound(x) {
  console.log("Found Waldo at index"+ x +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
