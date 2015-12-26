"use strict";
import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

var mon = {

  Monad: class Monad {
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
        mon.ret( f(mon.x, ...args ));
        return mon;

      };
    }
  },
   
  MonadIter: class MonadIter {
    constructor(z,g) {

      this.x = z;
      this.id = g;
      this.flag = false;
      this.p = [];

      this.block = () => {
        this.flag = true;
        return this;
        }

      this.release = () => {
        let self = this;
        let p = this.p;

        if (p[1] === 'bnd') {
          p[2](self.x, self, ...p[3]);
          self.flag = false;
          return self;
        }

        if (p[1] === 'ret') {
          self.x = p[2];
          self.flag = false;
          return self;
        }

        if (p[1] === 'fmap') { 
          p[3].ret(p[2](p[3].x, ...p[4]));
          self.flag = false;
          return p[3];
        }
     }

      this.bnd = (func, ...args) => {
        let self = this;
        if (self.flag === false) {
          func(self.x, self, ...args);
          return self;
        }
        if (self.flag === true) {
          self.p = [self.id, 'bnd', func, args];
          return self;
        }
      }

      this.fmap = (f, mon = this, ...args) => {   
        let self = this;
          if (self.flag === false) {
            mon.ret(f(mon.x,  ...args));
            return mon;
          }
          if (self.flag === true) {
            self.p = [self.id, 'fmap', f, mon, args];
            return self;
          }
      }

      this.ret = a => { 
        let self = this;
          if (self.flag === false) {
            self.x = a;
          }
          if (self.flag === true) {
          self.p = [self.id, 'ret', a];
          return self;
          }
        this.flag = false;
        return this;
      }
    }
  },

  pure: function pure(x,mon) {
  if (typeof mon.x.x == 'undefined') {
    return mon;
  }
  mon.ret(mon.x.x);
  return mon;
},

  Val: 0,

  M: function M(a) {
  return new Monad(a);
},



  mM1: M([]),  mM2: M(0),
  mM3: M(0),
  mM4: M(0),
  mM5: M(0),
  mM6: M(0),
  mM7: M(0),
  mM8: M(0),
  mM9: M(0),
  mM10: M(0),
  mM11: M([]),
  mM12: M(0),
  mM13: M(0),
  mM14: M(0),
  mM15: M(0),
  mM16: M(0),
  mM17: M(0),
  mM18: M(0),
  mM19: M(0),

  MI: function MI(a, b) {
  return new MonadIter(a, b);
},

  mMI1: MI(0, 'mMI1'),
  mMI2: MI(0, 'mMI2'),
  mMI3: MI(0, 'mMI3'),
  mMI4: MI(0, 'mMI4'),
  mMI5: MI(0, 'mMI5'),
  mMI6: MI(0, 'mMI6'),

  toNums: function toNums(x,mon) {
  mon.x = mon.x.map(x => parseFloat(x));
  return mon; 
},

newMessage: function newMessage() {
  this.mM11.x.push(h('div', 'mess: ' + this.mM16.x));
  console.log('ar: ', ar)
},

  calc: function calc(a,op,b) { 
    result;
  switch (op) {
      case "add": result: (a + b);
      break;
      case "subtract": result: (a - b);
      break;
      case "mult": result: (a * b);
      break;
      case "div": result: (a / b);
      break;
      case "concat": result: (a+""+b)*1.0;
      break;
      default : 'Major Malfunction in calc.';
  }
  return result;
},

  push: function push(a,mon,v) {
    mon.x.push(v);
    return mon;
},

  keys: function keys(a,mon,mon2) {
    mon2.ret(Object.keys(mon.x));
    return mon;
},

  popPush: function popPush(x,mon,a) {
  mon.x.pop;
  mon.x.push(a);
  return mon;
}
}
