//1
const array = [4, 6, 8, 3, 2, 6, 1, 5];
for (let el of array) {
  console.log(el);
}
console.log("\n");

//2
for (let i = 0; i < array.length; i++) {
  if (array[i] > 1) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(array[i]); j++) {
      if (array[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(array[i]);
    }
  }
}

//3
const array1 = [1, 2, 3],
  array2 = [4, 5, 6];
console.log(`Об'єднання маисвів: ${[...array1, ...array2]}`);

//4
const array3 = [6, 5, 4];
console.log(`Сортування масиву за зростанням: ${array3.sort((a, b) => a - b)}`);

//5
array1.push(array3);
console.log(`Додавання елементів у кінець масиву: ${array1}`);

//6
const array4 = [7, 8, 9];
array4.unshift(1, 2, 3);
console.log(`Додавання елементів на початок масиву: ${array4}`);

//7
const array5 = ["aaa", "bbb", "ccc"];
const array6 = ["aaa", "bbb", "ccc"];
console.log(`Перший елемент масиву: ${array5[0]}`);
array5.shift();
console.log(`Видалений перший елемент масиву: ${array5}`);

//8
console.log(`Останній елемент масиву: ${array6[array6.length - 1]}`);
array6.pop();
console.log(`Видалення останнього елементу масиву: ${array6}`);

//9
const array7 = [9, 10, 11, 12, 13];
const copyArray7 = array7.slice(1, 5);
console.log(copyArray7);

//10
const array8 = [1, 2, 3, 4, 5];
array8.splice(1, 2);
console.log(array8);

//11
const array9 = [1, 2, 3, 4, 5];
const newArray9 = array9.slice(2, 5);
console.log(newArray9);

//12
const array10 = [1, 2, 3, 4, 5];
array10.splice(1, 0, "w", "trtr");
array10.splice(7, 6, "vvv", "a", "hello");
console.log(array10);

//*
function countVovels(str, vovelsArray = ["a", "e", "i", "o", "u", "y"]) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vovelsArray.length; j++) {
      if (vovelsArray[j] === str[i]) {
        count++;
      }
    }
  }
  console.log(count);
}

countVovels("hello to you");
countVovels("lorem ipsum dolor sit amet");
