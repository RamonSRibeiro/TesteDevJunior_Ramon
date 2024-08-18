function countOccurrences(arr) {

    const occurrences = {};
  
    
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
  
     
      if (occurrences[item]) {
        occurrences[item]++;
      } else {
        
        occurrences[item] = 1;
      }
    }
  
    return occurrences;
  }
  
  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  const result = countOccurrences(fruits);
  console.log(result);
  
