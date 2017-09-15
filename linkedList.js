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


  function getHead() {
    return head;
  }
  function getTail() {
    return head;
  }

  function add(value) {
    var node = {
      value : value,
      next : null
    }
    if(value === null){
      value = node;
    }else if(value.next === null) {
      value.next = node;
      head = node;



      //node.length++
    }
    return node;
  }


  function remove() {

  }
  function get() {

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