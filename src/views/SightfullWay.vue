
<template>
    <NavBar />
<section class="home-3">
<div class="text-2">
<div class="heading-2">
<div class="heading-card-values">
<p style="text-align: left;"><span>- THE SIGHTFULL DYNAMICS WAY</span></p>
<h1 style="color: #1d2d35;text-align: left;">Payroll is more than just payroll</h1>
</div>
<br>
<br>
<div class="value-text">
<p>Sightfull Dynamics Payroll & HR goes beyond just processing payroll. We ensure your business is compliant with all South African tax and labor regulations, reducing the risk of penalties.  We also offer a comprehensive service, including custom solutions at competitive rates.</p>
<br>
<p>our focus is on building a committed partnership with your business. We see themselves as an extension of your team, dedicated to your success. We achieve this through innovative solutions, working closely with you to meet your specific needs and develop long-term relationships.</p>
<br>
<br>
<h3>How does this help you?</h3>
<br>
<div class="icon-text-container">
    <i class="fa-regular fa-circle-check"></i>
<p><b>Compliance Assurance:</b> We handle payroll tax and labor regulations, reducing your risk of penalties.</p>
</div>
<br>
<div class="icon-text-container">
    <i class="fa-regular fa-circle-check"></i>
<p><b>Comprehensive & Customized Service:</b> Get a complete payroll solution tailored to your business at a competitive price.</p>
</div>
<br>
<div class="icon-text-container">
    <i class="fa-regular fa-circle-check"></i>
<p><b>Committed Partnership:</b> We act as a dedicated partner focused on your long-term success.</p>
</div>
</div>
</div>
</div>
<div class="img-2">
<img src="../assets/services-2.png" alt="">
</div>
</section>
<section class="home-4">
<div class="img-3">
<img src="../assets/services-6.png" alt="">
</div>
<div class="text-3">
<div class="heading-2">
<div class="heading-card-values">
<p style="text-align: left;"><span>- THE SIGHTFULL DYNAMICS WAY</span></p>
<h1 style="color: #1d2d35;text-align: left; margin-bottom: 15px !important">Let’s talk a bit more about what we mean</h1>
</div>
<br>
<br>
<br>
<br>
<div class="value-text-2">
<p>Sightfull Dynamics Payroll & HR offers a compelling package for businesses seeking a reliable and cost-effective payroll solution. Let's delve into the key benefits:</p>
<br>
<p><b>Free Trial & Stable Pricing:</b> We remove the risk with a free first month to assess our service. Plus, our pricing structure offers stability, having remained unchanged for over twelve years. You'll only see an increase if your business experiences significant growth in employee count.</p>
<br>
<p><b>Flexible, Reliable Service:</b>  We prioritize your needs with flexible service, processing payroll anytime, including weekends and public holidays. We can also collaborate seamlessly with your accountant, ensuring a smooth workflow. Our proven track record with numerous satisfied clients highlights our commitment to accuracy, reliability, and security.</p>
<br>
<p>Ultimately, Sightfull Dynamics Payroll & HR goes beyond just processing payroll. We aim to be a trusted partner, offering cost-saving solutions while fostering long-term client relationships.</p>
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
height: 100%;
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
font-size: 37px;
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