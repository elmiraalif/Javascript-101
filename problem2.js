var x=1;
var y=1;
var sum=0;
var a=0;
while(a<4000000){
    a=x+y;
    x=y;
    y=a;
    if(x%2===0){
        sum+=x;
    }
}
console.log(sum);