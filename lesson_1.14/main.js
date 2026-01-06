/**
 * Hàm (function) trong JavaScript
 * 1. Hàm?
 *  - Một khối mã
 *  - Làm 1 việc cụ thể
 * 2. Loại hàm
 *  - Built-in
 *  - Tự định nghĩa
 * 3. Tính chất
 *  - Không thực thi khi định nghĩa
 *  - Sẽ thực thi khi được gọi
 *  - Có thể nhận tham số
 *  - Có thể trả về 1 giá trị
 * 4. Tạo hàm đầu tiên
 */

// tên hàm theo quy tắc
// có thể chứa a-z A-Z 0-9 _$
// bắt đầu không phải số
// camelCase
function showDialog() {
  alert('Hello các bạn!');
}

// call() gọi hàm 

showDialog();
