let count = 0;
let sum = 0;
for (i=1;count<=30;i++){
    if (i%7===0){
        sum+=i;
    count++;
    }
}
    document.write("Tổng dãy số chia hết cho 7"+ sum);