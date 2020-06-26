<template>
<body>
  <section id="sideMenu">
    <nav>
      <img 
        src="/logoRadarCovid1.png"
        alt="Logo Radar Covid"
      />
      <div class="top-menu">
        <div><a id="mobile-button" @click="handleSize()"><i class="material-icons">menu</i></a></div>
        <div><p>API Status: {{ !!status_api ? status_api : ''}}</p></div>
      </div>
      <a :class="display == 'init' ? 'active' : ''" @click="display = 'init'">
        <i class="fa fa-home" aria-hidden="true"></i>Página Inicial
      </a>
      <a :class="display == 'state' ? 'active' : ''" @click="display = 'state'">
        <i class="fa fa-sticky-note-o" aria-hidden="true"></i> Dados por estado
      </a>
      <a :class="display == 'country' ? 'active' : ''" @click="display = 'country'">
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
      <h2>Devido a dificuldade de encontrar uma API que funcionasse ou que estivesse com CORS liberado e ao atual momento que enfrentamos, resolvemos consultar uma base de dados que nos mostra a quantidade de casos suspeitos e mortes devido ao novo Corona vírus.</h2>
      <ul>
        <li>Dados por estado</li>
        <li>Dados no Brasil em data especifica</li>
        <li>Dados por País</li>
      </ul>
      <div class="card-group">
        <div class="card">
            <div class="card-header" style="background-color:#dc3545;">
              Estado com maior número de casos:
            </div>
            <div class="card-body">
              <div class="card-text">
                <p>Estado: {{!!sp ? sp.state : ''}}</p>
                <p>Casos: {{!!sp ? sp.cases : ''}}</p>
                <p>Mortes: {{!!sp ? sp.deaths : ''}}</p>
              </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" style="background-color:#27a243;">
              Estado com menor número de casos:
            </div>
            <div class="card-body">
              <div class="card-text">
                <p>Estado: {{!!ms ? ms.state : ''}}</p>
                <p>Casos: {{!!ms ? ms.cases : ''}}</p>
                <p>Mortes: {{!!ms ? ms.deaths : ''}}</p>
              </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" style="background-color:#dc3545;">
              País com maior número de casos (casos por milhão):
            </div>
            <div class="card-body">
              <div class="card-text">
                <p>País: {{!!belgium ? belgium.country : ''}}</p>
                <p>Casos: {{!!belgium ? belgium.confirmed : ''}}</p>
                <p>Mortes: {{!!belgium ? belgium.deaths : ''}}</p>
              </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" style="background-color:#27a243;">
              País com menor número de casos (casos por milhão):
            </div>
            <div class="card-body">
              <div class="card-text">
                <p>País: {{!!zimbabue ? zimbabue.country : ''}}</p>
                <p>Casos: {{!!zimbabue ? zimbabue.confirmed : ''}}</p>
                <p>Mortes: Mortes: {{!!zimbabue ? zimbabue.deaths : ''}}</p>
              </div>
            </div>
        </div>

      </div>
        


      <p class="pic-group">Grupo: Filippo, Conrado, Edson e Gabriel</p>
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
        <small>Data referente aos dia: {{!!estado ? formatDate(estado.datetime) : ''}}</small>
      </div>
    </div>
    <div v-if="display == 'country'" class="state-page">
      <div class="filter">
        <p>Selecione um país</p>
        <select name="states" id v-model="country">
          <option value="brazil">Brasil</option>
          <option value="argentina">Argentina</option>
          <option value="canada">Canada</option>
          <option value="germany">Alemanha</option>
          <option value="maldives">Maldivas</option>
          <option value="cambodia">Camboja</option>
          <option value="ethiopia">Etiópia</option>
          <option value="spain">Espanha</option>
          <option value="us">Estados Unidos</option>
        </select>
        <button @click="handleCountry()">Pesquisar</button>
      </div>
      <div class="data">
        <p>{{!!pais ? pais.country : ''}}</p>
        <span>Casos: {{!!pais ? pais.confirmed : ''}}</span>
        <span :style="{color: 'red'}">Mortes: {{!!pais ? pais.deaths : ''}}</span>
        <small>Data referente aos dia: {{!!pais ? formatDate(pais.updated_at) : ''}}</small>
      </div>
    </div>
  </section>
</body>
</template>

<script>

import axios from "axios";
import { parseISO, format } from "date-fns";

export default {
  name: "dashboard",
  data: () => ({
    display: "init",
    state: "mg",
    country: "brazil",
    estado: null,
    pais: null,
    status_api: null,

    belgium: null,
    zimbabue: null,

    sp: null,
    ms: null,

    mob: 0,
  }),

  created() {
    this.handleStatus();
    this.handleUs();
    this.handleZimbabue();
    this.handleSp();
    this.handleMs();
    this.handleState();
    this.handleCountry();
  },

  methods: {
    async handleStatus() {
      const response = await axios.get(
        "https://covid19-brazil-api.now.sh/api/status/v1"
      );
      this.status_api = response.data.status;
    },
    async handleUs() {
      const response = await axios.get(
        "https://covid19-brazil-api.now.sh/api/report/v1/belgium"
      );
      this.belgium = response.data.data;
    },
    async handleZimbabue() {
      const response = await axios.get(
        "https://covid19-brazil-api.now.sh/api/report/v1/zimbabwe"
      );
      this.zimbabue = response.data.data;
    },
    async handleSp() {
      const response = await axios.get(
        'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp'
      );
      this.sp = response.data;
    },
    async handleMs() {
      const response = await axios.get(
        'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/ms'
      );
      this.ms = response.data;
    },
    async handleState() {
      const response = await axios.get(
        `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${this.state}`
      );
      this.estado = response.data;
    },
    async handleCountry() {
      const response = await axios.get(
        `https://covid19-brazil-api.now.sh/api/report/v1/${this.country}`
      );
      this.pais = response.data.data;
    },
    formatDate(date) {
      const aux = parseISO(date);
      const newDate = format(aux, " dd 'de' MMMM' , às ' HH:mm'h'");
      return newDate;
    },
    handleSize() {
      if(this.mob == 0) {
        document.getElementById('sideMenu').style.height = '100%'
        this.mob = 1
      } else {
        document.getElementById('sideMenu').style.height = '50px'
        this.mob = 0;
      }

    }
  }
};

</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");

$greyLight: #f2f5fa;
$greyDark: #e7eaf4;
$greenDark: #093129;
$greenSelected: #216602;
$neonGreen: #6eb81b;

* {
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  background-image: url(/bgRadarCovid.png);
  background-color: rgb(242, 245, 250);
  display: flex;
  flex-direction: row;
  margin: 0px !important;
}

#sideMenu {
  background: $greenDark;
  width: 250px;
  position: fixed;
  overflow: auto;
  height: 100vh;
  transition: 1s;
  @media (max-width: 900px){
    display: block;
    width: 100%;
    position: fixed;
    top: 0;
    height: 50px;
  }
}

.top-menu{
  display:flex;
  justify-content: space-between;
}

.top-menu > div{
  margin-right: auto;
}

nav {
  display: flex;
  flex-direction: column;
  @media(max-width: 900px){
    display: block;
  }
  p {
    color: white;
    text-align: center;
  }
  img {
    width: 100px;
    height: 100px;
    align-self: center;
    margin: 20px 0px;
    @media (max-width: 900px){
      display: none;
    }
  }
  #mobile-button{
    @media(min-width: 900px){
      display: none;
    }
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
      background: $greenSelected;
      border-left: 5px solid $neonGreen;
    }
    &:hover {
      background: $greenSelected;
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

@media (min-width: 900px) {
  #content {
    margin-left: 250px;
  }
}
#content {
  width: 100%;
  min-height: 100vh;
  padding: 60px;

  .initial-page {
    .list {
      list-style: none;
      display: flex;
      align-items: center;
    }
    h1 {
      text-align: left !important;
    }
    span {
      margin-bottom: 10px;
    }
    .state-cases {
      display: flex;
      justify-content: space-around;
    }
    .most-cases {
      display: flex;
      flex-direction: column;
    }
    .less-cases {
      display: flex;
      flex-direction: column;
    }
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
    }

    .pic-group{
      position:fixed;
      bottom:0;
      left:50%;
      color: $neonGreen;
    } 
    @media (min-width: 900px) {
      .card-group{
        display:flex;
        justify-content: space-between;
      }
    }

    .card{
      color: #000000;
      margin-bottom: 1rem !important;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-clip: border-box;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: .25rem;
      box-sizing: border-box;
    } 

    .card-header{
      border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
      padding: .75rem 1.25rem;
      margin-bottom: 0;
      border-bottom: 1px solid rgba(0,0,0,.125);
      color: #ffffff;
    }

    .card-body{
      webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      padding: 1.25rem;
      background-color: rgb(242, 245, 250);
    }

    .card-title{
      margin-bottom: .75rem;
      font-size: 1.25rem;
      margin-bottom: .5rem;
      font-family: inherit;
      font-weight: 500;
      line-height: 1.2;
      color: inherit;
      margin-top: 0;
    }

    .card-text{
      margin-bottom: 0;
      margin-top: 0;
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
