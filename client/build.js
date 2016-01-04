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

var monad = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  class Monad {\n    constructor(z) {\n\n      this.x = z;\n\n      this.bnd = (func, ...args) => {\n        return func(this.x, this, ...args);\n      };\n\n      this.ret = a => {\n        this.x = a;\n        return this;\n      };\n\n      this.fmap = (f, mon = this, ...args) => {      \n        mon.ret( f(mon.x, ...args));\n        return mon;\n\n      };\n    }\n  };\n');

var monadIter = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  class MonadIter {\n    constructor(z,g) {\n\n      this.x = z;\n      this.id = g;\n      this.p = [];\n\n      this.block = () => {\n        this.x = true;\n        return this;\n        }\n\n      this.release = () => {\n        this.x = false;\n        let self = this;\n        let p = this.p;\n\n        if (p[1] === \'bnd\') {\n          p[2](self.x, self, ...p[3]);\n\n          return self;\n        }\n\n        if (p[1] === \'ret\') {\n          self.x = p[2];\n          return self;\n        }\n\n        if (p[1] === \'fmap\') { \n          p[3].ret(p[2](p[3].x, ...p[4]));\n          return p[3];\n        }\n     }\n\n      this.bnd = (func, ...args) => {\n        let self = this;\n        if (self.x === false) {\n          func(self.x, self, ...args);\n          return self;\n        }\n        if (self.x === true) {\n          self.p = [self.id, \'bnd\', func, args];\n          return self;\n        }\n      }\n\n      this.fmap = (f, mon = this, ...args) => {   \n        let self = this;\n          if (self.x === false) {\n            mon.ret(f(mon.x,  ...args));\n            return mon;\n          }\n          if (self.x === true) {\n            self.p = [self.id, \'fmap\', f, mon, args];\n            return self;\n          }\n      }\n\n      this.ret = a => { \n        let self = this;\n          if (self.x === false) {\n            self.x = a;\n          }\n          if (self.x === true) {\n          self.p = [self.id, \'ret\', a];\n          return self;\n          }\n        this.x = false;\n        return this;\n      }\n    }\n  }\n');

var steps = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  function updateSteps(event) {\n     mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)\n     .bnd(() => mM1.ret(\'Click the mMI2.release() button to proceed\')\n     .bnd(() => mMI2.block()\n     .bnd(() => mM2.ret(\'Click it again.\')\n     .bnd(() => mMI2.block()\n     .bnd(() => mM3.ret(\'Keep going\')\n     .bnd(() => mMI2.block()\n     .bnd(() => mM4.ret(\'One more\')\n     .bnd(() => mMI2.block()\n     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)\n     .bnd(mM4.ret)\n      ))))))))) \n     oldVnode = patch(oldVnode, newVnode());\n  }  ');

var dice = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, 'function updateNums(e) {\n  mM2.ret([e.target.value, e.target.textContent]) \n  .bnd(() => mM3)\n  .bnd(push,mM2.x[1])\n  .bnd(() => {mM1.x[mM2.x[0]] = ""; return mM5;})\n  .bnd(update)\n  updateCalc();\n}\n\nfunction updateOp(e) {\n       console.log(\'updateOp: mMI1.p, mMI2.p, mMI4.p \', mMI1.p, mMI2.p, mMI4.p);\n  mM8.ret(e.target.textContent);\n  updateCalc();\n}\n\nfunction updateCalc() {  \n  if ((mM8.x === 0) || (mM3.x.length !== 2)) {return};\n  monadStyle = inputStyleB;\n  chatStyle = inputStyleA;\n  mM19.bnd(() => (\n      ( mMI2.block()\n                    .bnd(() => mM14\n                    .ret(\'Score: \' + (mM13.x + 1))\n                    .bnd(() => mM13\n                    .ret(mM13.x + 1)\n                    .bnd(score,1)\n                    .bnd(newRoll))) ),\n\n      ( mMI4.block()\n                    .bnd(() => mM14\n                    .ret(\'Score: \' + (mM13.x + 3))\n                    .bnd(() => mM13\n                    .ret(mM13.x + 3)\n                    .bnd(score,3)\n                    .bnd(newRoll))) ),\n      ( mMI5.block()\n                    .bnd(() => mM14\n                    .ret(\'Score: \' + (mM13.x + 5))\n                    .bnd(() => mM13\n                    .ret(mM13.x + 5)\n                    .bnd(score,5)\n                    .bnd(newRoll))) ),\n       (mM3\n                    .bnd(toFloat)\n                    .bnd(() => mM7\n                    .fmap(() => {return calc(mM3.x[0], mM8.x, mM3.x[1])})\n                    .bnd(() => mM1.bnd(push, mM7.x)\n                    .bnd(clean)\n                    .bnd(next, (mM7.x == 18), mMI4)\n                    .bnd(next, (mM7.x == 20), mMI2) \n                    .bnd(next, ((mM7.x == 20 || mM7.x == 18) && (mM13.x % 5) === 0), mMI5) \n                    .bnd(displayOff, mM1.x.length)\n                    .bnd(() => mM3\n                    .ret([])\n                    .bnd(() => mM4\n                    .ret(0).bnd(mM8.ret)\n                    .bnd(() => mM5.ret(\'Done\')\n                    .bnd(update)   ))))) )\n  )) \n}\n\nvar newRoll = function(x,mon) {\n  socket.send(`CA#$42,' + Group + ',' + Name + ',6,6,12,20`);\n  return mon;\n}  ');

var send = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '    var send = function(event) {\n        socket.send("CA#$42,solo," + LoginName +",6,6,12,20");\n    };');

var pause = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  var pause = function(x,mon,t,mon2) {   \n     mon2.block();\n     let time = t*1000;\n     setTimeout( function() {\n       mon2.release();\n     },time );\n     return mon;\n  }  ');

var pauseDemo = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  mM1.ret("Wait two seconds")\n    .bnd(pause,2,mMI1)\n    .bnd(() => mMI1\n    .bnd(() => mM2.ret("Hello")\n    .bnd(() => mM3.ret(3)\n    .bnd(mM4.ret)\n    .bnd(cube)\n    .bnd(() => mM1.ret("Goodbye")\n    .bnd(update)))))  ');

var nex = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  var next = function next(x,mon,bool,mon2) {\n    if (bool) {\n      mon2.release();\n    }\n    return mon\n  }  ');

var updateNext = (0, _snabbdomH2['default'])('pre', { style: { color: '#AFEEEE' } }, '  function updateNext() {\n  mMI2.release()  \n  oldVnode = patch(oldVnode, newVnode());\n  }  ');

exports['default'] = { monad: monad, monadIter: monadIter, steps: steps, dice: dice, send: send, nex: nex, updateNext: updateNext, pause: pause, pauseDemo: pauseDemo };
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

var ar7 = [];
var Scoreboard = [];

var ar8 = function ar8() {
  var ar = [];
  var keys = Object.keys(ar7);
  for (var k in keys) {
    ar.push(ar7[k]);
    ar.push((0, _snabbdomH2['default'])('br'));
  }
  console.log('ar in ar8: ', ar);
  return ar;
};

var ar9 = function ar9() {
  var ar = [];
  var keys = Object.keys(Scoreboard);
  for (var k in keys) {
    ar.push(Scoreboard[k]);
    ar.push((0, _snabbdomH2['default'])('br'));
  }
  console.log('ar in ar9: ', ar);
  return ar;
};

var testMess = [];
testMess.push((0, _snabbdomH2['default'])('li', 'One'));

var messageAr = [];
messageAr.push((0, _snabbdomH2['default'])('li', 'Two'));

var newMessage = function newMessage(x) {
  messageAr.push((0, _snabbdomH2['default'])('li', x));
};

newMessage('Three'); // Diplays "Three" on page refresh.

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

function view(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, mI1, mI2) {
  return (0, _snabbdomH2['default'])('div', { style: style3 }, [(0, _snabbdomH2['default'])('div', { style: { width: '60%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: '20px' } }, [(0, _snabbdomH2['default'])('h1', { style: { textAlign: 'center', color: '#ffba66' } }, 'Websockets Monads Part 2'), (0, _snabbdomH2['default'])('span', 'This is the third page in the new Javascript Monads series. Links to the detailed explanations of the basic monad constructor, "Monad" and its methods and the arguments they take can be found at '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://schalk.net:4001' }, style: { color: '#EECCFF' } }, ' http://schalk.net:4001'), (0, _snabbdomH2['default'])('span', ' and a code repo at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk/fun-with-monads' }, style: { color: '#EECCFF' } }, ' github repo'), (0, _snabbdomH2['default'])('span', ' The original site, which was largely exploratory, is at: '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://transcendent.ninja' }, style: { color: '#EECCFF' } }, ' http://transcendent.ninja'), (0, _snabbdomH2['default'])('span', ' Links to all of the online demos can be found at: '), (0, _snabbdomH2['default'])('a', { props: { href: 'http://schalk.net' }, style: { color: '#EECCFF' } }, ' http://schalk.net'), (0, _snabbdomH2['default'])('span', ' and a code repo at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk/javascript-monads' }, style: { color: '#EECCFF' } }, ' repo'), (0, _snabbdomH2['default'])('span', '. The older site functions well, but it was bloated and unwieldy with React. I say "bloated" because I didn\'t need most of its core features. I didn\'t even use the state object and frequently called React.forceUpdate. Now I am at peace, using the '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/paldepind/snabbdom' }, style: { color: '#EECCFF' } }, ' snabbdom library. '), (0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center', color: '#ffba66' } }, 'Why I Call Them "Monads"'), (0, _snabbdomH2['default'])('p', 'Since the Monad and MonadIter instances are uniquely determined by their values (m.x for all monads m), and the values can be any value the is legal in ES6, it is immediately clear that there is a one to one correspondence between the infinite sets of all possible monads and all possible ES6 values, including primitives, arrays, functions, etc. The method "bnd" in combination with functions of the form f = (x,mon) => {do stuff without side effects outside the monad class; return mon } seem to obey the Haskell monad laws without types. The method "ret" is the left and right identity and chains of monad operations are commutative, as I believe I showed in previous pages. But "bnd" will accept functions of the type f = (x,mon) {do anything that can be done in ES6; return mon }. if mM1.x === 3, mM2.x === 4, and mM3.x === 0 (or anything else), after "mM1.bnd(() => cube(mM2.x, mM3))", mM1 and mM2 are unchanged, but mM3.x === 64. Monad methods can return ordinary values. For example, "bnd" with an ordinary function or a lambda leaves the calling monad unchanged, but returns the return value of the function operating on the monad\'s value. So mM1.bnd(_ => 52) leaves mM1 unchanged and returns 52, and  mM1.bnd(x => x*x) + 33 === 42 is true. So while the set of all possible instances of Monad and MonadIters along with the isomorphisms mapping them to one another might constitute a monad, the methods "bnd", "fmap", and "ret" are not restricted to taking only arguments that map within that set. '), (0, _snabbdomH2['default'])('p', 'This project is not about mathematics, it is about writing well organized, efficient, and easy to follow and modify code. This site displays the monad values in the right column which sometimes provides instant debugging information. The values of all of the monads can be found by typing them in the browser console since they are provided by a script, rather than a module. These entities which I am calling "monads" are versitile and rebust, and they function well in chains, propagating values from link to link as far as they are needed and always having access to one another.  I\'ll present a monad that propagates errors, kind of like the Haskell Maybe monad only without types. By the way, speaking of Haskell, if I modified monads by replacing m.x rather than mutating, which would require only a minor adjustment, the monads would be pure in the sense that Haskell MVar instances are pure. MVar instances\' values are removed and replaced, but the MVar instances are said to be immutable. That sort of thinking would seem to make Javascript objects immutable, even as attributes and methods come, go, and mutate. '), (0, _snabbdomH2['default'])('p'), (0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center', color: '#ffba66' } }, 'MonadIter'), (0, _snabbdomH2['default'])('p', 'The basic monad is shown and demonstrated elsewhere. It is also in a script named "monad.js" in the "index.html" file, so you can experiment with the monads in the browser consol. Here is the other constructor in this project: '), _cow2['default'].monadIter, (0, _snabbdomH2['default'])('p', 'As a refresher, Click the following button to execute the indicated code, then click the mMI2.release() button four times.'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: updateSteps }, style: style4 }, [_cow2['default'].steps]), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update6e, mouseleave: update6l, click: updateNext }, style: style6 }, [_cow2['default'].updateNext]), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('p', 'Now, a demonstration of monads handling websockets messages. In order to create a unique socket, please enter some name.'), (0, _snabbdomH2['default'])('input', { style: inputStyle1, on: { keydown: updateLogin } }), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update8e, mouseleave: update8l, click: updateNums }, props: { value: 0, id: '0' }, style: style8 }, m1[0]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update9e, mouseleave: update9l, click: updateNums }, props: { value: 1, id: '1' }, style: style9 }, m1[1]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update10e, mouseleave: update10l, click: updateNums }, props: { value: 2, id: '2' }, style: style10 }, m1[2]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update11e, mouseleave: update11l, click: updateNums }, props: { value: 3, id: '3' }, style: style11 }, m1[3]), (0, _snabbdomH2['default'])('p', ' '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update12e, mouseleave: update12l, click: updateOp }, style: style12 }, m17[0]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update13e, mouseleave: update13l, click: updateOp }, style: style13 }, m17[1]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update14e, mouseleave: update14l, click: updateOp }, style: style14 }, m17[2]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update15e, mouseleave: update15l, click: updateOp }, style: style15 }, m17[3]), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update16e, mouseleave: update16l, click: updateOp }, style: style16 }, m17[4]), (0, _snabbdomH2['default'])('p', '  '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update5e, mouseleave: update5l, click: function click() {
        styleRoll2 = { display: 'none' };
        monadStyle = inputStyleB;
        chatStyle = inputStyleA;
        send();
      } },
    style: styleRoll }, 'ROLL'), (0, _snabbdomH2['default'])('p', { style: styleRoll }, 'Now click ROLL. '), (0, _snabbdomH2['default'])('p', 'When you click a number, it disappears. After two numbers and an operator have been selected, in any order, a computation is performed and the result is placed at the end of the numbers row. Now there are three numbers. After another round, two are left and finally, the last computation can be performed. '), (0, _snabbdomH2['default'])('p', 'You can click ROLL repeatedly and the Haskell server will obligingly provide new numbers. The numbers simulate the roll of four dice; two six-sided, one twelve-sided, and one twenty-sided. '), (0, _snabbdomH2['default'])('p', 'Every time you compute the number 20, mM13.x (your score) gets incremented by 1. Every time you compute "18", your score increases by 3. Every time your score becomes a multiple of 5, you get 5 more points. Clicking numbers and operators calls updateNums and UpdateOps, respectively. They call updateCalc. updateCalc (below) clearly displays the flow of the application. First, mMI2 and mMI4 get locked, acquiring the code that might eventually get executed in their "p" attribute arrays. Then, in the third part of the tupple, tests are performed that might release the code being held in mMI2 and mMI4. "send" requests a new dice roll from the server. '), (0, _snabbdomH2['default'])('p', 'We could have substituted ordinary callbacks for the blocked MonadIter instances and called them when the test conditions were met. Indeed, we could dispense with the monads altogether. But, at no significant cost in browser resources, the code is neatly organized and easy to reason about. '), (0, _snabbdomH2['default'])('p', 'The one gotcha that might have caused the code to fail on the first run is the order of three parts of the tupple. The tests in part 3 are run after mMI2 and mMI4 have acquired the code that didn\'t run. Had the code in part three been placed in part one, mMI2.release() and mMI4.release() would have no code to execute in their p attributes. Here is the code:'), _cow2['default'].dice, (0, _snabbdomH2['default'])('p', 'When numbers are clicked, they get pushed into mM3.x, an initially empty array. When an operator is clicked, it replaces "0" as the value of mM8. So when mM3.x.length === 2 and mM8.x !== 0, it is time for the computation to go forward. '), (0, _snabbdomH2['default'])('p', 'mM1 holdd the initial dice roll and the subsequent arrays of available numbers. When calc returns "20", the player get an additional point and a new roll of the dice. If calc returns 18, you get three points. '), (0, _snabbdomH2['default'])('p', 'MonadIter instances together with the function "pause" provide a way to delay progress along a chain. "pause" is defined as follows:'), _cow2['default'].pause, (0, _snabbdomH2['default'])('p', 'If you click the button below, some monads will update four seconds later. '), (0, _snabbdomH2['default'])('button', { on: { mouseenter: update4e, mouseleave: update4l, click: updatePauseDemo }, style: style4 }, [_cow2['default'].pauseDemo]), (0, _snabbdomH2['default'])('p', 'If you pull your mouse away quickly, you can see mMI2 change from true to false. It was inconvenient to update the display, but "mouseleave" causes an update. '), (0, _snabbdomH2['default'])('p', 'The functions provided to bind are simple. They perform a task, and then return a monad so the chain can continue. The method "fmap" takes ordinary functions and assigns the return value to the calling monad.  m.fmap(f) assigns f(m.x) to m; in other words, m.x === f(m.x\') where x\' is the previous value of m.  Using ordinary functions with bnd does not modify the calling monad, but it does compute values using either the calling monad\'s value or a value provided in the argument provided to bnd. For example, "mM1.bnd(() => cu(2)) + mM1.bnd(cu) === 54 and mMx === 3 where cu = function cu(x) {return x*x*x}. I don\'t have an example in which there would be any advantage in using bnd with an ordinary function. I like the robustness of bnd as it is, but if bnd took only the functions specifically made for it, inadvertent use of ordinary functions as arguments would return a helpful error message. Still, I don\'t plan to restrict the functions bnd can accept as arguments. '), (0, _snabbdomH2['default'])('span', 'And here is "send": '), _cow2['default'].send, (0, _snabbdomH2['default'])('p', 'Using "bnd" with "next", any monad can release any block. At any link, a chain of monads can divide into 2, 3, or any number of chains going there separate ways but still communicating with one another. Large applications can be organized into a single tree. '), (0, _snabbdomH2['default'])('div', 'When you log in, the monad column on the right disappears and a score board and chat section open up. You can\'t compete or chat as long as you remain in the default group "solo", even if other people are in group "solo". But if you change to, say, group "chat54" in two separate browser windows, you will see that both windows share rolls of the dice and chat messages they enter. People in separate locations can agree on a group name and compete and chat. If the name is cryptic, something like "c#*&%@@9J#lu88", the chat and the game will likely remain private. If you change to group "test", you might encounter me fine tuning this page, or maybe someone else looking for company by changing to group "test".  '), (0, _snabbdomH2['default'])('span', { style: inputStyle1 }, 'You will need a socket in order to participate in chats and play the game. A socket is created when you log in. '), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', { style: inputStyle1 }, 'Enter some name here: '), (0, _snabbdomH2['default'])('input', { style: inputStyle1, on: { keydown: updateLogin } }), (0, _snabbdomH2['default'])('p', ' '), (0, _snabbdomH2['default'])('span', 'The code for this along with some other demonstrations can be found at '), (0, _snabbdomH2['default'])('a', { props: { href: 'https://github.com/dschalk?tab=repositories' }, style: { color: '#EECCFF' } }, 'github.com/dschalk/'), (0, _snabbdomH2['default'])('div', { style: { height: '300px' } }), (0, _snabbdomH2['default'])('div', { style: monadStyle }, [(0, _snabbdomH2['default'])('div', { style: { width: '30%', position: 'fixed', top: '15px', right: '15px', color: '#CCFDDA' } }, [(0, _snabbdomH2['default'])('div', { style: linkStyle }, [(0, _snabbdomH2['default'])('button', { on: { mouseenter: update5e, mouseleave: update5l, click: updateGotochat }, style: style5 }, 'Go To Chat')]), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM1.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m1), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM2.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m2), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM3.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m3), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM4.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m4), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM5.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m5), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM6.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m6), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM7.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m7), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM8.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m8), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM9.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m9), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM10.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m10), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM11.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m11), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM12.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m12), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM13.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m13), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM14.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m14), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM15.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m15), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM16.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m16), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM17.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m17), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM18.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m18), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mM19.x: '), (0, _snabbdomH2['default'])('span', { style: styleM }, '  ' + m19), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mMI1.x: '), (0, _snabbdomH2['default'])('span', { style: styleMI }, '  ' + mI1), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'mMI2.x: '), (0, _snabbdomH2['default'])('span', { style: styleMI }, '  ' + mI2), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('button', { on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR }, 'REFRESH'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('br')])]), (0, _snabbdomH2['default'])('div', { style: chatStyle }, [(0, _snabbdomH2['default'])('div', { style: { width: '30%', position: 'fixed', top: '40px', right: '15px', color: '#CCFDDA' } }, [(0, _snabbdomH2['default'])('button', { on: { mouseenter: update5e, mouseleave: update5l, click: updateGoback }, style: style5 }, 'Go Back'), (0, _snabbdomH2['default'])('br'), (0, _snabbdomH2['default'])('span', 'Change group: '), (0, _snabbdomH2['default'])('div', 'Group: ' + Group), (0, _snabbdomH2['default'])('input', { style: messageStyle, on: { keydown: updateGroup } }), (0, _snabbdomH2['default'])('div', 'Group: ' + Group), (0, _snabbdomH2['default'])('h2', { style: { text: 'center' } }, 'Score Board'), (0, _snabbdomH2['default'])('div', { props: { id: 'scoreboard' } }, ar9()), (0, _snabbdomH2['default'])('h2', { style: { textAlign: 'center' } }, 'Chat Messages'), (0, _snabbdomH2['default'])('span', { style: styleRoll }, 'Enter message here: '), (0, _snabbdomH2['default'])('input', { on: { keydown: updateMessage }, style: messageStyle }), (0, _snabbdomH2['default'])('div', { props: { id: 'chat3' } }, ar8())])])])]);
}

var newVnode = function newVnode() {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x, mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x, mMI1.x, mMI2.x);
  return newVnode;
};

function update0() {
  oldVnode = patch(oldVnode, newVnode());
}

var score = function score(x, mon, j) {
  socket.send('CG#$42,' + Group + ',' + Name + ',' + j);
  return mon;
};

var newRoll = function newRoll(x, mon) {
  socket.send('CA#$42,' + Group + ',' + Name + ',6,6,12,20');
  return mon;
};

function updateCalc() {
  if (mM8.x === 0 || mM3.x.length !== 2) {
    return;
  };
  monadStyle = inputStyleB;
  chatStyle = inputStyleA;
  mM19.bnd(function () {
    return mMI2.block().bnd(function () {
      return mM14.ret('Score: ' + (mM13.x + 1)).bnd(function () {
        return mM13.ret(mM13.x + 1).bnd(score, 1).bnd(newRoll);
      });
    }), mMI4.block().bnd(function () {
      return mM14.ret('Score: ' + (mM13.x + 3)).bnd(function () {
        return mM13.ret(mM13.x + 3).bnd(score, 3).bnd(newRoll);
      });
    }), mMI5.block().bnd(function () {
      return mM14.ret('Score: ' + (mM13.x + 5)).bnd(function () {
        return mM13.ret(mM13.x + 5).bnd(score, 5).bnd(newRoll);
      });
    }), mM3.bnd(toFloat).bnd(function () {
      return mM7.fmap(function () {
        return calc(mM3.x[0], mM8.x, mM3.x[1]);
      }).bnd(function () {
        return mM1.bnd(push, mM7.x).bnd(clean).bnd(next, mM7.x == 18, mMI4).bnd(next, mM7.x == 20, mMI2).bnd(next, (mM7.x == 20 || mM7.x == 18) && mM13.x % 5 === 0, mMI5).bnd(displayOff, mM1.x.length).bnd(function () {
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
  mM2.ret([e.target.value, e.target.textContent]).bnd(function () {
    return mM3;
  }).bnd(push, mM2.x[1]).bnd(function () {
    mM1.x[mM2.x[0]] = "";return mM5;
  }).bnd(update);
  updateCalc();
}

function updateOp(e) {
  console.log('updateOp: mMI1.p, mMI2.p, mMI4.p ', mMI1.p, mMI2.p, mMI4.p);
  mM8.ret(e.target.textContent);
  updateCalc();
}

function updateLogin(e) {
  var v = e.target.value;
  if (v == '') {
    return;
  }
  if (e.keyCode == 13) {
    socket.send("CC#$42" + v);
    Name = v;
    inputStyle1 = inputStyleB;
    messageStyle = inputStyleA;
    monadStyle = inputStyleB;
    chatStyle = inputStyleA;
    linkStyle = { display: 'block' };
    mM3.ret([]).bnd(mM2.ret);
    e.target.value = '';
    update0();
  }
}

function updateGoback() {
  monadStyle = inputStyleA;
  chatStyle = inputStyleB;
  update0();
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
  mM1.ret("Wait two seconds.").bnd(update).bnd(pause, 2, mMI1).bnd(function () {
    return mMI1.bnd(function () {
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
    e.target.value = '';
  }
  oldVnode = patch(oldVnode, newVnode());
}

function updateR(event) {
  mM2.ret(0).bnd(mM3.ret).bnd(mM4.ret).bnd(mM5.ret).bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret).bnd(mM9.ret).bnd(mM10.ret).bnd(mM15.ret).bnd(mM16.ret).bnd(mM17.ret).bnd(mM18.ret).bnd(mM19.ret).bnd(mMI1.ret).bnd(mMI2.ret).bnd(function () {
    return mM1.ret([]);
  }).bnd(function () {
    return mM14.ret('Score: ' + mM13.x);
  });
  oldVnode = patch(oldVnode, newVnode());
}

function updateSteps(event) {
  mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret).bnd(function () {
    return mM1.ret('Click the mMI2.release() button to proceed').bnd(function () {
      return mMI2.block().bnd(function () {
        return mM2.ret('Click it again.').bnd(function () {
          return mMI2.block().bnd(function () {
            return mM3.ret('Keep going').bnd(function () {
              return mMI2.block().bnd(function () {
                return mM4.ret('One more').bnd(function () {
                  return mMI2.block().bnd(function () {
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
  mMI2.release();
  oldVnode = patch(oldVnode, newVnode());
}

function updateEvent(event) {
  mMI2.ret(event);
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
        styleRoll = style2;
        styleRoll2 = style2;
        mM6.ret(sender + '\'s socket is now open');
        // mM9.ret([
        // socket.send( `CO#$42,groupB,Name` );
        update0();
      }

      break;

    case "CZ#$42":
      // Solutions.
      break;

    case "CA#$42":
      // Triggedarkred by ROLL
      mM1.ret([extra, ext4, ext5, ext6]);
      mM17.ret(['add', 'subtract', 'mult', 'div', 'concat']);
      mM3.ret([]);
      mM8.ret(0);
      mM6.bnd(displayInline, 1);
      mM6.bnd(displayInline, 2);
      mM6.bnd(displayInline, 3);
      // var senderScore = sender + "\u2019s score: " + mM13.x;
      // mM14.ret(senderScore);
      update0();
      break;

    case "DI#$42":
      // Changes data.information .
      break;

    case "CE#$42":
      // Updates numbers during play.
      break;

    case "CB#$42":
      // Updates the scoreboaard.
      var ar = [];
      var scores = extra.split("<br>");
      console.log('scores: ', scores);
      Scoreboard = scores;
      update0;
      break;

    case "CD#$42":
      gameArray.splice(0, 3);
      var message = gameArray.reduce(function (a, b) {
        return a + ", " + b;
      });
      var ar3 = sender + ': ' + message;
      ar7.push(ar3);
      update0();
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

var inputStyleA = { backgroundColor: '#d8d17d', display: 'inline' };

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

var update = function update(x, mon) {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x, mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x, mMI1.x, mMI2.x);
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
