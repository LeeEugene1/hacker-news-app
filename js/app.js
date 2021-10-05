const container = document.getElementById('root')
let ajax = new XMLHttpRequest();
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'//id값에 해당하는 내용

function getData(url){
    ajax.open('GET', url, false)
    ajax.send()
    return JSON.parse(ajax.response)
}

const newsFeed = getData(NEWS_URL)

window.addEventListener('hashchange',()=>{
    const div = document.createElement('div')
    console.log(location.hash)//#123456
    const id = location.hash.substr(1)
    const newsContent = getData(CONTENT_URL.replace('@id', id))
    div.innerHTML = `
        <h1>${newsContent.title}</h1>
    `
    content.appendChild(div.firstElementChild)
})

//ul li a태그에 데이터넣어보기
const ul = document.createElement('ul')
for(let i = 0; i<10; i++){
    const div = document.createElement('div')
    div.innerHTML = `<li><a href='#${newsFeed[i].id}'>${newsFeed[i].title}(${newsFeed[i].comments_count})</a></li>`
    ul.appendChild(div.firstElementChild)//div태그안에있는 li추출 div.children[0]도 가능
}
container.appendChild(ul)
container.appendChild(content)