let snt = prompt("Nhập vào số :");
let count = 0;
let N = 2;
while (count < snt){
        if (N<2){
            alert(N + " không phải là số nguyên tố");
        }
        let i = 2;
        while (i<N){
            if (N%i===0){
                alert(N+"không phải số nguyên tố");
            }
            i = i+1;
        }
        alert(N + "là số nguyên tố");
}