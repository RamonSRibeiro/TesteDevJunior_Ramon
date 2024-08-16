function transformData(users) {
    return users
      .filter(user => user.isActive) 
      .map(user => ({ id: user.id, name: user.name })) 
      .sort((a, b) => a.name.localeCompare(b.name)); 
  }
  
  const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true }
  ];
  
  const result = transformData(users);
  console.log(result);
  