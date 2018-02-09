////CASE BUILT-IN

//contoh output
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
// Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

// Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah.
// Lalu console.log array yang baru seperti di bawah.

// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung",
// "21/05/1989", "Pria", "SMA Internasional Metro"]
// Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4),
// ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.

// Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
// Format tanggal pada data adalah dd-mm-YYYY
// Misal angka bulan 01, tuliskan "Januari"
// Gunakan switch case untuk menuliskan bulan di atas.
// Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array
//yang sudah di-sort.

// Masih pada array hasil split dari elemen tanggal/bulan/tahun,
//gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

// Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja.
//Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.




var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2 (){
  var i = input;

  i.splice(1,1,'Roman Alamsyah Elsharawy');
  i.splice(2,1,'Provinsi Bandar Lampung');
  i.splice(4,0,'Pria');
  i.splice(5,1,'SMA Internasional Metro');
  console.log(input);

  var j = input[3].split('/');
  var month = j[1];

  switch (month) {
  case '05' : console.log ('Mei');
  }

  j.sort (function (a,b) {return b - a ;});
  console.log (j);

  var s = j;
  var z = s.join('-');
  console.log(z);

  var sliced = input[1].slice(0,14);
  console.log(sliced);

}

dataHandling2();
