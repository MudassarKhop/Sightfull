<template>
  <div class="nav-menu">
    <img src="../assets/SD v7.png" alt="">

    <i @click="showMenu()" class="fa-solid fa-bars"></i>
    <div class="nav-content" :class="showMobileMenu ? 'open-menu' : 'closed-menu'">
      <div class="logo"><img src="../assets/SD v7.png" alt=""></div>
      <div class="nav-items">
        <a style="margin-right: 20px;" :class="isActive('/')" href="/" @click="setPageTitle('Home')">HOME</a>
        <a style="margin-right: 20px;" @click="reloadPage($event, 'Our Vision & Promise')" :class="isActive('/vision')" href="/vision">OUR VISION & PROMISE</a>
        <a style="margin-right: 20px;" @click="reloadPage($event, 'The Sightfull Way')" :class="isActive('/thesightfullway')" href="/thesightfullway">THE SIGHTFULL WAY</a>
        <a style="margin-right: 20px;" @click="reloadPage($event, 'Payroll Services')" :class="isActive('/payrollservices')" href="/payrollservices">PAYROLL SERVICES</a>
        <a style="margin-right: 20px;" @click="reloadPage($event, 'HR Services')" :class="isActive('/hrservices')" href="/hrservices">HR SERVICES</a>
        <div class="login-button">
          <a @click="reloadPage($event, 'Contact')" :class="isActive('/contact')" href="/contact" id="btn-1"><i class="fa-regular fa-envelope"></i></a>
          <a id="btn-2" class="tooltip">
            <i class="fa-regular fa-user"></i>
            <span class="tooltiptext">COMING SOON</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    reloadPage(event, pageTitle) {
      event.preventDefault();
      this.setPageTitle(pageTitle);
      window.location.href = event.currentTarget.getAttribute('href');
    },
    isActive(path) {
      return window.location.pathname === path ? 'active' : '';
    },
    setPageTitle(title) {
      document.title = `${title} | Sightfull Dynamics`;
    }
  },
  mounted() {
    const pathToTitleMap = {
      '/': 'Home',
      '/vision': 'Our Vision & Promise',
      '/thesightfullway': 'The Sightfull Way',
      '/payrollservices': 'Payroll Services',
      '/hrservices': 'HR Services',
      '/contact': 'Contact'
    };
    const currentPath = window.location.pathname;
    const currentPageTitle = pathToTitleMap[currentPath] || 'My Website';
    this.setPageTitle(currentPageTitle);
  }
};
</script>

<style scoped>
/* Same CSS as before */
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
}

.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  width: 75%;
  align-items: center;
  align-content: center;
}

.fa-regular:hover {
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

a {
  text-decoration: none;
  font-family: bold;
  color: #1d2d35;
  transition: ease-in-out 0.3s;
  letter-spacing: 1px;
  font-size: 15px;
}

a:hover {
  color: #e79f21;
  transition: ease-in-out 0.3s;
}

a.active {
  color: #e79f21;
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

.login-button {
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

img {
  display: none;
  margin-top: 15px;
  width: 180px;
}

.logo img {
  display: block;
  margin-top: 10px;
  width: 170px;
}

#btn-1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
  border-radius: 50px;
  font-family: regular;
  height: 50px;
  width: 30px;
  margin-left: 20px;
  font-size: 27px;
  color: #1d2d35;
  transition: ease-in-out 0.3s;
}

#btn-2 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
  border-radius: 50px;
  font-family: regular;
  height: 50px;
  width: 50px;
  font-size: 22px;
  color: #1d2d35;
  transition: ease-in-out 0.3s;
  position: relative;
}

.fa-bars {
  display: none;
}

#btn-1:hover {
  color: #e79f21;
  transition: ease-in-out 0.3s;
}

#btn-2:hover {
  color: #e79f21;
  transition: ease-in-out 0.3s;
}

.some-text a {
  color: #e79f21;
  font-family: light;
  letter-spacing: 2px;
  font-size: 12px;
  font-family: medium;
  text-decoration: none;
}

.tooltip .tooltiptext {
  visibility: hidden;
  font-size: 12px;
  letter-spacing: 1px;
  width: 120px;
  background-color: #fbfbfc;
  color: #1d2d35;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 90%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  border: 1px solid #74809842;
  transition: opacity 0.3s;
  font-family: light;
  transition: 0.3S ease-in-out;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
  transition: 0.3S ease-in-out;
}

@media screen and (max-width: 768px) {
  #btn-1 {
    font-size: 29px;
    margin-right: 10px;
  }

  #btn-2 {
    font-size: 23px;
  }

  .fa-bars {
    display: block;
  }

  #btn-2 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: transparent;
    border-radius: 50px;
    font-family: regular;
    height: 50px;
    width: 50px;
    font-size: 22px;
    color: #1d2d35;
    transition: ease-in-out 0.3s;
  }

  .login-button {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: start;
    border-left: none;
  }

  .logo img {
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

  img {
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

  .nav-content {
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
    height: 20vh;
  }
}
</style>
