// para rodar basta executar o comando 'npm start' da pasta backend

const  app = require('express')()
// "importando" o express

app.listen(3000, () => {
  // função para escutar a porta 3000 e retornar um callback
  console.log('Backend rodando...');
  // atenção: verifique se não há nenhum outro processo em paralelo a ser rodado na mesma porta, do contrario o beckend n irá startar.
  // se houver, aloque para outra porta que esteja livre
  // se vc rodar 2x é provavel que dê erro tbm pois já tem uma versão rodando 
})