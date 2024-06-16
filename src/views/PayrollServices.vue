<template>
  <NavBar />
<Section class="services-sec">
    <br>
    <br>
    <br>
    <br>
    <div class="heading-card-values">
            <p style="text-align: center;"><span>- PAYROLL SERVICES -</span></p>
            <h1 style="color: #1d2d35;text-align: center; margin-bottom: 15px !important">Some of our services on offer.</h1>
      </div>
      <br>
      <br>
      <div class="cards-value">
        <CardCompTwo />
      </div>
      <br>
      <br>
      <br>
      <br>
</Section>
<FooterComp />
</template>
<script>
import CardCompTwo from '@/components/CardCompTwo.vue';
import FooterComp from '@/components/FooterComp.vue';
import NavBar from '@/components/NavBar.vue';


export default {
components:{
    CardCompTwo, FooterComp, NavBar
}
}
</script>
<style scoped>
.services-sec{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
    align-content: center;
    min-height: 250vh;
    background-color: #fbfbfc;
}
.heading-card-values{
width: 75%;
height: 10%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: center;
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
span{
color: #e79f21;
font-family: light;
letter-spacing: 2px;
font-size: 1rem;
font-family: medium;
}
</style>