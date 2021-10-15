class Store {
    // constructor(){
    //     let aaa = 'currentPage'
    // }
    currentPage = 1

    hi(params) {
      console.log(`hi ${params}`)  
    }

}

console.log(Store.currentPage)//undefined

let newsList = new Store();
console.log(newsList.currentPage) //1
console.log(newsList.currentPage + 1)

// newsList.next = 2 
// console.log(newsList) //next 만들어짐
// console.log(newsList.next)

// newsList.currentPage = 2 //1 => 2
// console.log(newsList)

// newsList.hi('minsoo')