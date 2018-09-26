

const a = function(length, width, height) {

	return (length * width * height);
}; 

const b = function() {
	
	return 6;
};


const c = function(c1, c2) {
	console.log(4)
};



const d = function(string1, string2, string3) {
	if (string1.length >= string2.length && string1.length >= string3.length) {
    return string1;
  } else if (string2.length >= string1.length && string2.length >= string3.length) {
    return string2;
  } else {
    return string3;
  }
};

const e = function(num1, num2) {

 if(num1 === num2) {
 return 0;
 } else if(num1 >= num2) {
 return 1;
 } else {
 return -1;
 }
};

const f = function(f1, f2) {
	return f1*f2;
};

const g = function(g1, g2) {
	return g1 / g2;
};

const triangleArea = function(base, height) {
  return g(f(base, height), 2);
};

const numLength = function(num) {
	return (num + "").length;
};

const h = function(s1, s2, n) {
	if(s1 + s2 >= n) {
	return 1;
	} else {
	return -1;
	}
};

const runStuff = function(num1, num2, str) {
	if(str === 'rectangle') {
	return num1 * num2;
	} else if(str === 'triangle') {
	return (num1 * num2) / 2;
	} else {
	return -1;
	}
}



