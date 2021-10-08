const container = document.getElementById('root')
let ajax = new XMLHttpRequest();
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'//id값에 해당하는 내용
// const store = {
//     currentPage:1,
// }
class Store {
    currentPage = 1
}

let newsList = new Store();
console.log(newsList.Store.currentPage)

function news_List(){
    const newsFeed = getData(NEWS_URL)
    //array, push, join
    newsList = []
    newsList.push('<ul>')

    for(let i = (store.currentPage - 1) * 10; i< store.currentPage * 10; i++){//1page -> i:0
        newsList.push(`
            <li><a href='#/show/${newsFeed[i].id}'>${newsFeed[i].title}(${newsFeed[i].comments_count})</a></li>
        `)
    }

    newsList.push('</ul>')

    newsList.push(`
        <div>
            <a href="#/page/${store.currentPage > 1 ? store.currentPage  - 1 : 1}">prev</a>
            <a href="#/page/${store.currentPage < 3 ? store.currentPage + 1 : store.currentPage}">next</a>
        </div>
    `)

    container.innerHTML = newsList.join('')
}
// function news_List(){
//     const newsFeed = getData(NEWS_URL)
//     //array, push, join
//     newsList = []
//     newsList.push('<ul>')

//     for(let i = (store.currentPage - 1) * 10; i< store.currentPage * 10; i++){//1page -> i:0
//         newsList.push(`
//             <li><a href='#/show/${newsFeed[i].id}'>${newsFeed[i].title}(${newsFeed[i].comments_count})</a></li>
//         `)
//     }

//     newsList.push('</ul>')

//     newsList.push(`
//         <div>
//             <a href="#/page/${store.currentPage > 1 ? store.currentPage  - 1 : 1}">prev</a>
//             <a href="#/page/${store.currentPage < 3 ? store.currentPage + 1 : store.currentPage}">next</a>
//         </div>
//     `)

//     container.innerHTML = newsList.join('')
// }

function getData(url){
    ajax.open('GET', url, false)
    ajax.send()
    return JSON.parse(ajax.response)
}

function newsDetail(){
    // const id = location.hash.substr(1) 
    const id = location.hash.substr(7) 
    const newsContent = getData(CONTENT_URL.replace('@id', id))
    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div>
            <a href='#/page/${store.currentPage}'>목록</a>
        </div>
    `
}

function router(){
    // newsList()
    const routePath = location.hash
    if(routePath === ''){
        news_List()
    }else if(routePath.indexOf('#/page/')>=0){//1(true), -1(false)
        // store.currentPage = 2;
        // bring number
        store.currentPage = parseInt(routePath.substr(7))// #/page/
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