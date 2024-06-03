//  js input vòng lặp 
const placeholdersAbout = [
    "Tìm kiếm mặt hàng của bạn.",
    "Nhập từ khóa tìm kiếm.",
    "Bạn muốn mua gì hôm nay?",
    "Mua tất cả!.",
    "Gì cũng có!."
  ];

  let about = 0;
  const inputAbout = document.getElementById('searchInputAbout');

  function changePlaceholderAbout() {
    inputAbout.setAttribute('placeholder', placeholdersAbout[about]);
    about = (about + 1) % placeholdersAbout.length;
  }

  // Đặt interval để thay đổi placeholder sau mỗi 3 giây
  setInterval(changePlaceholderAbout, 2000);

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