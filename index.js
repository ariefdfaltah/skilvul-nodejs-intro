// Memanggil Built-in Module HTTP dan memasukkan variable http
const http = require('http')

const url = require('url')

// Mendeklasikan port yang akan digunakan, dimana kita menggunakan port 3000
const port = 3000

// Memanggil function createServer untuk membuat Web Server
http.createServer((req, res) => {
    // Menentukan HTTP header dari respon
    res.writeHead(200, {'Content-Type': 'text/html'})

    const query = url.parse(req.url, true).query;
    console.log(query.user)
    console.log(query.home)

    // Memberikan respon yang akan muncul ketika web server berjalan
    res.write(`Hello Nakama Skilvul! <br>
    Kamu Saat Ini Mengakses <b>${req.url} </b><br> 
    Dengan Query Param User Yaitu <b>${query.user}</b><br>
    dan Query Param Home Yaitu <b>${query.home}</b>`)

    res.end()
})
// Melakukan perintah agar web server berjalan pada port yang sudah di deklarasikan
.listen(port)