
async function fetchUserData() {
    try {
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
     
      if (!response.ok) {
        throw new Error('Erro ao fazer a requisição');
      }
  
      
      const users = await response.json();
  
     
      const filteredUsers = users.filter(user => user.username.startsWith('C'));
  
      
      return filteredUsers;
    } catch (error) {
      console.error('Erro ao buscar dados dos usuários:', error);
      throw error; 
    }
  }
  
  
  fetchUserData()
    .then(filteredUsers => {
      console.log('Usuários filtrados:', filteredUsers);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  