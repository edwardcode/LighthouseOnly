var words = ["ground", "control", "to", "major", "tom"];




function map(inputArr,inputCallBack){

  var storeArr=[];
  for(let i of inputArr){
    storeArr.push(inputCallBack(i))


  }
return console.log(storeArr);

};



map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});