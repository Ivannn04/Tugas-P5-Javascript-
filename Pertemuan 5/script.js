// array untuk menampilkan 5 data awal
let products = [
  { id: 1, name: "Laptop", price: 12000000 },
  { id: 2, name: "Smartphone", price: 5000000 },
  { id: 3, name: "Headset", price: 300000 },
  { id: 4, name: "Keyboard", price: 250000 },
  { id: 5, name: "Mouse", price: 150000 },
];

// function untuk menampilkan semua produknya
function displayProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(({ id, name, price }) => {
    const li = document.createElement("li");
    li.textContent = `${name} - Rp${price}`;
    
    const btn = document.createElement("button");
    btn.textContent = "Hapus";
    btn.addEventListener("click", () => deleteProduct(id));
    li.appendChild(btn);
    list.appendChild(li);
  });
}

// function untuk menambah produk
function addProduct(...newProduct) {
  products = [...products, ...newProduct];
  displayProducts();
}

// function untuk menghapus produk
function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  displayProducts();
}

// event listener untuk form submit
document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = parseInt(document.getElementById("price").value);

  const newProduct = {
    id: Date.now(),
    name,
    price,
  };

  addProduct(newProduct);

  // Reset form
  this.reset();
});

// memanggil function untuk menampilkan produk saat web dibuka
displayProducts();
