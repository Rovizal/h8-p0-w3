function palindrome (kata) {
    kata = kata.toLowerCase();

    for (var i = 0; i < kata.length; i++){
    kata.replace(' ','');

    var j = kata.split('').reverse().join('');

    if ( j == kata) {
      return true;
    }else{
      return false;
    }

    }
}

console.log (palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
