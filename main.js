// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }


function listTraverser(list, value) {
  if (typeof(list) !== 'object' || list.head !== null ) {
      alert("Please provide a LinkedList object")

      return
  }

  let targetnode = list
  let i = 0
  while (targetnode.next !== null || i < 10000) {
      if (targetnode.head === null && targetnode.next === null) {
          return result = {'target': targetnode, 'depth': i}
      }

      if (targetnode.next === null && targetnode.data !== value && targetnode.head !== null) {
          return result = {'target': targetnode, 'depth': i}
      } 
      
      if(targetnode.data === value && targetnode.head !== null) {
          return result = {'target': targetnode, 'depth': i, 'valuedepth': i}
      }
      i++;
      targetnode = targetnode.next; 


  }
}



// //    takes a key and produces a hash code with it. We did implement a fairly good hash function in the previous lesson. As a reminder:

// Hash maps could accommodate various data types for keys like numbers, strings, objects. But for this project, only handle keys of type strings.

class HashMap {
  startingsize = 5
  maxbuckets = 16

  constructor(size) {
    this.nodes = new Array(size).fill({});
    // return this.nodes; // Change this line to return this
    return this.n; // Return this instead of this.nodes
  }

  // test(startingsize) {    for (let i = 0; i < size; i++) {
  //   this.hashMap.push({})
  // }}


    //hash function provided in the assignment edited to add modulo at return.
  hash(key, bucketcount) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketcount ;
        }
     
        return hashCode
      } 
      
    //Example of how to calculate loadfactor
    // loadFactor = this.numItems / this.table.length
    // if loadfactor > .75 then resize = () => new Array(this.hashMap.length * 2)
    //then loop through and copy over to the new larger array
  loadfactor(bucketlist) {
    if (this.maxbuckets / bucketlist.length >= .75) {
      
    } else {
      
    }
  }


  expandbuckets(bucketlist) {
    let length  = bucketlist.nodes.length *= 2
    let expanded = new HashMap(length)

    //for loop through expanded transfering the contents of bucketlist over to it. Do I need to rehash it? Probably.
    return expanded
}
// takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value

//Attach it to the head of the linked list so dont have to traverse the list to add to it since order doesnt matter
set(bucketlist) {
  // console.table(bucketlist)
  //check loadfactor to see if need to expand, if so do so first. Afterward or if not needed hash the input and add it to the top of the linked list in that bucket.


}

//  takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
 get(key) {



 }


//  takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
 has(key){


    
}


//  takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
remove(key){


    
}


// returns the number of stored keys in the hash map.
length() {


    
}


//  removes all entries in the hash map.
 clear(){


    
 }


// returns an array containing all the keys inside the hash map.
keys() {


    
}


//  returns an array containing all the values.
 values(){


    
 }


// returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
entries(){


    
}

}




// Testing values:

let test1 = new HashMap(5) 
console.log(test1.nodes.length)
test1 = test1.expandbuckets(test1)
console.log(test1.nodes.length)




// const test = Object.create(HashMap.prototype);
// HashMap.call(test, 5); // Call the constructor function with the desired size

// console.table(test);
// console.table(typeof(test))
// console.table(test.length)

// let test2 = []
// console.log(Array.isArray(test))
// let test2 = test.expandbuckets(test)
// console.log(test2.length)

// test.set('apple', 'red')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')