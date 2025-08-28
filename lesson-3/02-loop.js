//1. Tính tổng từ 1 đến 100
let totalCount = 0
for (let i = 1; i <= 100; i++) {
    totalCount += i
}
console.log(totalCount)

//2. In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <=9; i++ ) {
    for (let j = 1; j <=9; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let arr = []
for (let i = 1; i <100; i+=2){
    arr.push(i)
}
console.log(arr)

//4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
//user1@example.com, user2@example.com, ..., user10@example.com).
let email = 'user1@example.com'
for (let i = 1; i <=10; i++) {
    email = `user${i}@example.com`
    console.log(email)
}

/* 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100} */
let doanhThu = [
    {month: 1, total: 100},
    {month: 2, total: 200},
    {month: 3, total: 300},
    {month: 4, total: 100},
    {month: 5, total: 100},
    {month: 6, total: 200},
    {month: 7, total: 100},
    {month: 8, total: 100},
    {month: 9, total: 300},
    {month: 10, total: 100},
    {month: 11, total: 150},
    {month: 12, total: 100},
]
let totalDoanhThu = 0
for (let i = 0; i < doanhThu.length; i++) {
    totalDoanhThu += doanhThu[i].total
}
console.log(totalDoanhThu)