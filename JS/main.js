// Update Memory
function updateMemoryPrice(idName,isIncrease, price){
    const memoryPrice = document.getElementById(idName);
    const memoryPriceNumber = parseFloat(memoryPrice.innerText);
    let updatePrice = memoryPriceNumber;
    if(isIncrease == true){
        updatePrice = 1 * price;
    }
    else{
        updatePrice = 0 * price;
    }
    memoryPrice.innerText = updatePrice;
    // update Delivery Cost
     totalPrice();
    // calculate total price
      updateDeliveryCost();
}

// fixed memory btn
document.getElementById('fixed-memory').addEventListener('click', function (){
    updateMemoryPrice('memory-price',false,0);
});

// update memory price
document.getElementById('update-memory').addEventListener('click', function(){
    updateMemoryPrice('memory-price',true,180)
});

// fixed storage
document.getElementById('fixed-storage').addEventListener('click', function(){
    updateMemoryPrice('storage-price',false,0)
});
// update storage 512 GB SSD
document.getElementById('update-storage-v1').addEventListener('click', function(){
    updateMemoryPrice('storage-price',true,100);
});
// update storage 1 TB SSD
document.getElementById('update-storage-v2').addEventListener('click', function(){
    updateMemoryPrice('storage-price',true,180);
});

// update Delivery total cost 
function updateDeliveryCost(price){
    const totalDelivery = document.getElementById('delivery-total-cost');
    const totalDeliveryText = totalDelivery.innerText;
    const totalDeliveryNumber = parseFloat(totalDeliveryText); 
    let updateDelivery = totalDeliveryNumber;

    if(price == 20){
       updateDelivery = 20;
    }
    else{
        updateDelivery = 0;    
    }
    totalDelivery.innerText = updateDelivery;
}

// fixed Delivery charge
document.getElementById('free-delivery').addEventListener('click', function(){
    updateMemoryPrice('delivery-total-cost',false,0);
    updateDeliveryCost(0);
});

// update Delivery charge
document.getElementById('delivery-cost').addEventListener('click', function(){
    updateMemoryPrice('delivery-total-cost',true,20);
    updateDeliveryCost(20 )
});

function getInput(inputId){
    const inputTotal = document.getElementById(inputId);
    const inputTotalText = inputTotal.innerText;
    const inputTotalNumber = parseFloat(inputTotalText);

    return inputTotalNumber;
}

// totalPrice
function totalPrice(){
    const basePrice = getInput('base-price');
    const memoryPrice = getInput("memory-price");
    const storagePrice = getInput('storage-price');
    const deliveryCost = getInput('delivery-total-cost')

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = parseFloat(totalPrice.innerText); 
    const deliveryCostNumber = parseFloat(totalPriceText);

    const updateTotalPrice = basePrice + memoryPrice + storagePrice + deliveryCost;
    totalPrice.innerText = updateTotalPrice;

    const total = document.getElementById('total');
    const totalNumber = parseFloat(total);

    total.innerText = updateTotalPrice;
}

document.getElementById('apply-btn').addEventListener('click', function (){
   checkInputValue();
})


function checkInputValue(){
    const input = document.getElementById('input-value');
    const inputValue = input.value;

    if(inputValue == 'stevekaku'){
  
        const totalInput = document.getElementById('total');
        const totalText = totalInput.innerText;
        const totalNumber = parseFloat(totalText);

        
        const discount =   totalNumber * 0.2 ;
        const withOutDiscount = totalNumber - discount;
        total.innerText = withOutDiscount; 
    }
    input.value = '';
}