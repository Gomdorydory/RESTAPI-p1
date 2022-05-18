// GET 요청을 위한 비동기 함수
const get = url => {
  const get = url => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        //서버의 응답을 콘솔에 출력한다.
        console.log(JSON.parse(xhr.response));
      } else {
        console.error(`${xhr.status} ${xhr.statusText}`);
      }
    };
  };
}


let g = 0;

//비동기 함수인 setTimeout 함수는 콜백 함수의 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하지 못한다.
setTimeout(() => { g = 100; }, 0);
console.log(g);  //0


// GET 요청을 위한 비동기 함수
const get = url => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      // 1. 서버의 응답을 반환한다.
      return JSON.parse(xhr. response);
    }
    console.error(`${xhr.status} ${xhr.statusText}`);
  };
};

// 2. id가 1인 post를 취득
const reponse = get('htts://jsonplaceholer.typicode.com/posts/1');
console.log(response); //undefined

//문자열을 숫자로 타입변환한다.
var x = '1'; //문자열 1
console.log(+x); //1
console.log(x); //'1'

//불리언 값을 숫자로 타입변환한다.
x = true;
console.log(+x); //1
console.log(x); //true

//불리언 값을 숫자로 타입변환한다.
x = false;
console.log(+x); //0
console.log(x); //false

//문자열을 숫자로 타입변환할 수 없으므로, NaN을 반환한다.
x = 'Hello';
console.log(+x); //NaN
console.log(x); // "Hello"


//부호를 반전한다.
-(-10); // 10
//문자열을 숫자로 타입 변환한다.
-'10'; // -10
//불리언 값을 숫자로 타입 변환한다.
-true; // -1
//문자열은 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
-'Hello'; //NaN

//문자열 연결 연산자
'1' + 2; // '12'
1 + '2'; // '12'

// true는 1로 타입 변환된다.
1 + true; // 2

// false는 0으로 타입 변환된다.
1 + false; // 1

// null은 0으로 타입 변환된다.
1 + null; // 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined; // NaN

// 문자열 연결 연산자
str += 'Lee'; //str = str + 'Lee';
console.log(str); // 'My name is Lee'

var a, b, c;

//연쇄 할당. 오른쪽에서 왼쪽으로 진행.
// c = 0 : 0으로 평가됨.
// c = 0 : 0으로 평가됨.
// a = 0 : 0으로 평가됨.
a = b = c= 0;

console.log(a, b, c); // 0 0 0 


var result = score >= 60 ? 'pass' : 'fail';

var x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); //짝수