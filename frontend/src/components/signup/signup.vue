<template>
  <!-- outer div -->
  <div class="signup_outer_cover">
      <!-- Progress bar -->
    <ul id="progressbar">
      <li class="active">User Details</li>
      <li :class="{ active: current == 'company' || current == 'benefits' }">
        Company Details
      </li>
      <li :class="{ active: current == 'benefits' }">Employee Benefits</li>
    </ul>

    <!-- Contaainer for three levels of sign up -->
    <div class="tab">
      <transition name="dropdown">
        <keep-alive>
            <!-- user -->
          <signupuser
            v-if="current == 'user'"
            v-on:goTo="goToTab"
            v-on:fillUserDetails="fillUserDetails"
          ></signupuser>

          <!-- company -->
          <signupcompany
            v-if="current == 'company'"
            v-on:goTo="goToTab"
            v-on:fillCompanyDetails="fillCompanyDetails"
          ></signupcompany>

          <!-- benefits -->
          <signupemployeebenefits
            v-if="current == 'benefits'"
            v-on:goTo="goToTab"
            v-on:fillBenefitDetails="fillBenefitDetails"
            v-on:signUp="signUp"
             
          ></signupemployeebenefits>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
<style scoped>
.signup_outer_cover {
  margin: auto;
  padding: 20px;
  border: black 0px solid;
  display: grid;
  place-items: center;
  top: 50px;
  position: relative;
}

/* Three levels of signup */
.tab {
  display: flex;
}
.tab ::v-deep h2 {
  text-align: center;
  color: #231c57;
  font-family: cursive;
}

/* tansition effects */
.dropdown-enter-to,
.dropdown-leave {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translate(500px, 0px);
  transition: opacity 0.25s ease-out, transform 0.25s ease-out;
}

/* various input box settings  */

.tab ::v-deep input[type="text"],
.tab ::v-deep input[type="number"],
.tab ::v-deep input[type="email"] {
  border: none;
  border-bottom: 2px solid rgb(43, 41, 41);
  outline: none;
  width: 250px;
  height: 20px;
  background-color: transparent;
  color: black;
  transition: border-bottom 0.25s ease-out;
}
.tab ::v-deep input[type="number"] {
  width: 75px;
}

.tab ::v-deep input[type="text"]:focus,
.tab ::v-deep input[type="number"]:focus,
.tab ::v-deep input[type="email"]:focus {
  border-bottom: 3px solid rgb(13, 186, 199);
  color: black;
}

.tab ::v-deep .button {
  width: 100px;
  height: 30px;
  background-color: #3d9ae2;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  margin: 5px;
}
.tab ::v-deep .button:disabled {
  background-color: #4b677c;
  opacity: 0.5;
  cursor: not-allowed;
}
.tab ::v-deep .button:hover,
.button:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 3px #3d9ae2;
}

/* table */
.tab ::v-deep table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

.tab ::v-deep td {
  padding: 15px;
  overflow-x: hidden;
}

/*progressbar*/
#progressbar {
  margin-bottom: 30px;
  overflow: hidden; 
  counter-reset: step;
}
#progressbar li {
  list-style-type: none;
  color: white;
  text-transform: uppercase;
  font-size: 9px;
  width: 33.33%; 
  float: left;
  position: relative;
  font-size: 15px;
  text-shadow: 2px 1px rgba(0, 0, 0, 0.4);
  font-family: cursive;
  text-align: center;
}
#progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  line-height: 30px;
  display: block;
  font-size: 10px;
  color: #333;
  background: white;
  border-radius: 3px;
  margin: 0 auto 5px auto;
}
/*progressbar connectors*/
#progressbar li:after {
  content: "";
  width: 100%;
  height: 2px;
  background: white;
  position: absolute;
  left: -50%;
  top: 9px;
  z-index: -1;  
}
#progressbar li:first-child:after { 
  content: none;
}
 
#progressbar li.active:before,
#progressbar li.active:after {
  background: #3d9ae2;
  color: white;
  font-size: 15px;
  text-align: center;
  transform: rotateX("45deg");
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
</style>

<script>
//imports
import gql from "graphql-tag";
import signupuser from "./signup_user.vue";
import signupcompany from "./signup_company.vue";
import signupemployeebenefits from "./signup_employee_benefits.vue";

export default {
  components: { signupuser, signupcompany, signupemployeebenefits },
  data: function () {
    return {
      tabs: ["user", "company", "benefits"],
      current: "user",

      username: "",
      email: "", 
      name: "",
      website: "",
      number_of_employees: 0,
      funding_stage: "",
      industry: "",
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
     * Show toast message
     */
    showToast: function (text, timeout = 3000) {
      var toast = document.getElementsByClassName("toast")[0];
      toast.innerHTML = text;
      toast.classList.add("toast-show");

      setTimeout(function () {
        toast.classList.remove("toast-show");
      }, timeout);
    },

    /**
     * Fill user details from signup_user component
     */
    fillUserDetails: function (username, email) {
      this.username = username;
      this.email = email;
    },

    /**
     * Fill company details from signup_user component
     */
    fillCompanyDetails: function (
      name,
      website,
      number_of_employees,
      funding_stage,
      industry
    ) {
      this.name = name;
      this.website = website;
      this.number_of_employees = number_of_employees;
      this.funding_stage = funding_stage;
      this.industry = industry;
    },

    /**
     * Fill benefit details from signup_user component
     */
    fillBenefitDetails: function (
      sum_insured,
      family_covered,
      parents_covered,
      maternity_covered,
      gym_membership,
      free_doctor_on_call,
      paid_leaves,
      flexible_work_timings,
      remote_option
    ) {
      this.sum_insured = sum_insured;
      this.family_covered = family_covered;
      this.parents_covered = parents_covered;
      this.maternity_covered = maternity_covered;
      this.gym_membership = gym_membership;
      this.free_doctor_on_call = free_doctor_on_call;
      this.paid_leaves = paid_leaves;
      this.flexible_work_timings = flexible_work_timings;
      this.remote_option = remote_option;
    },

    /**
     * change current tab
     * @param  {String} value Tab to be switched
     */
    goToTab: function (value) {
      this.current = value;
    },

    /**
     * save all information to DB
     */
    signUp: async function (   ) {
      await this.saveCompany()
      await this.saveUser()
    },

    /**
     * save company information into db
     */
    saveCompany: async function () {
      try {
        this.result = await this.$apollo.mutate({
          mutation: gql`
            mutation(
              $name: String!
              $website: String!
              $number_of_employees: Int!
              $funding_stage: String!
              $industry: String!
              $sum_insured: Int!
              $family_covered: Boolean!
              $parents_covered: Boolean!
              $maternity_covered: Boolean!
              $gym_membership: Boolean!
              $free_doctor_on_call: Boolean!
              $paid_leaves: Int!
              $flexible_work_timings: Boolean!
              $remote_option: Boolean!
            ) {
              createCompany(
                name: $name
                website: $website
                number_of_employees: $number_of_employees
                funding_stage: $funding_stage
                industry: $industry
                sum_insured: $sum_insured
                family_covered: $family_covered
                parents_covered: $parents_covered
                maternity_covered: $maternity_covered
                gym_membership: $gym_membership
                free_doctor_on_call: $free_doctor_on_call
                paid_leaves: $paid_leaves
                flexible_work_timings: $flexible_work_timings
                remote_option: $remote_option
              ) {
                name
              }
            }
          `,
          variables: {
            name: this.name,
            website: this.website,
            number_of_employees: this.number_of_employees,
            funding_stage: this.funding_stage,
            industry: this.industry,
            sum_insured: this.sum_insured,
            family_covered:
              this.family_covered == "true" || this.family_covered == true,
            parents_covered:
              this.parents_covered == "true" || this.family_covered == true,
            maternity_covered:
              this.maternity_covered == "true" || this.family_covered == true,
            gym_membership:
              this.gym_membership == "true" || this.family_covered == true,
            free_doctor_on_call:
              this.free_doctor_on_call == "true" || this.family_covered == true,
            paid_leaves: this.paid_leaves,
            flexible_work_timings:
              this.flexible_work_timings == "true" ||
              this.family_covered == true,
            remote_option:
              this.remote_option == "true" || this.family_covered == true,
          },
           
        });

        this.showToast("Saved Company details successfully");
      } catch (e) {
        console.error(e);
        this.showToast(e);
        throw e
      }
    },

    /**
     * save user information into DB
     */
    saveUser: async function () {
      try {
        this.result = await this.$apollo.mutate({
          mutation: gql`
            mutation($company: String!, $name: String!, $email: String!) {
              createUser(company: $company, name: $name, email: $email) {
                name
              }
            }
          `,
          variables: {
            name: this.username,
            company: this.name,
            email: this.email,
          },
          
        });

        this.showToast("Saved User details successfully");
        if (!this.error) {
          window.location = "/";
        }
      } catch (e) {
        console.error(e);
        this.showToast(e);
 
      }
    },
  },
};
</script>