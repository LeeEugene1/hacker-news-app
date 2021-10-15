const container = document.getElementById('root')
let ajax = new XMLHttpRequest();
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'//id값에 해당하는 내용
const store = {
    currentPage:1,
}
function news_List(){
    const newsFeed = getData(NEWS_URL)
    //array, push, join
    newsList = []
    let template = `
        <div>
            <h1>Hacker News</h1>
            <ul>
                {{__news_feed__}}
            </ul>
            <div>
                <a href="#/page/{{__prev__page}}">이전</a>
                <a href="#/page/{{__next__page}}">다음</a>
            </div>
        </div>
    `
    // newsList.push('<ul>')

    for(let i = (store.currentPage - 1) * 10; i< store.currentPage * 10; i++){//1page -> i:0
        newsList.push(`
            <li><a href='#/show/${newsFeed[i].id}'>${newsFeed[i].title}(${newsFeed[i].comments_count})</a></li>
        `)
    }

    // newsList.push('</ul>')

    // newsList.push(`
    //     <div>
    //         <a href="#/page/${store.currentPage > 1 ? store.currentPage -1 : 1}">prev</a>
    //         <a href="#/page/${store.currentPage < 4 ? 3 : store.currentPage +1 }">next</a>
    //     </div>
    // `)
    template = template.replace(`{{__news_feed__}}`,newsList.join(''))
    template = template.replace(`{{__prev__page}}`, `${store.currentPage > 1 ? store.currentPage -1 : 1}`)
    template = template.replace(`{{__next__page}}`, `${store.currentPage >= 3 ? 3 : store.currentPage + 1}`)


    container.innerHTML = template

    // container.innerHTML = newsList.join("")
}

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
    console.log(routePath)
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

router()