<template lang='pug'>
  div.home
    div.grid
      section.intro
        h1 Somos tudo e #[span +1] pouco!
        p Nós da Container Digital Jr, empresa júnior do curso de Sistemas e Mídias Digitais:

        div.dinamic-p
          p _{{ servicos[0]}}
          p {{ produto[0]}}  {{ adjetivo[0 ]}}
          p para {{ cliente[0]}}.    
      
      //- https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript
      //- pra fazer o efeito highlight
    
</template>

<script>
export default {
  name:'Home',
  data() {
    return {
      servicos: [
        'desenvolvemos',
        'desenhamos',
        'criamos'
      ],
      produto: [
        'aquela interface ',
        'aquela marca ',
        'aquele site ',
        'só interface ',
        'só marca',
        'só site'
      ],
      adjetivo: [
        'massa ☜(˚▽˚)☞',
        'foda XD',
        'top :D'
      ],
      cliente: [
        'você',
        'o seu amigo',
        'o seu chefe',
        'o seu cachorro',
        'a sua mãe',
        'a sua avó',
        'o porteiro'
      ]
    }
  }
}
</script>

<style lang='scss'>
.home {
  height: 100vh;
  background-image: url(../assets/container-mob.png);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 95;
}

.grid {
  height: 100vh;
  background-image: url(../assets/grid-mob.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0px -50px;
}

.intro {
  display: grid;
  // grid column
}
</style>
