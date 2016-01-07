
The monads handle websockets chat messages with two reserved monads, mMmsg for holding the array of all chat message strings that come in from the server, and mMmessage for holding the list of Snabbdom vnodes. The Snabbdom chat message display is generated by placing the array mMmessage.x in view() as children of a div. Here is the definition of the function mMmessage calls with its bnd method:

  var updateMessages = function msg(x,mon) {  
    mon.ret([]);
    let ar2 = mMmsg.x;
    let keys = Object.keys(ar2);
    for (let k in keys) {
      mon.bnd(push, ar2[k])
      .bnd(push, h('br'));
    }
    return mon;
  }
Inside of onmessage, chat messages get intercepted and processed as follows:

  case "CD#$42":
    gameArray.splice(0,3);
    let message = gameArray.reduce((a,b) => a + ", " + b)  
    let str = sender + ': ' + message;
    mMmsg
    .bnd(push,str)
    .bnd( () => mMmessage
    .bnd(updateMessages)
    .bnd(update) );
  break;
After updating itself with the new message comming in from the server, mMmsg hands over processing to mMmessage. mMmessage then calls updateMessages with its bnd method; and finally, mMmessage calls update. That's all there is to it. The array mMmessage.x sits quietly in view() as an array of children of its parent div.

The code for this along with some other demonstrations can be found at github.com/dschalk/
