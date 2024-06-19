const mydata = ["영어","중국어","일본어"];

mydata.forEach(function(value, i){
    console.log("forEach의 첫번째 매개인자 : ",value);
    console.log("array문을 그대로 가져다 씀 :",mydata[i])
})
for(i in mydata){
    console.log("for in문 :",mydata[i]);
}

const testdata = [
        ["네이버", "naver"],
        ["다음", "daum"],
        ["구글", "google"]
]
// 1번문제 콘솔창에 daum이 출력되도록 한다.
console.log(testdata[1][1])
// 2번문제 콘솔창에 네이버, 다음, 구글이 출력되도록 한다. (foreach 사용하기)
testdata.forEach((v, i) => {
    console.log(v[0])
})

const testdataobj = [
    {
        nm : "네이버",
        href : "http://naver.com",
        cls : "naver"
    },
    {
        nm : "다음",
        href : "http://daum.net",
        cls : "daum"
    },
    {
        nm : "구글",
        href : "http://google.com",
        cls : "google"
    },
]

testdataobj.forEach((v,i) => {
    console.log(v.nm)
    console.log(v["nm"])
})

// 백틱을 사용해서
    // <li><a href="http://www.naver.com">네이버</a></li>
    // <li><a href="http://www.daum.net">다음</a></li>
    // <li><a href="http://www.google.com">구글</a></li>
testdataobj.forEach((v,i) => {
    console.log(`<li><a href="${v.href}">${v["nm"]}</a></li>`)
})


testdataobj.forEach((v,i) => {
    console.log(`<li class="${v.cls}"><a href="${v.href}">${v["nm"]}</a></li>`)
})
    
function nomalfun(a, b){
    // 선언적 함수 위치상관없이
    // 중요한 함수 (무겁다)
}    
    
const nomalfun = (a, b)=>{
    // 1회용 함수 (가볍다)
    // 실행위치 엄청 중요 
}
