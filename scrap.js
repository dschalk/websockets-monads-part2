var newNode = document.createTextNode(extra);
document.getElementById("chat").appendChild(newNode);




var ChatMessage = ({extra}) => <div> {extra} </div>;


/** @jsx html */

import { html } from '../../snabbdom-jsx';
import snabbdom from 'snabbdom';

const patch = snabbdom.init([
  require('snabbdom/modules/class'),
  require('snabbdom/modules/props'),
  require('snabbdom/modules/style'),
  require('snabbdom/modules/eventlisteners')
]);

//HelloMessage : (attrs, body) -> vnode
var ChatMessage = ({extra}) => <div> {extra} </div>;
const HelloMessage = ({name}) =>

var vnode = <HelloMessage name="Yassine" />

patch(document.getElementById('placeholder'), vnode);
