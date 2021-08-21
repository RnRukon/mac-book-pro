

function customize(product, extra) {

    const extraMemoryCost = document.getElementById(extra + '-memory-cost');
    const extraStorageCost = document.getElementById(extra + '-storage-cost');


    /* ----------8GB unified Memory----------- */
    if (product == '8GB') {
        extraMemoryCost.innerText = 0;
        extraStorageCost.innerText = 0;
    }

    /* -----------16GB unified--------------- */
    else if (product == '16GB') {
        extraMemoryCost.innerText = 180;
    }

    /* ----------256 BG SSD Storage------------- */
    else if (product == '256GB') {
        extraStorageCost.innerText = 0;
    }
    /* ----------512 BG SSD Storage------------- */
    else if (product == "512gb") {
        extraStorageCost.innerText = 100;
    }
    /* ----------1TB SSD Storage------------- */
    else if (product == "1TB") {

        extraStorageCost.innerText = 180;
    }


    /* ----------Friday.Aug 25 FREE Prime Delivery------------- */

    else if (product == 'friday') {
        const deliveryCharge = document.getElementById('delivery-charge');
        deliveryCharge.innerText = 0;
    }
    /* ----------Friday.Aug 21  Delivery Charge $20------------- */
    else if (product == 20) {
        const deliveryCharge = document.getElementById('delivery-charge');
        deliveryCharge.innerText = 20;

    }

}


/* --------------------Total Price calculation----------------- */

function totalPrice() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = parseFloat(bestPrice.innerText);

    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostText = parseFloat(extraMemoryCost.innerText);

    const extraStorageCost = document.getElementById('extra-storage-cost');
    const extraStorageCostText = parseFloat(extraStorageCost.innerText);

    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeText = parseFloat(deliveryCharge.innerText);


    const totalCostPrice = document.getElementById('total-price');

    /*----------- Total ---------*/
    const totalPriceCost = bestPriceText + extraMemoryCostText + extraStorageCostText + deliveryChargeText;

    totalCostPrice.innerText = totalPriceCost;
    const total = document.getElementById('total');
    total.innerText = totalPriceCost;


};




/*----------------- percentage calculation--------------------*/


function discount() {

    const promoCodeField = document.getElementById('promo-code-field');
    const promoCodeFieldValue = promoCodeField.value;


    const total = document.getElementById('total');
    const totalText = parseInt(total.innerText);


    if (promoCodeFieldValue == 'stevekaku') {

        const discount = (totalText / 100) * 20;

        const totalDiscount = totalText - discount;
        total.innerText = totalDiscount;
        promoCodeField.value = "";
    }
};



/*------------- 8GB unified memory button --------------*/
document.getElementById('memory-unified-8Gb-Btn').addEventListener('click', function () {
    customize('8GB', 'extra');
    totalPrice();
    discount();
});

/*------------- 16GB unified memory button----------------*/
document.getElementById('memory-unified-16GB-Btn').addEventListener('click', function () {
    customize('16GB', 'extra');
    totalPrice();
    discount();
});

/* ---------------256GB SSD storage button -----------------------*/
document.getElementById('storage-ssd-256GB-Btn').addEventListener('click', function () {

    customize('256GB', 'extra');
    totalPrice();
    discount();
});

/*------------------ 512GB SSD storage button -----------------*/
document.getElementById('storage-ssd-512GB-Btn').addEventListener('click', function () {

    customize('512gb', 'extra');
    totalPrice();
    discount();
});


/*-------------- 1TB SSD storage button -------------------*/
document.getElementById('storage-ssd-1TB-Btn').addEventListener('click', function () {
    customize("1TB", 'extra');
    totalPrice();
    discount();
});

/*-------------- Friday,Aug 25 FREE Prime Delivery button -------------------*/
document.getElementById('friday-Aug-25-free-delivery-Btn').addEventListener('click', function () {

    customize('friday');
    totalPrice();
    discount();
});

/*-------------- Friday,Aug,21 Delivery charge $20 button -------------------*/
document.getElementById('friday-agu-21-charge-btn').addEventListener('click', function () {
    customize(20);
    totalPrice();
    discount();
});

/*-------------- Add Promo Code Apply button -------------------*/
document.getElementById('promo-code-apply-btn').addEventListener('click', function () {
    discount();
});

/* <<<<<<<<<<<<<<<<<<<<<END>>>>>>>>>>>>>>>>>>>> */