const store = ["사과","파인애플","수박","체리"];
// 변수 const 선언
// 변수 존재여부 , 값 편집

for(let x =0;  x < store.length; x++ ){
    console.log("for문",store[x]);
}

// for in으로 하기
for(x in store){
    console.log("for in 문",store[x]);
}

store.forEach(function(ele,idx){
    console.log("forEach문",ele)
})

const storetest = [
                  ["사과", 10000, 7000]
                 ,["파인애플", 5000, ""]
                 ,["수박", 13000, ""]
                 ,["체리", 20000, 13000]]

// 체리는 원가가 20000원이고 할인해서 13000원에 판매중입니다.

// console.log(`${storetest[3][0]}는 원가가 ${storetest[3][1]}원이고 할인해서 ${storetest[3][2]}원에 판매중입니다.`)

for(x in storetest){
    console.log(`${storetest[x][0]}는 원가가 ${storetest[x][1]}원이고 할인해서 ${storetest[x][2]}원에 판매중입니다.`)
}

storetest.forEach((vv, ii) =>{
    console.log(`${vv[0]}는 원가가 ${vv[1]}원이고 할인해서 ${vv[2]}원에 판매중입니다.`)
})

const stringdataapi = "서울ㅣ종로구ㅣ명륜3가ㅣ감나무집";
// string [], {} -> 350N.parse
// string -> array 전환 split 메서드
// array -> string 전환 join 메서드

let charArray = ["H", "e", "l", "l", "o"];
let word = charArray.join("");
console.log(word, typeof word);
// 출력: "Hello"

let characters = "Hello";
let charArray2 = characters.split("");
console.log(charArray);
// 출력: ["H", "e", "l", "l", "o"]
