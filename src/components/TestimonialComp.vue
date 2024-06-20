<template>
  <div class="micro-slider-wrapper">
    <div class="micro-slider">
      <div class="slider-item" id="s1">
        <div class="slider-card">
          <!-- <div class="comma-img">
            <img src="../assets/inverted-commas.png" alt="">
          </div> -->
          <div class="text">
            <p>I've been using Sightfull Dynamics payroll services for over a year at both of my businesses. Their service is outstanding, from the competitive rates to the comprehensive payroll administration.</p> 
            <br>
            <p>It saves me money and a lot of time because I don't have to deal with payroll myself.</p>
          </div>
          <div class="img">
            <img src="../assets/Man.png" alt="">
          </div>
          <div class="name">
            <h1>Irshaad Moosa</h1>
            <h3>TOTAL | STEERS</h3>
          </div>
        </div>
      </div>
      <div class="slider-item" id="s2">
        <div class="slider-card">
          <!-- <div class="comma-img">
            <img src="../assets/inverted-commas.png" alt="">
          </div> -->
          <div class="text">
            <p>I've been using Sightfull Dynamics for my payroll since 2010 and they've been fantastic. They're always available to answer questions about labor issues and their prices haven't gone up in all this time. </p>
            <br>
            <p>They've exceeded my expectations, I highly recommend them!</p>
          </div>
          <div class="img">
            <img src="../assets/women.png" alt="">
          </div>
          <div class="name">
            <h1>Nazreen Jacobs</h1>
            <h3>SIMPLIFIED IT SERVICES</h3>
          </div>
        </div>
      </div>
      <div class="slider-item" id="s3">
        <div class="slider-card">
          <!-- <div class="comma-img">
            <img src="../assets/inverted-commas.png" alt="">
          </div> -->
          <div class="text">
            <p>We switched to Sightfull Dynamics a year ago and it's been a game-changer. Our old payroll system was a nightmare, but Sightfull Dynamics makes everything so easy. </p>
            <br>
            <p>They even helped us get caught up on some old tax filings. We couldn't be happier!</p>
          </div>
          <div class="img">
            <img src="../assets/women.png" alt="">
          </div>
          <div class="name">
            <h1>Mishqah Omar</h1>
            <h3>NOUVEAU COFFEE & GRILL</h3>
          </div>
        </div>
      </div>
      <div class="slider-item" id="s4">
        <div class="slider-card">
          <!-- <div class="comma-img">
            <img src="../assets/inverted-commas.png" alt="">
          </div> -->
          <div class="text">
            <p>I've been using Sightfull Dynamics for payroll and SARS related issues for over a year now, and it's been a great decision! They're fast, efficient, and affordable.</p>
            <br>
            <p> They've even been helpful with advice on labor issues. I highly recommend them to any business!</p>
          </div>
          <div class="img">
            <img src="../assets/Man.png" alt="">
          </div>
          <div class="name">
            <h1>Yaseen Adam</h1>
            <h3>BP SANDOWN</h3>
          </div>
        </div>
      </div>
      <div class="slider-item" id="s5">
        <div class="slider-card">
          <!-- <div class="comma-img">
            <img src="../assets/inverted-commas.png" alt="">
          </div> -->
          <div class="text">
            <p> Their rates are reasonable and their service is impeccable. They handle everything from taxes to direct deposit, and they're always on top of any regulatory updates. It's been a lifesaver!</p>
            <br>
            <p> I highly recommend Sightfull Dynamics for any business owner looking to simplify payroll.</p>
          </div>
          <div class="img">
            <img src="../assets/Man.png" alt="">
          </div>
          <div class="name">
            <h1>Azeem Sayed</h1>
            <h3>FARM FRESH</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hammer from 'hammerjs';
import MicroSlider from 'micro-slider';

export default {
name: 'TestimonialCarousel',
mounted() {
  this.initSlider();
},
methods: {
  initSlider() {
    setTimeout(() => {
      const slider1 = document.querySelector('.micro-slider-wrapper');
      if (slider1) {
        slider1.style.perspective = '1500px';
        slider1.style.height = '730px';
      }

      const indicators = document.querySelector('ul.indicators');
      if (indicators) {
        indicators.style.display = 'none';
      }

      const __ms = document.querySelector('.micro-slider');
      const __msSlider = new MicroSlider(__ms, {});
      const hammer = new Hammer(__ms);
      const __msTimer = 3000;
      let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);

      __ms.onmouseenter = function (e) {
        clearInterval(__msAutoplay);
        console.log(e.type + ' mouse detected');
      }

      __ms.onmouseleave = function (e) {
        clearInterval(__msAutoplay);
        __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
        console.log(e.type + ' mouse detected');
      }

      __ms.onclick = function (e) {
        clearInterval(__msAutoplay);
        console.log(e.type + ' mouse detected');
      }

      hammer.on('tap', function (e) {
        clearInterval(__msAutoplay);
        console.log(e.type + ' gesture detected');
      });

      hammer.on('swipe', function (e) {
        clearInterval(__msAutoplay);
        __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
        console.log(e.type + ' gesture detected');
      });
    }, 1000);
  }
}
}
</script>

<style scoped>
span {
color: #e79f21;
font-family: light;
letter-spacing: 2px;
font-size: 1rem;
font-family: medium;
}

ul.indicators {
display: none !important;
}

.micro-slider-wrapper {
display: flex;
width: 100%;
}

.micro-slider {
height: 710px;
position: relative;
width: 100%;
}

.slider-item {
height: auto !important;
width: 400px;
left: 0;
position: absolute;
border-radius: 12px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
border: 1px solid #74809842;
}

#s1,
#s2,
#s3,
#s4,
#s5,
#s6 {
background-color: #ffffff;
color: white;
}

.micro-slider ul {
display: none;
}

.slider-card {
width: 400px !important;
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.comma-img{
  height: 8%;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: start;
  align-items: center;
  align-content: center;
}
.comma-img img{
  width: 50px;
}
.text {
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 50%;
}

.text p{
  color: #748098;
  text-align: left;
  letter-spacing: 1px;
  font-family: regular;
  font-size: 15px;

}
.img {
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 15%;
}

.img img {
width: 80px;
}

.name {
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 15%;
}

.name h1 {
font-family: regular;
letter-spacing: 1px;
color: #04293a;
font-size: 22px;
}

.name h3 {
font-family: light;
letter-spacing: 1px;
color: #e79f21;
font-size: 15px;
}

@media screen and (max-width: 1400px) {

}

@media screen and (max-width: 480px) {
.slider-item {
  width: 90% !important;
}
}

@media only screen and (max-width: 600px) and (min-width: 389px) {
#testimonial {
  display: none;
}

#heading {
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
}
}
</style>
