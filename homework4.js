//#1
const spaces = function (num) {
  let space = "";
  while (num > 0) {
    num = num - 1;
    space = space + " "
  };
  return space;
};
const stars = function (num) {
  let star = "";
  while (num > 0) {
    num = num - 1;
    star = star + "*"
  };
  return star;
};
const triangleStars = function (h) {
  let line = "";
  let spaceNum = h
  while (h > 0) {
    line = spaces(spaceNum - h) + stars(h * 2 - 1);
    h = h - 1
    console.log(line);
  }
}
triangleStars(4)
//#2
const multiToSingle = function (array) {
  let arr = [];
  let a = array.length;
  let b = array[0].length;
  let b0 = array[0];
  let b1 = 0;
  let c = array[1].length;
  let c0 = array[1];
  let c1 = 0;
  let x = 0;
  while (a != 0) {
    while (b != 0) {
      arr[x] = b0[b1];
      b1=b1+1;
      x=x+1;
      b=b-1;
    };
    while (c != 0) {
      arr[x] = c0[c1];
      c1=c1+1;
      x=x+1;
      c=c-1;
    };
    a=a-1;
  };
  console.log(arr);
}

multiToSingle([[1, 2, 3], [4, 5, 6]]);
//#3
function findMinMax(arr, boolean) {
  if (boolean === true) {
    let length = arr.length;
    let a = 0;
    let b = 0;
    while (length != 0) {
      length = length - 1;
      b = arr[length];
      if (a < b) {
        a = b;
      };
    };
    console.log(a);
  };
  if (boolean === false) {
    let length = arr.length;
    let c = 0;
    let d = 0;
    while (length != 0) {
      length = length - 1;
      d = arr[length];
      if (c === 0) {
        c = arr[length];
      }
      if (c > d) {
        c = d;
      };
    };
    console.log(c);
  };
};
findMinMax([4, 2, 66, -44, 8], true)
findMinMax([4, 2, 66, -44, 8], false)
//#4
const forEach=function (arr, functionval){
    length = -1;
    while(length != arr.length-1){
        length=length+1;
        functionval(arr[length]);
      }
  }
    
  forEach([4,3,2], function (val){
    console.log(val);
  });
  //#5
  const sum = function (num) {
  let a = 0;
  let len = num.length;
  while (len != 0) {
    len = len - 1;
    a = a + num[len];
  };
  console.log(a)
};
sum([4, 3, 2]);
//#6
const reverse = function(str) {
  let len = str.length;
  let a = "";
  while (len != 0) {
    len = len - 1;
    a = a + str[len];
  }
  console.log(a);
};
reverse('abcd');
//#7
const checkerboard = function(num) {
  let a = num;
  let b = 1;
  let str = "";
  let str1 = "";
  while (num != 0) {
    b = b + 1;
    if (b % 2 === 0) {
      while (a != 0) {
        a = a - 1;
        str = str + "*";
      }
      str1 = str1 + str;
    }
    else {
      while (a != 0) {
        a--;
        str = str + "*";
      }
      str1 = str1 + " " + str;
    }
    str1 = str1 + "\n";
    num = num - 1;
  } console.log(str1);
};
checkerboard(5);
