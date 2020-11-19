//The functional mechanism of Map and WeakMap is same but they have little differences.
//1) A WeakMap accepts only objects as keys whereas a Map,in addition to objects, accepts primitive datatype such as strings, numbers etc.
//2) WeakMap objects doesn't avert garbage collection if there are no references to the object which is acting like a key. Therefore there is no method to retrieve keys in WeakMap, whereas in Map there are methods such as Map.prototype.keys() to get the keys.
//3) There is no size property exists in WeakMap.
// Creates a new Map object

//Maps example:

var map = new Map();    

// Defines an object that will be used a key in the ma                
   var objKey = {name: 'tutorialspoint'};    

// Adds a new element having a String as its key and a String as its value
   map.set('first', 'a');                    

// Adds a new element having a Number as its key and an Array as its value
   map.set(3, ['c']);      

// Adds a new element having an Object as its key and a Number as its value
   map.set(objKey, 3);

// Adds a new element having an Array as its key and a String as its value
   map.set(['add', 'mapping'], 'd');          

// Checks whether an element having a key of "2" exists in the map.
   console.log(map.has(2));

// Checks whether an element having a key of "first" exists in the map.
   console.log(map.has('first'));

// Retrieves the element having key of "first". Prints "a"
   console.log(map.get('first'));

// Retrieves the element having as a key the value of objKey.
   console.log(map.get(objKey));

// Retrieves the element having key of "empty". Prints "undefined"
   console.log(map.get('empty'));

// Retrieves the map size. Prints "4"
   console.log(map.size);

// deletes all the value  
   map.clear();
   console.log(map.size);


    console.log("----------------------------------");


   //WeakMaps Example:


   // Creates a new WeakMap object
   var weakMap = new WeakMap();

// Defines an object that will be used a key in the map
   var obj4 = {d: 4};

// Defines another object that will be used a key in the map
   var obj5 = {e: 5};

// Adds a new element having an Object as its key and a String as its value
   weakMap.set(obj4, 'fourth');

// Adds a new element having an Object as its key and a String as its value
   weakMap.set(obj5, 'fifth');

// Adds a new element having a Function as its key and a Number as its value
   weakMap.set(function(){}, 7);

// Checks whether an element having as its key the value of objKey4 exists in the weak map.
   console.log(weakMap.has(obj4));

// Retrieve the value of element associated with the key having the value of objKey4. Prints "first"
   console.log(weakMap.get(obj4));

// Deletes the element having key of objKey4. Prints "true"
   console.log(weakMap.delete(obj4));