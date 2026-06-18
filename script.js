
   document
            .getElementById("registerForm")
            .addEventListener("submit", function (e) {
                e.preventDefault();

                let name = document.getElementById("studentName").value;

                let lop = document.getElementById("className").value;

                let phone = document.getElementById("phone").value;

                let subject = document.getElementById("subject").value;

                alert(
                    "Đăng ký thành công!\n\n" +
                    "Học sinh: " +
                    name +
                    "\n" +
                    "Lớp: " +
                    lop +
                    "\n" +
                    "SĐT PH: " +
                    phone +
                    "\n" +
                    "Môn học: " +
                    subject,
                );
            });