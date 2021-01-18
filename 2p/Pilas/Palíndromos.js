function txt() {
  var wd = prompt("Escribe una palabra:").toLowerCase();
  wd = wd.replace(/ /g, "");

  for (var i = 0; i < wd.length; i++) {
    if (wd[i] != wd[wd.length - i - 1]) {
      return false;
    }
  }
  return true;
}
if (txt()) {
  alert("Es");
} else {
  alert("No es");
}
