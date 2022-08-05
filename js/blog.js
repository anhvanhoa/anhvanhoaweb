// Hashtag

var hashtag_blog = document.querySelector('.hashtag-blog')
var name_hashtag_blog = document.querySelector('.name-hashtag-blog')
var list_hashtag_blog = document.querySelector('.list-hashtag-blog')

name_hashtag_blog.onclick = () => {
  list_hashtag_blog.classList.toggle('list-hashtag-blog-move')
}

list_hashtag_blog.onclick = (e) => {
  list_hashtag_blog.classList.remove('list-hashtag-blog-move')
  
  var hashtag_blog_length = hashtag_blog.children.length
  var list_text  = []
  for(var i = 0; i < hashtag_blog_length; i++) {
    list_text += [hashtag_blog.children[i].innerText]
  }

  if(list_text.indexOf(e.target.innerText, list_hashtag_blog.innerText.length) == -1) {
    let x = hashtag_blog.children.length - 1
    if(hashtag_blog.children[x].innerText !== e.target.innerText) {
      var div = document.createElement('div')
      div.classList.add('add-hashtag-blog')
      div.innerText = e.target.innerText
      hashtag_blog.appendChild(div)
      var div2 = document.createElement('div')
      div2.classList.add('close-hashtag')
      div2.innerHTML = '+'
      div.appendChild(div2)
      closeHashtag()
    }
  }
}

function closeHashtag() {
  var close_hashtags = document.querySelectorAll('.close-hashtag')
  for(var i = 0; i < close_hashtags.length; i++) {
  close_hashtags[i].onclick = (e) => {
    e.target.parentElement.remove()
  }

}
}