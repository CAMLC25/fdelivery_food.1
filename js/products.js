/* ========== Products Slider =========== */

/* ========== Fetch the Products =========== */

const getProducts = async () => {
    try {
      const results = await fetch("./data/products.json");
      const data = await results.json();
      const products = data.products;
      return products;
    } catch (err) {
      console.log(err);
    }
  };
  
  const ProductsWrapper = document.getElementById("products-wrapper");
  
  window.addEventListener("DOMContentLoaded", async function () {
    const products = await getProducts();
    displayProductItems(products);
  });
  
  /* ========== Display Products =========== */
  const displayProductItems = (items) => {
    let displayProduct = items.map(
      (product) => ` 
                  <div class="swiper-slide">
                  <div class="card d-flex">
                    <div class="image"><img src=${product.url} alt=""></div>
                    <div class="rating">
                    <span><i class="bx bxs-star"></i></span>
                    <span><i class="bx bxs-star"></i></span>
                    <span><i class="bx bxs-star"></i></span>
                    <span><i class="bx bxs-star"></i></span>
                    <span><i class="bx bxs-star"></i></span>
                    </div>
                    <h4>${product.title}</h4>
                    <div class="price">
                      <span>Giá:</span><span class="color">$${product.price}</span>
                    </div>
                    <a href="#recipes"><div class="button btn">Đặt món+</div></a>                   
                  </div>
                </div>
                    `
    );
  
    displayProduct = displayProduct.join("");
    if (ProductsWrapper) {
      ProductsWrapper.innerHTML = displayProduct;
    }
  };
  
  /* ========== Filter Products =========== */
  const filters = [...document.querySelectorAll(".filters span")];
  
  filters.forEach((filter) => {
    filters[0].classList.add("active");
    filter.addEventListener("click", async (e) => {
      const id = e.target.getAttribute("data-filter");
      const target = e.target;
      const products = await getProducts();
      filters.forEach((btn) => {
        btn.classList.remove("active");
      });
      target.classList.add("active");
  
      let menuCategory = products.filter((product) => {
        if (product.category === id) {
          return product;
        }
      });
  
      if (id === "All Product") {
        displayProductItems(products);
        swiper.update();
      } else {
        displayProductItems(menuCategory);
        swiper.update();
      }
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử của URL hiện tại
    const hash = window.location.hash;
  
    // Kiểm tra nếu có hash (ID)
    if (hash) {
      // Kiểm tra xem phần tử có tồn tại hay không
      const element = document.querySelector(hash);
  
      if (!element) {
        // Nếu không có phần tử với ID đó, cuộn lên đầu trang
        window.scrollTo(0, 0);
      }
    }
  });
  