let m=prompt("my num1");
let n=prompt("my num2");
if(m>=n){
    console.log('0');
}
else{
    let sum=0;
    for(i=0;i<=n;i++){
        sum+=i*i*i;
    }
    console.log(sum);
}