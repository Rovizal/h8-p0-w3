//Buatlah sebuah fungsi dengan nama balikString.
//Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
function balikString(kalimat) {
  var balik = '';

  for (var i= kalimat.length -1; i >= 0; i --){

    balik += kalimat[i];

  }

  return balik;

}

console.log(balikString('hello World'));
