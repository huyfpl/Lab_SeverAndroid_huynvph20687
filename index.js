var http = require('http');
var uc = require('upper-case');
var Unils=require('./Utils');
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
  res.end();
  
}).listen(8080);