function countOccurrences(arr) {
    // Inicializa um objeto vazio para armazenar as contagens
    const occurrences = {};
  
    // Itera por cada string no array
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
  
      // Se a string já existe como chave no objeto, incrementa o valor
      if (occurrences[item]) {
        occurrences[item]++;
      } else {
        // Se a string não existe, adiciona como chave com valor 1
        occurrences[item] = 1;
      }
    }
  
    // Retorna o objeto contendo as contagens
    return occurrences;
  }
  
  // Exemplo de uso:
  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  const result = countOccurrences(fruits);
  console.log(result);
  