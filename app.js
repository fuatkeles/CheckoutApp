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
tax.innerHTML = (0.00).toFixed(2);

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

let taxRate = 0.18


// TODO artırma işlemini yap!

// Toplam fiyatı güncelle
artiEksiFirst.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains("fa-plus")) {
      quantityFirst.innerHTML = parseInt(quantityFirst.innerHTML) + 1;
      

      totalPara.innerHTML = (parseFloat(totalPara.innerHTML) + (parseFloat(priceFirst.innerHTML) * (1 + taxRate))).toFixed(2);
      if(totalPara.innerHTML > 3000){
        shipping.innerHTML = (0.00).toFixed(2);
      }
      
    }
  
    
   else if (e.target.classList.contains("fa-minus")) {
        quantityFirst.innerHTML = parseInt(quantityFirst.innerHTML) - 1;
        totalPara.innerHTML = totalPara.innerHTML = (parseFloat(totalPara.innerHTML) - (parseFloat(priceFirst.innerHTML) * (1 + taxRate))).toFixed(2);
      
    }
    tax.innerHTML= (parseFloat(totalPara.innerHTML) * taxRate).toFixed(2);
    sum.innerHTML = (parseFloat(totalPara.innerHTML) + parseFloat(shipping.innerHTML)).toFixed(2);
    if(totalPara.innerHTML > 2500){
      shipping.innerHTML = (0.00).toFixed(2);
    }
    else{
      shipping.innerHTML = (25.99).toFixed(2);
    }
  });

  artiEksiSecond.addEventListener('click', (e) => {  
    e.preventDefault();
    if (e.target.classList.contains("fa-plus")) {
      quantitySecond.innerHTML = parseInt(quantitySecond.innerHTML) + 1;
      

      totalPara.innerHTML = totalPara.innerHTML = (parseFloat(totalPara.innerHTML) + (parseFloat(priceSecond.innerHTML) * (1 + taxRate))).toFixed(2);
     
    }
   else if (e.target.classList.contains("fa-minus")) {
        quantitySecond.innerHTML = parseInt(quantitySecond.innerHTML) - 1;
        totalPara.innerHTML = totalPara.innerHTML = (parseFloat(totalPara.innerHTML) - (parseFloat(priceSecond.innerHTML) * (1 + taxRate))).toFixed(2)
      
    }
    tax.innerHTML= (parseFloat(totalPara.innerHTML) * taxRate).toFixed(2);
    sum.innerHTML = (parseFloat(totalPara.innerHTML) + parseFloat(shipping.innerHTML)).toFixed(2);
    if(totalPara.innerHTML > 2500){
      shipping.innerHTML = (0.00).toFixed(2);
    }
    else{
      shipping.innerHTML = (25.99).toFixed(2);
    }
  })
  
  artiEksiThird.addEventListener('click', (e) => { 
    e.preventDefault();
    if (e.target.classList.contains("fa-plus")) {
      quantityThird.innerHTML = parseInt(quantityThird.innerHTML) + 1;
      
      totalPara.innerHTML = (parseFloat(totalPara.innerHTML) + (parseFloat(priceThird.innerHTML) * (1 + taxRate))).toFixed(2);
      if(totalPara.innerHTML > 3000){
        shipping.innerHTML = (0.00).toFixed(2);
      }}
    
   else if (e.target.classList.contains("fa-minus")) {
        quantityThird.innerHTML = parseInt(quantityThird.innerHTML) - 1;
        totalPara.innerHTML = (parseFloat(totalPara.innerHTML) - (parseFloat(priceThird.innerHTML) * (1 + taxRate))).toFixed(2);
      
    }
    tax.innerHTML = (parseFloat(totalPara.innerHTML) * taxRate).toFixed(2);
    sum.innerHTML = (parseFloat(totalPara.innerHTML) + parseFloat(shipping.innerHTML)).toFixed(2);
    if(totalPara.innerHTML > 2500){
      shipping.innerHTML = (0.00).toFixed(2);
    }
    else{
      shipping.innerHTML = (25.99).toFixed(2);
    }
  })

  for (const can of trashCan) {
    can.addEventListener('click', (e) => {
      if (confirm('Silmek istediğinize emin misiniz?')) {
        const productRow = can.closest('.main__product');
        const productPrice = parseFloat(productRow.querySelector('.main__product-price').innerText);
        const currentTotal = parseFloat(totalPara.innerText);
        const productCount = parseInt(productRow.querySelector('.main__quantity-controller--text').innerText);
        const taxRate = 0.18; // Vergi oranı %18 olarak varsayıldı
  
        const productTotal = productPrice * productCount * (1 + taxRate);
        const newTotal = currentTotal - productTotal;
  
        totalPara.innerText = (newTotal >= 0 ? newTotal.toFixed(2) : '0.00');
        tax.innerHTML = (newTotal >= 0 ? (newTotal * taxRate).toFixed(2) : '0.00');
        sum.innerHTML = (newTotal >= 0 ? (newTotal + parseFloat(shipping.innerText)).toFixed(2) : '0.00');
        productRow.remove();
  
        if (document.getElementsByClassName('main__product').length === 0) {
          totalPara.innerText = '0.00';
          productPanel.innerHTML = "No Products!";
          tax.innerHTML = "0.00";
          sum.innerHTML = "0.00";
        }
      }
    });
  }







