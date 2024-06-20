<template>
  <div class="micro-slider-wrapper">
    <div class="micro-slider">
      <div v-for="(testimonial, index) in testimonials" :key="index" class="slider-item">
        <div class="slider-card">
          <div class="text">
            <p>{{ testimonial.text1 }}</p>
            <br>
            <p>{{ testimonial.text2 }}</p>
          </div>
          <div class="img">
            <img :src="require(`@/assets/${testimonial.image}`)" alt="">
          </div>
          <div class="name">
            <h1>{{ testimonial.name }}</h1>
            <h3>{{ testimonial.company }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MicroSlider from 'micro-slider';
import Hammer from 'hammerjs';

export default {
  name: 'TestimonialCarousel',
  data() {
    return {
      testimonials: [
        {
          text1: "I've been using Sightfull Dynamics payroll services for over a year at both of my businesses. Their service is outstanding, from the competitive rates to the comprehensive payroll administration.",
          text2: "It saves me money and a lot of time because I don't have to deal with payroll myself.",
          image: "Man.png", // Adjusted path relative to src/assets/
          name: "Irshaad Moosa",
          company: "TOTAL | STEERS"
        },
        {
          text1: "I've been using Sightfull Dynamics for my payroll since 2010 and they've been fantastic. They're always available to answer questions about labor issues and their prices haven't gone up in all this time.",
          text2: "They've exceeded my expectations, I highly recommend them!",
          image: "women.png", // Adjusted path relative to src/assets/
          name: "Nazreen Jacobs",
          company: "SIMPLIFIED IT SERVICES"
        },
        {
          text1: "We switched to Sightfull Dynamics a year ago and it's been a game-changer. Our old payroll system was a nightmare, but Sightfull Dynamics makes everything so easy.",
          text2: "They even helped us get caught up on some old tax filings. We couldn't be happier!",
          image: "women.png", // Adjusted path relative to src/assets/
          name: "Mishqah Omar",
          company: "NOUVEAU COFFEE & GRILL"
        },
        {
          text1: "I've been using Sightfull Dynamics for payroll and SARS related issues for over a year now, and it's been a great decision! They're fast, efficient, and affordable.",
          text2: "They've even been helpful with advice on labor issues. I highly recommend them to any business!",
          image: "Man.png", // Adjusted path relative to src/assets/
          name: "Yaseen Adam",
          company: "BP SANDOWN"
        },
        {
          text1: "Their rates are reasonable and their service is impeccable. They handle everything from taxes to direct deposit, and they're always on top of any regulatory updates. It's been a lifesaver!",
          text2: "I highly recommend Sightfull Dynamics for any business owner looking to simplify payroll.",
          image: "Man.png", // Adjusted path relative to src/assets/
          name: "Azeem Sayed",
          company: "FARM FRESH"
        }
      ],
      sliderInitialized: false,
      microSlider: null,
      autoplayInterval: 3000,
      autoplay: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initSlider();
    });
  },
  methods: {
    initSlider() {
      const sliderWrapper = document.querySelector('.micro-slider-wrapper');
      const sliderItems = document.querySelectorAll('.slider-item');

      if (sliderWrapper && sliderItems.length > 0) {
        sliderWrapper.style.perspective = '1500px';
        sliderWrapper.style.height = '730px';

        // Initialize MicroSlider
        this.microSlider = new MicroSlider('.micro-slider', {});

        // Autoplay functionality
        this.autoplay = setInterval(() => this.microSlider.next(), this.autoplayInterval);

        // Pause autoplay on hover
        sliderWrapper.addEventListener('mouseenter', () => {
          clearInterval(this.autoplay);
        });

        // Resume autoplay on mouse leave
        sliderWrapper.addEventListener('mouseleave', () => {
          clearInterval(this.autoplay);
          this.autoplay = setInterval(() => this.microSlider.next(), this.autoplayInterval);
        });

        this.sliderInitialized = true;
      } else {
        console.error('The slider does not contain any valid items.');
      }
    }
  },
  watch: {
    sliderInitialized(newVal) {
      if (newVal) {
        // Additional initialization logic if needed
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.autoplay);
  }
};
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
  background-color: white;
  border-radius: 8px;
  border: 1px solid #74809842;
}

.comma-img {
  height: 8%;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: start;
  align-items: center;
  align-content: center;
}

.comma-img img {
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

.text p {
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

@media screen and (max-width: 1400px) {}

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
