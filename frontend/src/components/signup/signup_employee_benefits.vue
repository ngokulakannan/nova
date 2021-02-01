
<template>
  <!-- outer div -->
  <div class="signup_cover">
     
 

    <!--Employee Benefits -->
    <h2>Employee Benefits</h2>
    <table>
      <tr>
        <td>
          Sum Insured:

          <input type="number" v-model.number="sum_insured" />
        </td>
        <td>
          Family covered:

          <input
            type="radio"
            id="family_covered_yes"
            name="family"
            value="true"
            v-model="family_covered"
          />
          <label for="family_covered_yes">Yes </label>
          <input
            type="radio"
            id="family_covered_no"
            name="family"
            value="false"
            v-model="family_covered"
          />
          <label for="family_covered_no">No</label><br />
        </td>
      </tr>

      <tr>
        <td>
          Parents covered:

          <input
            type="radio"
            id="parents_covered_yes"
            name="parents"
            value="true"
            v-model="parents_covered"
          />
          <label for="parents_covered_yes">Yes </label>
          <input
            type="radio"
            id="parents_covered_no"
            name="parents"
            value="false"
            v-model="parents_covered"
          />
          <label for="parents_covered_no">No</label><br />
        </td>

        <td>
          Maternity covered:

          <input
            type="radio"
            id="maternity_covered_yes"
            name="maternity"
            value="true"
            v-model="maternity_covered"
          />
          <label for="maternity_covered_yes">Yes </label>
          <input
            type="radio"
            id="maternity_covered_no"
            name="maternity"
            value="false"
            v-model="maternity_covered"
          />
          <label for="maternity_covered_no">No</label><br />
        </td>
      </tr>

      <tr>
        <td>
          Gym membership:

          <input
            type="radio"
            id="gym_membership_yes"
            name="gym"
            value="true"
            v-model="gym_membership"
          />
          <label for="gym_membership_yes">Yes </label>
          <input
            type="radio"
            id="gym_membership_no"
            name="gym"
            value="false"
            v-model="gym_membership"
          />
          <label for="gym_membership_no">No</label><br />
        </td>
        <td>
          Free doctor on call:

          <input
            type="radio"
            id="free_doctor_on_call_yes"
            name="doctor"
            value="true"
            v-model="free_doctor_on_call"
          />
          <label for="free_doctor_on_call_yes">Yes </label>
          <input
            type="radio"
            id="free_doctor_on_call_no"
            name="doctor"
            value="false"
            v-model="free_doctor_on_call"
          />
          <label for="free_doctor_on_call_no">No</label><br />
        </td>
      </tr>
      <tr>
        <td>
          Remote option:

          <input
            type="radio"
            id="remote_option_yes"
            name="remote"
            value="true"
            v-model="remote_option"
          />
          <label for="remote_option_yes">Yes </label>
          <input
            type="radio"
            id="remote_option_no"
            name="remote"
            value="false"
            v-model="remote_option"
          />
          <label for="remote_option_no">No</label><br />
        </td>

        <td>
          Flexible work timings:

          <input
            type="radio"
            id="flexible_work_timings_yes"
            name="work"
            value="true"
            v-model="flexible_work_timings"
          />
          <label for="flexible_work_timings_yes">Yes </label>
          <input
            type="radio"
            id="flexible_work_timings_no"
            name="work"
            value="false"
            v-model="flexible_work_timings"
          />
          <label for="flexible_work_timings_no">No</label><br />
        </td>
      </tr>

      <tr>
        <td>
          Paid leaves:

          <input type="number" v-model.number="paid_leaves" />
        </td>

        <td>
          <input
            type="button"
            value="Back"
            @click="$emit('goTo', 'company')"
            class="button"
          />
          &nbsp;
          <input type="button" value="save" @click="signUp" class="button" />
        </td>
      </tr>
    </table>

    <br />
  </div>
</template>


<style scoped>
/* Header */
.header {
  height: 100px;
  display: grid;
  place-items: center;
}
h2 {
  text-align: center;
  color: #231c57;
}
.logo {
  display: inline-block !important;
  vertical-align: middle;
  margin-top: -10px;
}
.logo-text {
  color: #3d9ae2;
  font-size: 32px;
  font-weight: 700;
  font-family: Cabin, sans-serif;
}
.logo-sub-text {
  color: #231c57;
  font-size: 32px;
  font-weight: 540;
  -webkit-font-smoothing: antialiased;
  font-family: Cabin, sans-serif;
}

/* error */
.error {
  color: red;
}
/* cover */
.signup_cover {
  margin: auto;
  padding: 20px;
  border: black 0px solid;
  display: grid;
  place-items: center;

  position: relative;
  background-color: rgb(245, 237, 222);
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}

/* toast */
.toast {
  visibility: hidden;
  opacity: 1;
  min-width: 250px;
  margin-left: -125px;
  background-color: rgba(10, 10, 10, 0.95);
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  padding: 16px;
  position: fixed;
  z-index: 1000;
  left: 50%;
  top: 0px;
}

.toast-show {
  visibility: visible;
  top: 30px;
  transition: visibility 1s, top 1s;
}

/* Custom radio button */

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 20px;
  padding-right: 10px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid rgb(184, 183, 183);
  border-radius: 100%;
  background: #fff;
}

[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: #3d9ae2;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  animation-name: scale-radio;
  animation-duration: 0.5s;
}

/* animation */
@keyframes scale-radio {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>

<script>
// imports

export default {
  name: "signup",

  data: function () {
    return {
      modal: true,
      sum_insured: 0,
      family_covered: false,
      parents_covered: false,
      maternity_covered: false,
      gym_membership: false,
      free_doctor_on_call: false,
      paid_leaves: 0,
      flexible_work_timings: false,
      remote_option: false,
    };
  },
  methods: {
    /**
     * Sign up if given details are correct
     */
    signUp: async function () {
      this.$emit(
        "fillBenefitDetails",
        this.sum_insured,
        this.family_covered,
        this.parents_covered,
        this.maternity_covered,
        this.gym_membership,
        this.free_doctor_on_call,
        this.paid_leaves,
        this.flexible_work_timings,
        this.remote_option
      );

      this.$emit("signUp");
    },
  },
};
</script>

