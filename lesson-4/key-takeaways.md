Var: phạm vi dùng -> toàn global
let: khai báo trong vòng for -> chỉ dùng được trong for

var: biến khai báo sau, vẫn dùng được
let: biến phải khai báo trước, khai báo sau ko dùng được

if () {} else {}

if () {} else if () {} else {}

// tháng có bao nhiêu ngày
let month = 11;
switch (month) {
    case 11:
        console.log('có 30 ngày')
        break
    case 12:
        console.log('có 31 ngày')
        break
    default:
        console.log('Tháng không hợp lệ')
}



let result = '5' == 5 //true so sánh giá trị
let result1 = '5' === 5 //false so sánh giá trị và kiểu dữ liệu


break: thoát vòng lặp

//  break -> thoát khỏi vòng lặp
for (let i = 0; i < 10; i++) {
    if (i ===5) {
        break
    }
    console.log(i)
}


//continue -> bỏ qua vòng lặp hiện tại, chạy đến vòng lặp tiếp theo
for (let i = 0; i < 10; i++) {
    if (i ===5) {
        continue
    }
    console.log(i)
}


let numbers = [1, 2, 3, 4, 5, 6]
for (let number of numbers) {
    if (number % 2 === 0) {
        continue;
    }
    console.log(number)
}


loop advance
let students = {
    name: 'Huong',
    age: 34,
    city: 'HN'
}
for (let property in students) {
    console.log(property) // name age city
    console.log(students[property]) // Huong 34 HN
}


let numbers = [4, 5, 76]
for (let index in numbers) {
    console.log(index) // 0 1 2
    console.log(numbers[index]) // 4 5 76
}


numbers.forEach((val, index) => {
    console.log(`${index} : ${val}`)
}) // 0:4 1:5 2: 76


let name = ['Loi', 'Uyen', 'Nga', 'Yen']



util function: tiện ích, các hàm tiện ích có sẵn, giúp xử lý code nhanh hơn


// trim() loại bỏ các khoảng trắng ở đầu và cuối
let str = '   học js  '
console.log(str.trim())


//toLowerCase() toUpperCase()
console.log(str.trim().toUpperCase())


//includes() kiểm tra chuỗi con có nằm trong chuỗi chính hay không, trả về true false
let str1 = 'học Javascript'
console.log(str1.includes('Java'))


//replace() thay thế 1 chuỗi con bằng 1 chuỗi khác
let text = str1.replace('Javascript', 'JS')
console.log(text)


//spit() chia 1 chuỗi thành các chuỗi con dựa vào 1 kí tự
let name = 'Loi, Tung Anh, Duong'
let result = name.split(', ')
console.log(result)


//substring() cắt chuỗi theo index truyền vào
let str2 = 'hoc Javascript rat vui'
let result2 = str2.substring(4, 14)
console.log(result2)


//indexOf() trả về vị trí đầu tiên xuất hiện của chuỗi con trong chuỗi chính
let str3 = 'hoc Javascript rat vui'
let result3 = str3.indexOf('vui')
console.log(result3)


//map() hàm tạo ra mảng mới bằng cách áo dụng 1 hàm lên từng phần tử trong mảng gốc


let numbers = [1,2,3,4,5]
let doubleNumbers =  numbers.map((val) => val * 2)
console.log(doubleNumbers)


//filter() taọ ra 1 mảng chứa các phần tử thỏa mãn điều kiện
let result = numbers.filter((val) => val % 2 === 0)
console.log(result)


//find() dùng để trả phần tử đầu tiên trong mảng thỏa mãn đk
let result1 = numbers.find((val) => val % 2 === 0)
console.log(result1)


//some() kiểm tra ít nhất có 1 phần tử thỏa điều kiện trả về true hoặc false
let result2 = numbers.some((val) => val % 2 === 0)
console.log(result2)


//every()kiểm tra tất cả phần tử thỏa mãn đk
let result3 = numbers.every((val) => val % 2 === 0)
console.log(result3)


//push() thêm 1 hoặc nhiều phần tử vào cuối mảng
numbers.push(6, 7)
console.log(numbers)


//shift() xóa phần tử đầu tiên của mảng và trả về phần tử đó
let result4 = numbers.shift()
console.log(result4)
console.log(numbers)


//reduce() áp dụng lên mỗi phần tử của mảng và trả về 1 giá trị duy nhất
let numbers1 = [1,2,3,4,5]
let total = numbers1.reduce((total, num) => total + num, 0)
console.log(total)


//sort() sắp xếp theo thử tự tăng dần của mảng hoặc theo hàm so sanh được cung cấp.
// hàm này làm thay đổi hàm gốc
let number2 = [2, 4, 1, 0, 8]
console.log(number2.sort())


//sắp xếp theo thứ tự của bảng mã ACSII -> mỗi phần tử được ép về chuỗi trước khi so sánh
console.log(number2.sort((a,b) => b - a))

pop()
Xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc
let arr = [1, 2, 3];
let last = arr.pop(); // arr = [1, 2], last = 3
console.log(arr); // [1, 2]
console.log(last); // 3

unshift()
Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi
mảng gốc.
let arr = [1, 2, 3];
arr.unshift(0); // arr = [0, 1, 2, 3]
console.log(arr); // [0, 1, 2, 3]]

trim()
Loại bỏ khoảng trắng ở đầu và cuối chuỗi, không thay đổi chuỗi gốc mà trả về chuỗi
mới..
- const str = " Hello World ";
- Để xoá khoảng trắng ở đầu sử dụng trimStart()
- Để xoá khoảng trắng ở cuối sử dụng trimEnd()


for of
Bản chất một chuỗi cũng là một mảng. Ví dụ chuỗi "Playwright" bản chất là một mảng
gồm các kí tự ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]
Để lặp trong mảng này, bạn sử dụng string.length để lấy độ dài của chuỗi và lấy ra từng
phần tử một theo index
Ví dụ:
const str = "K9 2024";
for (let i = 0; i < str.length; i++){
console.log(str[i]);
}
// Kết quả in ra
K
9
2
0
2
4
