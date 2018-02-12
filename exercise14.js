function groupAnimals (animals){

  var arr = [];// membuat array kosong untuk menampung value animals
  animals.sort(function(a, b) {return a[0] > b[0]});
  //sorting animals dengan index pada huruf pertama array ([0][0])
  var x = 0;
// membuat variable yang bernilai = 0
  for (var i = 0; i < animals.length; i++ ){
//melakukan looping
    if (arr === undefined || arr.length === 0){
//jika arr = undefined atau arr.length = 0
      arr.push([animals[i]]);
//tambahkan value array ke animals
  }else if (arr[x][0][0] === animals [i][0]){
//jika array [var x] index [0][0] sama dengan animals [i][0]
    arr[x].push(animals[i]);
//tambahkan value arr[x] dengan animal[i]
   }else{
     arr.push([animals[i]]);
     x++;
   }

  }
 return arr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
