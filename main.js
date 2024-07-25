// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }

// //    takes a key and produces a hash code with it. We did implement a fairly good hash function in the previous lesson. As a reminder:

// Hash maps could accommodate various data types for keys like numbers, strings, objects. But for this project, only handle keys of type strings.


class HashTable {
    
    hashMap = new Array (5)

    //hash function provided in the assignment edited to add modulo at return.
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        const max = 17
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % max ;
        }
     
        return hashCode
      } 
// takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value
set(key, value) {



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