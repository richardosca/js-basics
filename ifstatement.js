var d = new Date()
var time = d.getHours()
if(time<10)
{
console.log("<b>Good morning</b>");
}
else if (time>10 && time<16)
{
console.log("<b>Good day</b>");
}
else{
    console.log("<b>good evening</b>");
    }