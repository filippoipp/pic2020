<template>
  <section id="sideMenu">
    <nav>
      <a class="active"><i class="fa fa-home" aria-hidden="true"></i>Página inicial</a>
      <a><i class="fa fa-sticky-note-o" aria-hidden="true"></i> Todos os serviços</a>
      <a><i class="fa fa-bookmark-o" aria-hidden="true"></i> Serviços por ID</a>
      <a><i class="fa fa-bookmark-o" aria-hidden="true"></i> Sair</a>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'dashboard',
  data: () => ({
    pag: 1,
  }),
};
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  $greyLight: #f2f5fa;
  $greyDark: #e7eaf4;
  $purpleLight: #2c293f;
  $purpleDark: #252234;
  $neonGreen: #6eb81b;

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background: $greyLight;
  }
  #sideMenu {
    background: $purpleLight;
    width: 240px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: 1s;
  }
  nav {
    display: flex;
    flex-direction: column;
    img {
      width: 150px;
      align-self: center;
      margin-bottom: 50px;
    }
    a {
      display: block;
      text-decoration: none;
      padding: 15px;
      border-left: 5px solid transparent;
      color: $greyDark;
      //font-weight: 300;
      transition: all 1s;
      &.active {
        background: $purpleDark;
        border-left: 5px solid $neonGreen;
      }
      &:hover {
        background: $purpleDark;
        border-left: 5px solid $neonGreen;
        text-decoration: none;
        color: $greyDark;
      }
      .fa {
        color: $neonGreen;
        //display: inline-block;
        width: 30px;
      }
    }
  }
</style>
