/* ========== Navigation =========== */
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".nav-list .close");
const menu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  menu.classList.add("show");
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
});

/* ========== SignIn Form =========== */
const signInForm = document.querySelector("header .wrapper");

document.querySelector(".signin-1").onclick = (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt
  signInForm.classList.add("active");
};
document.querySelector(".signin-2").onclick = (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt
  signInForm.classList.add("active");
};

document.querySelector(".close-form").onclick = () => {
  signInForm.classList.remove("active");
};

// responsive phần món ăn
const swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".custom-pagination",
      clickable: true,
    },
    breakpoints: {
      567: {
        slidesPerView: 2,
      },
      996: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  
/* ========== SignUp Form =========== */
const signUpForm = document.querySelector("header .modal");
document.querySelector(".show-sign-up").onclick = (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt
  signUpForm.classList.add("active");
};

document.querySelector(".close-form-modal").onclick = () => {
  signUpForm.classList.remove("active");
};

document.querySelector(".show-sign-in").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt (chuyển trang)
  
  // Ẩn phần "Đăng ký"
  document.getElementById("sign-up").classList.remove("active");

  // Hiển thị phần "Đăng nhập"
  document.getElementById("sign-in").classList.add("active");
});

// Check sign-up
document.querySelector("#sign-up .form").addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn gửi form mặc định

  // Lấy giá trị của các trường nhập liệu
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();
  const modalOverlay = document.getElementById("signup-success-overlay");
  const errorMessage = document.getElementById("error-message");

  // Xóa nội dung các phần tử hiển thị thông báo lỗi trước khi kiểm tra lại
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";
  document.getElementById("confirm-password-error").textContent = "";

  // Khai báo biến để lưu trữ thông báo lỗi
  let errorMessageText = "";

  // Kiểm tra trường nhập lại mật khẩu không trùng khớp với mật khẩu
  if (confirmPassword !== password) {
    errorMessageText += "Mật khẩu nhập lại không trùng khớp.\n";
    document.getElementById("confirm-password-error").textContent = "Mật khẩu nhập lại không trùng khớp.";
  }

  // Nếu không có lỗi, hiển thị overlay khi đăng ký thành công và chuyển hướng đến trang đăng nhập
  if (errorMessageText === "") {
    modalOverlay.style.display = "flex"; // Hiển thị modal overlay

    // Thêm sự kiện click cho nút "Go to Login"
    // Lấy thẻ nút "Go to Login"
    const goToLoginBtn = document.getElementById("go-to-login-btn");

    // Thêm sự kiện click
    goToLoginBtn.addEventListener("click", function() {
      // Chuyển hướng đến trang đăng nhập
      // Đóng phần "Đăng ký"
      document.getElementById("sign-up").classList.remove("active");

      // Hiển thị phần "Đăng nhập"
      document.getElementById("sign-in").classList.add("active");
      // Đóng phần final
      modalOverlay.style.display = "none";
    });
  } else {
    // Nếu có lỗi, hiển thị thông báo lỗi
    errorMessage.textContent = errorMessageText;
    errorMessage.style.display = "block";
  }
});


// Hiện ẩn mật khẩu cho form đăng nhập
document.addEventListener("DOMContentLoaded", function() {
  const showPasswordCheckboxLogin = document.getElementById("show-password-login");
  const passwordFieldLogin = document.getElementById("password-login");

  showPasswordCheckboxLogin.addEventListener("change", function() {
    if (showPasswordCheckboxLogin.checked) {
      passwordFieldLogin.type = "text";
    } else {
      passwordFieldLogin.type = "password";
    }
  });

  // Hiện ẩn mật khẩu cho form đăng ký
  const showPasswordCheckboxSignUp = document.getElementById("show-password-signup");
  const passwordFieldSignUp = document.getElementById("password");
  const confirmPasswordFieldSignUp = document.getElementById("confirm-password");

  showPasswordCheckboxSignUp.addEventListener("change", function() {
    if (showPasswordCheckboxSignUp.checked) {
      passwordFieldSignUp.type = "text";
      confirmPasswordFieldSignUp.type = "text";
    } else {
      passwordFieldSignUp.type = "password";
      confirmPasswordFieldSignUp.type = "password";
    }
  });
});

// vòng lặp input tìm sản phẩm
const placeholders = [
  "Tìm kiếm mặt hàng của bạn.",
  "Nhập từ khóa tìm kiếm.",
  "Bạn muốn mua gì hôm nay?",
  "Mua tất cả!.",
  "Gì cũng có!."
];

let index = 0;
const input = document.getElementById('searchInput');

function changePlaceholder() {
  input.setAttribute('placeholder', placeholders[index]);
  index = (index + 1) % placeholders.length;
}

// Đặt interval để thay đổi placeholder sau mỗi 3 giây
setInterval(changePlaceholder, 2000);

// cuộn
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const triggerBottom = window.innerHeight / 5 * 4;
  
  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop < triggerBottom) {
          const delay = section.getAttribute('data-delay');
          section.classList.add('fadeInUp');
          section.style.animationDelay = delay;
          section.classList.add('visible');
      }
  });
});

// add cart
// Thêm sự kiện click cho nút giỏ hàng
document.querySelector(".cart-icon").addEventListener("click", function() {
  // Lấy phần giỏ hàng
  const addCartPanel = document.querySelector(".add-cart");
  // Hiển thị phần giỏ hàng
  addCartPanel.classList.add("active");
});

// Thêm sự kiện click cho nút đóng phần giỏ hàng
document.querySelector(".close-form-cart").addEventListener("click", function() {
  // Lấy phần giỏ hàng
  const addCartPanel = document.querySelector(".add-cart");
  // Ẩn phần giỏ hàng
  addCartPanel.classList.remove("active");
});
// Thêm sự kiện click cho nút thêm món, tính tiền phần giỏ hàng
document.querySelector(".cart-footer").addEventListener("click", function() {
  // Lấy phần giỏ hàng
  const addCartPanel = document.querySelector(".add-cart");
  // Ẩn phần giỏ hàng
  addCartPanel.classList.remove("active");
});


