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
{  id:"01", heading: 'Processing of Wages (Weekly) and Salaries (Monthly)', passage:"We ensure accurate and timely processing of weekly wages and monthly salaries, complying with South African labor laws."},
{  id:"02", heading: 'Creation of all new and maintenance of existing payroll records', passage:"We create and maintain payroll records, ensuring accurate and current employee information for seamless payroll processing." },
{  id:"03", heading: 'Printed IRP5/IT3 certificates for all employees on payroll', passage:"We print and distribute IRP5/IT3 certificates, ensuring accurate and timely delivery for employee tax returns."},
{  id:"04", heading: 'IRP5 run and electronic submission to SARS at Tax year end', passage:"We prepare and electronically submit IRP5 forms to SARS, ensuring accurate and timely tax year-end reporting."},
{  id:"05", heading: 'Recording and updating of loan balances', passage:"We manage loan balances, ensuring repayments are accurately tracked and reflected in payroll records."},
{  id:"06", heading: 'Updating leave records and supplying detailed reports', passage:"We update leave records and provide detailed reports, ensuring compliance with company policies and labor laws."},
{  id:"07", heading: 'Payslips for all employees for each pay run', passage:"We generate and distribute detailed payslips for each pay run, ensuring transparency and prompt delivery."},
{  id:"08", heading: 'Creation of data disk for EFT on pay date', passage:"We create data disks for EFT, ensuring secure and accurate salary transfers on pay dates." },
{  id:"09", heading: 'Monthly electronic submission to UIF', passage:"We handle monthly electronic UIF submissions, ensuring compliance with regulations and avoiding penalties."},
{  id:"10", heading: 'Detailed Monthly & Weekly reports', passage:"We generate detailed monthly and weekly payroll reports, providing comprehensive insights into payroll activities."},
{  id:"11", heading: 'Year to date take on figures', passage:"We calculate and maintain year-to-date figures, providing comprehensive overviews of earnings, deductions, and net pay."},
{  id:"12", heading: 'Statutory payments on your behalf', passage:"We manage all statutory payments, ensuring accurate calculations and timely submissions to relevant authorities." },
{  id:"13", heading: 'EMP201 payment to SARS', passage:"We handle monthly EMP201 payments to SARS, ensuring compliance with South African tax laws." },
{  id:"14", heading: 'Employment contracts', passage:"We draft and maintain employment contracts, ensuring compliance with labor laws and company policies."},
{  id:"15", heading: 'All deductions ', passage:"UIF, PAYE, RSC, SDL, SITE etc, we manage all payroll deductions, ensuring accuracy and compliance with legal requirements."},
{  id:"16", heading: 'Printed payslip drop off', passage:"We provide a printed payslip drop-off service, ensuring prompt and confidential delivery to employees."},
{  id:"17", heading: 'Printed IRP5/IT3 Drop off', passage:"We ensure employees receive their printed IRP5/IT3 certificates promptly for accurate tax submissions."},
{  id:"18", heading: 'EFT payments for weekly and monthly payrolls', passage:"We manage EFT payments, ensuring accurate and timely salary disbursements for weekly and monthly payrolls."},
{  id:"19", heading: 'Bargaining Council reconciliations and payments ', passage:"Eg: MIBCO, MIBFA, MEIBC, we handle bargaining council reconciliations and payments."},
{  id:"20", heading: 'PAYE, UIF, SDL and COIDA Registration’s', passage:"We manage registrations for PAYE, UIF, SDL, and COIDA, ensuring compliance with labor laws and regulations."},
{  id:"21", heading: 'COIDA return of Earnings', passage:"We manage the annual COIDA Return of Earnings, ensuring accurate reporting to the Department of Labour."},
{  id:"22", heading: 'Letters of Good Standing', passage:"We assist in obtaining Letters of Good Standing, certifying your business's compliance with regulatory requirements."},
{  id:"23", heading: 'Staff Training on Labour Issues', passage:"We provide staff training on labor issues, ensuring compliance with labor laws and informed workforce."},
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
