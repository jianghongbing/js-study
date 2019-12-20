var a = 1
let b = 2
const c = 3 

{
  var a = 4;
  let b = 5;
  const c = 6
  console.log(a, b, c);
}
console.log(a, b, c); //a的值变成了4, b, c还是为2和3

const age = 16;
if (age >= 18) {
  console.log('你已经成年了')
}

if (age >= 18) {
  console.log('你已经成年了');
} else {
  console.log('你还未成年');
}

if (age >= 18) {
  console.log('你已经成年了');
} else if (age >= 12) {
  console.log('你是个少年');
} else {
  console.log('你还是个儿童');
}

const type = 'iPad';

switch (type) {
  case 'iPhone':
    console.log('手机');
    break;
  case 'iPad':
    console.log('平板电脑');
    break;
  case 'iMac':
    console.log('电脑');
    break;
  default:
    console.log('类型不详');
    break;
}

const string = '';
console.log(string === '');