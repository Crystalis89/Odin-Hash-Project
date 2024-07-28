// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }


// //    takes a key and produces a hash code with it. We did implement a fairly good hash function in the previous lesson. As a reminder:

// Hash maps could accommodate various data types for keys like numbers, strings, objects. But for this project, only handle keys of type strings.

class HashMap {
  maxbuckets = 7

  constructor(size) {
    if (!size) {
      size = this.maxbuckets
    } 
    this.buckets = new Array(size);
    this.maxbuckets = size
  }


  //hash function provided in the assignment edited to add modulo at return.
  hash(key, bucketcount) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) ;

        }
        return hashCode % bucketcount
      } 
     
expandbuckets(bucketlist) {

  bucketlist.maxbuckets = bucketlist.maxbuckets * 2;
  // let expanded = new HashMap(bucketlist.maxbuckets);
let holding = []

  for (const bucket of bucketlist.buckets) {
      if (bucket !== undefined && bucket.head === null) {
          let currentnode = bucket.next;
          holding.push(currentnode)

      }
  }

  bucketlist.buckets.length = 0

  for (const entry of holding) {
    
        console.log(entry)
          let currentnode = entry;
          let i = 0;

          while (currentnode.next !== null || i < 10000) {
              i++;
              bucketlist.set(bucketlist, currentnode.key, currentnode.value);
              console.log(currentnode)

              console.log(bucketlist.buckets)

              if (currentnode.next === null) {
                  break;
              }
              currentnode = currentnode.next;
      }
  }

  return bucketlist; 
}
// // takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value

// //Attach it to the head of the linked list so dont have to traverse the list to add to it since order doesnt matter
set(bucketlist, key, value) {

  let emptyObjectsCount = bucketlist.buckets.reduce((count, node) => count + (Object.keys(node).length !== 0 ? 1 : 0), 0); 
  
  console.log(emptyObjectsCount / bucketlist.maxbuckets)
  if (emptyObjectsCount / bucketlist.maxbuckets >= .75) {
      bucketlist.expandbuckets(bucketlist)  

  }

  let hashed = bucketlist.hash(key, bucketlist.maxbuckets)
  let newentry =  {key, value, next:null}

  if (bucketlist.buckets[hashed] === undefined) {

    bucketlist.buckets[hashed] = {}
    bucketlist.buckets[hashed].head = null
    bucketlist.buckets[hashed].next = null
  }

  if (bucketlist.buckets[hashed].head === null) {
    newentry.next = bucketlist.buckets[hashed].next
    bucketlist.buckets[hashed].next = newentry   
  } else {
    bucketlist.buckets[hashed].next = newentry
  }

}

// //  takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
//  get(key) {



//  }


// //  takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
//  has(key){


    
// }


// //  takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
// remove(key){


    
// }


// // returns the number of stored keys in the hash map.
// length() {


    
// }


// //  removes all entries in the hash map.
//  clear(){


    
//  }


// // returns an array containing all the keys inside the hash map.
// keys() {

    
// }


// //  returns an array containing all the values.
//  values(){

    
//  }


// // returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
// entries(){

    
// }

}



// Testing values:

let test = new HashMap() 

test.set(test, 'apple', 'red')
test.set(test,'banana', 'yellow')
test.set(test,'carrot', 'orange')
test.set(test,'dog', 'brown')
test.set(test,'elephant', 'gray')
test.set(test,'frog', 'green')
test.set(test,'grape', 'purple')
test.set(test,'hat', 'black')
test.set(test,'ice cream', 'white')
test.set(test,'jacket', 'blue')
test.set(test,'kite', 'pink')
test.set(test,'test', 'test2')
test.set(test,'test3', 'test4')
test.set(test,'kitaacae', 'piacdcnk')
test.set(test,'abcd', 'ebebh')
test.set(test,'zxy', 'b eeb')


console.log(test)

