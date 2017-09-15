/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list\

 GOAL
    {
      value: 'Ready Player One',
      next: {
        value: '1982',
        next: {
          value: 'Neuromancer',
          next: {
            value: 'Snow Crash',
            next: null
          }
        }
      }
    };


 */
function linkedListGenerator(){
  var head = null; //list
  var tail = null;
  var length = 0;

  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }

  function add(value) { //head
    var node = {
      value : value, //head = null
      next : null
    }
    if(head === null){ //null === null
      head = node; //head = {value: null, next: null}
      tail = node;
    }else{
      tail.next = node;
      tail = node;
    }

    length++;

    return node;
  }
  function remove() {

  }
  function get(number) { // function get(2){}
    head[number];

    return //nth node
  }

  function insert() {

  }

  return {
   getHead : getHead,
   getTail : getTail,
   add : add,
   remove : remove,
   get : get,
   insert : insert
  }

}