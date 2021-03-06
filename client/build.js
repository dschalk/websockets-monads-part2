(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _snabbdom = require('snabbdom');

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _snabbdomH = require('snabbdom/h');

var _snabbdomH2 = _interopRequireDefault(_snabbdomH);

var Group = 'solo';
var Name = 'Fred';

var monad = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  class Monad {\n    constructor(z) {\n\n      this.x = z;\n\n      this.bnd = (func, ...args) => {\n        return func(this.x, this, ...args);\n      };\n\n      this.ret = a => {\n        this.x = a;\n        return this;\n      };\n\n      this.fmap = (f, mon = this, ...args) => {      \n        mon.ret( f(mon.x, ...args));\n        return mon;\n\n      };\n    }\n  };\n');

var monadIter = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  class MonadIter {\n    constructor(z,g) {\n\n      this.x = z;\n      this.id = g;\n      this.p = [];\n\n      this.block = () => {\n        this.x = true;\n        return this;\n        }\n\n      this.release = () => {\n        this.x = false;\n        let self = this;\n        let p = this.p;\n\n        if (p[1] === \'bnd\') {\n          p[2](self.x, self, ...p[3]);\n\n          return self;\n        }\n\n        if (p[1] === \'ret\') {\n          self.x = p[2];\n          return self;\n        }\n\n        if (p[1] === \'fmap\') { \n          p[3].ret(p[2](p[3].x, ...p[4]));\n          return p[3];\n        }\n     }\n\n      this.bnd = (func, ...args) => {\n        let self = this;\n        if (self.x === false) {\n          func(self.x, self, ...args);\n          return self;\n        }\n        if (self.x === true) {\n          self.p = [self.id, \'bnd\', func, args];\n          return self;\n        }\n      }\n\n      this.fmap = (f, mon = this, ...args) => {   \n        let self = this;\n          if (self.x === false) {\n            mon.ret(f(mon.x,  ...args));\n            return mon;\n          }\n          if (self.x === true) {\n            self.p = [self.id, \'fmap\', f, mon, args];\n            return self;\n          }\n      }\n\n      this.ret = a => { \n        let self = this;\n          if (self.x === false) {\n            self.x = a;\n          }\n          if (self.x === true) {\n          self.p = [self.id, \'ret\', a];\n          return self;\n          }\n        this.x = false;\n        return this;\n      }\n    }\n  }\n');

var steps = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  function updateSteps(event) {\n     mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)\n     .bnd(() => mM1.ret(\'Click the mMI2.release() button to proceed\')\n     .bnd(() => mMI2.block()\n     .bnd(() => mM2.ret(\'Click it again.\')\n     .bnd(() => mMI2.block()\n     .bnd(() => mM3.ret(\'Keep going\')\n     .bnd(() => mMI2.block()\n     .bnd(() => mM4.ret(\'One more\')\n     .bnd(() => mMI2.block()\n     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)\n     .bnd(mM4.ret)\n      ))))))))) \n     oldVnode = patch(oldVnode, newVnode());\n  }  ');

var dice = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, 'function updateNums(e) {\n  socket.send(`EQ#$42,' + Group + ',' + Name + '`);\n  DS_T = 8000;\n  mM2.ret([e.target.value, e.target.textContent]) \n  .bnd(() => mM3)\n  .bnd(push,mM2.x[1])\n  .bnd(() => {mM1.x[mM2.x[0]] = ""; return mM5;})\n  .bnd(update)\n  updateCalc();\n}\n\nfunction updateOp(e) {\n  socket.send(`EQ#$42,' + Group + ',' + Name + '`);\n  DS_T = 8000;\n  mM8.ret(e.target.textContent);\n  updateCalc();\n}\n\nfunction updateCalc() {  \n  if ((mM8.x === 0) || (mM3.x.length !== 2)) {return};\n  monadStyle = inputStyleB;\n  chatStyle = inputStyleA;\n  mM19.bnd(() => (\n      ( mMZ2.block()\n                    .bnd(() => mM14\n                    .ret(\'Score: \' + (mM13.x + 1))\n                    .bnd(() => mM13\n                    .ret(mM13.x + 1)\n                    .bnd(score,1)\n                    .bnd(newRoll))) ),\n\n      ( mMZ4.block()\n                    .bnd(() => mM14\n                    .ret(\'Score: \' + (mM13.x + 3))\n                    .bnd(() => mM13\n                    .ret(mM13.x + 3)\n                    .bnd(score,3)\n                    .bnd(newRoll))) ),\n      ( mMZ5.block()\n                    .bnd(() => mM14\n                    .ret(\'Score: \' + (mM13.x + 5))\n                    .bnd(() => mM13\n                    .ret(mM13.x + 5)\n                    .bnd(score,5)\n                    .bnd(newRoll))) ),\n      ( mMZ6.block()\n                    .bnd(() => mM17\n                    .ret(\'Goals: \' + (mMgoals.x + 1))\n                    .bnd(() => mMgoals\n                    .ret(mMgoals.x + 1)\n                    .bnd(() => mM13\n                    .ret(0)\n                    .bnd(score,-25)\n                    .bnd(newRoll)))) ),     \n       (mM3\n                    .bnd(toFloat)\n                    .bnd(() => mM7\n                    .fmap(() => {return calc(mM3.x[0], mM8.x, mM3.x[1])})\n                    .bnd(() => mM1.bnd(push, mM7.x)\n                    .bnd(clean)\n                    .bnd(next, (mM7.x == 18), mMZ4)\n                    .bnd(next, (mM7.x == 20), mMZ2) \n                    .bnd(next, ((mM7.x == 20 || mM7.x == 18) && (mM13.x % 5) === 0), mMZ5) \n                    .bnd(next, (mM13.x == 25), mMZ6)\n                    .bnd(displayOff, mM1.x.length)\n                    .bnd(() => mM3\n                    .ret([])\n                    .bnd(() => mM4\n                    .ret(0).bnd(mM8.ret)\n                    .bnd(() => mM5.ret(\'Done\')\n                    .bnd(update)   ))))) ) )) \n}\n\nvar newRoll = function(x,mon) {\n  socket.send(`CA#$42,' + Group + ',' + Name + ',6,6,12,20`);\n  return mon;\n}  ');

var send = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '    var send = function(event) {\n        socket.send("CA#$42,solo," + LoginName +",6,6,12,20");\n    };');

var messages1 = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  var updateChildren = function updateMessages(x,mon,mon2) {  \n  mon.ret([]);\n  let ar = mon2.x;\n  let keys = Object.keys(ar);\n  for (let k in keys) {\n    mon.bnd(push, ar[k])\n    .bnd(push, h(\'br\'));\n  }\n  return mon;\n}\n');

var messages2 = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  mMmsg\n  .bnd(push,str)\n  .bnd( () => mMmessage\n  .bnd(updateChildren,mMmsg)\n  .bnd(update) );\n\n');

var messages3 = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  mMscbd.ret(scores)\n  .bnd( () => mMscoreboard\n  .bnd(updateChildren,mMscbd)\n  .bnd(update) )\n');

var numbers = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, 'var hyp = function hyp(x,y) {\n  return Math.sqrt(x*x + y*y);\n};\n');

var numbers2 = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, 'var test2 = function test2() {\n  let k = 0;\n  let j = 0;\n  mM4.ret({});\n  for (j=0; j<101; j+=1) {\n    for (k=0; k<5000; k+=1) {\n      mMZ7.block().bnd(() => mM4\n      .bnd(addObj, j, [j,k]))\n      mM3.bnd(next, ((hyp(j,k) - Math.floor(hyp(j,k))) === 0), mMZ7)\n    }\n  }\n}\n');

var numbers3 = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  mMnbrs.ret([]);\n  let ob = test2();\n  mMnbrs.x.push(\'The square root of the sum of the squares is a natural number:\');\n  for (let ants in ob) {mMnbrs.x.push(ob[ants][0] + \n    \' and  \' + ob[ants][1] + \' ________ result: \' + (hyp(ob[ants][0],ob[ants][1])) )};\n  mMnumbers\n  .bnd(updateChildren,mMnbrs)\n  .bnd(update);\n');

var pause = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  var pause = function(x,mon,t,mon2) {   \n     mon2.block();\n     let time = t*1000;\n     setTimeout( function() {\n       mon2.release();\n     },time );\n     return mon;\n  }  ');

var pauseDemo = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  mM1.ret("Wait two seconds")\n    .bnd(pause,2,mMI1)\n    .bnd(() => mMI1\n    .bnd(() => mM2.ret("Hello")\n    .bnd(() => mM3.ret(3)\n    .bnd(mM4.ret)\n    .bnd(cube)\n    .bnd(() => mM1.ret("Goodbye")\n    .bnd(update)))))  ');

var nex = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  var next = function next(x,mon,bool,mon2) {\n    if (bool) {\n      mon2.release();\n    }\n    return mon\n  }  ');

var updateNext = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  function updateNext() {\n  mMI2.release()  \n  oldVnode = patch(oldVnode, newVnode());\n  }  ');

exports['default'] = { monad: monad, monadIter: monadIter, steps: steps, dice: dice, send: send, nex: nex, updateNext: updateNext,
  pause: pause, pauseDemo: pauseDemo, messages1: messages1, messages2: messages2, messages3: messages3, numbers: numbers, numbers2: numbers2, numbers3: numbers3 };
module.exports = exports['default'];

},{"snabbdom":9,"snabbdom/h":3}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cow = require('./cow');

var _cow2 = _interopRequireDefault(_cow);

var _snabbdom = require('snabbdom');

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _snabbdomH = require('snabbdom/h');

var _snabbdomH2 = _interopRequireDefault(_snabbdomH);

var Group = 'solo';
var afocus = { autofocus: false };
var signinFocus = { autofocus: false };
var DS_T = 8000;
var SETINTERVAL = true;
var READY = 0;

var updateChildren = function updateMessages(v, mon, mon2) {
  mon.ret([]);
  var ar = mon2.x;
  var keys = Object.keys(ar);
  if ((v, mon == mMscoreboard)) {
    mon.bnd(push, 'player [score] [goals]').bnd(push, (0, _snabbdomH2['default'])('br'));
  }
  for (var k in keys) {
    mon.bnd(push, ar[k]).bnd(push, (0, _snabbdomH2['default'])('br'));
  }
  return mon;
};

function createWebSocket(path) {
  var host = window.location.hostname;
  if (host == '') host = 'localhost';
  var uri = 'ws://' + host + ':3093' + path;
  var Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
  return new Socket(uri);
}

var socket = createWebSocket('/');
var Name;

socket.onopen = function (event) {
  console.log('cow onopen ', event);
  update0();
};

var send = function send(event) {
  socket.send('CA#$42,' + Group + ',' + Name + ',6,6,12,20');
};

var patch = _snabbdom2['default'].init([require('snabbdom/modules/class'), // makes it easy to toggle classes
require('snabbdom/modules/props'), // for setting properties on DOM elements
require('snabbdom/modules/style'), // handles styling on elements with support for animations
require('snabbdom/modules/eventlisteners')]);
// attaches event listeners
https: //github.com/paldepind/snabbdom
var oldVnode = document.getElementById('placeholder');

function view(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, mI1, mI2, mI3, mI4, mI5, mI6, mI7, mI8, mI9) {
  console.log('READY: ', READY);
  return (0, _snabbdomH2['default'])('div', { style: style3 }, [(0, _snabbdomH2['default'])('div', { style: { width: '60%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: '20px' } }, [(0, _snabbdomH2['default'])('div', [(0, _snabbdomH2['default'])('a', { props: { href: '#signin' }, style: { color: '#FFBBBB' }, on: { click: updateFocus } }, 'Game/Chat')]), (0, _snabbdomH2['default'])('h1', { style: { textAlign: 'center', color: '#ffba66' } }, 'Websockets Monads Part 2'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'This is the third page in the new Javascript Monads series. Links to the detailed explanations of the basic monad constructor, "Monad" and its methods and the arguments they take can be found at '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://schalk.net:4001' }, style: { color: '#EECCFF' } }, ' http://schalk.net:4001'), (0, _snabbdomH2['default'])('span', ' and a code repo at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk/fun-with-monads' }, style: { color: '#EECCFF' } }, ' github repo'), (0, _snabbdomH2['default'])('span', ' The original site, which was largely exploratory, is at: '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://transcendent.ninja' }, style: { color: '#EECCFF' } }, ' http://transcendent.ninja'), (0, _snabbdomH2['default'])('span', ' Links to all of the online demos can be found at: '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://schalk.net' }, style: { color: '#EECCFF' } }, ' http://schalk.net'), (0, _snabbdomH2['default'])('span', ' and a code repo at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk/javascript-monads' }, style: { color: '#EECCFF' } }, ' repo'), (0, _snabbdomH2['default'])('span', '. The older site functions well, but it was bloated and unwieldy with React. I say "bloated" because I didn\'t need most of its core features. I didn\'t even use the state object and frequently called React.forceUpdate. Now I am at peace, using the '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/paldepind/snabbdom' }, style: { color: '#EECCFF' } }, ' snabbdom library. '), (0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center', color: '#ffba66' } }, 'Why I Call Them "Monads"'), (0, _snabbdomH2['default'])('p', 'Since the Monad and MonadIter instances are uniquely determined by their values (m.x for all monads m), and the values can be any value the is legal in ES6, it is immediately clear that there is a one to one correspondence between the infinite sets of all possible monads and all possible ES6 values, including primitives, arrays, functions, etc. The method "bnd" in combination with functions of the form f = (v,mon) => {alter the values of monads; return a monad } seem to obey the Haskell monad laws. The method "ret" makes any Javascript value into a monad with that value, and "ret"  is the left and right identity. Chains of monad operations using the bnd method are commutative; that is, m.bnd(f).bnd(g) is equivalent to m.bnd(x => f(g(x)). For example, "mM3.bnd(x => cube(x, add(x, mM3, 3))) === mM3.bnd(add,3).bnd(cube)" returns "true". Note that when we use "add" as a stand-alone function rather than an argument in the "bnd" method, we have to explicitly specify the value and the monad upon which add operates. '), (0, _snabbdomH2['default'])('p', 'But "bnd" accepts arguments that do more than facilitate mapping among monads. It will accept functions of the type f = (v,mon) {do anything that can be done in ES6; return mon }. if mM1.x === 3, mM2.x === 4, and mM3.x === 0 (or anything else), after "mM1.bnd(() => cube(mM2.x, mM3))", mM1 and mM2 are unchanged, but mM3.x === 64. Monad methods can return ordinary values. For example, "bnd" with an ordinary function or a lambda leaves the calling monad unchanged, but returns the return value of the function operating on the monad\'s value. So mM1.bnd(_ => 52) leaves mM1 unchanged and returns 52, and  mM1.bnd(x => x*x) + 33 === 42 is true. So while the set of all possible instances of Monad and MonadIters along with the isomorphisms mapping them to one another might constitute a monad, the methods "bnd", "fmap", and "ret" are not restricted to taking only arguments that map within that set. '), (0, _snabbdomH2['default'])('p', 'This project is not about mathematics, it is about organizing and streamlining code. The monad values displayed in the right column sometimes provide are there for demonstrations, but they can also provide instant debugging information. The values of all of the monads can be found by typing them in the browser console since they are provided by a script designated in index.html, rather than a module. These entities which I am calling "monads" are versitile and rebust, and they function well in chains, propagating values from link to link as far as they are needed and always having access to one another. They facilitate the writing of easy-to-understand and modify asynchronous code. I\'ll present a monad that propagates errors, kind of like the Haskell Maybe monad only without types. By the way, speaking of Haskell, if I modified monads by replacing m.x rather than mutating, which would require only a minor adjustment, the monads would be pure in the sense that Haskell MVar instances are pure. MVar instances\' values are removed and replaced, but the MVar instances are said to be immutable. That sort of thinking suggests that Javascript objects don\'t mutate when their attributes and methods come, go, and mutate. '), (0, _snabbdomH2['default'])('p'), (0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center', color: '#ffba66' } }, 'MonadIter'), (0, _snabbdomH2['default'])('p', 'The basic monad is shown and demonstrated elsewhere. It is also in a script named "monad.js" in the "index.html" file, so you can experiment with the monads in the browser consol. Here is the other constructor in this project: '), _cow2['default'].monadIter, (0, _snabbdomH2['default'])('p', { props: { id: 'signin' } }, 'As a refresher, Click the following button to execute the indicated code, then click the mMZ2.release() button four times.'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: updateSteps }, style: style4 }, [_cow2['default'].steps]), (0, _snabbdomH2['default'])('p', { props: { id: 'rules' } }), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update6e, mouseleave: update6l, click: updateNext }, style: style6 }, [_cow2['default'].updateNext]), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('p', { style: inputStyle1 }, 'Now, a demonstration of monads handling websockets messages. In order to create a unique socket, please enter some name.'), (0, _snabbdomH2['default'])('input', { on: { keydown: updateLogin, click: updateFocus }, style: inputStyle1, props: { signinFocus: signinFocus } }), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update8e, mouseleave: update8l, click: updateNums }, props: { value: 0, id: '0' }, style: style8 }, m1[0]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update9e, mouseleave: update9l, click: updateNums }, props: { value: 1, id: '1' }, style: style9 }, m1[1]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update10e, mouseleave: update10l, click: updateNums }, props: { value: 2, id: '2' }, style: style10 }, m1[2]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update11e, mouseleave: update11l, click: updateNums }, props: { value: 3, id: '3' }, style: style11 }, m1[3]), (0, _snabbdomH2['default'])('p', ' '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update12e, mouseleave: update12l, click: updateOp }, style: style12 }, m17[0]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update13e, mouseleave: update13l, click: updateOp }, style: style13 }, m17[1]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update14e, mouseleave: update14l, click: updateOp }, style: style14 }, m17[2]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update15e, mouseleave: update15l, click: updateOp }, style: style15 }, m17[3]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update16e, mouseleave: update16l, click: updateOp }, style: style16 }, m17[4]), (0, _snabbdomH2['default'])('p', '  '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: updateRoll }, style: styleRoll }, 'ROLL'), (0, _snabbdomH2['default'])('p', { style: styleRoll }, 'Now click ROLL. '), (0, _snabbdomH2['default'])('p', 'When you click a number, it disappears. After two numbers and an operator have been selected, in any order, a computation is performed and the result is placed at the end of the numbers row. Now there are three numbers. After another round, two are left and finally, the last computation can be performed. '), (0, _snabbdomH2['default'])('p', 'You can click ROLL repeatedly and the Haskell server will obligingly provide new numbers. The numbers simulate the roll of four dice; two six-sided, one twelve-sided, and one twenty-sided. '), (0, _snabbdomH2['default'])('p', { style: { color: '#EEBBBB' } }, 'RULES: You get one goal for reaching the number 25. Here\'s how you get there: Every time you compute the number 20, mM13.x (your score) gets incremented by 1. Every time you compute "18", your score increases by 3. Every time your score becomes 0 mod 5 (-5, 0, 5, 10, 15, ...) you get 5 more points. When you click ROLL you lose one point. Wheover has the most goals after five minutes wins.'), (0, _snabbdomH2['default'])('p', 'HINTS: The best way to get off to a good start is to click ROLL and then score 1 point by making the number 20. Score = 5! You hit 0 and got 5 points. You can use the same technique when you reach 5, 10, 15, and 20. Click ROLL when you are at twenty, then compute 20 to get a point, and you jump to 25. Goal! But you can\'t get to 25 from 24. Computing 20 jumps you all the way to 30. No goal; your score has to be exactly 25. '), (0, _snabbdomH2['default'])('p', 'Clicking numbers and operators calls updateNums and UpdateOps, respectively. They call updateCalc. updateCalc (below) clearly displays the flow of the application. First, mMZ2 and mMZ4 get locked, acquiring the code that might eventually get executed in their "p" attribute arrays. Then, in the third part of the tupple, tests are performed that might release the code being held in mMZ2 and mMZ4. "send" requests a new dice roll from the server. '), (0, _snabbdomH2['default'])('p', 'We could have substituted ordinary callbacks for the blocked MonadIter instances and called them when the test conditions were met. Indeed, we could dispense with the monads altogether. But, at no significant cost in browser resources, the code is neatly organized and easy to reason about. '), (0, _snabbdomH2['default'])('p', 'The one gotcha that might have caused the code to fail on the first run is the order of three parts of the tupple. The tests in part 3 are run after mMZ2 and mMZ4 have acquired the code that didn\'t run. Had the code in part three been placed in part one, mMZ2.release() and mMZ4.release() would have no code to execute in their p attributes. Here is the code:'), _cow2['default'].dice, (0, _snabbdomH2['default'])('p', 'When numbers are clicked, they get pushed into mM3.x, an initially empty array. When an operator is clicked, it replaces "0" as the value of mM8. So when mM3.x.length === 2 and mM8.x !== 0, it is time for the computation to go forward. '), (0, _snabbdomH2['default'])('p', 'mM1 holdd the initial dice roll and the subsequent arrays of available numbers. When calc returns "20", the player get an additional point and a new roll of the dice. If calc returns 18, you get three points. '), (0, _snabbdomH2['default'])('p', 'MonadIter instances together with the function "pause" provide a way to delay progress along a chain. "pause" is defined as follows:'), _cow2['default'].pause, (0, _snabbdomH2['default'])('p', 'If you click the button below, some monads will update four seconds later. '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: updatePauseDemo }, style: style4 }, [_cow2['default'].pauseDemo]), (0, _snabbdomH2['default'])('p', 'The functions provided to bind are simple. They perform a task, and then return a monad so the chain can continue. The method "fmap" takes ordinary functions and assigns the return value to the calling monad.  m.fmap(f) assigns f(m.x) to m; in other words, m.x === f(m.x\') where x\' is the previous value of m.  Using ordinary functions with bnd does not modify the calling monad, but it does compute values using either the calling monad\'s value or a value provided in the argument provided to bnd. For example, "mM1.bnd(() => cu(2)) + mM1.bnd(cu) === 54 and mMx === 3 where cu = function cu(x) {return x*x*x}. I don\'t have an example in which there would be any advantage in using bnd with an ordinary function. I like the robustness of bnd as it is, but if bnd took only the functions specifically made for it, inadvertent use of ordinary functions as arguments would return a helpful error message. Still, I don\'t plan to restrict the functions bnd can accept as arguments. '), (0, _snabbdomH2['default'])('p', 'Using "bnd" with "next", any monad can release any block. At any link, a chain of monads can divide into 2, 3, or any number of chains going there separate ways but still communicating with one another. Large applications can be organized into a single tree. '), (0, _snabbdomH2['default'])('div', 'When you log in, the monad column on the right disappears and a scoreboard and chat section open up. You can\'t compete or chat as long as you remain in the default group "solo", even if other people are in group "solo". But if you change to, say, group "chat54" in two separate browser windows, you will see that both windows share rolls of the dice and chat messages they enter. People in separate locations can agree on a group name and compete and chat. If the name is cryptic, something like "c#*&%@@9J#lu88", the chat and the game will likely remain private. If you change to group "test", you might encounter me fine tuning this page, or maybe someone else looking for company by changing to group "test".  '), (0, _snabbdomH2['default'])('span', { style: inputStyle1 }, 'You will need a socket in order to participate in chats and play the game. A socket is created when you log in. '), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', { style: inputStyle1 }, 'Enter some name here: '), (0, _snabbdomH2['default'])('input', { style: inputStyle1, on: { keydown: updateLogin } }), (0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center', color: '#ffba66' } }, 'Dynamic List Display'), (0, _snabbdomH2['default'])('p', 'The lists of group members and their scores, and the lists of messages broadcast within each group, are subject to change as scores change and players join or leave the group, and as messages get sent and broadcast to the group. When a group member\'s score changes and when a group member sends a message, the information goes to the server and the server broadcasts the updated state (maintained in a Haskell TMVar) to all group members. In socket.onmessage, the incoming messages are sorted according to their prefixes in a switch block and the following function is called: '), _cow2['default'].messages1, (0, _snabbdomH2['default'])('p', 'x is just a place holder needed in the bnd method. If the incoming message is a chat message, the reserved monads mMmsg and mMmessages perform as follow: '), _cow2['default'].messages2, (0, _snabbdomH2['default'])('p', 'When a chat message comes in, mMmsg updates itself with the new message and then hands over processing to mMmessages. mMmessages then calls updateChildren with its bnd method, designating mMmsg as the text source, and then calls .bnd(update). That\'s all there is to it. The array mMmessages.x sits quietly in view() as an array of children of its parent div. '), (0, _snabbdomH2['default'])('p', 'Similarly, the scoreboard is updated by: '), _cow2['default'].messages3, (0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center', color: '#ffba66' } }, 'Using MonadIter In Large Computations'), (0, _snabbdomH2['default'])('p', 'MonadIter can be used to filter results while computations are in progress. For example, suppose I wanted to know if every integer x between 0 and 100 has a counterpart y between 0 and 10,000 such that the square root of x*x + y*y is a whole number. 3 has 4 since the square root of 3*3 + 4*4 is 25, but what about 17, or 95? '), (0, _snabbdomH2['default'])('p', 'here is a function for computing the hypotenuse of a right triangle: '), _cow2['default'].numbers, (0, _snabbdomH2['default'])('p', 'And here is a function for computing our answer:'), _cow2['default'].numbers2, (0, _snabbdomH2['default'])('p', 'Since the keys in objects are unique, if x: [x,y] is in the list and x: [x,y\'] is discovered, x: [x,y\'] displaces x: [x,y]. Since the numbers in the loops increase, we end up with the pair with the highest value of y. Notice that 0 is paired with 10,000, although all values of y between 0 and 10,000 work. I tried to find a match for x bigger than what we get checking y\'s up to 5,000 so I checked up to 1,000,000. The pairs were exactly what I get going up to 5,000. So now I wonder if, for all integers x greater than zero, is there only one integer y such that hyp(x,y) is also an integer. '), (0, _snabbdomH2['default'])('p', 'The large button below shows the final step in the computation. Click it, and the solutions should appear shortly thereafter. '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: updateNumbers }, style: style4 }, [_cow2['default'].numbers3]), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update12e, mouseleave: update12l, click: updateErase }, style: linkStyle2 }, 'ERASE'), (0, _snabbdomH2['default'])('div', mMnumbers.x), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update12e, mouseleave: update12l, click: updateErase }, style: linkStyle2 }, 'ERASE'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'The repository for this open source project is at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk?tab=repositories' }, style: { color: '#FFEBCD' } }, 'github.com/dschalk/'), (0, _snabbdomH2['default'])('div', { style: { height: '300px' } }), (0, _snabbdomH2['default'])('div', { style: monadStyle }, [(0, _snabbdomH2['default'])('div', { style: { width: '30%', position: 'fixed', top: '15px', right: '15px', color: '#CCFDDA' } }, [(0, _snabbdomH2['default'])('div', { style: linkStyle }, [(0, _snabbdomH2['default'])('button', { on: { mouseenter: update5e, mouseleave: update5l, click: updateGotochat }, style: style5 }, 'Go To Chat')]), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM1.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m1), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM2.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m2), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM3.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m3), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM4.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m4), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM5.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m5), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM6.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m6), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM7.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m7), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM8.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m8), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM9.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m9), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM10.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m10), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM11.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m11), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM12.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m12), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM13.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m13), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM14.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m14), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM15.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m15), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM16.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m16), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM17.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m17), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM18.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m18), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM19.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m19), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mMnbrs.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + mMnbrs), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR }, 'REFRESH'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br')])]), (0, _snabbdomH2['default'])('div', { style: chatStyle }, [(0, _snabbdomH2['default'])('div', { style: { width: '30%', position: 'fixed', top: '40px', right: '15px', color: '#CCFDDA' } }, [(0, _snabbdomH2['default'])('button', { on: { mouseenter: update5e, mouseleave: update5l, click: updateGoback }, style: style5 }, 'Go Back'), (0, _snabbdomH2['default'])('a', { props: { href: '#rules' }, style: { color: '#FFBBBB' } }, 'Game Rules'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'Change group: '), (0, _snabbdomH2['default'])('input', { style: messageStyle, on: { keydown: updateGroup }, props: afocus }), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('div', 'Group: ' + Group), (0, _snabbdomH2['default'])('hr'), (0, _snabbdomH2['default'])('h3', { style: { textAlign: 'center', color: '#F08080' } }, 'Score Board'), (0, _snabbdomH2['default'])('div', { props: { id: 'scoreboard' }, style: { color: '#F08080' } }, mMscoreboard.x), (0, _snabbdomH2['default'])('hr'), (0, _snabbdomH2['default'])('h3', { style: { textAlign: 'center', color: '#DDBBBB' } }, 'Chat Messages'), (0, _snabbdomH2['default'])('p', { style: styleRoll }, 'Enter message here: '), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('input', { on: { keydown: updateMessage }, style: messageStyle }), (0, _snabbdomH2['default'])('div', { props: { id: 'scoreboard' }, style: { color: '#DDBBBB' } }, mMmessages.x), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('hr'), (0, _snabbdomH2['default'])('p'), (0, _snabbdomH2['default'])('span', 'Time remaining: '), (0, _snabbdomH2['default'])('span', { style: { color: '#FF0000', fontSize: '32px' } }, '' + DS_T / 1000)])])])]);
}

var newVnode = function newVnode() {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x, mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x, mMZ1.x, mMZ2.x, mMZ3.x, mMZ4.x, mMZ5.x, mMZ6.x, mMZ7.x, mMZ8.x, mMZ9.x);
  return newVnode;
};

function update0() {
  oldVnode = patch(oldVnode, newVnode());
}

var score = function score(v, mon, j) {
  var k = 0;
  if (mM13.x == 25) {
    k = 1;
  };
  socket.send('CG#$42,' + Group + ',' + Name + ',' + j + ',' + k);
  return mon;
};

var newRoll = function newRoll(v, mon) {
  socket.send('CA#$42,' + Group + ',' + Name + ',6,6,12,20');
  return mon;
};

function updateCalc() {
  READY = 0;
  console.log('IN updateCalc');
  monadStyle = inputStyleB;
  chatStyle = inputStyleA;
  mM19.bnd(function () {
    return mMZ2.block().bnd(function () {
      return mM14.ret('Score: ' + (mM13.x + 1)).bnd(function () {
        return mM13.ret(mM13.x + 1).bnd(score, 1).bnd(newRoll);
      });
    }), mMZ4.block().bnd(function () {
      return mM14.ret('Score: ' + (mM13.x + 3)).bnd(function () {
        return mM13.ret(mM13.x + 3).bnd(score, 3).bnd(newRoll);
      });
    }), mMZ5.block().bnd(function () {
      return mM14.ret('Score: ' + (mM13.x + 5)).bnd(function () {
        return mM13.ret(mM13.x + 5).bnd(score, 5).bnd(newRoll);
      });
    }), mMZ6.block().bnd(function () {
      return mM17.ret('Goals: ' + (mMgoals.x + 1)).bnd(function () {
        return mMgoals.ret(mMgoals.x + 1).bnd(function () {
          return mM13.ret(0).bnd(score, -25).bnd(newRoll);
        });
      });
    }), mM3.bnd(toFloat).bnd(function () {
      return mM7.fmap(function () {
        return calc(mM3.x[0], mM8.x, mM3.x[1]);
      }).bnd(function () {
        return mM1.bnd(push, mM7.x).bnd(clean).bnd(next, mM7.x == 18, mMZ4).bnd(next, mM7.x == 20, mMZ2).bnd(next, (mM7.x == 20 || mM7.x == 18) && mM13.x % 5 === 0, mMZ5).bnd(next, mM13.x == 25, mMZ6).bnd(displayOff, mM1.x.length).bnd(function () {
          return mM3.ret([]).bnd(function () {
            return mM4.ret(0).bnd(mM8.ret).bnd(function () {
              return mM5.ret('Done').bnd(update);
            });
          });
        });
      });
    });
  });
}

function updateNums(e) {
  socket.send('EQ#$42,' + Group + ',' + Name);
  DS_T = 8000;
  READY += 1;
  mM2.ret([e.target.value, e.target.textContent]).bnd(function () {
    return mM3;
  }).bnd(push, mM2.x[1]).bnd(function () {
    mM1.x[mM2.x[0]] = "";return mM5;
  }).bnd(update);
  if (READY === 3) {
    updateCalc();
  }
}

function updateOp(e) {
  socket.send('EQ#$42,' + Group + ',' + Name);
  DS_T = 8000;
  READY += 1;
  mM8.ret(e.target.textContent);
  if (READY === 3) {
    updateCalc();
  }
}

function updateFocus() {
  signinFocus = { autofocus: true };
  update0();
  signinFocus = { autofocus: true };
  update0();
}

function updateNumbers() {
  linkStyle2 = style2;
  mMnbrs.ret([]);
  var ob = test2();
  console.log('Amulus Quotomuls');
  mMnbrs.x.push('The square root of the sum of the squares is a natural number:');
  for (var ants in ob) {
    mMnbrs.x.push(ob[ants][0] + ' and  ' + ob[ants][1] + ' ________ result: ' + hyp(ob[ants][0], ob[ants][1]));
  };
  mMnumbers.bnd(updateChildren, mMnbrs).bnd(update);
}

function updateErase() {
  linkStyle2 = { display: 'none' };
  mMnumbers.ret([]).bnd(update);
}

function updateLogin(e) {
  var v = e.target.value;
  if (v == '') {
    return;
  }
  if (e.keyCode == 13) {
    socket.send("CC#$42" + v);
    Name = v;
    inputStyle1 = { display: 'none' };
    styleRoll = style4;
    messageStyle = inputStyleA;
    monadStyle = inputStyleB;
    chatStyle = inputStyleA;
    linkStyle = { display: 'block' };
    mM3.ret([]).bnd(mM2.ret);
    e.target.value = '';
    afocus = { autofocus: true };
    READY = 0;
    update0();
  }
}

function updateGoback() {
  monadStyle = inputStyleA;
  chatStyle = inputStyleB;
  update0();
}

function updateRoll() {
  styleRoll2 = { display: 'none' };
  monadStyle = inputStyleB;
  chatStyle = inputStyleA;
  mM14.ret('Score: ' + (mM13.x - 1)).bnd(function () {
    return mM13.ret(mM13.x - 1).bnd(score, -1);
  }).bnd(update);
  console.log('About to leave updateRoll');
  socket.send('CA#$42,' + Group + ',' + Name + ',6,6,12,20');
}

function rollDice() {
  setInterval(function () {
    DS_T -= 1000;
    if (DS_T === 0) {
      DS_T = 8000;
      socket.send('EQ#$42,' + Group + ',' + Name);
      socket.send('CA#$42,' + Group + ',' + Name + ',6,6,12,20');
    }
    update0();
  }, 1000);
}

function rollD(v, mon) {
  DS_T = 8000;
  if (SETINTERVAL) {
    setInterval(function () {
      DS_T -= 1000;
      update0();
      if (DS_T === 0) {
        DS_T = 8000;
        socket.send('CA#$42,' + Group + ',' + Name + ',6,6,12,20');
      }
    }, 1000);
  }
  SETINTERVAL = false;
  return mon;
}

function updateGotochat() {
  monadStyle = inputStyleB;
  chatStyle = inputStyleA;
  update0();
}

function updateMessage(e) {
  if (e.keyCode == 13) {
    socket.send('CD#$42,' + Group + ',' + Name + ',' + e.target.value);
    monadStyle = inputStyleB;
    chatStyle = inputStyleA;
    e.target.value = '';
  }
}

function updatePauseDemo() {
  mM1.ret("Wait two seconds.").bnd(update).bnd(pause, 2, mMZ1).bnd(function () {
    return mMZ1.bnd(function () {
      return mM2.ret("Hello").bnd(function () {
        return mM3.ret(3).bnd(mM4.ret).bnd(cube).bnd(function () {
          return mM1.ret("Goodbye").bnd(update);
        });
      });
    });
  });
  oldVnode = patch(oldVnode, newVnode());
}

function updateGroup(e) {
  Group = e.target.value;
  if (e.keyCode == 13) {
    socket.send('CO#$42,' + e.target.value + ',' + Name + ',' + e.target.value);
  }
  oldVnode = patch(oldVnode, newVnode());
}

function updateR(event) {
  mM2.ret(0).bnd(mM3.ret).bnd(mM4.ret).bnd(mM5.ret).bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret).bnd(mM9.ret).bnd(mM10.ret).bnd(mM15.ret).bnd(mM16.ret).bnd(mM17.ret).bnd(mM18.ret).bnd(mM19.ret).bnd(mMZ1.ret).bnd(mMZ2.ret).bnd(function () {
    return mM1.ret([]);
  }).bnd(function () {
    return mM14.ret('Score: ' + mM13.x);
  });
  oldVnode = patch(oldVnode, newVnode());
}

function updateSteps(event) {
  mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret).bnd(function () {
    return mM1.ret('Click the mMZ2.release() button to proceed').bnd(function () {
      return mMZ2.block().bnd(function () {
        return mM2.ret('Click it again.').bnd(function () {
          return mMZ2.block().bnd(function () {
            return mM3.ret('Keep going').bnd(function () {
              return mMZ2.block().bnd(function () {
                return mM4.ret('One more').bnd(function () {
                  return mMZ2.block().bnd(function () {
                    return mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  oldVnode = patch(oldVnode, newVnode());
}

function updateNext() {
  mMZ2.release();
  oldVnode = patch(oldVnode, newVnode());
}

function updateEvent(event) {
  mMZ2.ret(event);
  oldVnode = patch(oldVnode, newVnode());
}

oldVnode = patch(oldVnode, newVnode());

socket.onmessage = function (event) {
  console.log(event);
  var gameArray = event.data.split(",");
  var makeStr = function makeStr(x) {
    var l = x.length;
    var str = '';
    for (var i = 5; i < l; i += 1) {
      str = str + ', ' + x[i];
    }
    return x[4] + ' ' + str;
  };
  var d2 = event.data.substring(0, 6);
  // let d3 = event.data.substring(2,6);
  var sendersGroup = gameArray[1];
  var sender = gameArray[2];
  var extra = gameArray[3];
  var ext4 = gameArray[4];
  var ext5 = gameArray[5];
  var ext6 = gameArray[6];
  var ext7 = gameArray[7];
  var ext8 = gameArray[8];

  /* let group = that.data.group;
   let name = that.state.name;
   let ar = extra.split("<br>");
  let ar2 = ar.map(function (x) {
    return x.split("_")
  })  */
  switch (d2) {
    case "CC#$42":
      // Not broadcast. Login message.
      if (extra === '%#8*&&^1#$%^') {
        mM6.ret('Name taken');
        //that.setState({info: `You entered a name which is already taken`})
        setTimeout(function () {
          document.location.reload(false);
        }, 2000);
      } else {
        styleRoll = style4;
        styleRoll2 = style2;
        mM6.ret(sender + '\'s socket is now open');
        update0();
      }

      break;

    case "CZ#$42":
      // Solutions.
      break;

    case "CA#$42":
      // Triggedarkred by ROLL
      DS_T = 8000;
      mM1.ret([extra, ext4, ext5, ext6]).bnd(function () {
        return mM17.ret(['add', 'subtract', 'mult', 'div', 'concat']).bnd(function () {
          return mM3.ret([]).bnd(function () {
            return mM8.ret(0).bnd(function () {
              return mM6.bnd(displayInline, 1).bnd(displayInline, 2).bnd(displayInline, 3).bnd(rollD).bnd(update);
            });
          });
        });
      });
      break;

    case "DI#$42":
      // Changes data.information .
      break;

    case "CE#$42":
      // Updates numbers during play.
      break;

    case "CB#$42":
      // Updates the scoreboaard.
      var scores = extra.split("<br>");
      mMscbd.ret(scores).bnd(function () {
        return mMscoreboard.bnd(updateChildren, mMscbd).bnd(update);
      });
      break;

    case "CD#$42":
      gameArray.splice(0, 3);
      var message = gameArray.reduce(function (a, b) {
        return a + ", " + b;
      });
      var str = sender + ': ' + message;
      mMmsg.bnd(push, str).bnd(function () {
        return mMmessages.bnd(updateChildren, mMmsg).bnd(update);
      });
      break;

    case "CF#$42":
      // Re-set after a each clculation.
      break;

    case "CH#$42":
      break;

    case "CK#$42":
      // Updates DS_T after each calculation.
      break;

    case "CQ#$42":
      break;

    case "DQ#$42":
      break;

    case "EQ#$42":
      DS_T = 8000;
      break;

    case "FQ#$42":
      break;

    case "GQ#$42":
      break;

    case "HQ#$42":
      break;

    case "CR#$42":
      // Resets the player interface after each round.
      break;

    case "CY#$42":
      // Triggedarkred by clicking "SCORE!".
      break;

    case "XY#$42":
      // Triggedarkred by clicking "SCORE!" after "IMPOSSIBLE".
      break;

    case "DY#$42":
      // Triggered by clicking  "IMPOSSIBLE".
      break;

    case "DC#$42":
      break;

    case "DZ#$42":
      // NOT IN USE
      break;

    case "IA#$42":
      break;

    default:
      break;
  }
};

var inputStyle1 = inputStyleA;
var monadStyle = inputStyleA;
var linkStyle = { display: 'none' };
var linkStyle2 = { display: 'none' };

var inputStyleA = { backgroundColor: '#000000', color: '#FFBBBB', display: 'inline' };

var inputStyleB = { display: 'none' };

var messageStyle = inputStyleB;
var chatStyle = inputStyleB;

var style2 = { backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: '0px',
  color: '#CCFDCB', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '2px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px', display: 'inline' };

var style1 = { backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: '0px',
  color: 'yellow', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '2px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px', display: 'inline' };

var styleHide = { display: 'none' };

var style3 = { marginTop: '40px', marginLeft: '5%', marginRight: '5%', backgroundColor: '#000', height: '100%', width: '100%', color: '#FFE4C4', fontSize: '18px', textAlign: 'left' };

var styleM = { color: '#FF000A', marginLeft: '13px', marginBottom: '2px', fontSize: '21px' };

var styleMI = { color: '#FF000A', marginLeft: '7px', marginBottom: '2px', fontSize: '21px' };

var styleRoll = { display: 'none' };
var styleRoll2 = { display: 'none' };

var style0 = style2;

var style4 = style2;
var style4e = style1;
var style4l = style2;

var style5 = style2;
var style5e = style1;
var style5l = style2;

var style6 = style2;
var style6e = style1;
var style6l = style2;

var style7 = style2;
var style7e = style1;
var style7l = style2;

var style8 = style2;
var style8e = style1;
var style8l = style2;

var style9 = style2;
var style9e = style1;
var style9l = style2;

var style10 = style2;
var style10e = style1;
var style10l = style2;

var style11 = style2;
var style11e = style1;
var style11l = style2;

var style12 = style2;
var style12e = style1;
var style12l = style2;

var style13 = style2;
var style13e = style1;
var style13l = style2;

var style14 = style2;
var style14e = style1;
var style14l = style2;

var style15 = style2;
var style15e = style1;
var style15l = style2;

var style16 = style2;
var style16e = style1;
var style16l = style2;

var style17 = style2;
var style17e = style1;
var style17l = style2;

var style18 = style2;
var style18e = style1;
var style18l = style2;

var style19 = style2;
var style19e = style1;
var style19l = style2;

var style20 = style2;
var style20e = style1;
var style20l = style2;

var style21 = style2;
var style21e = style1;
var style21l = style2;

var style22 = style2;
var style22e = style1;
var style22l = style2;

var style23 = style2;
var style23e = style1;
var style23l = style2;

var styleR = style2;
var styleRe = style1;
var styleRl = style2;

function updateInput1(event) {
  inputStyle1 = inputStyleB;
  oldVnode = patch(oldVnode, newVnode());
}

function update3e(event) {
  style0 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update3l(event) {
  style0 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update4e(event) {
  style4 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update4l(event) {
  style4 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update5e(event) {
  style5 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update5l(event) {
  style5 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update6e(event) {
  style6 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update6l(event) {
  style6 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update7e(event) {
  style7 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update7l(event) {
  style7 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update8e(event) {
  style8 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update8l(event) {
  style8 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update9e(event) {
  style9 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update9l(event) {
  style9 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update10e(event) {
  style10 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update10l(event) {
  style10 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update11e(event) {
  style11 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update11l(event) {
  style11 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update12e(event) {
  style12 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update12l(event) {
  style12 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update13e(event) {
  style13 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update13l(event) {
  style13 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update14e(event) {
  style14 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update14l(event) {
  style14 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update15e(event) {
  style15 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update15l(event) {
  style15 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update16e(event) {
  style16 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update16l(event) {
  style16 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update17e(event) {
  style17 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update17l(event) {
  style13 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update18e(event) {
  style18 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update18l(event) {
  style18 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update19e(event) {
  style19 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update19l(event) {
  style19 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update20e(event) {
  style20 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update20l(event) {
  style20 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update21e(event) {
  style21 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update21l(event) {
  style21 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update22e(event) {
  style22 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update22l(event) {
  style22 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update23e(event) {
  style23 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update23l(event) {
  style23 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function updateRe(event) {
  styleR = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function updateRl(event) {
  styleR = style2;
  oldVnode = patch(oldVnode, newVnode());
}

var update = function update(v, mon) {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x, mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x, mMZ1.x, mMZ2.x, mMZ3.x, mMZ4.x, mMZ5.x, mMZ6.x, mMZ7.x, mMZ8.x, mMZ9.x);
  oldVnode = patch(oldVnode, newVnode);
  return mon;
};

},{"./cow":1,"snabbdom":9,"snabbdom/h":3,"snabbdom/modules/class":5,"snabbdom/modules/eventlisteners":6,"snabbdom/modules/props":7,"snabbdom/modules/style":8}],3:[function(require,module,exports){
var VNode = require('./vnode');
var is = require('./is');

function addNS(data, children) {
  data.ns = 'http://www.w3.org/2000/svg';
  if (children !== undefined) {
    for (var i = 0; i < children.length; ++i) {
      addNS(children[i].data, children[i].children);
    }
  }
}

module.exports = function h(sel, b, c) {
  var data = {}, children, text, i;
  if (arguments.length === 3) {
    data = b;
    if (is.array(c)) { children = c; }
    else if (is.primitive(c)) { text = c; }
  } else if (arguments.length === 2) {
    if (is.array(b)) { children = b; }
    else if (is.primitive(b)) { text = b; }
    else { data = b; }
  }
  if (is.array(children)) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = VNode(undefined, undefined, undefined, children[i]);
    }
  }
  if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g') {
    addNS(data, children);
  }
  return VNode(sel, data, children, text, undefined);
};

},{"./is":4,"./vnode":10}],4:[function(require,module,exports){
module.exports = {
  array: Array.isArray,
  primitive: function(s) { return typeof s === 'string' || typeof s === 'number'; },
};

},{}],5:[function(require,module,exports){
function updateClass(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldClass = oldVnode.data.class || {},
      klass = vnode.data.class || {};
  for (name in klass) {
    cur = klass[name];
    if (cur !== oldClass[name]) {
      elm.classList[cur ? 'add' : 'remove'](name);
    }
  }
}

module.exports = {create: updateClass, update: updateClass};

},{}],6:[function(require,module,exports){
var is = require('../is');

function arrInvoker(arr) {
  return function() {
    // Special case when length is two, for performance
    arr.length === 2 ? arr[0](arr[1]) : arr[0].apply(undefined, arr.slice(1));
  };
}

function fnInvoker(o) {
  return function(ev) { o.fn(ev); };
}

function updateEventListeners(oldVnode, vnode) {
  var name, cur, old, elm = vnode.elm,
      oldOn = oldVnode.data.on || {}, on = vnode.data.on;
  if (!on) return;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (old === undefined) {
      if (is.array(cur)) {
        elm.addEventListener(name, arrInvoker(cur));
      } else {
        cur = {fn: cur};
        on[name] = cur;
        elm.addEventListener(name, fnInvoker(cur));
      }
    } else if (is.array(old)) {
      // Deliberately modify old array since it's captured in closure created with `arrInvoker`
      old.length = cur.length;
      for (var i = 0; i < old.length; ++i) old[i] = cur[i];
      on[name]  = old;
    } else {
      old.fn = cur;
      on[name] = old;
    }
  }
}

module.exports = {create: updateEventListeners, update: updateEventListeners};

},{"../is":4}],7:[function(require,module,exports){
function updateProps(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldProps = oldVnode.data.props || {}, props = vnode.data.props || {};
  for (key in props) {
    cur = props[key];
    old = oldProps[key];
    if (old !== cur) {
      elm[key] = cur;
    }
  }
}

module.exports = {create: updateProps, update: updateProps};

},{}],8:[function(require,module,exports){
var raf = requestAnimationFrame || setTimeout;
var nextFrame = function(fn) { raf(function() { raf(fn); }); };

function setNextFrame(obj, prop, val) {
  nextFrame(function() { obj[prop] = val; });
}

function updateStyle(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldStyle = oldVnode.data.style || {},
      style = vnode.data.style || {},
      oldHasDel = 'delayed' in oldStyle;
  for (name in style) {
    cur = style[name];
    if (name === 'delayed') {
      for (name in style.delayed) {
        cur = style.delayed[name];
        if (!oldHasDel || cur !== oldStyle.delayed[name]) {
          setNextFrame(elm.style, name, cur);
        }
      }
    } else if (name !== 'remove' && cur !== oldStyle[name]) {
      elm.style[name] = cur;
    }
  }
}

function applyDestroyStyle(vnode) {
  var style, name, elm = vnode.elm, s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;
  for (name in style) {
    elm.style[name] = style[name];
  }
}

function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;
  if (!s || !s.remove) {
    rm();
    return;
  }
  var name, elm = vnode.elm, idx, i = 0, maxDur = 0,
      compStyle, style = s.remove, amount = 0, applied = [];
  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }
  compStyle = getComputedStyle(elm);
  var props = compStyle['transition-property'].split(', ');
  for (; i < props.length; ++i) {
    if(applied.indexOf(props[i]) !== -1) amount++;
  }
  elm.addEventListener('transitionend', function(ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}

module.exports = {create: updateStyle, update: updateStyle, destroy: applyDestroyStyle, remove: applyRemoveStyle};

},{}],9:[function(require,module,exports){
// jshint newcap: false
/* global require, module, document, Element */
'use strict';

var VNode = require('./vnode');
var is = require('./is');

function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }

function emptyNodeAt(elm) {
  return VNode(elm.tagName, {}, [], undefined, elm);
}

var emptyNode = VNode('', {}, [], undefined, undefined);

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, map = {}, key;
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }
  return map;
}

function createRmCb(childElm, listeners) {
  return function() {
    if (--listeners === 0) childElm.parentElement.removeChild(childElm);
  };
}

var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];

function init(modules) {
  var i, j, cbs = {};
  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
    }
  }

  function createElm(vnode, insertedVnodeQueue) {
    var i, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) i(vnode);
      if (isDef(i = data.vnode)) vnode = i;
    }
    var elm, children = vnode.children, sel = vnode.sel;
    if (isDef(sel)) {
      // Parse selector
      var hashIdx = sel.indexOf('#');
      var dotIdx = sel.indexOf('.', hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? document.createElementNS(i, tag)
                                                          : document.createElement(tag);
      if (hash < dot) elm.id = sel.slice(hash + 1, dot);
      if (dotIdx > 0) elm.className = sel.slice(dot+1).replace(/\./g, ' ');
      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          elm.appendChild(createElm(children[i], insertedVnodeQueue));
        }
      } else if (is.primitive(vnode.text)) {
        elm.appendChild(document.createTextNode(vnode.text));
      }
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (i.create) i.create(emptyNode, vnode);
        if (i.insert) insertedVnodeQueue.push(vnode);
      }
    } else {
      elm = vnode.elm = document.createTextNode(vnode.text);
    }
    return vnode.elm;
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      parentElm.insertBefore(createElm(vnodes[startIdx], insertedVnodeQueue), before);
    }
  }

  function invokeDestroyHook(vnode) {
    var i = vnode.data, j;
    if (isDef(i)) {
      if (isDef(i = i.hook) && isDef(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var i, listeners, rm, ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);
          for (i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);
          if (isDef(i = ch.data) && isDef(i = i.hook) && isDef(i = i.remove)) {
            i(ch, rm);
          } else {
            rm();
          }
        } else { // Text node
          parentElm.removeChild(ch.elm);
        }
      }
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0, newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) { // New element
          parentElm.insertBefore(createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
          oldCh[idxInOld] = undefined;
          parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx+1]) ? null : newCh[newEndIdx+1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var i, hook;
    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }
    if (isDef(i = oldVnode.data) && isDef(i = i.vnode)) oldVnode = i;
    if (isDef(i = vnode.data) && isDef(i = i.vnode)) vnode = i;
    var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
    if (oldVnode === vnode) return;
    if (isDef(vnode.data)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      i = vnode.data.hook;
      if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      }
    } else if (oldVnode.text !== vnode.text) {
      elm.textContent = vnode.text;
    }
    if (isDef(hook) && isDef(i = hook.postpatch)) {
      i(oldVnode, vnode);
    }
  }

  return function(oldVnode, vnode) {
    var i;
    var insertedVnodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();
    if (oldVnode instanceof Element) {
      if (oldVnode.parentElement !== null) {
        createElm(vnode, insertedVnodeQueue);
        oldVnode.parentElement.replaceChild(vnode.elm, oldVnode);
      } else {
        oldVnode = emptyNodeAt(oldVnode);
        patchVnode(oldVnode, vnode, insertedVnodeQueue);
      }
    } else {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    }
    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
}

module.exports = {init: init};

},{"./is":4,"./vnode":10}],10:[function(require,module,exports){
module.exports = function(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {sel: sel, data: data, children: children,
          text: text, elm: elm, key: key};
};

},{}]},{},[2]);
