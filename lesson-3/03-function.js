//1 . Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multify (a,b) {
    console.log(a*b)
}
multify(4,5)
multify(3,4)

//2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
function findMin (a,b,c) {
    if (a < b && a < c) {
        console.log(`gia tri nho nhat la ${a}`)}
    if (b < c && b < a) {
        console.log(`gia tri nho nhat la ${b}`)}
    if (c < b && c < a) {
        console.log(`gia tri nho nhat la ${c}`)
    }
}
findMin (3,4,5)
findMin (5,2,4)

//3. 
let students = [
    {name: 'Huong', score: 9},
    {name: 'Huong1', score: 8},
    {name: 'Huong2', score: 7},
    {name: 'Huong3', score: 10},
    {name: 'Huong4', score: 8}
]

function getTopStudents (students,threshold) {
    let newStudent = []
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            newStudent.push(students[i].name)
        }}
    console.log(newStudent)
    
}
getTopStudents(students,9)

//4 
function calculateInterest (principal, rate, years) {
    total = principal + (principal * rate * years /100)
    console.log(total)
}
calculateInterest(100, 5, 2)