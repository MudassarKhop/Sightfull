<template>
<section class="above-footer">
  <div class="above-options">
    <div class="text">
      <h1>INNOVATIVE AND SIMPLIFIED PAYROLL SOLUTIONS</h1>
      <h3>OUR EXPERTS ARE HERE TO HELP!</h3>
    </div>
    <div class="contact-btn">
      <button><router-link to="/contact">LETS GET STARTED</router-link></button>
    </div>
  </div>
</section>
  <section class="footer">
    <div class="footer-options">
      <div class="footer-options-1">
        <div class="left">
          <h2>Menu Links</h2>
          <router-link to="/vision">Our Vision & Promise</router-link>
          <router-link to="/thesightfullway">The Sightfull Dynamics Way</router-link>
          <router-link to="payrollservices">Payroll Services</router-link>
          <router-link to="/hrservices">HR Services</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="middle">
        <h2>Quick Links</h2>
        <p>Client Login</p>
        <p>Privacy Policy</p>
        <p>Careers</p>
      </div>
        <div class="right">
        <h2>Contact Us</h2>
        <p>Tel: (021) 300 0934</p>
        <p>Cell: 082 303 0783</p>
        <p>Fax: 086 525 6670</p>
        <p>Email: info@mail.sightfull.co.za</p>
      </div>
      </div>
      <div class="footer-img"><img src="../assets/SD v7.png" alt="">
        <h2>Innovative and Simplified Payroll Solutions</h2>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© Copyright 2024. All Rights Reserved By <span>Sightfull Dynamics (Pty) Ltd</span></p>
      <p><a href="mailto:info@mail.sightfull.co.za" target="_blank">info@mail.sightfull.co.za</a></p>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
span{
color: #d88f10;
}
.above-footer{
height: 30vh;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
background-image: radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%);  
}
.above-options{
display: flex;
height: 70%;
width: 60%;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
}
.above-options h1{
font-family: semi-bold;
color: #d88f10;
letter-spacing: 1px;
font-size: 25px;
margin-bottom: 20px;
}
.above-options h3{
font-family: medium;
color: white;
letter-spacing: 1.25px;
font-size: 18px;
}
.text {
width: 70%;
height: 100%; 
  flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-content: center;

}
.contact-btn{
width: 30%;
height: 100%;
  flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-content: center;
}
.contact-btn button{
height: 50px;
width: 170px;
font-family: medium;
letter-spacing: 1.10px;
border-radius: 5px;
border: none;
background-color: #233070;
color: white;
border: 1px solid #74809842;
}
.contact-btn a{
  text-decoration: none;
  color: white;
}
.footer{
height: 45vh;
width: 100%;
background-color: white;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.footer-options{
height: 80%;
width: 75%;
border-bottom: 1px solid #74809842;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-items: center;
}
.footer-bottom{
height: 20%;
width: 75%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-items: center;
}
.footer-bottom a , p{
font-size: 13px;
font-family: light;
letter-spacing: 1px;
text-decoration: none;
color: #748098;
transition: ease-in-out 0.4s;
}
.left a{
font-size: 13px;
font-family: light;
letter-spacing: 1px;
text-decoration: none;
color: #748098;
transition: ease-in-out 0.4s;
}
.footer-img{
height: 80%;
width: 25%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
}
.footer-img img{
image-resolution: 300dpi;
width: 230px; 
margin-bottom: 10px;
margin-top: 40px;
}
.footer-img h2{
font-family: light;
color: #d88f10; 
letter-spacing: 1px;
font-size: 16px;
}
.footer-options-1{
height: 50%;
width: 60%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
text-align: left;
align-items: center;
}
.right , .middle , .left{
width: 33%;
height: 80%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: start;
align-items: start;
text-align: left;
}
.right{
display: flex;
flex-direction: column;
}
.right input {
margin-bottom: 10px;
}
.right h2 {
margin-bottom: 10px;
font-family: medium;
color: #1d2d35;
letter-spacing: 1px;
}
.right p {
margin-bottom: 10px;
}
.left a {
margin-bottom: 10px;
}
.middle h2 {
margin-bottom: 10px;
font-family: medium;
color: #1d2d35;
letter-spacing: 1px;
}
.middle p {
margin-bottom: 10px;
}
.left h2 {
margin-bottom: 10px;
font-family: medium;
color: #1d2d35;
letter-spacing: 1px;
}
a:hover{
color: #d88f10;
transition: ease-in-out 0.4s;
}
.left p {
margin-bottom: 10px;
}
p{
letter-spacing: 1px;
}
</style>
