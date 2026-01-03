<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Kishan Jaiswal</strong>, an experienced Unity Developer with a passion for gaming from an early age.
        <br />I spend my days creating high-performance slot games, multiplayer systems, and modular frameworks.
      </div>

      <div style="margin-top: 20px;">I've worked on <router-link to="/game-projects">game projects</router-link>, on <router-link to="/other-projects">other projects</router-link>, and my full <router-link to="/resume">resume</router-link>.</div>

      <div style="margin-top: 40px;">I'm currently looking for new opportunities in game development. You can reach me at <a href="mailto:jaiswalkishan628@gmail.com">jaiswalkishan628@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Kishan Jaiswal" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>