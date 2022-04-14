let f1 =0;
let f2 = 1;
let x=0;
let fibonacci = ""+f1+f2;
for (let i= 1;i<=20;i++){
    x = f1+f2;
    fibonacci+=" " +x;
    f1=f2;
    f2=x;
}
document.write(fibonacci);