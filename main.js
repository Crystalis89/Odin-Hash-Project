// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }


// //    takes a key and produces a hash code with it. We did implement a fairly good hash function in the previous lesson. As a reminder:

// Hash maps could accommodate various data types for keys like numbers, strings, objects. But for this project, only handle keys of type strings.

class HashMap {
  startingsize = 5
  maxbuckets = 7

  constructor(size) {
    if (!size) {
      size = this.maxbuckets
    } 

    this.nodes = new Array(size).fill(null).map(() => ({}));
    return
  }


    //hash function provided in the assignment edited to add modulo at return.
  hash(key, bucketcount) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) ;
          // console.log(hashCode)

        }
     console.log(hashCode  % bucketcount)
        return hashCode % bucketcount
      } 
      
    //Example of how to calculate loadfactor
    // loadFactor = this.numItems / this.table.length
    // if loadfactor > .75 then resize = () => new Array(this.hashMap.length * 2)
    //then loop through and copy over to the new larger array
  loadfactor(bucketlist, bucket) {
    if (bucketlist[bucket].length / bucketlist.maxbuckets  >= .75) {
      return bucketlist.expandbuckets(bucketlist)
    } 
  }


  expandbuckets(bucketlist) {
    bucketlist.maxbuckets  = bucketlist.nodes.length *= 2
    let expanded = new HashMap(bucketlist.maxbuckets)
    console.log(expanded)

    for (const bucket of bucketlist.nodes) {
      // console.log(bucket)
      if (bucket.head === null) {
        // console.log(bucket)
        let currentnode = bucket
        let i = 0

        while (bucket.next !== null  || i < 10000) {   
          // console.log(currentnode)

          if (currentnode === null) {
            // console.log(expanded)

            break}

          if (currentnode.head === null && currentnode.next !== null) {
            currentnode = currentnode.next           
          }
          bucketlist.set(expanded, currentnode.key, currentnode.value)                  
          // console.log(expanded)
          // console.log(currentnode)
          currentnode = currentnode.next
          i++
        }
      }
   

    }
    console.log(expanded)
    //for loop through expanded transfering the contents of bucketlist over to it. Do I need to rehash it? Probably.
    //Doing it with array at first because it easier, change the bucekt arrays into linked lists later to make it easier to add and remove from.
    return expanded
}
// takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value

//Attach it to the head of the linked list so dont have to traverse the list to add to it since order doesnt matter
set(bucketlist, key, value) {
  //check loadfactor to see if need to expand, if so do so first. Afterward or if not needed hash the input and add it to the top of the linked list in that bucket.
  let emptyObjectsCount = bucketlist.nodes.filter(node => Object.keys(node).length !== 0).length;
  console.log(emptyObjectsCount / bucketlist.maxbuckets);

  if (emptyObjectsCount / bucketlist.maxbuckets >= .75) {
      bucketlist.expandbuckets(bucketlist)  

  }


  let hashed = bucketlist.hash(key, bucketlist.maxbuckets)
  let newentry =  {key: key, value : value, 'next': null}

  if (bucketlist.nodes[hashed].head === null) {
    newentry.next = bucketlist.nodes[hashed].next
    bucketlist.nodes[hashed].next = newentry   
  } else {
    bucketlist.nodes[hashed].head = null
    bucketlist.nodes[hashed].next = newentry
  }

  console.log(bucketlist.nodes);


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
test.set(test,'lion', 'golden')