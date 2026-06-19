
document
  .getElementById("registerForm")
  .addEventListener("submit", async function (e) {

    e.preventDefault();

    const data = {
      studentName: document.getElementById("studentName").value,
      className: document.getElementById("className").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      note: document.getElementById("note").value
    };

    try {

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxaYv-NxboV-sTY3xSJJ-phkQ9q0H3FsFE_75VjsMto7rWghhig_q2Ujja8tTLlN-v3ew/exec",
        {
          method: "POST",
          body: JSON.stringify(data)
        }
      );

      alert("Đăng ký thành công!");

      document.getElementById("registerForm").reset();

    } catch (error) {

      alert("Có lỗi xảy ra khi gửi dữ liệu!");

      console.error(error);
    }

  });