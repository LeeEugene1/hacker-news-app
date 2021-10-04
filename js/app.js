let ajax = new XMLHttpRequest();
ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);//비동기가아니라 동기로가져오겠다
ajax.send();

//bring data
// console.log(ajax.response)

//handling data
//보기쉽게하기위해 객체(json->object)로 변환함(자바스크립트가 제공해줌)
const newsFeed = JSON.parse(ajax.response)
console.log(newsFeed)