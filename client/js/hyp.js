var hyp = function hyp(x,y) {
  return Math.sqrt(x*x + y*y);
}

var rand = function rand(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
 
var test = function test() {
  mM4.ret([]);
  let k = 0;
  for (k=0; k<1000; k+=1) {
    mM1.ret(rand(1,10));
    mM2.ret(rand(1,10));
    mMZ7.block().bnd(() => mM4.bnd(push( (mM1.x, mM2.x))))
    mM3.bnd(next, ((hyp(mM1.x,mM2.x) - Math.floor(hyp(mM1.x, mM2.x))) === 0),mMZ7)
  }
}

