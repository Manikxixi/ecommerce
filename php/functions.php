<?php 
header('Access-Control-Allow-Origin: http://localhost:3000');
// koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "toko_online");

$main_url = 'http://localhost/toko_online/';

function query($query) {
    global $koneksi;
    $result = mysqli_query($koneksi, $query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
 
   return $rows;

   

}