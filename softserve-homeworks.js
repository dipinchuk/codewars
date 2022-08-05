function hw1() {
  // 1. Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
  function makeNegative(num) {
    return num < 0 ? num : -num; 
  }

  // 2. Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
  function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

  // 3. Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
  function move (position, roll) {
    return position + roll * 2;
  }

  // 4. Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
  function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
  }

  // 5. Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript
  function litres(time) {
    const litresPerHour = 0.5;
    return Math.floor(time * litresPerHour);
  }

  // 6. Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
  function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 != 0;
  }
}

function hw2() {
  // 1. Convert a string to an array https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
  function stringToArray(string){
    return string.split(" ");
  }

  // 2. DNA to RNA Conversion https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
  function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
  }

  // 3. Find Maximum and Minimum Values of a List https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
  var min = function(list){
    list.sort(( a, b ) =>  a - b);
    return list[0];
  }

  var max = function(list){
    list.sort(( a, b ) =>  a + b);
    return list[0];
  }

  // 4. Smallest value of an array https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
  function min(arr, toReturn) {
    return toReturn === 'value' ? Math.min.apply(null, arr) : arr.indexOf(Math.min.apply(null, arr)); 
  }


  // Поглиблені задачки (робити за бажанням):
  // 5. A wolf in sheep's clothing https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
  function warnTheSheep(queue) {
    const wolfPosition = queue.length - queue.indexOf('wolf') - 1;
    return  wolfPosition ===  0 ? `Pls go away and stop eating my sheep` : `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`;
  }

  // 6. Beginner - Lost Without a Map https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
  function maps(x){
    return x.map(x => x * 2);
  }

  // 7. Find the first non-consecutive number https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
  function firstNonConsecutive (arr) {
    for (var i = 0; i + 1 < arr.length; i++ ) {
      if(arr[i + 1] - arr[i] !== 1) {
        if(arr[i + 1] == 0 && arr[i] == -1) {
          continue;
          }
        return arr[i + 1];
      }
    }
    return null;
  }


  // Додаткові задачки по JS, кому мало. Для деяких ми ще не вивчили достатньо JS щоб їх зробити, але вже пробувати можна, якщо маєте час і бажання 🙂
  // 8. Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
  function doubleInteger(i) {
    return i * 2;
  }

  // 9.Century From Year    https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
  function century(year) {
    for (var start = 1, end = 100, i = 1 ; start <= year ; start += 100, end += 100, i++) {
        if(start <= year && year <= end) {
            return i;
          }
      }
  }

  // 10. Multyply two numbers    https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
  function multiply(num1, num2) {
    return num1 * num2;
    } 

  // 11. Volume of Cuboid    https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript 
  class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
  }

  // 12. Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
  function makeNegative(num) {
    return num < 0 ? num : -num; 
  }

  // 13. Cockroach speed    https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
  function cockroachSpeed(s) {
    return Math.floor(s * 27.777778);
  }

  // 14. Angle of triangle    https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

  function otherAngle(a, b) {
    return 180 - (a + b);
  }

  // 15. Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld -  sonYearsOld * 2);
  }

  // 16. Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
  // variant 1 ???
  function nthEven(n){
    let num = n;
    let res = -2;
    while (num > 0) {
      res += 2;
      num--;
    }
    return res;
  }

  // variant 2 
  function nthEven(n){
    return n * 2 - 2;
  }

  // 17. What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
  function getRealFloor(n) {
    if (n >= 0) {
        if(n > 12) {
          return n - 2;
        }
        else if (n === 0) {
          return 0;
        }
        return --n;
      }
    return n;
  }

  // 18. Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
  // variant 1
  function past(h, m, s){
    const minutesToSeconds = m * 60;
    const hoursToSeconds = h * 3600;
    return (hoursToSeconds + minutesToSeconds + s) * 1000; 
  }

  // variant 2
  function past(h, m, s){
    return (h * 3600 + m * 60 + s) * 1000; 
  }

  // 19. Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
  function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
  }
}

function hw3() {
  // 1. Find the smallest integer in the array https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
  
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      let duplicateArr = args;
      duplicateArr.sort(function(a, b) { return a - b; });
      return duplicateArr[0];
    }
  }
  
  // 2. Geometry Basics: Circle Circumference in 2D https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
  
  function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
  }
  
  // 3. Training JS #12: loop statement --for..in and for..of https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
  
  function giveMeFive(obj){
    const arr = [];
    for (var key in obj){
      if(key.length === 5 ) {
        arr.push(key);
      }
      if(obj[key].length === 5) {
         arr.push(obj[key]);
      }
    } 
    return arr;
  }
  
  // опційна поглиблена задачка про замикання (дивіться відео від мене спочатку https://youtu.be/XJdzZgzLc08)
  // 4. https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
  
  function buildFun(n){
    const res = [];
    for (let i = 0; i< n; i++){
      res.push(function(){
        return i;
      })
    }
    return res;
  }
  
  // опційна поглиблена задачка про наслідування 
  // https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

  class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status);
    }
    introduce() { 
      return `${super.introduce()}  Meow meow!`
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.master = master;
    }
    greetMaster() { 
      return `Hello ${this.master}`;
    } 
  }
}