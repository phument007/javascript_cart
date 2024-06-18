  
        var cards = document.querySelectorAll('.card');
        for (let i = 0; i < cards.length; i++) {
            let buttonAdd = cards[i].querySelector(".icon_heart");
            var total = 0.0;
            var num = 0;
            buttonAdd.addEventListener('click', () => {


                buttonAdd.classList.remove('bi-bag-plus-fill');
                buttonAdd.classList.add('bi-bag-check-fill');

                setTimeout(function () {
                    buttonAdd.classList.add('bi-bag-plus-fill');
                    buttonAdd.classList.remove('bi-bag-check-fill');
                }, 1000);

                let title = cards[i].querySelector(".title").textContent;
                let price = cards[i].querySelector('.price').textContent;
                let img = cards[i].querySelector('img').src;


                document.querySelector(".product_store").innerHTML += `
                <div class="cart-item d-flex justify-content-between align-items-center p-3 mt-2">
                        <img style="width: 50px; height: 50px;" src="${img}" alt="">
                        <div class="d-flex justify-content-between mt-3">
                            <p class=" text-dark me-3">${title}</p>
                            <p class=" price_of_items">
                                <span class="priceItems">${price}</span>
                                <span>$</span>
                            </p>
                        </div>
                        <button class=" btn btn-danger rounded-0 removeItem"><i class="bi bi-trash"></i></button>
                    </div>
                `;



                //Message 
                var message = document.querySelector(".message_cart");
                message.querySelector('.items_title').innerHTML = title;
                message.style.visibility = "visible";
                setTimeout(function () {
                    message.style.visibility = "hidden";
                }, 1500);


                total = total + parseFloat(price);
                document.querySelector(".payment").innerHTML = total;

                num = num + 1;
                document.querySelector(".num_cart_item").innerHTML = num;



                var totalPay = total; //for used store total price of cart items 

                var totalNumOfItems = num; // for used store number of items in the cart

                var removeItems = document.querySelectorAll('.removeItem');

                //Event for Remove items
                for (let i = 0; i < removeItems.length; i++) {
                    removeItems[i].addEventListener('click', function () {
                        var Items = this.closest('.cart-item');
                        var PricInCart = Items.querySelector('.priceItems').textContent;

                        totalPay = totalPay - parseFloat(PricInCart);

                        document.querySelector(".payment").innerHTML = totalPay;

                        totalNumOfItems = totalNumOfItems - 1;

                        document.querySelector(".num_cart_item").innerHTML = totalNumOfItems;

                        Items.remove();

                        total = totalPay;  //for used store total price of cart items, After Remove Items from cart
                        num = totalNumOfItems;  //for used store number of items, After Remove Items from cart         
                    })
                }



                //show Modal Checkout
                var buttoncheckout = document.querySelector(".btnCheckout");
                buttoncheckout.addEventListener('click', () => {

                    document.querySelector(".checkout_payment_modal").style.display = "block";
                    document.querySelector(".show-modal-dark-mode").style.display = "block";

                    document.querySelector(".subtotal").innerHTML = totalPay;
                    document.querySelector(".shipping").innerHTML = 0;
                    document.querySelector(".total").innerHTML = totalPay;

                });


                //Shipping Cart 
                var selectShipping = document.querySelector("#shipping");
                selectShipping.addEventListener('change', () => {
                    var shipping = selectShipping.value;
                    document.querySelector(".shipping").innerHTML = shipping;
                    document.querySelector(".total").innerHTML = totalPay + parseFloat(shipping);
                });


            });
        }



        //show Modal Checkout
        var buttonCheckout = document.querySelector(".btnCheckout");
        buttonCheckout.addEventListener('click', () => {
            document.querySelector(".checkout_payment_modal").style.display = "block";
            document.querySelector(".show-modal-dark-mode").style.display = "block";
        });

        //Close Modal Checkout
        var modalDark = document.querySelector('.show-modal-dark-mode');
        modalDark.addEventListener('click', function () {
            document.querySelector(".checkout_payment_modal").style.display = "none";
            document.querySelector(".show-modal-dark-mode").style.display = "none";
        })


        //Search Product
        var search = document.querySelector("#search");
        var cards = document.querySelectorAll(".items_cart");
        
        search.addEventListener("input",function(){
            var input =  search.value.toLowerCase();
            for(let i=0 ;i<cards.length;i++){
                var title = cards[i].querySelector(".title").textContent.toLowerCase();
                if(title.includes(input)){
                    cards[i].style.display = "block";
                }else{
                    cards[i].style.display = "none"; 
                }

                

            }

        });