<template>
<body>
  <section id="sideMenu">
    <nav>
      <img src="https://images.vexels.com/media/users/3/193114/isolated/preview/0be3590284a8dc5f1646b64816e2eb6e-distintivo-de-parada-covarde-by-vexels.png" alt="">
      <a :class="display == 'init' ? 'active' : ''" @click="display = 'init'">
        <i class="fa fa-home" aria-hidden="true"></i>Página inicial
      </a>
      <a :class="display == 'state' ? 'active' : ''" @click="display = 'state'">
        <i class="fa fa-sticky-note-o" aria-hidden="true"></i> Dados por estado
      </a>
      <a>
        <i class="fa fa-bookmark-o" aria-hidden="true"></i> Dados no Brasl em data específica
      </a>
      <a>
        <i class="fa fa-bookmark-o" aria-hidden="true"></i> Dados por País
      </a>
      <router-link to="/">
        <i class="fa fa-bookmark-o" aria-hidden="true"></i> Sair
      </router-link>
    </nav>
  </section>
  <section id="content">
    <div v-if="display == 'init'" class="initial-page">
      <h1>Consulta a API COVID19 Brasil.</h1>
      <h2>Devido a dificuldade de encontrar uma API que funcionasse ou que estivesse com CORS liberado e ao atual momento que enfrentamos, resolvemos consultar uma bse de dados que nos mostra a quantidade de casos suspeitos e mortes devido ao novo Corona vírus.</h2>
      <ul>
        <li>Dados por estado</li>
        <li>Dados no Brasil em data especifica</li>
        <li>Dados por País</li>
      </ul>
      <p>Grupo: Filippo, Conrado, Edson e Gabriel</p>
    </div>
    <div v-if="display == 'state'" class="state-page">
      <div class="filter">
        <p>Selecione um estado</p>
        <select name="states" id v-model="state">
          <option value="ac">Acre</option>
          <option value="al">Alagoas</option>
          <option value="ap">Amapá</option>
          <option value="am">Amazonas</option>
          <option value="ba">Bahia</option>
          <option value="ce">Ceará</option>
          <option value="df">Distrito Federal</option>
          <option value="es">Espírito Santo</option>
          <option value="go">Goiás</option>
          <option value="ma">Maranhão</option>
          <option value="mt">Mato Grosso</option>
          <option value="ms">Mato Grosso do Sul</option>
          <option value="mg">Minas Gerais</option>
          <option value="pa">Pará</option>
          <option value="pb">Paraíba</option>
          <option value="pr">Paraná</option>
          <option value="pe">Pernambuco</option>
          <option value="pi">Piauí</option>
          <option value="rj">Rio de Janeiro</option>
          <option value="rn">Rio Grande do Norte</option>
          <option value="rs">Rio Grande do Sul</option>
          <option value="ro">Rondônia</option>
          <option value="rr">Roraima</option>
          <option value="sc">Santa Catarina</option>
          <option value="sp">São Paulo</option>
          <option value="se">Sergipe</option>
          <option value="to">Tocantins</option>
        </select>
        <button @click="handleState()">Pesquisar</button>
      </div>
      <div class="data">
        <p>{{!!estado ? estado.state : ''}}</p>
        <span>Casos: {{!!estado ? estado.cases : ''}}</span>
        <span :style="{color: 'red'}">Mortes: {{!!estado ? estado.deaths : ''}}</span>
        <small>Data referente aos dados: {{!!estado ? estado.datetime : ''}}</small>
      </div>
    </div>
  </section>
</body>
</template>

<script>
import axios from "axios";

export default {
  name: "dashboard",
  data: () => ({
    display: "init",
    state: "mg",
    estado: null,
  }),

  created() {
    this.handleState();
  },

  methods: {
    async handleState() {
      this.display = "state";
      const response = await axios.get(
        `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${this.state}`
      );
      console.log(response.data)
      this.estado = response.data;
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");

$greyLight: #f2f5fa;
$greyDark: #e7eaf4;
$purpleLight: #2c293f;
$purpleDark: #252234;
$neonGreen: #6eb81b;

* {
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  background: $greyLight;
  display: flex;
  flex-direction: row;
  margin: 0px !important;
}
#sideMenu {
  background: $purpleLight;
  width: 250px;
  max-width: 250px;
  position: fixed;
  overflow: auto;
  height: 100vh;
  transition: 1s;
}
nav {
  display: flex;
  flex-direction: column;
  img {
    width: 100px;
    height: 100px;
    align-self: center;
    margin: 20px 0px;
  }
  a {
    display: block;
    text-decoration: none;
    padding: 15px;
    border-left: 5px solid transparent;
    color: $greyDark;
    transition: all 1s;
    cursor: pointer;
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

#content {
  width: 100%;
  min-height: 100vh;
  padding: 60px;
  margin-left: 250px;

  .initial-page {
    h1 {
      font-weight: bold;
      font-size: 20px;
      line-height: 1.2;
      color: rgb(59, 65, 68);
      margin-bottom: 10px;
      padding: 10px;
      text-align: center;
    }

    h2 {
      font-weight: 500;
      font-size: 16px;
      line-height: 2em;
      color: rgb(59, 65, 68);
      padding: 10px;
    }

    li {
      font-size: 14px;
      line-height: 2em;
    }

    p {
      text-align: center;
      color: $neonGreen;
    }
  }

  .state-page {
    .filter {
      margin-bottom: 50px;
      p {
        font-size: 16px;
        font-family: Roboto;
      }
      select {
        width: 200px;
        height: 40px;
        border-radius: 6px;
        background: #ffff;
        padding: 5px;
        box-sizing: none;
        margin-right: 20px;
      }
      button {
        width: 100px;
        height: 40px;
        background: $neonGreen;
        border-radius: 6px;
        color: #fff;
        border: none;
        box-sizing: none;
        cursor: pointer;
      }
    }

    .data {
      display: flex;
      flex-direction: column;
      p {
        font-size: 18px;
      }
      span {
        font-size: 14px;
        line-height: 2em;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
