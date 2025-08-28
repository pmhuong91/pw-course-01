Thay đổi comment: git commit –amend -m”message”
Sau khi add, muốn đưa lại file từ staging về vùng working directory: git restore –staged tên file. Nếu muốn đưa hết các file về thì dùng git restore –staged .
đưa từ repo về working directory: git reset HEAD~1

Tạo branch và chuyển sang branch đó luôn: git checkout -b feat/add-test-01
muốn về lại main: git checkout main
muốn sang branch: git checkout tên branch
kiểm tra đang có những branch nào: lệnh git branch
File nào ko muốn git quản lý: chưa được add lên staging thì mới ignore được. tạo file với tên .gitignore trong file ghi tên các folder, file ko muốn được quản lý ví du: 
cho 1 file: file4.txt 
cho cả 1 folder:  Lesson01/
cho 1 file cụ thể Lesson01/git-course-01

convention: quy tắc, quy ước
snake_case: chưa dùng
kebab-case: dùng đặt tên file
camelCase: dùng đặt tên biến
PascalCase: dùng đặt tên class

delete student.isStudent
Logical operator
&& cả 2 vế của mệnh đề đều đúng
||: 1 trong 2 vế đúng
!: đảo ngược lại giá trị của mệnh đề

Array:
độ dài mảng: length
lấy phần tử theo index: [0], [1], [2]
mảng có thế chứa nhiều datatype đồng thời, ví dụ
const listname = ['Loi', 'Tuyet', 'Nga', 'Linh', 1, false, {'name': 'Huong'}]
Function:
là hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể
Parameter
Return value
