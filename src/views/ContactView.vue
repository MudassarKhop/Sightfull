<template>
  <section class="contact-form">
    <div class="picture-side">
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3559390944233!2d18.51428357644463!3d-33.983390125004526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc435e9e90d511%3A0xb610f9293bd0d39a!2s7%20Grossweg%2C%20Penlyn%20Estate%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1718494824007!5m2!1sen!2sza"
          width="100%"
          style="border:0;"
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="form-side">
      <div class="back-btn">
        <i @click="goBack" class="fa-solid fa-arrow-left"></i>
      </div>
      <div class="heading-card-values">
        <p style="text-align: start;"><span>- CONTACT US</span></p>
        <h1 style="text-align: start; margin-bottom: 15px !important">Stay in touch.</h1>
      </div>
      <form action="https://formspree.io/f/mjkbbbpr" method="POST">
        <label id="name">
          <input type="text" name="name" placeholder="Name" v-model="form.name" />
          <input type="text" name="surname" placeholder="Surname" v-model="form.surname" />
        </label>
        <label id="email">
          <input class="email-in" type="email" name="email" placeholder="Email" v-model="form.email" />
        </label>
        <label id="name">
          <input type="tel" name="number" placeholder="Number" v-model="form.number" />
          <input type="text" name="company" placeholder="Company Name" v-model="form.company" />
        </label>
        <label id="message">
          <textarea name="message" placeholder="Message" v-model="form.message"></textarea>
        </label>
        <div id="buttonss">
          <button id="b1" type="reset">Reset</button>
          <button id="b2" type="submit">Send</button>
        </div>
      </form>
      <div class="some-text">
        <p>Unsure about something? Return to <router-link to="/">homepage</router-link>.</p>
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
    goBack() {
      this.$router.go(-1);
    }
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
  justify-content: space-between;
  align-items: center;
}
.back-btn{
  display: flex;
  position: absolute;
  margin-bottom: 750px;
  height: 8%;
  width: 30%;
  color: grey;
  font-size: 25px;
}
.fa-arrow-left{
  font-size: 15px;
height: 40px;
width: 40px;
border-radius: 50%;
border: 1px solid grey;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: center;
text-align: center;
transition: 0.4s ease-in-out;
}
.fa-arrow-left:hover{
background-color: #e79f21;
border: 1px solid #e79f21;
color: white;
cursor: pointer;
transition: 0.4s ease-in-out;
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
  background-color:  #161B32;
}

form {
  height: 65%;
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
.map {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
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

textarea {
  height: 170px;
  width: 95%;
  border-radius: 12px;
  background-color: #141725;
  border: none;
  padding: 15px;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-family: regular;
  letter-spacing: 2px;
  overflow-y: scroll;
  border: 1px solid #74809842;

}
#message{
  width: 100%;
}

textarea:placeholder-shown {
  font-size: 15px;
  font-family: regular;
}

::-webkit-scrollbar {
  display: none;
}

#name {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
}

#email {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.email-in {
  width: 100%;
}
input {
  height: 60px;
  width: 50%;
  border-radius: 12px;
  background-color: #141725;
  border: none;
  font-size: 15px;
  font-family: regular;
  padding-left: 15px;
  color: white;
  letter-spacing: 2px;
  border: 1px solid #74809842;

}

input:placeholder-shown {
  font-size: 15px;
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
  width: 120px;
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
  margin-top: 800px;
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
