document.getElementById('scrollToSection').addEventListener('click',function(){
    document.getElementById('ticket-purchasing').scrollIntoView({behavior:"smooth"})
})

const allTicketSelectBtn=document.getElementsByClassName('ticket-select-btn');

for(let ticketSelectBtn of allTicketSelectBtn){
    let clicked=true;
    let count=0;
    ticketSelectBtn.addEventListener('click',function(e){
        const innerTextValue=this.innerText;
        addToCart(innerTextValue)

        if(clicked){
            ticketSelectBtn.style.backgroundColor='#1DD100'
            ticketSelectBtn.style.color='white'
            ticketSelectBtn.style.cursor='not-allowed'
            ticketSelectBtn.disabled=true;
        }
        const totalCurrentSeatQuantity=document.getElementById('current-seat-quantity');
        let totalCurrentSeatQuantityNum=parseInt(totalCurrentSeatQuantity.innerText);
        totalCurrentSeatQuantityNum-=1;
        totalCurrentSeatQuantity.innerText=totalCurrentSeatQuantityNum;

        const totalSoldSeat=document.getElementById('sold-seat');
        let totalSoldSeatNum=parseInt(totalSoldSeat.innerText);
        totalSoldSeatNum+=1;
        totalSoldSeat.innerText=totalSoldSeatNum;
        count=totalSoldSeatNum;

        if(count===4){
             
        }

        if (totalCurrentSeatQuantityNum ===0) {
            for(let disabledCurrentSeat of allTicketSelectBtn)
            disabledCurrentSeat.disabled = true;
        // alert('All tickets are sold');
        }
        activateNextButton(count);
    })
}

function activateNextButton(count) {
    const inputNumber = document.getElementById('input-number');
    
    const nextButton = document.getElementById('btn-next');

    inputNumber.addEventListener('input', function () {
        const inputValue = inputNumber.value.trim();
        const isNumeric = /^\d+$/.test(inputValue);
        if (isNumeric && count >= 1) {
            nextButton.removeAttribute('disabled');
        } else {
            nextButton.setAttribute('disabled', 'disabled');
        }
    });
}

function addToCart(value) {
    let cartContainer = document.getElementById('cart-container');
    let div = document.createElement('div');
    div.classList.add("flex", "justify-between");

    let p1 = document.createElement('p');
    p1.innerText = `${value}`;

    let p2 = document.createElement('p');
    p2.innerText = 'Economy';

    let p3 = document.createElement('p');
    p3.innerText = `550`;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    cartContainer.appendChild(div);
    let childList = cartContainer.children;
    let childListNum = childList.length;

    let multipliedValue = 550 * childListNum;
    let totalCost = document.getElementById('total-cost');
    totalCost.innerText = multipliedValue;

    let grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = multipliedValue;

    if (childListNum >= 4) {
        const applyBtn = document.getElementById('apply-btn');
        applyBtn.removeAttribute('disabled');
        applyBtn.addEventListener('click', function () {
            let couponInputField = document.getElementById('coupon-input-field');
            let couponInputFieldValue = couponInputField.value.trim();

            if (couponInputFieldValue === 'NEW15') {
                let currentGrandTotal = parseInt(grandTotal.innerText); // Parsing innerText instead of the element itself
                let discountedGrandTotal = currentGrandTotal * 0.85; // Applying 15% discount
                grandTotal.innerText = discountedGrandTotal;
            
                document.getElementById('coupon-field-container').classList.add('hidden')
            }
            else if(couponInputFieldValue === 'Couple 20'){
                let currentGrandTotal = parseInt(grandTotal.innerText); // Parsing innerText instead of the element itself
                let discountedGrandTotal = currentGrandTotal * 0.8; // Applying 15% discount
                grandTotal.innerText = discountedGrandTotal;

                document.getElementById('coupon-field-container').classList.add('hidden')
            }
        })
    }
}


// function applyCoupon(inputFieldId){
//     let couponInputField=document.getElementById(inputFieldId);
//     let couponInputFieldValue=couponInputField.value.trim();
//     if(couponInputFieldValue==='NEW15'){
//         let currentGrandTotal=document.getElementById('grand-total');
//         console.log(currentGrandTotal.innerText);
//         let discountedGrandTotal=currentGrandTotal-currentGrandTotal*1.5;
//         currentGrandTotal.innerText=discountedGrandTotal;
//     }
// }