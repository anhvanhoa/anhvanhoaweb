
// list popular_posts

var render_popular_posts = popular_posts.map(function(popular_post){
  return `
  <div class="item-post">
  <a href="">
      <div class="img-post">
          <img src="${popular_post.img}" alt="${popular_post.title}">
      </div>
      <div class="title-post">
          ${popular_post.title}
      </div>
  </a>
</div>
  `
})

document.querySelector('.box-post').innerHTML = render_popular_posts.join('')


// list posts new

var render_postsNews = postsNews.map(function(postsNew, index){
    if(index < 4) {
      return `
              <div class="item-related">
                <a href="">
                  <div class="img-related">
                    <img src="${postsNew.img}" alt="${postsNew.title}">
                  </div>
                  <div class="title-related">
                    ${postsNew.title}
                  </div>
                </a>
              </div>
              `
    }
})
document.querySelector('.related').innerHTML = render_postsNews.join(' ')


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

import {postsNews, popular_posts, list_products} from './main.js'

