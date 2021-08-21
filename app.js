function updateValue(product, extraMemory){
	const extraMemoryPrize = document.getElementById(product + '-price');
	extraMemoryPrize.innerText = extraMemory;

	total()
}

// total
function total (){
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('extra-memory-price').innerText;
    const storagePrice = document.getElementById('extra-storage-price').innerText;
    const deliveryCost = document.getElementById('delivery-price').innerText;

    const totalPriceSum = parseFloat(bestPrice)+ parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryCost);
    
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalPriceSum;
   
    const updateTotal = document.getElementById('update-total');
    updateTotal.innerText = totalPriceSum;
};

// promo code and update total
document.getElementById('promo-btn').addEventListener('click',function(){
	const promoInput = document.getElementById('promo-input');
	 const updateTotal = document.getElementById('update-total');
	if(promoInput.value == "stevekaku"){
		const discountPrice = parseFloat(updateTotal.innerText) * (20/100)
		const totalDiscount =  parseFloat(updateTotal.innerText) - discountPrice
		updateTotal.innerText = totalDiscount;
		 document.getElementById("promo-btn").disabled = true;
		  promoInput.value = ''; 
	}
})

//Extra memory handle
document.getElementById('btn-1').addEventListener('click',function() {
	updateValue('extra-memory',0)
})

document.getElementById('btn-2').addEventListener('click',function() {
	updateValue('extra-memory',180)
})

//Extra Storage handle
document.getElementById('btn-3').addEventListener('click',function() {
	updateValue('extra-storage',0)
})

document.getElementById('btn-4').addEventListener('click',function() {
	updateValue('extra-storage',100)
})

document.getElementById('btn-5').addEventListener('click',function() {
	updateValue('extra-storage',180)
})

//Delivery Cost handle
document.getElementById('btn-6').addEventListener('click',function() {
	updateValue('delivery',0)
})

document.getElementById('btn-7').addEventListener('click',function() {
	updateValue('delivery',20)
})

