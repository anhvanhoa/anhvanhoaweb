// option facebook

var message_links = document.querySelectorAll('.message')
var total_service = document.querySelector('.total-service')
var ads = document.querySelector('.ads')
var name_service = document.querySelector('.name-service')
var list_option = document.querySelector('.list-option')
var input_price = document.querySelector('#input-price')
var list_item_options = document.querySelectorAll('.list-option li')
var input_link = document.querySelector('#input-link')
var btn_completes = document.querySelectorAll('.complete')
var input_amount = document.querySelector('#input-amount')
var total_price = document.querySelector('.total-price')
var form_data = document.querySelector('.form-data')
var insurance = document.querySelector('#insurance')
var no_insurance = document.querySelector('#no-insurance')
var insurance_number = 0
var attention = document.querySelector('.attention')
var data
var form_service = document.querySelector('.form-service')
var down_option = document.querySelector('.option-service')


down_option.onclick = () => {
  list_option.classList.toggle('list-option-move')
}

function formShow() {
  form_data.style.display = 'block'
  document.querySelector('.form-maintenance').style.display = 'none'
}
function formHide() {
  form_data.style.display = 'none'
  document.querySelector('.form-maintenance').style.display = 'block'
}

for(list_item_option of list_item_options) {
  list_item_option.onclick = (e) => {
    name_service.innerText = e.target.childNodes[0].textContent.trim()
    for(message_link of message_links) {
        message_link.style.display = 'none'
    }

    attention.children[0].style.display = 'block'
    attention.children[1].style.display = 'none'

    sixNumber()

    if(e.target.parentElement.classList[0] == 'list-option-facebook') {
      if(e.target.childNodes[0].textContent.trim() == 'Buff comment') {
        input_price.value = 900
        input_amount.value = 50
        attention.children[0].style.display = 'none'
        attention.children[1].style.display = 'block'
      } else {
        input_amount.value = 500
        input_price.value = 80
      }
    }

    if(e.target.parentElement.classList[0] == 'list-option-instagram') {
      if(e.target.childNodes[0].textContent.trim() == 'Buff theo dõi') {
        input_price.value = 150
        input_amount.value = 500
      } else if (e.target.childNodes[0].textContent.trim() == 'Buff comment') {
        input_price.value = 800
        input_amount.value = 40
        attention.children[0].style.display = 'none'
        attention.children[1].style.display = 'block'
      } else {
        input_price.value = 80
        input_amount.value = 500
      }
    }

    if(e.target.parentElement.classList[0] == 'list-option-tiktok') {
      if(e.target.childNodes[0].textContent.trim() == 'Buff like') {
        input_price.value = 50
        formShow()
      } else if (e.target.childNodes[0].textContent.trim() == 'Buff comment') {
        formHide()
      } else {
        input_price.value = 80
        input_amount.value = 500
        formShow()
      }
    }
    
    totalMoney() 
  }
}


// kiem tra value input link

btn_completes[0].onclick = () => {

  

  if(input_amount.parentElement.parentElement.classList[1] == 'form-facebook') {
    if (input_link.value.length > 0) {
      if( input_link.value.indexOf('https://www.facebook.com') >= 0) {
        input_link.parentNode.children[2].style.display = 'none'
      }else {
        input_link.parentNode.children[2].style.display = 'block'
        input_link.parentNode.children[2].innerText = 'Link không đúng'
      }
    } else {
      input_link.parentNode.children[2].style.display = 'block'
    }

    if(name_service.innerText == 'Buff comment') {
      if(input_amount.value < 50 ) {
        input_amount.parentNode.children[2].style.display = 'block'
        input_amount.parentNode.children[2].innerText = 'Tối thiểu là 50 !'
      } else {
        input_amount.parentNode.children[2].style.display = 'none'
      }

      if(input_price.value < 900 ) {
        input_price.parentNode.children[2].style.display = 'block'
        input_price.parentNode.children[2].innerText = 'Tối thiểu là 900 !'
      }
      } else {
      if(input_amount.value < 500 ) {
      input_amount.parentNode.children[2].style.display = 'block'
      } else {
        input_amount.parentNode.children[2].style.display = 'none'
      }

      if(input_price.value < 80 ) {
        input_price.parentNode.children[2].style.display = 'block'
      } else {
        input_price.parentNode.children[2].style.display = 'none'
      }
    } 
  } else if (input_amount.parentElement.parentElement.classList[1] == 'form-instagram') {
    if (input_link.value.length > 0) {
      if( input_link.value.indexOf('https://www.instagram.com') >= 0) {
        input_link.parentNode.children[2].style.display = 'none'
      }else {
        input_link.parentNode.children[2].style.display = 'block'
        input_link.parentNode.children[2].innerText = 'Link không đúng'
      }
    } else {
      input_link.parentNode.children[2].style.display = 'block'
    }

    if(name_service.innerText == 'Buff theo dõi') {
      if(input_amount.value < 500 ) {
        input_amount.parentNode.children[2].style.display = 'block'
        input_amount.parentNode.children[2].innerText = 'Tối thiểu là 500 !'
      } else {
        input_amount.parentNode.children[2].style.display = 'none'
      }
      
      if(input_price.value < 150 ) {
        input_price.parentNode.children[2].style.display = 'block'
        input_price.parentNode.children[2].innerText = 'Tối thiểu là 150 !'
      } else {
        input_price.parentNode.children[2].style.display = 'none'
      }
    } else if (name_service.innerText == 'Buff comment') {
      if(input_amount.value < 40 ) {
        input_amount.parentNode.children[2].style.display = 'block'
        input_amount.parentNode.children[2].innerText = 'Tối thiểu là 40 !'
      } else {
        input_amount.parentNode.children[2].style.display = 'none'
      }

      if(input_price.value < 800 ) {
        input_price.parentNode.children[2].style.display = 'block'
        input_price.parentNode.children[2].innerText = 'Tối thiểu là 800 !'
      } else {
        input_price.parentNode.children[2].style.display = 'none'
      }
    } else {
      if(input_amount.value < 500 ) {
        input_amount.parentNode.children[2].style.display = 'block'
      } else {
        input_amount.parentNode.children[2].style.display = 'none'
      }
  
      if(input_price.value < 80 ) {
        input_price.parentNode.children[2].style.display = 'block'
      } else {
        input_price.parentNode.children[2].style.display = 'none'
      }
    }
  } else if (input_amount.parentElement.parentElement.classList[1] == 'form-tiktok') {
    if (input_link.value.length > 0) {
      if( input_link.value.indexOf('https://www.tiktok.com') >= 0) {
        input_link.parentNode.children[2].style.display = 'none'
      }else {
        input_link.parentNode.children[2].style.display = 'block'
        input_link.parentNode.children[2].innerText = 'Link không đúng'
      }
    } else {
      input_link.parentNode.children[2].style.display = 'block'
    }

    if(name_service.innerText == 'Buff like') {
      if(input_amount.value < 500 ) {
        input_amount.parentNode.children[2].style.display = 'block'
        input_amount.parentNode.children[2].innerText = 'Tối thiểu là 500 !'
      } else {
        input_amount.parentNode.children[2].style.display = 'none'
      }

      if(input_price.value < 50 ) {
        input_price.parentNode.children[2].style.display = 'block'
        input_price.parentNode.children[2].innerText = 'Tối thiểu là 50 !'
      } else {
        input_price.parentNode.children[2].style.display = 'none'
      }
    } else {
      if(input_amount.value < 500 ) {
        input_amount.parentNode.children[2].style.display = 'block'
      } else {
        input_amount.parentNode.children[2].style.display = 'none'
      }
  
      if(input_price.value < 80 ) {
        input_price.parentNode.children[2].style.display = 'block'
      } else {
        input_price.parentNode.children[2].style.display = 'none'
      }
    }
  }

  var isLink = input_link.parentNode.children[2].style.display == 'none'
  var isAmount = input_amount.parentNode.children[2].style.display == 'none'
  var isPrice = input_price.parentNode.children[2].style.display == 'none'

  if(isLink) {
    if(isAmount) {
      if(isPrice) {
        dataInput()
      }
    }
  }


  function dataInput() {
  console.log(
  data =  {
      social: list_option.children,
      nam_service: name_service.innerText,
      link: input_link.value,
      amount: input_amount.value,
      price: input_price.value,
      insurance: insurance_number,
      total: totalMoney(),
      code: code.innerText
    },
    sixNumber(),
    form_service.style.display = 'none',
    document.querySelector('.form-payment').style.display = 'block',
    receiveData(),
    attention.children[0].style.display = 'block',
    attention.children[1].style.display = 'none'
    )
}
}

btn_completes[1].addEventListener('click', () => {
  if(document.querySelector('.text-select').innerText == 'Chưa chọn') {
    select_payment.parentElement.children[2].style.display = 'block'
  } else {
    select_payment.parentElement.children[2].style.display = 'none'
    document.querySelector('.form-payment').style.display = 'none'
    document.querySelector('.form-thank').style.display = 'block' 
    console.log(
      {
        nam_bank: input_name_bank.value,
        code: data.code,
      }
    )

  }
})


function totalMoney() {
  var total_money = input_amount.value * input_price.value + insurance_number
  total_price.innerText = total_money
  
var commas = document.querySelectorAll('.comma')
function Comma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

for(comma of commas) {
  comma.innerText = Comma(comma.innerText) + " VND"
}
return total_money
}
totalMoney()

input_amount.onchange = () => {
  totalMoney()
}

input_price.onchange = () => {
  totalMoney()
}

insurance.onchange = () => {
  insurance_number = 20000
  totalMoney()
}

no_insurance.onchange = () => {
  insurance_number = 0
  totalMoney()
}

// code
var code = document.querySelector('.code')

function sixNumber() {
  var number_one = Math.ceil(Math.random() * 9)
  var number_two = Math.ceil(Math.random() * 9)
  var number_three = Math.ceil(Math.random() * 9)
  var number_four = Math.ceil(Math.random() * 9)
  var number_five = Math.ceil(Math.random() * 9)
  var number_six = Math.ceil(Math.random() * 9)
  var six_number = number_one + "" + number_two + "" + number_three + "" + number_four + "" + number_five + "" + number_six
  code.innerText = six_number
  return code
}

sixNumber()

// chuyen dich vu buff

var item_service_socials = document.querySelectorAll('.item-service-social')
var list_option_facebook = document.querySelector('.list-option-facebook')
var list_option_instagram = document.querySelector('.list-option-instagram')
var img_banner = document.querySelector('.img-banner img')
var list_option_tiktok = document.querySelector('.list-option-tiktok')
item_service_socials[0].onclick = () => {
  if(item_service_socials[0].classList[1] !== 'select-social') {
    item_service_socials[0].classList.add('select-social')
    item_service_socials[1].classList.remove('select-social')
    item_service_socials[2].classList.remove('select-social')
    list_option_instagram.classList.remove('list-option-move')
    list_option_facebook.classList.add('list-option-move')
    list_option_tiktok.classList.remove('list-option-move')
    name_service.innerText = 'Buff like fanpage'
    for(message_link of message_links) {
      message_link.style.display = 'none'
    }
    img_banner.src = 'https://static.kinhtedothi.vn/images/upload/2022/05/25/f1.jpg'
    form_data.classList.add('form-facebook')
    form_data.classList.remove('form-instagram')
    form_data.classList.remove('form-tiktok')
    input_price.value = 80
    input_amount.value = 500
    formShow()
    attention.children[0].style.display = 'block'
    attention.children[1].style.display = 'none'
  }
}

item_service_socials[1].onclick = () => {
  if(item_service_socials[1].classList[1] !== 'select-social') {
    item_service_socials[1].classList.add('select-social')
    item_service_socials[0].classList.remove('select-social')
    item_service_socials[2].classList.remove('select-social')
    list_option_instagram.classList.add('list-option-move')
    list_option_facebook.classList.remove('list-option-move')
    list_option_tiktok.classList.remove('list-option-move')
    name_service.innerText = 'Buff theo dõi'
    for(message_link of message_links) {
      message_link.style.display = 'none'
    }
    img_banner.src = 'https://cdn.tgdd.vn/hoi-dap/1356493/Thumbnail/the-gioi-di-dong-instagram-la-gi.jpg'
    form_data.classList.remove('form-facebook')
    form_data.classList.add('form-instagram')
    form_data.classList.remove('form-tiktok')
    input_price.value = 150
    input_amount.value = 500
    formShow()
    attention.children[0].style.display = 'block'
    attention.children[1].style.display = 'none'
  }
}

item_service_socials[2].onclick = () => {
  if(item_service_socials[2].classList[1] !== 'select-social') {
    item_service_socials[2].classList.add('select-social')
    item_service_socials[0].classList.remove('select-social')
    item_service_socials[1].classList.remove('select-social')
    list_option_instagram.classList.remove('list-option-move')
    list_option_facebook.classList.remove('list-option-move')
    list_option_tiktok.classList.add('list-option-move')
    name_service.innerText = 'Buff theo dõi'
    for(message_link of message_links) {
      message_link.style.display = 'none'
    }
    img_banner.src = 'https://cdn.tgdd.vn/Files/2021/10/13/1389903/tiktok-ra-mat-ung-dung-cho-lg-smart-tv-2020-va-202.jpeg'
    form_data.classList.remove('form-facebook')
    form_data.classList.remove('form-instagram')
    form_data.classList.add('form-tiktok')
    input_price.value = 80
    input_amount.value = 500
    formShow()
    attention.children[0].style.display = 'block'
    attention.children[1].style.display = 'none'
  }
}

var select_payment = document.querySelector('.select-payment')
var list_payment = document.querySelector('.list-payment')
var list_select_payments = document.querySelectorAll('.list-payment li')
var input_name = document.querySelector('#input-name')
var input_number = document.querySelector('#input-number')
var input_name_bank = document.querySelector('#input-name-bank')
var input_content = document.querySelector('#input-content')
var total_payment = document.querySelector('.total-payment')

function receiveData() {
  input_content.value = data.code
  total_payment.innerText = total_price.innerText 
}


select_payment.onclick = () => {
  list_payment.classList.toggle('list-payment-move')
}

for(list_select_payment of list_select_payments) {
  list_select_payment.onclick = (e) => {
    select_payment.children[0].innerText = e.target.innerText
    if(e.target.innerText == 'Ngân hàng') {
      input_name.value = 'NGUYEN VAN ANH'
      input_number.value = '7720117103004'
      input_name_bank.value = 'MB Bank'
    } else {
      input_name.value = 'NGUYEN VAN ANH'
      input_number.value = '0334376855'
      input_name_bank.value = 'MoMo'
    }
  }
}

var back = document.querySelector('.back') 

back.onclick = () => {
  form_service.style.display = 'block',
  document.querySelector('.form-payment').style.display = 'none'
}

var btn_service = document.querySelectorAll('.btn-service')

btn_service[0].onclick = () => {
  total_service.style.display = 'flex'
  ads.style.display = 'none'

  if(btn_service[0].classList[1] !== 'select-btn-service') {
    btn_service[0].classList.add('select-btn-service')
    btn_service[1].classList.remove('select-btn-service')
  } 
}

btn_service[1].onclick = () => {
  total_service.style.display = 'none'
  ads.style.display = 'block'
  if(btn_service[1].classList[1] !== 'select-btn-service') {
    btn_service[1].classList.add('select-btn-service')
    btn_service[0].classList.remove('select-btn-service')
  } 
}

// add "," number

// var commas = document.querySelectorAll('.comma')

// function Comma(value) {
//     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// }

// for(comma of commas) {
//     comma.innerText = Comma(comma.innerText) + " VND"
// }

