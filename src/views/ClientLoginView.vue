<template>
  <section class="contact-form">
    <div class="picture-side">
      <div class="map">
        <div class="heading-card-map">
          <h1 style="text-align: start; margin-bottom: 15px !important;">Welcome Back</h1>
          <p style="text-align: start;"><span>MANAGE ALL YOUR PAYROLL FILES IN ONE PLACE WITH SECURE CLOUD STORAGE</span></p>
      </div>
        <img src="../assets/services-8.png" alt="">
    </div>
    </div>
    <div class="form-side">
      <div class="heading-card-values">
        <p style="text-align: start;"><span>- CLIENT LOGIN</span></p>
        <h1 style="text-align: start; margin-bottom: 15px !important;color: #1d2d35;">Sign in.</h1>
      </div>
      <br>
      <form action="https://formspree.io/f/mrgdynyj" method="POST">
        <label id="email">
          <input class="email-in" type="username" name="username" placeholder="Username" v-model="form.email" />
        </label>
        <label id="email">
          <input class="email-in" type="password" name="password" placeholder="Password" v-model="form.email" />
        </label>
        <div id="email">
          <button class="email-in" id="b1" type="reset">Login</button>
        </div>
      </form>
      <div class="some-text">
      <p>Not a user? Get in touch to <router-link to="/contact">sign up</router-link>.</p>
    </div>
    </div>

  </section>
</template>

<script>
export default {

  data() {
    return {
      form: {
        name: '',
        surname: '',
        email: '',
        number: '',
        company: '',
        message: this.$route.query.message || '',
      },
    };
  },
  methods: {
    lockScroll() {
      document.body.style.overflow = 'hidden';
    },
    unlockScroll() {
      document.body.style.overflow = '';
    },
  },
  mounted() {
    this.lockScroll();
  },
  beforeUnmount() {
    this.unlockScroll();
  },
};
</script>

<style scoped>
/* Your existing styles */
.contact-form {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.picture-side {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%);
}

.form-side {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #74809842;
  background-color:  #ffffff;
}

form {
  height: 25%;
  width: 75%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading-card-values {
  width: 75%;
  height: 10%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: start;
}
.heading-card-map {
  width: 75%;
  height: 10%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-align: start;
  align-items: center;
}

h1 {
  text-align: left;
  font-family: medium;
  font-size: 50px;
  color: white;
  padding: 0 !important;
  margin: 0 !important;
}

p {
  color: #748098;
  margin-top: 0;
  letter-spacing: 1px;
  font-family: light;
  font-weight: 300;
  font-size: 12px;
}

span {
  color: #e79f21;
  font-family: light;
  letter-spacing: 2px;
  font-size: 1rem;
  font-family: medium;
}

.some-text a{

  color: #e79f21;
  font-family: light;
  letter-spacing: 2px;
  font-size: 12px;
  font-family: medium;
  text-decoration: none;

}
#email a{

color: #e79f21;
font-family: light;
letter-spacing: 2px;
font-size: 12px;
font-family: medium;
text-decoration: none;

}
.map {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
}
.map img{
  width: 65%;
}
iframe {
  height: 100%;
  width: 100%;
}

label {
  display: flex;
  flex-direction: column;
  text-align: start;
  color: white;
}
#name {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
}

#email {
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 15px;
}

.email-in {
  width: 100%;
}
input {
  height: 60px;
  width: 50%;
  border-radius: 12px;
  background-color: #e4e4e4;
  border: none;
  font-size: 15px;
  font-family: regular;
  padding-left: 15px;
  color: #161B32;
  letter-spacing: 2px;
  border: 1px solid #74809842;

}

input:placeholder-shown {
  font-size: 13px;
  font-family: regular;
}

#heading h5 {
  color: #ecb365;
  text-align: right;
  letter-spacing: 2px;
}

#buttonss {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  gap: 15px;
}

form {
  display: flex;
  width: 75%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
}

#b1{
  /* margin-right: 25px; */
  width: 120px;
height: 45px;
border-radius: 9px;
border: none;
text-align: center;
background-color: #bb7c10;
color: white;
/* text-shadow: 5px 0px 6px rgba(0,0,0,0.55); */
border: 1px solid #74809842;
font-family: regular;
text-transform: uppercase;
/* font-weight: 600; */
letter-spacing: 2px;
font-size: 14px;
transition: 0.4s ease-in-out;
}
#b2{
  text-transform: uppercase;
  width: 180px;
height: 45px;
border-radius: 9px;
border: 1px solid #74809842;
text-align: center;
background-color: transparent;
color: #d6d9dd;
/* text-shadow: 5px 0px 6px rgba(0,0,0,0.55); */
font-family: regular;
/* font-weight: 600; */
letter-spacing: 2px;
font-size: 14px;
transition: 0.4s ease-in-out;
}
#b1:hover {
  background-color: #99660e;
  box-shadow: none;
  transition: 0.4s ease-in-out;
}

#b2:hover {
  color: #d38e16 ;
  box-shadow: none;
  transition: 0.4s ease-in-out;
}

.some-text{
  margin-top: 750px;
  position: absolute
}

@media only screen and (max-width: 600px) and (min-width: 389px) {
  #contactbox {
    flex-direction: column;
    min-height: 90vh !important;
    width: 90%;
  }
  #heading h1 {
    text-align: center;
    font-size: 25px;
  }
  #heading h5 {
    text-align: center;
    font-size: 13px;
  }
  #heading {
    width: 100%;
    height: 19%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
  }
  input {
    width: 150px;
    height: 50px;
    font-size: 15px;
  }
  input:placeholder-shown {
    font-size: 15px;
  }
  textarea:placeholder-shown {
    font-size: 15px;
  }
  #e1 {
    width: 150px;
    height: 50px;
  }
  #n1 {
    width: 150px;
    height: 50px;
  }
  textarea {
    width: 320px;
    height: 220px;
    font-size: 15px;
  }
  #form {
    width: 90%;
    align-items: center;
  }
  form {
    margin-top: -30px;
    gap: 25px;
    height: 55vh;
    justify-content: center;
    align-items: center;
  }
  #bimg {
    height: 25vh;
    width: 60%;
    align-items: flex-end !important;
  }
  #name {
    flex-direction: row;
  }
  #email {
    flex-direction: row;
  }
  #buttonss {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}
</style>
