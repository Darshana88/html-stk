

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add event listener to the "Add to Cart" button
  function addToCart(productName) {
      var quantity = document.getElementById(productName).value;
      alert(quantity + " item(s) added to cart!");
    }
document.getElementById("add-to-cart-btn").addEventListener("click", function() {
  var quantity = document.getElementById("quantity-input").value;
  alert(quantity + " item(s) added to cart!");
});

// Add event listeners to the increment and decrement buttons in the main section
document.getElementById("increment-btn").addEventListener("click", function() {
  var quantityInput = document.getElementById("quantity-input");
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById("decrement-btn").addEventListener("click", function() {
  var quantityInput = document.getElementById("quantity-input");
  var currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
});

// Check if the main CTA section is visible in the viewport on page load
var stickyCTASection = document.querySelector(".sticky-cta-section");
var mainCTASection = document.querySelector(".product-details");
if (!isInViewport(mainCTASection)) {
  stickyCTASection.style.display = "block";
}

// Check if the main CTA section is visible in the viewport on scroll
window.addEventListener("scroll", function() {
  if (!isInViewport(mainCTASection)) {
    stickyCTASection.style.display = "block";
  } else {
    stickyCTASection.style.display = "none";
  }
});

// Add event listener to the sticky "Add to Cart" button
document.getElementById("sticky-add-to-cart-btn").addEventListener("click", function() {
  var quantity = document.getElementById("sticky-quantity-input").value;
  alert(quantity + " item(s) added to cart!");
});

// Add event listeners to the increment and decrement buttons in the sticky section
document.getElementById("sticky-increment-btn").addEventListener("click", function() {
  var quantityInput = document.getElementById("sticky-quantity-input");
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById("sticky-decrement-btn").addEventListener("click", function() {
  var quantityInput = document.getElementById("sticky-quantity-input");
  var currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
});

document.getElementById("add-to-cart-btn").addEventListener("click", function() {
  alert("Item added to cart!");
});

document.getElementById("add-crt-btn").addEventListener("click", function() {
  alert("Item added to cart!");
});
