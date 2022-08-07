var main = document



// Btn profile

var btn_profile = document.querySelector('.btn-profile')
var item_profile = document.querySelector('.item-profile')
var close_overlay = document.querySelector('.fa-xmark')
var overlay = document.querySelector('.overlay')

btn_profile.onclick = () => {
  item_profile.classList.add('item-profile-move')
  box_search.classList.remove('move-search')
}

function closeProfile() {
  item_profile.classList.remove('item-profile-move')
}

close_overlay.onclick = closeProfile

overlay.onclick = closeProfile



// ALL pots and product

export var popular_posts = [
  {
    title: 'Cây phong thủy lên có trên bàn. tạo cảm giác gần gũi với thiên nhiên, giảm stress hiệu quả.',
    hashtag: 1,
    img: 'https://cf.shopee.vn/file/9c1ddd1340b507172fd85ede3421296f'
  },
  {
    title: 'Top những máy chiếu xịn nhất trong tầm phân khúc 2022.',
    hashtag: 2,
    img: 'https://phucanhcdn.com/media/product/36477_panasonic_pt_lb305_ha2.jpg'
  },
  {
    title: 'các món đồ decor không thể thiểu trên bàn làm việc.',
    hashtag: 3,
    img: 'https://bizweb.dktcdn.net/thumb/grande/100/253/478/products/122034253-211028837034738-40668650482334449-n.png?v=1603513864613'
  },
  {
    title: 'Các mẫu bàn làm việc đệp đáng mua 2022.',
    hashtag: 4,
    img: 'https://noithathoaphat3.com/data/Product/ban-chan-sat-van-phong_1623515824.png'
  },
]

export var postsNews = [
  {
    title: 'Arm màn hình giúng góc làm việc gọn gàng hơn.',
    hashtag: 16,
    img: 'https://cdn.tgdd.vn/hoi-dap/1365940/monitor-arm-la-gi-mot-so-loi-ich-chung-ma-monitor-arm-mang-1.jpg'
  },
  {
    title: 'Gậy quay livestream TikTok có đèn đi kèm.',
    hashtag: 15,
    img: 'https://product.hstatic.net/1000378690/product/l07_16_40c482e638bf4a45a7404d1f434b0e27_master.png'
  },
  {
    title: 'Tay cầm chơi game, cân mọi thể loại game mobile.',
    hashtag: 14,
    img: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Các mẫu bàn làm việc đệp đáng mua 2022.',
    hashtag: 13,
    img: 'https://noithathoaphat3.com/data/Product/ban-chan-sat-van-phong_1623515824.png'
  },
  {
    title: 'Các món đồ decor không thể thiểu trên bàn làm việc.',
    hashtag: 12,
    img: 'https://bizweb.dktcdn.net/thumb/grande/100/253/478/products/122034253-211028837034738-40668650482334449-n.png?v=1603513864613'
  },
  {
    title: 'Top những máy chiếu xịn nhất trong tầm phân khúc 2022.',
    hashtag: 11,
    img: 'https://phucanhcdn.com/media/product/36477_panasonic_pt_lb305_ha2.jpg'
  },
  {
  title: 'Cây phong thủy lên có trên bàn. tạo cảm giác gần gũi với thiên nhiên, giảm stress hiệu quả.',
  hashtag: 10,
  img: 'https://cf.shopee.vn/file/9c1ddd1340b507172fd85ede3421296f'
  },
  {
  title: 'Chậu cây decor cực chất.',
  hashtag: 9,
    img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Đã nghiện nhạc thì không thể thiếu nhưng mẫu loa này. Bạn đã có chưa?',
    hashtag: 8,
    img: 'https://hanoicomputercdn.com/media/product/54510_r1080bt__4_.png'
  },
  {
    title: 'Mẫu đèn 2 trong một vừa đèn học vừa đèn ngủ.',
    hashtag: 7,
    img: 'https://shopping-square.com/wp-content/uploads/2021/10/0c1249b668d0919d91ff1e892eae751e.jpeg'
  },
  {
    title: 'Bảng ghi nhớ kèm hiệu ứng đèn màu.',
    hashtag: 6,
    img: 'https://lzd-img-global.slatic.net/g/p/6bac2bd858f9f0b2ae4e879902dc7ecf.jpg_720x720q80.jpg_.webp'
  },
  {
    title: 'Chiếc gương cực đẹp không thể thiếu trong phòng các bạn gái.',
    hashtag: 5,
    img: 'https://guongtrangtri.net/wp-content/uploads/2021/10/guong-nghe-thuat-treo-tuong-soi-toan-than-den-led.jpg'
  },
  ]

  export var list_products = [
    {
      title: 'Con lắc hỗn loạn decor cực xịn trên bàn.',
      hashtag: 123,
      img: 'https://cf.shopee.vn/file/301ec195589663168e2ffc45feb7ae4b'
    },
    {
      title: 'Tượng phi hành gia treo chìa khóa, đồng hồ.',
      hashtag: 65,
    img: 'https://cf.shopee.vn/file/db35186540e6b210f6cb3e80728d01af'
  },
  {
    title: 'Đèn tay phật decor kèm đèn ngủ, cực đẹp.',
    hashtag: 132,
    img: 'https://salt.tikicdn.com/ts/product/0f/ed/16/324098468c0dfe4e5bad885baa504f13.PNG'
  },
  {
    title: 'Đèn treo màn hình hỗ trợ ánh sáng khi làm việc vào ban đêm.',
    hashtag: 234,
    img: 'https://baseus-vn.com/wp-content/uploads/2021/06/0-152.jpg'
  },
  {
    title: 'Mô hình tôn ngộ không tu thành chín quả.',
    hashtag: 876,
    img: 'https://art-decor.vn/uploads/.thumbs/images/thac-khoi-tram-huong-tkta/001/thac-khoi-tram-huong-ket-hop-den-led-tkta-001-1.jpg'
  },
  {
    title: 'Custom đèn neon đủ các loại hình và chữ tùy thích.',
    hashtag: 365,
    img: 'https://ae01.alicdn.com/kf/H06cbda1f5ce6475581f24b748a9baabfx/LED-Neon-n-H-nh-Elip-H-nh-Tinh-Neon-K-n-Neon-Ch-y-B.jpg_Q90.jpg_.webp'
  },
  {
    title: 'Đèn hình khối decor thêm phần chill cho phòng.',
    hashtag: 170,
    img: 'https://cf.shopee.vn/file/106d7a2c18b7de6927243ad3c60d2ee1'
  },
  {
    title: 'Kệ laptop xoay 360 chắc chắn, linh hoạt.',
    hashtag: 169,
    img: 'https://congnghephukien.com/wp-content/uploads/2021/07/gia-do-laptop-macbook-cao-cap-chan-xoay-360-l02-01.jpg'
  },
]

export default main


// ẩn hiện input search

var box_search = document.querySelector('.box-search')
var search = document.querySelector('.search')

search.onclick = () => {
    box_search.classList.toggle('move-search')
    layout_search.classList.remove('layout_search-move')
    input_search.value = ''
}
var all_posts_product = postsNews.concat(list_products)
var input_search = document.querySelector('.input')
var layout_search = document.querySelector('.layout_search')
var box_search_i = document.querySelector('.box-search i')

input_search.addEventListener('keyup', (e) => {
  var search = input_search.value.toLowerCase().trim()
  var search_length = search.length
  var value_search = all_posts_product.filter(function(data){
    if(search_length !== 0) {
      var total_data = `${data.title} ${data.hashtag}`
      return total_data.toLowerCase().indexOf(search) > -1
    }
  })
  var render_search = value_search.map(function(data){
    if(value_search.length !== 0) {
      return `
    <div class="search_item">
    <img src="${data.img}" alt="${data.title}">
    <div class="search_item-title">
      ${data.title}
    </div>
    </div>
    `
    }
  })
  var render_search_length = render_search.length
  if(render_search_length !== 0) {
    if(e.which == 13) {
      document.querySelector('.box_search').innerHTML = render_search.join('')
      layout_search.classList.add('layout_search-move')
    }
    box_search_i.onclick = () => {
      document.querySelector('.box_search').innerHTML = render_search.join('')
      layout_search.classList.add('layout_search-move')
    }
  } else {
    layout_search.classList.remove('layout_search-move')
  }
})
