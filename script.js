const addToCart=document.querySelector('.fa-cart-shopping');
const cart=document.querySelector('.add-to-cart');
const cancel=document.querySelector('.cancel');
addToCart.addEventListener('click',()=>{
    cart.style.display='block'
})
cancel.addEventListener('click',()=>{
    cart.style.display='none'
})
const unitPrice = 10; // Define the unit price

function updateTotal() {
    let quantity = parseInt(document.getElementById("value").value);
    let totalPrice = quantity * unitPrice;
    document.getElementById("total").innerText = totalPrice.toFixed(2);
}

function increment() {
    let input = document.getElementById("value");
    let currentValue = parseInt(input.value);
    input.value = currentValue + 1;
    updateTotal(); // Update total price
}

function decrement() {
    let input = document.getElementById("value");
    let currentValue = parseInt(input.value);
    if (currentValue > 1) {
        input.value = currentValue - 1;
        updateTotal(); // Update total price
    }
}

// Initialize total price on page load
window.onload = updateTotal;

//user login
const login=document.querySelector('.fa-user');
const cancelLog=document.querySelector(".cancelLog");
login.addEventListener('click',()=>{
    document.querySelector('.userLog').style.display='block'
})
cancelLog.addEventListener("click",()=>{
    document.querySelector('.userLog').style.display='none'
})




// data

const products = [
    {
        id: 1,
        title: "Running shoes for men ",
        image: "https://themewagon.github.io/stylish/images/card-item1.jpg",
        price: 99,
        cate: "men"
    },
    {
        id: 2,
        title: "Running shoes for men ",
        image: "https://themewagon.github.io/stylish/images/card-item2.jpg",
        price: 99,
        cate: "men"
    },
    {
        id: 3,
        title: "Running shoes for men ",
        image: "https://themewagon.github.io/stylish/images/card-item3.jpg",
        price:99 ,
        cate: "men"
    },
    {
        id: 4,
        title: "Running shoes for men ",
        image: "https://themewagon.github.io/stylish/images/card-item4.jpg",
        price:99 ,
        cate: "men"
    },
    {
        id: 5,
        title: "Running shoes for men ",
        image: "https://themewagon.github.io/stylish/images/card-item5.jpg",
        price:99 ,
        cate: "men"
    },
    {
        id: 6,
        title: "Running shoes for women",
        image: "https://ecamshopping.com/cdn/shop/products/product-201-image_d221d0c3-7480-49d6-aaaf-7be34033ec8a_1024x.jpg?v=1575439925",
        price: 99,
        cate: "women"
    },
    {
        id: 7,
        title: "Running shoes for women ",
        image: "https://img.ltwebstatic.com/images3_spmp/2024/08/02/ed/1722588914d54f7d224bfe486a899134ca4143cd48_thumbnail_750x999.webp",
        price: 99,
        cate: "women"
    },
    {
        id: 8,
        title: "Running shoes for women",
        image: "https://ecamshopping.com/cdn/shop/products/product-1-image_acd5e392-a2d8-47ab-ae6a-0eee5c318ec5_1024x.jpg?v=1575439925",
        price:99 ,
        cate: "women"
    },
    {
        id: 9,
        title: "Running shoes for women",
        image: "https://i.pinimg.com/736x/a9/ed/73/a9ed73e2adf05be2e8d1797ec3f92ff7.jpg",
        price:99 ,
        cate: "women"
    },
    {
        id: 10,
        title: "Running shoes for women",
        image: "https://m.media-amazon.com/images/I/71yJRLiHVML._AC_UY1000_.jpg",
        price:99 ,
        cate: "women"
    }
    
];

const getAllProducts = () => {
    const allProductMen = document.querySelector('.men');
    const allProductWomen = document.querySelector('.women');
    allProductMen.innerHTML = "";
    allProductWomen.innerHTML = "";

    products.forEach(pro => {
        const productCard = document.createElement("div");
        productCard.className = "card";

        productCard.innerHTML = `
            <div class="image">
                <img src="${pro.image}" alt="">
            </div>
            <div class="title mt-2">
                <p>${pro.title}</p>
                <p>$${pro.price}</p>
            </div>
        `;

        // Add click event listener to show product details
        // Append the card to the appropriate category section
        if (pro.cate === 'men') {
            allProductMen.appendChild(productCard);
        } else {
            allProductWomen.appendChild(productCard);
        }
    });
};

// Function to display the product details
getAllProducts();
$('body').on('click','.card',function(){
    $.ajax({
         url : 'detial.html',
         catch : false,
         beforeSend:function(){
              $('section').html(`<img width="200" src="image/loading-gif.gif" alt="">`);
         },
         success : function(response){
              $('section').html(`${response}`);
         }
    })

     
})