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
  var head = null;


  function getHead() {
    return head;
  }
  function getTail() {
    return head;
  }
  function add(newLink) {
    newNodeObj = {
      value : 'Ready Player One',
      next : newNodePointer };
    if(newLink === null){

      newNodeObj.length++;
    }else{
      //don't add a node
    }



    return ;
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