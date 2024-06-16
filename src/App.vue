<template>
    <router-view/>
</template>
<script>
export default { 
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
span{
  color: #d88f10;
}
@font-face {
  font-family: light;
  src: url(./assets/Manrope-Light.woff2);
}
@font-face {
  font-family: regular;
  src: url(./assets/Manrope-Regular.woff2);
}
@font-face {
  font-family: medium;
  src: url(./assets/Manrope-Medium.woff2);
}
@font-face {
  font-family: bold;
  src: url(./assets/Manrope-Bold.woff2);
}
@font-face {
  font-family: semi-bold;
  src: url(./assets/Manrope-SemiBold.woff2);
}
.message-text{
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.message-options{
  height: 100%;
  width: 98%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #74809842;
}
.fa-location-dot{
  margin-right: 10px;
}
.styled-message{
  color: #1d2d35;
  font-family: medium;
  letter-spacing: 1.50px;
  font-size: 12px;
}
</style>
