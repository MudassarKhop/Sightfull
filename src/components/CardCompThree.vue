<template>
<div class="grid-container">
<div class="grid-item" v-for="card in cards" :key="card.id">
<div class="image" :class="card.imageClass">
<h1>{{ card.id }}</h1>
</div>
<div class="heading">
  <div class="h2">
    <h2>{{ card.heading }}:</h2>
  </div>
<div class="p">
  <p>{{ card.passage }}</p>
</div>
</div>
<div class="ask-about">
<p>Want to know more?</p> <i @click="redirectToContact(card.heading)" class="fa-solid fa-arrow-right"></i>
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
{
  "id": "01",
  "heading": "Recruitment and Onboarding",
  "passage": "We manage the entire recruitment process, from sourcing candidates to onboarding new hires, ensuring a seamless transition."
},
{
  "id": "02",
  "heading": "Employee Records Management",
  "passage": "We maintain accurate and up-to-date employee records, including personal information, job history, and performance data."
},
{
  "id": "03",
  "heading": "Performance Management",
  "passage": "We implement performance management systems, facilitating regular reviews, feedback, and performance improvement plans."
  },
  {
  "id": "04",
  "heading": "Employee Relations",
  "passage": "We handle employee relations, addressing grievances, mediating disputes, and fostering a positive workplace environment."
},
{
  "id": "05",
  "heading": "Compliance with Labor Laws",
  "passage": "We ensure your business complies with all relevant labor laws and regulations, minimizing legal risks."
  },
    {
      "id": "06",
      "heading": "Leave Management",
      "passage": "We handle leave management, ensuring accurate tracking and compliance with company policies and legal requirements."
      },
{
  "id": "07",
  "heading": "Employee Training and Development",
  "passage": "We design and deliver training programs to enhance employee skills, performance, and career development."
},
{
  "id": "08",
  "heading": "Benefits Administration",
  "passage": "We manage employee benefits programs, including health insurance, retirement plans, and other perks."
  },
  {
    "id": "09",
    "heading": "Compensation Management",
    "passage": "We handle compensation planning, ensuring competitive and fair salary structures in line with industry standards."
    },
    {
      "id": "10",
      "heading": "Termination and Offboarding",
      "passage": "We manage the termination process, including exit interviews, final settlements, and ensuring compliance with legal requirements."
},
{
  "id": "11",
  "heading": "Workforce Planning",
  "passage": "We assist with workforce planning, helping you anticipate staffing needs and align resources with business goals."
  },
  {
    "id": "12",
    "heading": "Employee Engagement",
    "passage": "We implement strategies to boost employee engagement, satisfaction, and retention."
    },
    {
      "id": "13",
      "heading": "HR Audits",
      "passage": "We conduct HR audits to identify compliance gaps and recommend improvements."
      },
      {
        "id": "14",
        "heading": "Health and Safety Compliance",
        "passage": "We ensure your workplace meets health and safety standards, reducing risks and promoting employee well-being."
        },
        {
          "id": "15",
          "heading": "Diversity and Inclusion Initiatives",
          "passage": "We develop and support diversity and inclusion initiatives, fostering an inclusive workplace culture."
          },
          {
            "id": "16",
            "heading": "Time and Attendance Management",
            "passage": "We manage time and attendance tracking, ensuring accurate recording and compliance with labor laws."
            },
            {
              "id": "17",
              "heading": "Succession Planning",
  "passage": "We assist with succession planning, identifying and developing future leaders within your organization."
  },
  {
    "id": "18",
    "heading": "HR Reporting and Analytics",
    "passage": "We provide detailed HR reports and analytics, offering insights into workforce trends and performance metrics."
    },
    {
      "id": "19",
      "heading": "Payroll Integration",
  "passage": "We ensure seamless integration between HR functions and payroll processing for accurate and timely salary disbursements."
  },
  {
  "id": "20",
  "heading": "Employee Surveys",
  "passage": "We conduct employee surveys to gather feedback and inform HR strategies."
  },
  {
    "id": "21",
    "heading": "Talent Management",
    "passage": "We implement talent management strategies to attract, develop, and retain top talent."
    },
    {
      "id": "22",
      "heading": "Organizational Development",
      "passage": "We support organizational development initiatives to enhance efficiency and effectiveness."
      },
      {
        "id": "23",
        "heading": "Conflict Resolution",
        "passage": "We offer conflict resolution services, helping to resolve workplace disputes amicably and professionally."
        },
        {
          "id": "24",
          "heading": "Labor Relations",
          "passage": "We manage labor relations, including negotiations with unions and handling collective bargaining agreements."
          },
          {
            "id": "25",
            "heading": "Policy Development and Implementation",
            "passage": "We develop and implement HR policies that align with your company's goals and legal requirements."
          },
            ],
            
            };
            },
            methods: {
              getImagePath(imageName) {
                return require(`@/assets/Values/${imageName}`);
                },
                redirectToContact(heading) {
const query = `?message=I want to know more about ${encodeURIComponent(heading)}`;
this.$router.push(`/contact${query}`);
},
}
};
</script>

<style scoped>
.grid-container {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 30px;
padding: 15px;
height: 100%;
width: 100%;
}

.grid-item {
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-between;
align-items: center;
/* padding: 25px; */
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
border-radius: 8px;
width: 380px;
height: 430px;
border: 1px solid #74809842;
background-color: #ffffff;
transition: 1s ease-in-out ;
}
.image{
background-image: radial-gradient(54.35% 54.35% at 13.82% 7%, #162051 0%, #161B32 100%);
border-top-left-radius: 8px;
border-top-right-radius: 8px;
height: 30%;
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-items: center;
align-content: center;
}
.h2{
  display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: start;
align-items: end;
align-content: center;
height: 30%;
width: 100%;
}
.p{
  display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: start;
align-items: start;
align-content: center;
border-bottom: 1px solid #74809842;
height: 50%;
width: 100%;
}
.image h1{
margin-left: 17px;
font-family: light;
color: #e79f21;
font-size: 40px;
letter-spacing: 1px;
}
.image img {
height: auto;
border-radius: 8px;
}

img {
/* Specific styles for image 1 */
/* border: 2px solid red; */
width: 50%;
}
.heading {
height: 50%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: center;
align-content: center;
text-align: left;
width: 90%;
}
.heading h2{
letter-spacing: 1px;
text-transform: uppercase;
font-size: 15px;
letter-spacing: 1px;
font-family: medium;
color: #161B32;
}
.ask-about{
height: 15%;
width: 90%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-items: center;
align-content: center;
text-align: center;
margin-bottom: 15px;
/* width: 100%; */
}
.ask-about p{
font-family: bold;
margin-right: 10px;
font-size:15px ;
letter-spacing: 1px;
color: #1d2d35;

}
.text {
height: 40%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: start;
align-content: center;
font-size: 14px;
letter-spacing: 1px;
font-family: light;
color: #748098;
text-align: center;
}
.heading p{
font-family: light;
font-size: 15px;
color: #748098;
letter-spacing: 1px;
}
.fa-arrow-right{
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
transition: 0.4s ease-in-out;
}
.fa-arrow-right:hover{
background-color: #e79f21;
border: 1px solid #e79f21;
color: white;
cursor: pointer;
transition: 0.4s ease-in-out;
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
