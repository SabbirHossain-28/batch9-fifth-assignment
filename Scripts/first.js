document.getElementById('scrollToSection').addEventListener('click',function(){
    document.getElementById('ticket-purchasing').scrollIntoView({behavior:"smooth"})
})

const allTicketSelectBtn=document.getElementsByClassName('ticket-select-btn');

for(let ticketSelectBtn of allTicketSelectBtn){
    let clicked=true;
    let counterArray=[];
    ticketSelectBtn.addEventListener('click',function(e){
        if(clicked){
            ticketSelectBtn.disabled=true;
        }
        const totalCurrentSeatQuantity=document.getElementById('current-seat-quantity');
        let totalCurrentSeatQuantityNum=parseInt(totalCurrentSeatQuantity.innerText);
        totalCurrentSeatQuantityNum-=1;
        
        totalCurrentSeatQuantity.innerText=totalCurrentSeatQuantityNum;
        if (totalCurrentSeatQuantityNum === 0) {
            for(let disabledCurrentSeat of allTicketSelectBtn)
            disabledCurrentSeat.disabled = true;
        }
        counterArray.push(totalCurrentSeatQuantityNum);
        console.log(counterArray);

    })
    console.log(counterArray);
}