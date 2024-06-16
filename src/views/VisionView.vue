<template>
    <NavBar />
<section class="home-3">
<div class="text-2">
<div class="heading-2">
<div class="heading-card-values">
<p style="text-align: left;"><span>- SIGHTFULL VALUES</span></p>
<h1 style="color: #1d2d35;text-align: left; margin-bottom: 15px !important">Our vision</h1>
</div>
<br>
<br>
<div class="value-text">
<p>Small and medium businesses can ditch the burden of managing payroll with Sightfull Dynamics Payroll & HR's outsourcing service.  Our experienced professionals will ensure your payroll is processed efficiently, confidentially, and accurately, giving you peace of mind.</p>
<br>
<p>This service allows you to focus on what you do best – running your business!  For a fixed monthly fee that is guaranteed to never increase, you'll enjoy a hassle-free payroll experience.  Say goodbye to payroll headaches and hello to more time to focus on your core strengths.</p>
<br>
<br>
<h3>Benefits</h3>
<br>
<div class="icon-text-container">
    <i class="fa-regular fa-circle-check"></i>
<p><b>Focus on Your Business:</b> Free up your time by letting Sightfull Dynamics handle your payroll.</p>
</div>
<br>
<div class="icon-text-container">
    <i class="fa-regular fa-circle-check"></i>
<p><b>Guaranteed Cost-Effectiveness:</b> Pay a set monthly fee with no hidden charges or surprise increase</p>
</div>
<br>
<div class="icon-text-container">
    <i class="fa-regular fa-circle-check"></i>
<p><b>Expert Handling:</b> Experienced professionals ensure your payroll is processed accurately and confidentially.</p>
</div>
</div>
</div>
</div>
<div class="img-2">
<img src="../assets/services-4.png" alt="">
</div>
</section>

<section class="home-4">
<div class="img-3">
<img src="../assets/services-8.png" alt="">
</div>
<div class="text-3">
<div class="heading-2">
<div class="heading-card-values">
<p style="text-align: left;"><span>- SIGHTFULL VALUES</span></p>
<h1 style="color: #1d2d35;text-align: left; margin-bottom: 15px !important">Our promise</h1>
</div>
<br>
<br>
<div class="value-text-2">
<p>
We will do your entire first month of processing absolutely free. No strings attached. Should we not add value to your business, we will walk away, without any cost to you.</p>
<br>
<p>No contracts, no price increases. EVER. We do your payroll any time, Saturday, Sunday, Public Holidays etc.</p>
<br>
<br>
<h3>Free Trial & Flexible Service</h3>
<br>
<div class="icon-text-container">
    <i class="fa-regular fa-circle-check"></i>
<p><b>Free First Month:</b> Test Sightfull Dynamics' value risk-free with a completely free first month of payroll processing. There's no obligation to continue, so you only pay if We deliver the promised benefits.</p>
</div>
<br>
<div class="icon-text-container">
    <i class="fa-regular fa-circle-check"></i>
<p><b>Flexible Service:</b> We work on your schedule, handling payroll anytime, including weekends and holidays. This ensures your employees get paid on time, regardless of the day.</p>
</div>
</div>
</div>
</div>
</section>
<FooterComp />
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
components:{
     NavBar, FooterComp
}
}
</script>
<style scoped>
.icon-text-container {
display: flex;
align-items: start; /* Align items vertically */
}
.fa-check{
color: rgb(65, 128, 65);
}
.icon-text-container i {
font-size: 20px;
margin-top: 3px;
margin-right: 8px; /* Add some space between the icon and the text */
color: rgb(97, 187, 97);
}
span{
color: #e79f21;
font-family: light;
letter-spacing: 2px;
font-size: 1rem;
font-family: medium;
}
.home-3{
height: 85vh;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: center;
background-color: #fbfbfc;
border-bottom: 1px solid #74809842;
}
.text-2{
width: 50%;
height: 60vh;
/* background-color: #3E529C; */
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: end;
}
.heading-2{
width: 75%;
height: 95%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: start;
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
.home-4{
height: 100vh;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: center;
background-color: #fbfbfc;


}
.img-3{
width: 50%;
height: 100vh;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
}
.img-2 img{
width: 700px;
}
.img-3 img{
width: 600px;
}
.text-3{
    width: 50%;
height: 60vh;
/* background-color: #3E529C; */
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: start;
}
.heading-3{
width: 75%;
height: 70%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: start;
}
.heading-card-values{
width: 75%;
height: 15%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: start;
}
.heading-card-values-2{
width: 75%;
height:25%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: start;
}
.value-text{
width: 100%;
height:100%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: start;
align-items: start;
}
.value-text-2{
width: 100%;
height:70%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: start;
align-items: start;
}
b{
    color: #1d2d35;
}
.value-text-2 h3{
font-family: medium;
letter-spacing: 1px;
font-size: 22px;
color: #1d2d35;
}
.value-text h3{
font-family: medium;
letter-spacing: 1px;
font-size: 22px;
color: #1d2d35;
}
</style>