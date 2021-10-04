let ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
ajax.open('GET', NEWS_URL, false);//비동기가아니라 동기로가져오겠다
ajax.send();

//bring data
// console.log(ajax.response)

//handling data
//보기쉽게하기위해 객체(json->object)로 변환함(자바스크립트가 제공해줌)
const newsFeed = JSON.parse(ajax.response)
console.log(newsFeed)

//ul li태그에 데이터 넣어보기
// document.getElementById('root').innerHTML = `<ul>
//     <li>${newsFeed[0].title}</li>
//     <li>${newsFeed[1].title}</li>
//     <li>${newsFeed[2].title}</li>
// ...
// </ul>`

//ul li태그에 데이터넣어보기(forEach)
const ul = document.createElement('ul')
for(let i = 0; i<10; i++){
    const li = document.createElement('li')
    li.innerHTML = newsFeed[i].title
    ul.appendChild(li)
}
document.getElementById('root').appendChild(ul)