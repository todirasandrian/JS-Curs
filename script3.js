//const a = 3;
//const b = -2;

//console.log(a > 0 && b > 0);
//// expected output: false



//function A(){ console.log('called A'); return false; }
//function B(){ console.log('called B'); return true; }

//console.log( A() && B() );
//// logs "called A" due to the function call,
//// then logs false (which is the resulting value of the operator)












//function Shape() {
//	this.type = "shape";
//	this.getType = function(){
//			return this.type;
//	}
//}
//function Triangle(a,b,c) {
//	 this.type="triangle";
//	 this.a = a;
//	 this.b = b;
//	 this.c = c;
//}

//Triangle.prototype = new Shape();
//Triangle.prototype.getPerimeter = function() {
//return this.a + this.b + this.c;
//}
//var t = new Triangle(1, 2, 3);
//console.log(t.getType())
//console.log(t.getPerimeter());




//  let t = new  Triangle(1, 2, 3);
//  t.constructor === Triangle; //true     
//  shape.isPrototypeOf (t); //true
//  t.getPerimeter ();//6
//  t.getType ();//"triangle"             

//	var shape = {
//    type: 'triangle',
//    getType: function() {
//        return this.type;
//    }
//};

//function Triangle(a, b, c) {
//    this.a = a;
//    this.b = b;
//    this.c = c;
//}

//Triangle.prototype = shape;  // Maybe something goes wrong here

//Triangle.prototype.getPerimeter = function() {
//    return this.a + this.b + this.c;
//}

//// ======================================================
//var t = new Triangle(1, 2, 3);              
//console.log(t.constructor === Triangle);  // false
//console.log(shape.isPrototypeOf(t));      // true
//console.log(t.getPerimeter());            // 6
//console.log(t.getType());                 // triangle









//// constructor function
//function Person () {
//	this.name = 'John',
//	this.age = 23,

//	 this.greet = function () {
//			console.log('hello');
//	}
//}

//// create objects
//const person1 = new Person();


//// access properties
//console.log(person1.name);  // John








//function Tree(name) {
//  this.name = name;
//}

//var theTree = new Tree("Красное дерево");
//console.log("david " + theTree.constructor);











//// constructor function ++++++++++++++++++++++++++++
//function myFunc (Hero) {}
//let myHero = {
//  name: "Link",
//  age: 30,
//  height: 190,
//  speed: 20,
//  attack: 10,
//};
//myHero.name; 
//myHero.age; 


//console.log(myHero.name); 
//console.log(myHero.speed);






//let indexSlide = 1;
//showSld (indexSlide);

//let arrowArr = document.querySelectorAll ('a');
//console.log(arrowArr);

//for (let i = 0; i < arrowArr.length; i++) {
//	arrowArr[i].addEventListener('click', function () {
//		console.log(this.className);
//		if(this.className == 'previous' ) {
//			showSld(indexSlide -= 1);
//		} else if (this.className =='next'){
//			showSld(indexSlide += 1);
//		} else {
//			showSld(num);
//		}
//	})
//}

//function showSld (num) {
//	let slides = document.querySelectorAll ('.item');
//	if (num > slides.length) {
//		indexSlide = 1;
//	} else if (num < 1) {
//			indexSlide = Slides.length;
//		}
//		for (let slide of slides ) {
//			slide.style.display = "none";
//		}
//		slides [indexSlide - 1]. style.display = "block";
//	}
 







let indexSlide = 1;
showSld(indexSlide);

let arrowArr = document.querySelectorAll('a');
console.log(arrowArr);

for(let i = 0; i < arrowArr.length; i++) {
  arrowArr[i].addEventListener('click', function() {
    console.log(this.className);
    if(this.className == 'previous') {
      showSld(indexSlide -= 1);
    }else if(this.className == 'next') {
      showSld(indexSlide += 1);
    }else {
      showSld(num);
    }
  })
}

function showSld(num) {
  let slides = document.querySelectorAll('.item');
  if(num > slides.length) {
      indexSlide = 1;
  } else if(num < 1) {
    indexSlide = slides.length; 
  }

  for(let slide of slides) {
    slide.style.display = "none";
  }

  slides[indexSlide - 1].style.display = "block";
}
