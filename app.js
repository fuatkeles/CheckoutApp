const silBtn = document.getElementById('sil-btn');
const totalPara = document.getElementById('total-para');
const productPanel = document.getElementById("product-painel")
const shipping = document.getElementById('shipping');
const tax = document.getElementById('tax');
const sum = document.getElementById('sum');
const parantez = document.getElementById('parantez');
const artiEksiFirst = document.getElementById('arti-eksi-first');
const artiEksiSecond = document.getElementById('arti-eksi-second');
const artiEksiThird = document.getElementById('arti-eksi-third');
const priceFirst = document.getElementById('price-first');
const priceSecond = document.getElementById('price-second');
const priceThird = document.getElementById('price-third');
const quantityFirst = document.getElementById('quantity-first');
const quantitySecond = document.getElementById('quantity-second');
const quantityThird = document.getElementById('quantity-third');
const mac = document.getElementById('mac');
const trashCan = document.getElementsByClassName("main__product-removal")


let sepet = 0;
sum.innerHTML = (0.00).toFixed(2);

//!Delete Products
silBtn.addEventListener('click', () => {
    if (confirm('Silmek istediğinize emin misiniz?')) {
        sepet = 0;
       
        totalPara.innerHTML = (0.00).toFixed(2);
        productPanel.innerHTML = "No Products!";
        shipping.innerHTML = (0.00).toFixed(2);
        tax.innerHTML = (0.00).toFixed(2);
        sum.innerHTML = (0.00).toFixed(2);
        parantez.innerHTML = "(0 Products)";
        

    }
}
)



// TODO artırma işlemini yap!

// Toplam fiyatı güncelle
artiEksiFirst.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains("fa-plus")) {
      quantityFirst.innerHTML = parseInt(quantityFirst.innerHTML) + 1;
      

      totalPara.innerHTML = (parseFloat(totalPara.innerHTML) + parseFloat(priceFirst.innerHTML)).toFixed(2);
    }
   else if (e.target.classList.contains("fa-minus")) {
        quantityFirst.innerHTML = parseInt(quantityFirst.innerHTML) - 1;
        totalPara.innerHTML = (parseFloat(totalPara.innerHTML) - parseFloat(priceFirst.innerHTML)).toFixed(2);
      
    }
   
  });

  artiEksiSecond.addEventListener('click', (e) => {  
    e.preventDefault();
    if (e.target.classList.contains("fa-plus")) {
      quantitySecond.innerHTML = parseInt(quantitySecond.innerHTML) + 1;
      

      totalPara.innerHTML = (parseFloat(totalPara.innerHTML) + parseFloat(priceSecond.innerHTML)).toFixed(2);
    }
   else if (e.target.classList.contains("fa-minus")) {
        quantitySecond.innerHTML = parseInt(quantitySecond.innerHTML) - 1;
        totalPara.innerHTML = (parseFloat(totalPara.innerHTML) - parseFloat(priceSecond.innerHTML)).toFixed(2);
      
    }
  })
  
  artiEksiThird.addEventListener('click', (e) => { 
    e.preventDefault();
    if (e.target.classList.contains("fa-plus")) {
      quantityThird.innerHTML = parseInt(quantityThird.innerHTML) + 1;
      

      totalPara.innerHTML = (parseFloat(totalPara.innerHTML) + parseFloat(priceThird.innerHTML)).toFixed(2);
    }
   else if (e.target.classList.contains("fa-minus")) {
        quantityThird.innerHTML = parseInt(quantityThird.innerHTML) - 1;
        totalPara.innerHTML = (parseFloat(totalPara.innerHTML) - parseFloat(priceThird.innerHTML)).toFixed(2);
      
    }
  })

  for (const can of trashCan){
    can.addEventListener('click', (e) => {
      if (confirm('Silmek istediğinize emin misiniz?')) {
        const productRow = can.closest('.main__product');
        const productPrice = parseFloat(productRow.querySelector('.main__product-price').innerText);
        const currentTotal = parseFloat(totalPara.innerText);
        const productCount = parseInt(productRow.querySelector('.main__quantity-controller--text').innerText);
        const newTotal = currentTotal - (productPrice * productCount);
  
        totalPara.innerText = (newTotal >= 0 ? newTotal.toFixed(2) : '0.00');
        productRow.remove();
  
        if (document.getElementsByClassName('main__product').length === 0) {
          totalPara.innerText = '0.00';
          productPanel.innerHTML = "No Products!";
        }
      }
      
    
      
  })



}

const products = document.querySelectorAll('.product');
const totalPriceElement = document.getElementById('total-para');

products.forEach((product) => {
  const plusButton = product.querySelector('.plus-button');
  const minusButton = product.querySelector('.minus-button');
  const quantityElement = product.querySelector('.quantity');
  const priceElement = product.querySelector('.product-price');
  const price = parseFloat(priceElement.innerText);

  plusButton.addEventListener('click', (e) => {
    e.preventDefault();
    const currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
    updateTotalPrice();
  });

  minusButton.addEventListener('click', (e) => {
    e.preventDefault();
    const currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 0) {
      quantityElement.innerText = currentQuantity - 1;
      updateTotalPrice();
    }
  });
});

function updateTotalPrice() {
  let total = 0;
  products.forEach((product) => {
    const priceElement = product.querySelector('.product-price');
    const quantityElement = product.querySelector('.quantity');
    const price = parseFloat(priceElement.innerText);
    const quantity = parseInt(quantityElement.innerText);
    total += price * quantity;
  });
  totalPriceElement.innerText = total.toFixed(2);
}

