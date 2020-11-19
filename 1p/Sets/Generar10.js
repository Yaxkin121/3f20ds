var BaseNames = "Name"
var i = 0;
while(i < 10) {
    var num = (Math.floor(Math.random() * (100 - 1) + 1)).toString();
    var Name = BaseNames + num;
    console.log(Name);
    i++;
}