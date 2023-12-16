<template>
  <div>
    <main class="wrapper">
      <section v-for="card in cards" :class="`section ${card.class}`">
        <div class="content-parallax">
          <p class="text">{{ card.title }}</p>
          <ParallaxContainer :card="card" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  Divider,
  Space,
  TypographyText,
  TypographyTitle,
} from "ant-design-vue";
import CardProject from "../components/CardProject.vue";
import { CardContent } from "../models/interfaces/ICardContent";
import vince from "../../public/img/512vince.png";
import izapai from "../../public/img/izapaylg.jpg";
import ParallaxContainer from "../components/ParallaxContainer.vue";

const cards: CardContent[] = [
  {
    title: "Vince",
    content: `
          O Vince facilita a forma como você lida com suas finanças diárias. Gerencie suas movimentações financeiras de maneira simples e eficiente.
          Visualize suas finanças de maneira clara com gráficos e métricas detalhadas. Entenda seus padrões de gastos e tome decisões informadas para alcançar suas metas.`,
    projectDate: "Novembro 2023",
    projectLogo: vince,
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.company.ourfinances",
    gitHub: undefined,
    url: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    ],
    urlPreview:
      "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    class: "bg1",
  },
  {
    title: "IzaPay",
    content: `
        A IzaPay foi pensada e desenvolvida com 
        o propósito de auxiliar a gestão 
        operacional de empreendedores e 
        comerciantes que possuem um alto nível 
        de confiança entre seus clientes 
        fortalecida por prestações de serviços 
        ou vendas pagas no crediário.`,
    projectDate: "Novembro 2023",
    projectLogo: izapai,
    projectUrl: "https://izapay.com.br/",
    gitHub: undefined,
    url: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    ],
    urlPreview: "../../public/img/izapai-full-site.png",
    class: "bg2",
  },
];
</script>

<style scoped>
.container1 {
  width: 80dvw;
  justify-content: flex-start;
  display: flex;
  margin: 20px;
}

.content-parallax {
}

@media (max-width: 700px) {
  .container1 {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 1100px) {
  .container1 {
    width: 90dvw;
  }
}

@media (max-width: 982px) {
  .container1 {
    flex-direction: column;
    align-items: center;
  }
}

.wrapper {
  /* O elemento precisa ter uma altura definida para o efeito
  funcionar.
     100vh significa 100% da altura da view.
  */
  height: 100dvh;

  /* O tamanho das imagens irá criar uma barra de rolagem 
  horizontal. Iremos desativar isso */
  overflow-x: hidden;

  /* A propriedade perspective indica a "distância" entre o 
  usuário e o plano Z.
  Quanto maior o valor, mais perto o elemento estará do usuário.
  Se for um valor negativo,
  mais distante esse elemento estará.
  */
  perspective: 2px;

  /* O transform-style indica se os elementos filhos devem ser 
  transformados em um plano 2D ou 3D.
  O valor preserve-3d indica que os elementos devem seguir o 
  espaço 3D indicado.
  */
  transform-style: preserve-3d;
}

.section {
  /* Indicamos "relative" para depois podermos
  posicionar os elementos filhos com "absolute" */
  position: relative;

  /* Indicamos uma altura para a nossa seção. O valor não 
  importa muito.
  Para garantir um bom efeito, coloquei também uma altura 
  mínima de 700px;
  */
  height: 100dvh;
  min-height: 700px;

  /* Para manter a transformação em espaço 3D, indicamos o mesmo 
  valor do elemento pai (preserve-3d).
  Para não precisar repetir o valor "preserve-3d", você pode usar 
  o valor "inherit", que fará
  com que ele pegue o valor do elemento pai.
  */
  transform-style: inherit;
}

.section::before {
  /* Aqui nós iremos configurar a imagem que irá aparecer no fundo
  da seção.
  Como vimos, o Parallax precisa de elementos diferentes, então 
  não daria certo se colocássemos o fundo diretamente na 
  <section>. Então criaremos um pseudo-elemento para isso.
  */

  /* Isso servirá para que o pseudo-elemento possua as mesmas
  dimensões do elemento <section> */
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* O z-index negativo irá garantir que a imagem não fique por 
  cima de outros elementos */
  z-index: -1;

  /* Aqui estamos fazendo com que a imagem de fundo cubra todo o
  elemento */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  /* Aqui está a brincadeira. Lembra que o nosso "wrapper" está
  mais próximo do usuário?
  Aqui nós faremos com que o nosso pseudo-elemento, que está com
  a imagem de fundo, fique mais longe do usuário. Para isso, 
  basta passar um valor negativo para "translateZ()".
  
  Como a imagem irá para longe do usuário, ela parecerá menor. 
  Então usamos o "scale()" para aumentar o tamanho da imagem.
  
  Como o elemento estará mais longe do usuário, ele irá se mover
  mais lentamente do que os elementos mais próximos conforme 
  a gente role a página.
  */
  transform: translateZ(-1px) scale(1.5);
}

.text {
  /* Essa classe, como dito antes, é só para o nosso conteúdo.
  Sinta-se livre para criar o que quiser.
  */
  top: 25%;
  width: 100%;
  padding: 20px 0;
  background-color: rgba(255, 255, 255, 0.5);
  color: white;
  text-shadow: 0 0 2px #000;
  font-size: 20px;
  text-align: center;
}

/* Em nosso pseudo-elemento, configuramos a imagem de fundo,
mas não indicamos qual será a imagem.
  Isso nos permite poder criar outras classes para indicar 
  uma imagem diferente para cada <section>.*/

.bg1::before {
  margin: 0;
  padding: 0;
  background-image: url("../../public/img/vince-full.png");
}

.bg2::before {
  margin: 0;
  padding: 0;
  background-image: url("../../public/img/izapai-full-site.png");
}

.bg3::before {
  margin: 0;
  padding: 0;
  background-image: url("https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=600");
}

@media (max-width: 1130px) {
  .bg1::before {
    background-image: url("../../public/img/vince-mobile.jpg");
    background-size: 100% auto; /* Garante que a imagem ocupe 100% da largura e mantenha a proporção original na altura */
    background-repeat: no-repeat; /* Evita a repetição da imagem */

  }

  .bg2::before {
    background-image: url("../../public/img/iza-mobile.jpg");
    background-size: 100% auto; /* Garante que a imagem ocupe 100% da largura e mantenha a proporção original na altura */
    background-repeat: no-repeat; /* Evita a repetição da imagem */

  }
}
</style>
