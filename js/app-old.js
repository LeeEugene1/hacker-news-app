const container = document.getElementById('root')
let ajax = new XMLHttpRequest();
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'//id값에 해당하는 내용
ajax.open('GET', NEWS_URL, false);//비동기가아니라 동기로가져오겠다
ajax.send();
const newsFeed = JSON.parse(ajax.response)

window.addEventListener('hashchange',()=>{
    content.innerHTML = ''
    //hash태그가 바뀔때마다 함수호출
    // console.log('hash is changed')
    console.log(location.hash)//#123456
    const id = location.hash.substr(1)
    ajax.open('GET', CONTENT_URL.replace('@id', id), false)
    ajax.send()

    const newsContent = JSON.parse(ajax.response)
    console.log(newsContent)
    const title = document.createElement('h1')
    title.innerHTML = newsContent.title
    content.appendChild(title)
})

//ul li a태그에 데이터넣어보기(forEach)
const ul = document.createElement('ul')
for(let i = 0; i<10; i++){
    const li = document.createElement('li')
    const a = document.createElement('a')
    // a.href=`${CONTENT_URL}${newsFeed[i].id}.json`
    a.href=`#${newsFeed[i].id}`
    a.innerHTML = `${newsFeed[i].title}(${newsFeed[i].comments_count})`
    li.appendChild(a)
    ul.appendChild(li)
}
container.appendChild(ul)
container.appendChild(content)