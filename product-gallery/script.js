// Translated e-commerce product catalog
const productsData = [
    { id: 1, title: "Waterproof Smartwatch", desc: "Advanced AMOLED screen tracking heart rate and essential biometrics.", price: 580, badge: "NEW", badgeBg: "bg-primary text-white", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" },
    { id: 2, title: "Ultra-Lightweight Sneakers", desc: "Ergonomic flexible design optimized for long walks and daily runs.", price: 240, badge: "", badgeBg: "", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" },
    { id: 3, title: "Professional Studio Mic", desc: "High-definition desktop recording microphone, perfect for streaming.", price: 410, badge: "FREE SHIPPING", badgeBg: "bg-warning text-dark", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80" },
    { id: 4, title: "RGB Mechanical Keyboard", desc: "Ultra-responsive dynamic switches equipped with custom background profiles.", price: 290, badge: "BEST SELLER", badgeBg: "bg-purple text-white", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80" },
    { id: 5, title: "Wireless Gaming Mouse", desc: "Cutting-edge high precision optical sensor tracking up to 20K DPI.", price: 180, badge: "10% OFF", badgeBg: "bg-danger text-white", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80" },
    { id: 6, title: "Waterproof Laptop Backpack", desc: "Heavy duty fabrics featuring a built-in USB port and smart storage solutions.", price: 160, badge: "", badgeBg: "", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" }
];

// App State Management
let walletBalance = 1500; 
let cart = [];

// Initialize interface components
document.addEventListener("DOMContentLoaded", () => {
    updateWalletUI();
    renderProducts();
});

// Programmatically render items grid
function renderProducts() {
    const grid = document.getElementById("products-grid");
    grid.innerHTML = "";
    
    productsData.forEach(product => {
        const badgeHTML = product.badge ? `<span class="product-badge ${product.badgeBg}">${product.badge}</span>` : '';
        const cardHTML = `
            <div class="col-md-3 col-sm-6">
                <div class="card h-100 product-card border-0 shadow-sm position-relative overflow-hidden">
                    ${badgeHTML}
                    <img src="${product.img}" class="card-img-top p-2 rounded-4" alt="${product.title}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column p-4">
                        <h5 class="card-title fw-bold fs-6 mb-1 text-dark">${product.title}</h5>
                        <p class="text-secondary small mb-3">${product.desc}</p>
                        <div class="mt-auto">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="fw-bold text-primary fs-5">${product.price} SYP</span>
                            </div>
                            <button class="btn btn-outline-primary w-100 rounded-pill py-2 fw-semibold" onclick="addToCartSystem('${product.title.replace(/'/g, "\\'")}', ${product.price})">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML("beforeend", cardHTML);
    });
}

// Function to handle adding new products from Seller Panel
function handleSellerSubmit(event) {
    event.preventDefault(); // Prevent standard page reload
    
    // Extract input fields
    const title = document.getElementById("prod-title").value;
    const desc = document.getElementById("prod-desc").value;
    const price = parseInt(document.getElementById("prod-price").value);
    const badgeText = document.getElementById("prod-badge").value.trim();
    const imgUrl = document.getElementById("prod-img").value;

    // Build the new product structure
    const newProduct = {
        id: productsData.length + 1,
        title: title,
        desc: desc,
        price: price,
        badge: badgeText.toUpperCase(),
        badgeBg: badgeText ? "bg-dark text-white" : "", // Assign dark theme for custom badges
        img: imgUrl
    };

    // Add to static database array
    productsData.unshift(newProduct); // unshift adds it to the beginning of the list

    // Refresh UI Market Grid
    renderProducts();

    // Reset Form Fields
    document.getElementById("seller-product-form").reset();

    // Dismiss Bootstrap Modal Programmatically
    const modalElement = document.getElementById('sellerModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
        modalInstance.hide();
    }

    // Trigger Success Notification Banner
    showToast(`"${title}" has been added to the marketplace!`, "bg-success");
}

// Balance checking implementation
function addToCartSystem(title, price) {
    const currentCartTotal = calculateCartTotal();
    
    // Condition verification logic
    if ((currentCartTotal + price) > walletBalance) {
        showToast(`Insufficient balance! (Remaining in wallet: ${walletBalance - currentCartTotal} SYP)`, "bg-danger");
        return; 
    }

    const existingItem = cart.find(item => item.title === title);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ title: title, price: price, qty: 1 });
    }

    updateCartUI();
    showToast(`"${title}" added to cart successfully!`, "bg-success");
}

function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
}

function updateWalletUI() {
    document.getElementById("wallet-balance-display").innerText = walletBalance;
}

function updateCartUI() {
    const listContainer = document.getElementById("cart-items-list");
    const badge = document.getElementById("cart-badge");
    const totalDisplay = document.getElementById("cart-total-price");
    
    listContainer.innerHTML = "";
    
    if (cart.length === 0) {
        listContainer.innerHTML = `<p class="text-muted text-center py-5">Your cart is currently empty.</p>`;
        badge.classList.add("d-none");
        badge.innerText = "0";
        totalDisplay.innerText = "0 SYP"; // Corrected display unit stability from SAR to SYP
        return;
    }

    cart.forEach((item, index) => {
        const itemHTML = `
            <div class="d-flex justify-content-between align-items-center mb-3 p-2 bg-light rounded-3">
                <div>
                    <h6 class="fw-bold mb-0 text-dark small">${item.title}</h6>
                    <small class="text-muted">${item.price} SYP × ${item.qty}</small>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <span class="fw-bold text-primary small">${item.price * item.qty} SYP</span>
                    <button class="btn btn-sm text-danger" onclick="removeFromCart(${index})"><i class="bi bi-trash3"></i></button>
                </div>
            </div>
        `;
        listContainer.insertAdjacentHTML("beforeend", itemHTML);
    });

    const total = calculateCartTotal();
    totalDisplay.innerText = `${total} SYP`;
    
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.classList.remove("d-none");
    badge.innerText = totalQty;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function checkoutAlert() {
    if (cart.length === 0) {
        alert("Your shopping cart is empty!");
        return;
    }
    const total = calculateCartTotal();
    walletBalance -= total; 
    cart = []; 
    
    updateWalletUI();
    updateCartUI();
    
    const cartDrawerEl = document.getElementById('cartDrawer');
    const offcanvas = bootstrap.Offcanvas.getInstance(cartDrawerEl);
    if(offcanvas) offcanvas.hide();

    alert(`Thank you! Order successfully processed. ${total} SYP deducted from your wallet.`);
}

function showToast(message, bgClass) {
    const toastEl = document.getElementById('cartToast');
    const messageBody = document.getElementById('toast-message-body');
    
    toastEl.classList.remove("bg-success", "bg-danger");
    toastEl.classList.add(bgClass);
    
    const iconClass = bgClass === 'bg-success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill';
    messageBody.innerHTML = `<i class="bi ${iconClass} me-2"></i> ${message}`;
    
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}