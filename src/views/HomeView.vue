<template>
  <NavBar />
  <section class="home">
  <div class="text">
    <div class="heading">
            <p><span>- A TRUSTED PAYROLL AGENCY</span></p>
            <h1>Innovative and Simplified Payroll Solutions</h1>
            <br>
            <p style="width: 85%;">Stop wasting time on payroll. Our expert team ensures your employees get paid accurately and on time, while you stay compliant with all tax regulations. Get a quote today!</p>
            <br> 
            <div class="home-btns">
              <button to="/contact" class="btn-1">OUR VISION</button>
              <button class="btn-2">PAYROLL SERVICES</button>
          </div>
      </div>
  </div>
  <div class="img">
    <img src="../assets/services-3.png" alt="">
  </div>
    <!-- <div class="png2">
      <img id="png2" src="../assets/image (1).png" alt="">
    </div> -->
  </section>
  <section class="home-2">
    <div class="company-logos">
      <!-- <div class="heading-card-logo">
            <p style="text-align: left;"><span>- PARTNERS</span></p>
            <h1 style="color: #1d2d35; font-size: 30px;">chosen and trusted by 150+ client</h1>
          </div> -->
            <div class="logo-images">
              <img style="width: 130px" src="../assets/Logos/image (34).png" alt="">                                       
              <img style="width: 140px" src="../assets/Logos/image (36).png" alt="">                                       
              <img style="width: 130px" src="../assets/Logos/image (37).png" alt="">     
              <img style="width: 170px" src="../assets/Logos/image (41).png" alt="">                                         
              <img style="width: 125px" src="../assets/Logos/image (38).png" alt="">                                       
              <img style="width: 130px" src="../assets/Logos/image (45).png" alt="">                                       
              <img style="width: 250px" src="../assets/Logos/image (40).png" alt="">                                       
            </div>
      </div>
  </section>
  <section class="home-3">
    <div class="text-2">
    <div class="heading-2">
            <p><span>- LET'S CONNECT</span></p>
            <h1 style="color: #1d2d35;">Who we are and how we do things.</h1>
            <br>
          <p>Struggling to manage in house payroll? Power up with cost effective outsourced solutions.</p>
          <br>
          <p>Sightfull Dynamics Payroll and HR outsourcing service is designed to relieve businesses of running a payroll department. Save time, Reduce stress. Ensure payroll and legislative compliance.</p>
       <br>
          <p>We allow you to focus on your strengths, knowing that your payroll is efficiently, confidentially, and accurately handled. Feel confident with end-to-end payroll solutions from professionals.</p>
        </div>
  </div>
  <div class="img-2">
    <img src="../assets/services-1.png" alt="">
  </div>
  </section>
  <section class="breaker-info">
<div class="numbers">
<div class="card-num">
  <h1 style="margin-bottom: 15px !important;">R 3 Billion</h1>
  <p style="text-align: center; font-size: 22px; color: #e79f21;">VALUE OF PAYROLLS PROCESSED ANNUALY</p>
</div>
<div class="card-num">
  <h1 style="margin-bottom: 15px !important;">400+</h1>
  <p style="text-align: center; font-size: 22px; color: #e79f21;">NUMBER OF CLIENTS</p>
</div>
<div class="card-num">
  <h1 style="margin-bottom: 15px !important;">27000</h1>
  <p style="text-align: center; font-size: 22px; color: #e79f21;">NUMBER OF MONTHLY PAYSLIPS PROCESSED</p>
</div>
</div>
  </section>
  <section class="card-info">
    <div class="heading-card-values">
            <p style="text-align: center;"><span>- SIGHTFULL VALUES -</span></p>
            <h1 style="color: #1d2d35;text-align: center; margin-bottom: 15px !important">Why outsource your payroll?</h1>
      </div>
      <div class="cards-value">
        <CardComp />
      </div>
  </section>
  <section class="home-4">
    <div class="img-3">
    <img src="../assets/services-5.png" alt="">
  </div>
    <div class="text-3">
    <div class="heading-3">
            <p><span>- LET'S CONNECT</span></p>
            <h1 style="color: #1d2d35;">How we help your business reach new levels.</h1>
            <br>
          <p>Sightfull Dynamics Payroll & HR’s outsourcing service is designed to relieve small and medium-sized businesses of the burden of running a payroll department.</p>
        <br>
          <p> We allow you to focus on your strengths, knowing that your Payroll is efficiently, confidentially and accurately handled by an experienced Payroll Provider.</p>
        </div>
  </div>
  </section>
  <section class="home-5">
    <div class="heading-card-values">
            <p style="text-align: center;"><span>- COMMUNITY -</span></p>
            <h1 style="color: #1d2d35;text-align: left; margin-bottom: 15px !important">What the people have to say about us.</h1>
      </div>
      <div class="testimonials">
      <TestimonialComp />
      </div>
  </section>
  <FooterComp />
</template>

<script>
import CardComp from '@/components/CardComp.vue';
import TestimonialComp from '@/components/TestimonialComp.vue';
import NavBar from '@/components/NavBar.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
components: {
  TestimonialComp, CardComp, NavBar, FooterComp
}
};
</script>
<style scoped>
span{
color: #e79f21;
font-family: light;
letter-spacing: 2px;
font-size: 1rem;
font-family: medium;
}
.home{
background-image: radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%);
height:85vh;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
}
.home-2{
height:20vh;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: space-evenly;
background-color: #f1f1f1;  
}
.company-logos{
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
width: 95%;
height: 100%
}
.logo-images{
height: 50%;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
align-content: center;
}
.home-3{
height: 100vh;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: center;
background-color: #fbfbfc;
}
.breaker-info{
height: 25vh;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect fill='none' stroke-width='100' id='a' x='-400' y='-300' width='800' height='600'/%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23000' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%23010203' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23030407' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%2304050a' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%2306070d' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%23070911' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23090b14' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%230a0d17' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%230c0e1b' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%230d101e' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%230f1221' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%23101425' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%23121628' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%2313172b' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%2315192f' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%23161B32' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
.numbers{
width: 85%;
height: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
}
.card-num{
height: 100%;
width: 33%;
/* border: 1px solid red; */
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
}
.card-info{
height: 180vh;
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
/* border-bottom: 1px solid #74809842; */
align-items: center;
background-color: #F9F9F9;

}
.cards-value{
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: center;
height: 80%;
}
.home-4{
height: 100vh;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: center;
background-color: #fbfbfc;
/* border-bottom: 1px solid #74809842; */

}
.home-5{
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
background-color: #F9F9F9;
}
.testimonials{
height: 70%;
width: 100%;
}
.heading{
width: 75%;
height: 95%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: start;
}
.heading-2{
width: 75%;
height: 85%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: start;
}
.heading-3{
width: 75%;
height: 85%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: start;
}
.heading-4{
width: 75%;
height: 18%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: start;
}
.heading-card-values{
width: 75%;
height: 10%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: center;
}
.heading-card-logo{
width: 75%;
height: 30%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: end;
align-items: start;
}
.heading-card{
width: 75%;
height: 10%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
/* justify-content: space-evenly; */
align-items: start;
}
.text{
width: 50%;
height: 50vh;
/* background-color: #3E529C; */
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: end;
}
.text-2{
width: 50%;
height: 50vh;
/* background-color: #3E529C; */
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: end;
}
.text-3{
width: 50%;
height: 50vh;
/* background-color: #3E529C; */
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: start;
}
.home-btns{
  width: 100%;
  height: 20%;
  display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: start;
align-items: center;
/* margin-top: 20px; */
/* border: 2px solid red; */
}
.home-btns .btn-1{
  margin-right: 25px;
  width: 190px;
height: 55px;
border-radius: 9px;
border: none;
text-align: center;
background-color: #bb7c10;
color: white;
/* text-shadow: 5px 0px 6px rgba(0,0,0,0.55); */
border: 1px solid #74809842;
font-family: regular;
/* font-weight: 600; */
letter-spacing: 1.25px;
font-size: 14px;
/* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
}

.home-btns .btn-2{
  width: 190px;
height: 55px;
border-radius: 9px;
border: 1px solid #74809842;
text-align: center;
background-color: transparent;
color: #d6d9dd;
/* text-shadow: 5px 0px 6px rgba(0,0,0,0.55); */
font-family: regular;
/* font-weight: 600; */
letter-spacing: 1.25px;
font-size: 14px;
}
.fa-phone,
.fa-gear{
margin-right: 10px !important;
text-shadow: none;
}
h1{
text-align: left;
font-family: medium;
font-size: 50px;
color: white;
/* text-shadow: 5px 0px 6px rgba(0,0,0,0.55); */
padding: 0 !important;
margin: 0 !important;
}
p{
color: #748098;
  margin-top: 0;
  letter-spacing: .25px;
  font-family: light;
  font-weight: 300;
width: 85%;
}
.img{
width: 50%;
height: 100vh;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: start;
align-content: center;
}
.img-2{
width: 50%;
height: 100vh;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: start;
align-content: center;
}
.img-3{
width: 50%;
height: 100vh;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: end;
align-content: center;
}

.img img{
width: 650px;
}

.img-2 img{
width: 700px;
}
.img-3 img{
width: 700px;

}
#png2{
width: 70px;
height: 60px;
padding-bottom: 20px ; 
}
.png2{
animation-name: floating;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  position: absolute;
  bottom: 2%;
  right: 48%;
  translate: middle;
}
@keyframes floating {
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }   
}
@media only screen and (max-width: 600px) {
  .home{
background-color: #fbfbfc;
height:100vh;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
}
.img{
  display: none
}
.img-2{
  display: none
}
.img-3{
  display: none
}
}
</style>
