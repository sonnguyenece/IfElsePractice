function testNum() {
    let a = parseInt(prompt("Nhap vao so thu nhat :"));
    let b = parseInt(prompt("Nhap vao so thu hai :"));
    if (a % b == 0) alert(a + "chia het cho " + b);
}

function testAge() {
    let age = parseInt(prompt("Nhap vao so tuoi :"));
    if (age >= 15) alert("Du dieu kien hoc lop 10");
    else alert("Khong du dieu kien hoc lop 10");
}

function compare() {
    let N = parseInt(prompt("Nhap vao 1 so nguyen :"));
    if (N > 0) alert(N + " la so lon hon 0");
    if (N < 0) alert(N + " la so nho hon 0");
}

function max3() {
    let a = parseFloat(prompt("Nhap vao so thu nhat :"));
    let b = parseFloat(prompt("Nhap vao so thu hai :"));
    let c = parseFloat(prompt("Nhap vao so thu ba :"));
    if (a >= b && a >= c) alert("so lon nhat la : " + a);
    else if (b >= c && b >= a) alert("so lon nhat la : " + b);
    else alert("so lon nhat la : " + c);
}

function avgPoint() {
    let a = parseFloat(prompt("diem bai kiem tra :"));
    let b = parseFloat(prompt("diem giua ky :"));
    let c = parseFloat(prompt("diem cuoi ky :"));
    let avg = (a + b + c) / 3;
    if (avg >= 8) alert("Xep loai gioi");
    else if (avg >= 6.5) alert("Xep loai kha");
    else if (avg >= 5) alert("Xep loai trung binh");
    else alert("Xep loai yeu");
}

function rose() {
    let a = parseInt(prompt("nhap so hang ban duoc:"));
    if (a >= 100) alert("Thuong 100 cu");
    else if (a >= 80) alert(("Thuong 80 cu"))
    else alert("Khong duoc thuong");
}

function cuocPhi() {

}