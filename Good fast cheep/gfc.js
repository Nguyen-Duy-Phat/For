let isGood = document.getElementById("Good");
let isFast = document.getElementById('Fast');
let isCheap = document.getElementById('Cheap');
function Checked() {
    if (isFast.checked == true && isCheap.checked == true) {
        isFast.checked = false;
    }
}
function Checked2() {
    if (isGood.checked == true && isCheap.checked == true) {
        isCheap.checked = false;
    }
}
function Checked3() {
    if (isGood.checked == true && isFast.checked == true) {
        isGood.checked = false;
    }
}