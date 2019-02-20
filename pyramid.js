var m = 160;
function pyramid(m) {
  for(var i=1; i<= m; i++){
    var a = '&nbsp'.repeat(m-i);
    document.write("<br>");
    var b = '*'. repeat(i)
    document.write(a + b);
  }
}
pyramid(m);