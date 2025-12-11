const obj = {
  firstName: "Akshay",
  newFunc: function () {
    console.log(this);
  },
};

function x() {
  console.log(this);
}

obj.newFunc();
obj.newFunc.call();
// x.call(obj.newFunc);
// x.call();
// x();
