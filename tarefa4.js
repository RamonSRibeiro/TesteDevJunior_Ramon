function mergeArrays(array1, array2) {
    
    let merged = {};

   
    for (let i = 0; i < array1.length; i++) {
        let item = array1[i];
        merged[item.id] = { ...item };
    }

  
    for (let i = 0; i < array2.length; i++) {
        let item = array2[i]; 

        if (merged[item.id]) {
            merged[item.id] = { ...merged[item.id], ...item }; 
        } else {
            merged[item.id] = { ...item };
        }
    }

    return Object.values(merged);
}


const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
];

const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 }
];

const result = mergeArrays(array1, array2);
console.log(result);
