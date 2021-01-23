<template>
  <!-- Competitor -->
  <div class="competitor">
    <!-- Title -->
    <div class="competitor-title">
      <span> <slot name="header"></slot> </span>
    </div>
    <!-- benefits -->
    <div class="benefits">
      Sum Insured: <span> <slot name="insured"></slot> </span> <br />
      Family covered: <span> <slot name="family"></slot> </span> <br />
      Parents covered: <span> <slot name="parents"></slot> </span> <br />
      Maternity covered: <span> <slot name="maternity"></slot></span> <br />
      Gym membership: <span> <slot name="gym"></slot> </span> <br />
      Free doctor on call: <span> <slot name="doctor"></slot> </span> <br />
      Paid leaves: <span> <slot name="leaves"></slot> </span> <br />
      Flexible work timings: <span> <slot name="timing"></slot> </span> <br />
      Remote option: <span> <slot name="remote"></slot> </span> <br />
    </div>
  </div>
</template>

<style scoped>
.competitor-title {
  font-size: 22px;
  text-align: center;
}

.competitor {
  color: rgb(250, 249, 246);
  background: rgb(34, 193, 195);
  background: linear-gradient(
    30deg,
    rgb(19, 88, 121) 0%,
    rgb(36, 214, 218) 100%
  );
  border-radius: 10px;
  padding: 10px;
  line-height: 30px;
}
</style>

<script>
export default {
  name: "competitor",
};
</script>