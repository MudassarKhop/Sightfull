<template>
  <div class="nav-menu">
    <img src="../assets/SD v7.png" alt="">

    <i @click="showMenu()" class="fa-solid fa-bars"></i>
    <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
      <div class="logo"><img src="../assets/SD v7.png" alt=""></div>
      <div class="nav-items">
        <router-link to="/" @click="refreshPage" style="margin-right: 20px;">HOME</router-link>
        <router-link style="margin-right: 20px;" to="/vision">OUR VISION & PROMISE</router-link>
        <router-link style="margin-right: 20px;" to="/thesightfullway">THE SIGHTFULL WAY</router-link>
        <router-link style="margin-right: 20px;" to="/payrollservices">PAYROLL SERVICES</router-link>
        <router-link style="margin-right: 20px;" to="/hrservices">HR SERVICES</router-link>
        <div class="login-button">
          <router-link to="/contact" id="btn-1" title="Contact Us"><i class="fa-regular fa-envelope"></i></router-link>
          <router-link to="#" id="btn-2" title="CLIENT LOGIN COMING SOON"><i class="fa-regular fa-user"></i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    refreshPage(event) {
    if (this.$route.path === '/') {
      event.preventDefault(); // Prevent default link behavior
      location.reload();
    } else {
      this.$router.push('/');
    }
  },
    getTitle(path) {
      switch (path) {
        case '/':
          return 'Home - Your Website Name';
        case '/vision':
          return 'Our Vision & Promise - Your Website Name';
        case '/thesightfullway':
          return 'The Sightfull Way - Your Website Name';
        case '/payrollservices':
          return 'Payroll Services - Your Website Name';
        case '/hrservices':
          return 'HR Services - Your Website Name';
        case '/contact':
          return 'Contact - Your Website Name';
        case '/clientlogin':
          return 'Client Login - Your Website Name';
        default:
          return 'Your Website Name';
      }
    },
  },
  watch: {
    $route(to) {
      document.title = this.getTitle(to.path);
    },
  },
  mounted() {
    document.title = this.getTitle(this.$route.path);
  },
};
</script>
<style scoped>
  .nav-menu {
  background-color: white;
  height: 15vh;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #74809842;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  }
  .nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  width: 75%;
  align-items: center;
  align-content: center
  }
  .fa-regular:hover{
    color: #e79f21;
    transition: ease-in-out 0.3s;
  }
  .nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 68%;
  }
  a{
    text-decoration: none;
    font-family: bold;
    color: #1d2d35;
    transition: ease-in-out 0.3s;
    letter-spacing: 1px;
    font-size: 15px;
  }
  a.router-link-exact-active {
    color: #e79f21;
  }
  a:hover{
    color: #e79f21;
    transition: ease-in-out 0.3s;
  }
  .logo {
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 20%;
  }
  .login-button{
    display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 15%;
  border-left: 1px solid #74809842;
  }
  img{
    display: none;
    margin-top: 15px;
    width: 180px;
  }
  .logo img{
    display: block;
    margin-top: 10px;
    width: 170px;
  }
  #btn-1{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: transparent;
    /* border: 1px solid #74809842; */
    border-radius: 50px;
    font-family: regular;
    height: 50px;
    width: 30px;
    margin-left: 20px;
    font-size: 27px;
    color: #1d2d35;
    transition: ease-in-out 0.3s;
  }
  #btn-2{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: transparent;
    /* border: 1px solid #74809842; */
    border-radius: 50px;
    font-family: regular;
    height: 50px;
    width: 50px;
    font-size: 22px;
    color: #1d2d35;
    transition: ease-in-out 0.3s;
  }
  .fa-bars{
    display: none;
  }
  #btn-1:hover{
    color: #e79f21;
    transition: ease-in-out 0.3s;
  }
  #btn-2:hover{
    color: #e79f21;
    transition: ease-in-out 0.3s;
  }
  @media screen and (max-width: 768px) {
    #btn-1{
    font-size: 29px;
    margin-right: 10px;
  }
  #btn-2{
    font-size: 23px;
  }
  .fa-bars{
    display: block;
  }
  #btn-2{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: transparent;
    /* border: 1px solid #74809842; */
    border-radius: 50px;
    font-family: regular;
    height: 50px;
    width: 50px;
    font-size: 22px;
    color: #1d2d35;
    transition: ease-in-out 0.3s;
  }
    .login-button{
      display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: start;
  border-left: none;
  }
    .logo img{
    display: none;
  }
  .nav-menu {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  background-color: white;
  border: 1px solid #74809842;
  height: 20vh;
  }
  img{
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  .open-menu {
  opacity: 1;
  height: 150px;
  background-color: white;
  width: 100%;
  }
  .closed-menu {
  opacity: 0;
  height: 0;
  padding: 0;
  }
  .nav-content{
          flex-direction: column;
          justify-content: space-evenly;
          z-index: 100;
          position: relative;
          transition: all 0.2s ease-out;
      }
  .nav-items {
    display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: start;
  height: 20vh
  }
  }
  </style>