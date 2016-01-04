"use strict";

import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

const monad = h('pre', {style: {color: '#AFEEEE' }}, `  class Monad {
    constructor(z) {

      this.x = z;

      this.bnd = (func, ...args) => {
        return func(this.x, this, ...args);
      };

      this.ret = a => {
        this.x = a;
        return this;
      };

      this.fmap = (f, mon = this, ...args) => {      
        mon.ret( f(mon.x, ...args));
        return mon;

      };
    }
  };
` );  
  
const monadIter = h('pre', {style: {color: '#AFEEEE' }}, `  class MonadIter {
    constructor(z,g) {

      this.x = z;
      this.id = g;
      this.p = [];

      this.block = () => {
        this.x = true;
        return this;
        }

      this.release = () => {
        this.x = false;
        let self = this;
        let p = this.p;

        if (p[1] === 'bnd') {
          p[2](self.x, self, ...p[3]);

          return self;
        }

        if (p[1] === 'ret') {
          self.x = p[2];
          return self;
        }

        if (p[1] === 'fmap') { 
          p[3].ret(p[2](p[3].x, ...p[4]));
          return p[3];
        }
     }

      this.bnd = (func, ...args) => {
        let self = this;
        if (self.x === false) {
          func(self.x, self, ...args);
          return self;
        }
        if (self.x === true) {
          self.p = [self.id, 'bnd', func, args];
          return self;
        }
      }

      this.fmap = (f, mon = this, ...args) => {   
        let self = this;
          if (self.x === false) {
            mon.ret(f(mon.x,  ...args));
            return mon;
          }
          if (self.x === true) {
            self.p = [self.id, 'fmap', f, mon, args];
            return self;
          }
      }

      this.ret = a => { 
        let self = this;
          if (self.x === false) {
            self.x = a;
          }
          if (self.x === true) {
          self.p = [self.id, 'ret', a];
          return self;
          }
        this.x = false;
        return this;
      }
    }
  }
` );  

const steps = h('pre', {style: {color: '#AFEEEE' }}, 
`  function updateSteps(event) {
     mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)
     .bnd(() => mM1.ret('Click the mMI2.release() button to proceed')
     .bnd(() => mMI2.block()
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMI2.block()
     .bnd(() => mM3.ret('Keep going')
     .bnd(() => mMI2.block()
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMI2.block()
     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)
     .bnd(mM4.ret)
      ))))))))) 
     oldVnode = patch(oldVnode, newVnode());
  }  ` 
);  

const dice = h('pre', {style: {color: '#AFEEEE' }}, 
`function updateNums(e) {
  mM2.ret([e.target.value, e.target.textContent]) 
  .bnd(() => mM3)
  .bnd(push,mM2.x[1])
  .bnd(() => {mM1.x[mM2.x[0]] = ""; return mM5;})
  .bnd(update)
  updateCalc();
}

function updateOp(e) {
       console.log('updateOp: mMI1.p, mMI2.p, mMI4.p ', mMI1.p, mMI2.p, mMI4.p);
  mM8.ret(e.target.textContent);
  updateCalc();
}

function updateCalc() {  
  if ((mM8.x === 0) || (mM3.x.length !== 2)) {return};
  monadStyle = inputStyleB;
  chatStyle = inputStyleA;
  mM19.bnd(() => (
      ( mMI2.block()
                    .bnd(() => mM14
                    .ret('Score: ' + (mM13.x + 1))
                    .bnd(() => mM13
                    .ret(mM13.x + 1)
                    .bnd(score,1)
                    .bnd(newRoll))) ),

      ( mMI4.block()
                    .bnd(() => mM14
                    .ret('Score: ' + (mM13.x + 3))
                    .bnd(() => mM13
                    .ret(mM13.x + 3)
                    .bnd(score,3)
                    .bnd(newRoll))) ),
      ( mMI5.block()
                    .bnd(() => mM14
                    .ret('Score: ' + (mM13.x + 5))
                    .bnd(() => mM13
                    .ret(mM13.x + 5)
                    .bnd(score,5)
                    .bnd(newRoll))) ),
       (mM3
                    .bnd(toFloat)
                    .bnd(() => mM7
                    .fmap(() => {return calc(mM3.x[0], mM8.x, mM3.x[1])})
                    .bnd(() => mM1.bnd(push, mM7.x)
                    .bnd(clean)
                    .bnd(next, (mM7.x == 18), mMI4)
                    .bnd(next, (mM7.x == 20), mMI2) 
                    .bnd(next, ((mM7.x == 20 || mM7.x == 18) && (mM13.x % 5) === 0), mMI5) 
                    .bnd(displayOff, mM1.x.length)
                    .bnd(() => mM3
                    .ret([])
                    .bnd(() => mM4
                    .ret(0).bnd(mM8.ret)
                    .bnd(() => mM5.ret('Done')
                    .bnd(update)   ))))) )
  )) 
}

var newRoll = function(x,mon) {
  socket.send(\`CA#$42,${Group},${Name},6,6,12,20\`);
  return mon;
}  `
);  

const send = h('pre', {style: {color: '#AFEEEE' }}, 
`    var send = function(event) {
        socket.send("CA#$42,solo," + LoginName +",6,6,12,20");
    };`
);  

const pause = h('pre', {style: {color: '#AFEEEE' }}, 
`  var pause = function(x,mon,t,mon2) {   
     mon2.block();
     let time = t*1000;
     setTimeout( function() {
       mon2.release();
     },time );
     return mon;
  }  `
);

const pauseDemo = h('pre', {style: {color: '#AFEEEE' }}, 
`  mM1.ret("Wait two seconds")
    .bnd(pause,2,mMI1)
    .bnd(() => mMI1
    .bnd(() => mM2.ret("Hello")
    .bnd(() => mM3.ret(3)
    .bnd(mM4.ret)
    .bnd(cube)
    .bnd(() => mM1.ret("Goodbye")
    .bnd(update)))))  `
);  

const nex = h('pre', {style: {color: '#AFEEEE' }}, 
`  var next = function next(x,mon,bool,mon2) {
    if (bool) {
      mon2.release();
    }
    return mon
  }  `
);  


const updateNext = h('pre', {style: {color: '#AFEEEE' }}, 
`  function updateNext() {
  mMI2.release()  
  oldVnode = patch(oldVnode, newVnode());
  }  `
);  


export default {monad, monadIter, steps, dice, send, nex, updateNext, pause, pauseDemo};




