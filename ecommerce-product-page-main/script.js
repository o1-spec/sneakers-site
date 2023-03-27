'use strict'
const productImage = document.querySelector('.product-image')
const activeState = document.querySelector('.active-states')
const overlay = document.querySelector('.overlay')
const closeIcon = document.querySelector('.close-icon')
const activeImg = document.querySelectorAll('.active-img')
const prevIcon = document.querySelector('.prev-icon');
const nextIcon = document.querySelector('.next-icon');
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const numProduct = document.getElementById('num')
const mobileImage = document.querySelectorAll('.mobile-image')
const mobileOpen = document.querySelector('.mobile-open')
const mobileClose = document.querySelector('.mobile-close')
const mobileLinks = document.querySelector('.nav-links')
const thumbnails = document.getElementsByClassName('thumbnail-img')
const opacity = document.getElementsByClassName('bg-opacity')
const clickImg = document.getElementsByClassName('click-img')
const mobileNext = document.querySelector('.mobile-next')
const mobilePrev = document.querySelector('.mobile-prev')
const mainCart = document.querySelector('.main-cart')
const cartIcon = document.querySelector('.nav-cart')
const cartDelete = document.querySelector('.cart-delete')
const addCart = document.querySelector('.cart-box')
const cartText = document.querySelector('.cart-text')
const cartInfo = document.querySelector('.cart-info')
const checkout = document.querySelector('.checkout')
const menuOverlay = document.querySelector('.menu-overlay')

// MOBILE NAVIGATION
mobileOpen.addEventListener('click',function(e){
    mobileLinks.classList.add('translate')
    menuOverlay.classList.remove('hidden')
})

mobileClose.addEventListener('click',function(e){
    mobileLinks.classList.remove('translate')
    menuOverlay.classList.add('hidden')
})

//PRODUCT-IMAGE
productImage.addEventListener('click',function(e){
    overlay.classList.remove('hidden')
    activeState.classList.remove('hidden')
})

//OVERLAY
overlay.addEventListener('click',function(e){
    overlay.classList.add('hidden')
    activeState.classList.add('hidden')
})

closeIcon.addEventListener('click',function(e){
    overlay.classList.add('hidden')
    activeState.classList.add('hidden')
})

minus.addEventListener('click',function(e){
    numProduct.innerHTML -= 1
})

plus.addEventListener('click',function(e){
    numProduct.innerHTML++
})

//CART BOX
cartIcon.addEventListener('click',function(e){
    mainCart.classList.toggle('cart-open');

})


//CLICKABLE IMAGES
for(let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click',function(e){
        if(opacity.length > 0){
            opacity[0].classList.remove('bg-opacity')
        }
        this.classList.add('bg-opacity')
        productImage.src = this.src
    })
}

//NEXT ICON AND PREV ICON
let currentImage = 0;

nextIcon.addEventListener('click',function(e){
    activeImg[currentImage].style.display = 'none'

    currentImage++;

    if(currentImage > 3){
        currentImage = 0;
    }
    activeImg[currentImage].style.display = 'block'
    clickImg[currentImage - 1].classList.remove('bg-opacity')
    clickImg[currentImage].classList.add('bg-opacity')
})

prevIcon.addEventListener('click',function(e){
    activeImg[currentImage].style.display = 'none'

    currentImage--;

    if(currentImage < 0){
        currentImage = activeImg.length - 1;
    }
    activeImg[currentImage].style.display = 'block'
    clickImg[currentImage + 1].classList.remove('bg-opacity')
    clickImg[currentImage].classList.add('bg-opacity')
})

//FOR MOBILE    
mobileNext.addEventListener('click',function(e){
    mobileImage[currentImage].style.display = 'none'

    currentImage++;

    if(currentImage > 3){
        currentImage = 0;
    }
    mobileImage[currentImage].style.display = 'block'
})

mobilePrev.addEventListener('click',function(e){
    mobileImage[currentImage].style.display = 'none'

    currentImage--;

    if(currentImage < 0){
        currentImage = mobileImage.length - 1;
    }
    mobileImage[currentImage].style.display = 'block'
})

//CART
addCart.addEventListener('click',function(e){

  const html = `
    <div class="cart-info">
        <img src="./images/image-product-1.jpg" alt="Shoe img">
        <p>fall limited edition sneakers $125 x <span>375.00</span></p>
        <img class="cart-delete" src="./images/icon-delete.svg" alt="">
    </div>
    <a href="#" class="checkout">Checkout</a>`

    mainCart.insertAdjacentHTML('beforeend',html)
    mainCart.style.height = 'fit-content'
    cartText.style.display = 'none'
    mainCart.classList.add('cart-open')
    const del = mainCart.querySelectorAll('.cart-delete')
    const p = mainCart.querySelectorAll('.cart-info')
    const check = mainCart.querySelectorAll('.checkout')
    /*
    del.forEach(function(e){
        e.addEventListener('click',function(e){
            if(del.length == 0){
                mainCart.style.height = '18rem'
                cartText.style.display = 'block'
            }
        })
    })*/

    for(let i = 0; i<del.length; i++){
        del[i].addEventListener('click',function(e){
            p[i].remove()
            check[i].remove()

            if(del.length <= 1){
                mainCart.style.height = '20rem'
                cartText.style.display = 'block'
            }
        })
    }

})




