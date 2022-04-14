// let a = prompt("Nhập vào nhiệt độ hiện tại :");
// a = parseFloat(a);
// while (a>100){
//     document.write("Hãy giảm nhiệt độ lên");
// }
let nhietdo = prompt("nhập vào nhiệt độ");
nhietdo = parseFloat(nhietdo);
while (nhietdo<20 || nhietdo>100){
    if (nhietdo<20){
        alert("Tăng nhiệt độ lên");
        nhietdo = prompt("nhập vào nhiệt độ");
    }else if (nhietdo>100){
        alert("Giảm nhiệt độ đi");
        nhietdo = prompt("nhập vào nhiệt độ");
    }
}
