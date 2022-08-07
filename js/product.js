import {list_products} from './main.js'

var render_products = list_products.map(function(list_product){
    return `
    <div class="item-product">
        <a href="">
            <div class="hashtag-product">
                #${list_product.hashtag}
            </div>
            <img src="${list_product.img}" alt="">
            <div class="title-product">
                ${list_product.title}
            </div>
        </a>
        <a href="">
            <div class="btn-buy">
                Mua ngay
            </div>
        </a>
    </div>
    `
})

document.querySelector('.layout-product').innerHTML = render_products.join('')