<template>
<div class="grid-container">
  <div class="grid-item" v-for="card in cards" :key="card.id">
    <div class="image" :class="card.imageClass">
      <img :src="getImagePath(card.image)" :alt="card.heading">
          </div>
    <div class="heading">
      <h2>{{ card.heading }}</h2>
    </div>
    <div class="text">
      <p>{{ card.text }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: 'CardGrid',
data() {
  return {
    cards: [
      { id: 5, image: '5..png', heading: 'Accuracy', text: 'Sleep well knowing youre with professionals. 100% payroll accuracy, on time, always.',imageClass: 'image5' },
      { id: 2, image: '2..png', heading: 'Compliance', text: 'Rest assured that your payroll complies to the latest statutory and legislative regulations.',imageClass: 'image2' },
      { id: 1, image: '1..png', heading: 'Cost efficiency', text: 'Best value outsourcing, super competitive pricing, zero costs for updates & back-ups, no cancellation fee.',imageClass: 'image1' },
      { id: 4, image: '4..png', heading: 'No Hidden Costs', text: 'No surprises. No extra costs. No price increases. Ever.',imageClass: 'image4' },
      { id: 7, image: '7..png', heading: 'Human Resources', text: 'Full range of HR services designed to support your business.',imageClass: 'image7' },
      { id: 3, image: '3..png', heading: 'Security', text: 'Confidentiality as a core function. POPI compliant.',imageClass: 'image3' },
      { id: 6, image: '6..png', heading: 'Time Saving', text: 'We help your business focus on core operations. Outsource your administrative tasks today.',imageClass: 'image6' },
      { id: 8, image: '8..png', heading: 'Performance Management', text: 'Manage your workforce effectively. Tools and support for evaluating and improving employee performance.',imageClass: 'image8' },
      { id: 9, image: '9..png', heading: 'Recruitment & Onboarding', text: 'Assistance with the hiring process from job posting to integration.',imageClass: 'image9 ' },
    ],
  };
},
methods: {
  getImagePath(imageName) {
    return require(`@/assets/Values/${imageName}`);
  }
}
};
</script>

<style scoped>
.grid-container {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding: 15px;
height: 100%;
width: 100%;
}

.grid-item {
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
padding: 25px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
border-radius: 8px;
width: 350px;
height: 350px;
border: 1px solid #74809842;
background-color: #ffffff;
transition: 1s ease-in-out ;
}

.image{
height: 35%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: end;
}

.image img {
height: auto;
border-radius: 8px;
}

.image1 img {
/* Specific styles for image 1 */
/* border: 2px solid red; */
width: 60%;
}

.image2 img {
/* Specific styles for image 2 */
width: 30%;
}
.image3 img {
/* Specific styles for image 1 */
width: 30%;
/* margin-top: 50px !important; */
}

.image4 img {
/* Specific styles for image 2 */
width: 60%;
}.image5 img {
/* Specific styles for image 1 */
width: 30%;
}

.image6 img {
/* Specific styles for image 2 */
width: 30%;
}
.image7 img {
/* Specific styles for image 2 */
width: 40%;
}.image8 img {
/* Specific styles for image 1 */
width: 45%;
}

.image9 img {
/* Specific styles for image 2 */
width: 45%;
}
.heading {
height: 15%;
display: flex;
flex-direction: row;
/* flex-wrap: nowrap; */
justify-content: center;
align-items: end;
align-content: center;
margin-top: 10px;
font-size: 15px;
letter-spacing: 1px;
font-family: medium;
color: #1d2d35;
}

.text {
height: 35%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: start;
align-content: center;
margin-top: 10px;
font-size: 16px;
letter-spacing: 1px;
font-family: light;
color: #748098;
text-align: center;
}

@media (max-width: 768px) {
.grid-container {
  grid-template-columns: repeat(2, 1fr);
}
}

@media (max-width: 480px) {
.grid-container {
  grid-template-columns: 1fr;
}
}
</style>
