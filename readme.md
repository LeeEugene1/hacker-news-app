만들어둔 Parcel 사용방법(+autoprefixer, babel)
노드환경설치
```npx digit LeeEugene1/parcel-template-basic 프로젝트명```
```npm install -D parcel-bundler```

실행
```npm run dev```

open API
```https://github.com/HackerNews/API```

ajax basic
```javascript
let ajax = new XMLHttpRequest()
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
ajax.open('GET', NEWS_URL, false);//false옵션은 비동기가아니라 동기로가져오겠다는뜻
ajax.send();

//bring data
console.log(ajax.response)

//handling data
//보기쉽게하기위해 객체(json->object)로 변환함(자바스크립트가 제공해줌)
const newsFeed = JSON.parse(ajax.response)
console.log(newsFeed)

//[연습] ul li태그에 데이터 넣어보기
// document.getElementById('root').innerHTML = `<ul>
//     <li>${newsFeed[0].title}</li>
//     <li>${newsFeed[1].title}</li>
//     <li>${newsFeed[2].title}</li>
// ...
// </ul>`
```

리펙토링 결과
* DOM API remove
* multiple code remove
* app-old.js => app.js