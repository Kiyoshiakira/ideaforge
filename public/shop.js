// shop.js - Product data and shopping cart functionality
/* global showToast */

// Sample product data
const products = [
    {
        id: 1,
        name: 'Creative Toolkit Bundle',
        price: 49.99,
        image: 'https://placehold.co/600x600/6e33b7/ffffff?text=Creative+Toolkit',
        description: 'A comprehensive bundle of digital creative tools including brushes, templates, and design assets. Perfect for digital artists and designers looking to expand their creative arsenal.',
        shortDescription: 'Complete digital creative tools bundle',
        stock: 50,
        options: {
            format: ['Digital Download', 'USB Drive'],
            license: ['Personal', 'Commercial']
        }
    },
    {
        id: 2,
        name: 'IdeaForge T-Shirt',
        price: 24.99,
        image: 'https://placehold.co/600x600/421e7c/ffd86b?text=IdeaForge+Tee',
        description: 'Premium quality cotton t-shirt featuring the IdeaForge logo. Available in multiple sizes and colors. Show your support for creative collaboration wherever you go.',
        shortDescription: 'Premium IdeaForge branded t-shirt',
        stock: 25,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Purple', 'Black', 'White', 'Gold']
        }
    },
    {
        id: 3,
        name: 'Artist Sketchbook',
        price: 19.99,
        image: 'https://placehold.co/600x600/ffd86b/421e7c?text=Sketchbook',
        description: 'High-quality spiral-bound sketchbook with 200 pages of thick, acid-free paper. Ideal for sketching, drawing, and brainstorming your next creative project.',
        shortDescription: '200-page premium sketchbook',
        stock: 15,
        options: {
            size: ['A5', 'A4', 'A3'],
            paper: ['Smooth', 'Textured']
        }
    },
    {
        id: 4,
        name: 'Music Production Guide',
        price: 29.99,
        image: 'https://placehold.co/600x600/6e33b7/ffd86b?text=Music+Guide',
        description: 'Comprehensive digital guide to music production covering DAWs, mixing, mastering, and sound design. Includes video tutorials and project files.',
        shortDescription: 'Complete music production course',
        stock: 0,
        options: {
            format: ['PDF + Videos', 'Online Access']
        }
    },
    {
        id: 5,
        name: 'Collaboration Sticker Pack',
        price: 9.99,
        image: 'https://placehold.co/600x600/421e7c/ffffff?text=Stickers',
        description: 'Set of 20 high-quality vinyl stickers featuring creative collaboration themes. Waterproof and weather-resistant for laptops, notebooks, and more.',
        shortDescription: '20 premium vinyl stickers',
        stock: 100,
        options: {
            pack: ['Standard', 'Holographic']
        }
    },
    {
        id: 6,
        name: 'Writer\'s Inspiration Deck',
        price: 14.99,
        image: 'https://placehold.co/600x600/ffd86b/2d1b4e?text=Card+Deck',
        description: 'A deck of 50 beautifully designed cards with writing prompts, character ideas, and plot twists to spark your creativity and overcome writer\'s block.',
        shortDescription: '50 creative writing prompt cards',
        stock: 5,
        options: {}
    }
];

// Shopping cart
let cart = [];

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartSummary();
    setupModalHandlers();
    loadToastFunction();
});

// Load products into grid
function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    
    productGrid.innerHTML = products.map(product => {
        const stockStatus = getStockStatus(product.stock);
        return `
            <div class="product-card" role="listitem" tabindex="0" 
                 onclick="openProductModal(${product.id})"
                 onkeydown="if(event.key==='Enter') openProductModal(${product.id})"
                 aria-label="${product.name} - ${product.shortDescription}">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <span class="product-stock-badge ${stockStatus.class}">${stockStatus.text}</span>
                    <p class="product-description-short">${product.shortDescription}</p>
                    <button class="quick-add-btn" 
                            onclick="event.stopPropagation(); openProductModal(${product.id})"
                            ${product.stock === 0 ? 'disabled' : ''}
                            aria-label="View details for ${product.name}">
                        ${product.stock === 0 ? 'Out of Stock' : 'View Details'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Get stock status
function getStockStatus(stock) {
    if (stock === 0) {
        return { class: 'out-of-stock', text: 'Out of Stock' };
    } else if (stock < 10) {
        return { class: 'low-stock', text: `Only ${stock} left!` };
    } else {
        return { class: 'in-stock', text: 'In Stock' };
    }
}

// Open product detail modal (called from HTML onclick)
// eslint-disable-next-line no-unused-vars
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const stockStatus = getStockStatus(product.stock);
    
    // Set product details
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-image').alt = product.name;
    document.getElementById('product-modal-title').textContent = product.name;
    document.getElementById('modal-product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modal-product-stock').textContent = stockStatus.text;
    document.getElementById('modal-product-stock').className = `product-stock ${stockStatus.class}`;
    document.getElementById('modal-product-description').textContent = product.description;
    
    // Set product options
    const optionsContainer = document.getElementById('product-options');
    optionsContainer.innerHTML = '';
    
    if (product.options && Object.keys(product.options).length > 0) {
        for (const [optionName, optionValues] of Object.entries(product.options)) {
            const optionGroup = document.createElement('div');
            optionGroup.className = 'option-group';
            
            const label = document.createElement('label');
            label.textContent = optionName.charAt(0).toUpperCase() + optionName.slice(1) + ':';
            label.setAttribute('for', `option-${optionName}`);
            
            const select = document.createElement('select');
            select.id = `option-${optionName}`;
            select.setAttribute('data-option-name', optionName);
            select.setAttribute('aria-label', `Select ${optionName}`);
            
            optionValues.forEach(value => {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = value;
                select.appendChild(option);
            });
            
            optionGroup.appendChild(label);
            optionGroup.appendChild(select);
            optionsContainer.appendChild(optionGroup);
        }
    }
    
    // Reset quantity
    document.getElementById('quantity-input').value = 1;
    
    // Set max quantity based on stock
    document.getElementById('quantity-input').max = Math.max(1, Math.min(10, product.stock));
    
    // Enable/disable add to cart button
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (product.stock === 0) {
        addToCartBtn.disabled = true;
        addToCartBtn.textContent = 'Out of Stock';
    } else {
        addToCartBtn.disabled = false;
        addToCartBtn.textContent = 'Add to Cart';
    }
    
    // Store current product ID
    modal.setAttribute('data-product-id', productId);
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Focus on close button for accessibility
    setTimeout(() => {
        const closeBtn = modal.querySelector('.modal-close-btn');
        if (closeBtn) closeBtn.focus();
    }, 100);
}

// Close product modal (called from HTML onclick)
// eslint-disable-next-line no-unused-vars
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Increase quantity (called from HTML onclick)
// eslint-disable-next-line no-unused-vars
function increaseQuantity() {
    const input = document.getElementById('quantity-input');
    const max = parseInt(input.max);
    const current = parseInt(input.value);
    if (current < max) {
        input.value = current + 1;
    }
}

// Decrease quantity (called from HTML onclick)
// eslint-disable-next-line no-unused-vars
function decreaseQuantity() {
    const input = document.getElementById('quantity-input');
    const min = parseInt(input.min);
    const current = parseInt(input.value);
    if (current > min) {
        input.value = current - 1;
    }
}

// Add to cart (called from HTML onclick)
// eslint-disable-next-line no-unused-vars
function addToCart() {
    const modal = document.getElementById('product-modal');
    const productId = parseInt(modal.getAttribute('data-product-id'));
    const product = products.find(p => p.id === productId);
    
    if (!product || product.stock === 0) return;
    
    const quantity = parseInt(document.getElementById('quantity-input').value);
    
    // Get selected options
    const selectedOptions = {};
    const optionSelects = document.querySelectorAll('#product-options select');
    optionSelects.forEach(select => {
        const optionName = select.getAttribute('data-option-name');
        selectedOptions[optionName] = select.value;
    });
    
    // Check if item with same options already exists
    const existingItemIndex = cart.findIndex(item => 
        item.id === productId && 
        JSON.stringify(item.options) === JSON.stringify(selectedOptions)
    );
    
    if (existingItemIndex !== -1) {
        // Update quantity of existing item
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            options: selectedOptions
        });
    }
    
    // Update cart summary
    updateCartSummary();
    
    // Show success message
    if (window.showToast) {
        window.showToast(`Added ${quantity} ${product.name} to cart!`);
    }
    
    // Close modal
    closeProductModal();
}

// Update cart summary
function updateCartSummary() {
    const cartSummary = document.getElementById('cart-summary');
    const cartCount = document.getElementById('cart-count');
    
    if (!cartSummary || !cartCount) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        cartSummary.style.display = 'block';
        cartCount.textContent = totalItems;
    } else {
        cartSummary.style.display = 'none';
    }
}

// View cart (called from HTML onclick)
// eslint-disable-next-line no-unused-vars
function viewCart() {
    const modal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    if (!modal || !cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        cartTotalPrice.textContent = '$0.00';
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => {
            const optionsText = Object.entries(item.options)
                .map(([key, value]) => `${key}: ${value}`)
                .join(', ');
            
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        ${optionsText ? `<div class="cart-item-options">${optionsText}</div>` : ''}
                        <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity}</div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})" aria-label="Remove ${item.name} from cart">Remove</button>
                </div>
            `;
        }).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalPrice.textContent = `$${total.toFixed(2)}`;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Focus on close button for accessibility
    setTimeout(() => {
        const closeBtn = modal.querySelector('.modal-close-btn');
        if (closeBtn) closeBtn.focus();
    }, 100);
}

// Close cart modal (called from HTML onclick)
// eslint-disable-next-line no-unused-vars
function closeCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Remove from cart (called from HTML onclick)
// eslint-disable-next-line no-unused-vars
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartSummary();
    viewCart(); // Refresh cart view
}

// Checkout (called from HTML onclick)
// eslint-disable-next-line no-unused-vars
function checkout() {
    if (cart.length === 0) {
        if (window.showToast) {
            window.showToast('Your cart is empty!');
        }
        return;
    }
    
    if (window.showToast) {
        window.showToast('Checkout feature coming soon!');
    }
}

// Setup modal handlers
function setupModalHandlers() {
    // Close modals on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModal();
            closeCartModal();
        }
    });
    
    // Close modals on backdrop click
    const productModal = document.getElementById('product-modal');
    const cartModal = document.getElementById('cart-modal');
    
    if (productModal) {
        productModal.addEventListener('click', function(e) {
            if (e.target === productModal) {
                closeProductModal();
            }
        });
    }
    
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                closeCartModal();
            }
        });
    }
}

// Load toast function from main.js if available
function loadToastFunction() {
    if (!window.showToast) {
        window.showToast = function (msg) {
            const toast = document.getElementById('toast');
            if (!toast) return;
            toast.textContent = msg;
            toast.style.display = 'block';
            toast.style.position = 'fixed';
            toast.style.bottom = '28px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.background = '#421e7c';
            toast.style.color = '#ffd86b';
            toast.style.padding = '16px 26px';
            toast.style.borderRadius = '14px';
            toast.style.fontWeight = 'bold';
            toast.style.boxShadow = '0 2px 14px rgba(80,30,140,.19)';
            toast.style.zIndex = 9999;
            setTimeout(() => { toast.style.display = 'none'; }, 2600);
        };
    }
}
