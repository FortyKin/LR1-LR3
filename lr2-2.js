function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
   }
   
   console.log(isEmpty({})); // true
   console.log(isEmpty({ name: 'John' })); // false