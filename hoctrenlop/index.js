var http = require('http');
var uc = require('upper-case');
var Unils=require('./Utils');
var fs = require('fs');
const tinhThuong = (a,b) => {
  return(a/b);
};
const showinfo=(mess)=>{
   typeof mess=='string'?console.log(mess.toLowerCase()):console.log("không hợp lệ");
}
    http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(uc.upperCase("Hello World! \n"));
  res.write(uc.upperCase("Thuong cua 6/3: " + tinhThuong(6,3) +"\n"));
  res.write("thoi gian hien tai:"+Unils.myDateTime()+"\n");
  res.write("tong la:"+Unils.tinhtong(2,3) +"\n");
 console.log(tinhThuong(6,3));
 showinfo(true);
 showinfo("huydz")
 fs.writeFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile('mynewfile2.json', '{"Age: "  20}', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

dir = './files';
if(!fs.existsSync(dir)) {
  fs.mkdirSync(dir, {recursive: true});
}



fs.writeFile(dir + '/mynewfile2.json', '{"Age: "  20}', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

  res.end();
  
}).listen(8080);