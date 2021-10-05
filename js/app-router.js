const container = document.getElementById('root')
let ajax = new XMLHttpRequest();
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'//id값에 해당하는 내용

function news_List(){
    const newsFeed = getData(NEWS_URL)

    //array, push, join
    newsList = []
    newsList.push('<ul>')

    for(let i = 0; i<10; i++){
    newsList.push(`
    <li><a href='#${newsFeed[i].id}'>${newsFeed[i].title}(${newsFeed[i].comments_count})</a></li>
    `)
    }

    newsList.push('</ul>')

    container.innerHTML = newsList.join('')
}

function getData(url){
    ajax.open('GET', url, false)
    ajax.send()
    return JSON.parse(ajax.response)
}

function newsDetail(){
    const id = location.hash.substr(1)
    const newsContent = getData(CONTENT_URL.replace('@id', id))
    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div>
            <a href='#'>목록</a>
        </div>
    `
}

function router(){
    // newsList()
    const routePath = location.hash
    if(routePath === ''){
        news_List()
    }else{
        newsDetail()
    }
}

window.addEventListener('hashchange',router)

// window.addEventListener('hashchange',()=>{
//     const id = location.hash.substr(1)
//     const newsContent = getData(CONTENT_URL.replace('@id', id))
//     container.innerHTML = `
//         <h1>${newsContent.title}</h1>
//         <div>
//             <a href='#'>목록으로</a>
//         </div>
//     `
// })

router()