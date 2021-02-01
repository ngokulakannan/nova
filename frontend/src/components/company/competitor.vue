<template>
  <!-- Competitor -->
  <div class="competitor">
    <!-- Title -->
    <div class="competitor-title">
      <span  > <slot name="header"></slot> </span>
    </div>
    <!-- benefits -->
    <div class="benefits">
        &#8377;<span> <slot name="insured"></slot> </span> Sum insured <br />
        <span> <slot name="family"></slot> </span> Family covered <br />
       <span> <slot name="parents"></slot> </span> Parents covered  <br />
       <span> <slot name="maternity"></slot></span> Maternity covered <br />
      <span> <slot name="gym"></slot> </span> Gym membership  <br />
       <span> <slot name="doctor"></slot> </span> Free doctor on call  <br />
      <span> <slot name="leaves"></slot> </span> Paid leaves  <br />
       <span> <slot name="timing"></slot> </span> Flexible work timings  <br />
      <span> <slot name="remote"></slot> </span> Remote option  <br />
    </div>
  </div>
</template>

<style scoped>
.competitor-title {
  font-size: 22px;
  text-align: center;
  border-bottom: rgb(10, 148, 158) 2px solid;
  text-shadow: -5px 2px 4px #222d2d;
  font-family: sans-serif;white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}

.competitor {
  color: rgb(250, 249, 246);
  background: rgb(34, 193, 195);
 
  border-radius: 10px;
  padding: 10px;
  line-height: 30px;
  max-width: 400px;
  text-align: center;
}
a{
  text-decoration: none;
  color: white;
}
</style>

<script>
export default {
  name: "competitor",
};
</script>