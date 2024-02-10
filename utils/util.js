
  // product data 
  const aoData = [
    { id: 1, name: 'Áo 1', 
    url: '../assets/images/allbody/bikini_branew.png' },
    { id: 2, name: 'Áo 2', url: '../assets/images/allbody/bikini_pantsnew.png' },
    
  ];

  // Function to display products in a specific tab
  function displayProducts(tabId, productListId, products) {
    const productList = document.getElementById(productListId);
    productListId.innerHTML = ""; // Clear existing products

    products.forEach(product => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${product.url}" alt="${product.name}" class="product-image" data-product-id="${product.id}">
        <p>${product.name}</p>
      `;
      productList.appendChild(listItem);
    });
  }

  // Function to handle click event on product
  function handleProductClick(event) {
    const productId = event.target.getAttribute('data-product-id');
    // Add logic to apply the selected product (e.g., change model background)
    console.log(`Selected product with ID ${productId}`);
  }

  // Event listener for product click
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('product-image')) {
      handleProductClick(event);
    }
  });

  // Initial display of products for the 'Áo' tab
  displayProducts('ao', 'aoList', aoData);

//   CART
function addToCart(productName, productPrice) {
    console.log(productName + ', ' + productPrice);
    // Get the table body where cart items will be added
    var cartTableBody = document.querySelector('.shopping-cart');
    console.log(cartTableBody)

    // Create a new row for the cart item
    var newRow = cartTableBody.insertRow();
    console.log(newRow)
    
    // Create cells for product name and price
    var productNameCell = newRow.insertCell(0);
    var productPriceCell = newRow.insertCell(1);
    
    // Set the content of the cells
    productNameCell.textContent = productName;
    productPriceCell.textContent = '$' + productPrice.toFixed(2);
}
