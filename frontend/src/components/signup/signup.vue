
<template>
  <!-- outer div -->
  <div class="signup_cover">
    <!-- Header of the App -->
    <div class="header">
      <!-- App logo -->
      <div class="holder">
        <img src="../../assets/logo.png" class="logo" height="40px" />
        <span class="logo-text">Nova</span>
        <span class="logo-sub-text">Benefits</span>
        <!-- toast to show messages -->
        <div class="toast"></div>
      </div>
    </div>

    <!-- user details -->
    <div class="user-details" v-if="page1">
      <h2>User Details</h2>
      <input
        v-model="username"
        type="text"
        placeholder="Enter Username"
        @blur="checkUser"
      />
      <br /><br />
      <input
        v-model="email"
        type="text"
        placeholder="Enter Email"
        @blur="checkEmail"
      />
      <br /><br />
      <input
        type="button"
        value="Next"
        class="button"
        @click="next"
        :disabled="!next_btn"
      /><br />
    </div>

    <!-- Company details -->
    <table v-if="!page1">
      <tr>
        <td>
          *Name:
          <span> <input type="text" v-model="name" @blur="checkName" /></span>
        </td>
        <td>
          *Website:<span>
            <input type="text" v-model="website" @blur="checkWebsite"
          /></span>
        </td>
        <td>
          *No of Employees:

          <input type="number" v-model.number="number_of_employees" />
        </td>
      </tr>

      <tr>
        <td>
          *Funding stage:

          <select v-model="funding_stage">
            <option>Self</option>
            <option>Seed</option>
            <option>Venture</option>
            <option>IPO</option>
          </select>
        </td>
        <td>
          *Industry:

          <input type="text" v-model="industry" />
        </td>
        <td>
          Sum Insured:

          <input type="number" v-model.number="sum_insured" />
        </td>
      </tr>

      <tr>
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
        <td>
          Paid leaves:

          <input type="number" v-model.number="paid_leaves" />
        </td>
      </tr>

      <tr>
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
          <input
            type="button"
            value="save"
            @click="signUp"
            class="button"
            :disabled="!signup_btn"
          />
        </td>
      </tr>
    </table>

    <!-- error details -->
    * Mandatory Fields<br /><br />
    <div v-if="error" class="error">{{ error_text }}</div>
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

.error {
  color: red;
}
.signup_cover {
  margin: auto;
  padding: 20px;
  border: black 0px solid;
  display: grid;
  place-items: center;
  top: 50px;
  position: relative;
}
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
/* various input box settings  */

input[type="text"],
input[type="password"],
input[type="number"] {
  border: none;
  border-bottom: 2px solid rgb(43, 41, 41);
  outline: none;
  width: 250px;
  height: 35px;
  background-color: transparent;
  color: black;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="number"]:focus {
  background-color: rgb(107, 104, 104);
  color: white;
}

select {
  width: 150px;
  vertical-align: baseline;
  height: 25px;
  color: rgb(7, 7, 7);
  background-color: transparent;
  border: none;
  border: solid 1px rgb(7, 7, 7);
  border-radius: 5px;
}

option {
  background-color: transparent;
}

::placeholder {
  color: black;
  opacity: 1;
}

.button {
  width: 100px;
  height: 30px;
  background-color: #3d9ae2;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
}
.button:disabled {
  background-color: #4b677c;
  opacity: 0.5;
  cursor: not-allowed;
}

/* table */
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

td {
  padding: 15px;
}
</style>

<script>
// imports
import gql from "graphql-tag";
export default {
  name: "signup",

  data: function () {
    return {
      next_btn: false,
      username: "",
      email: "",
      page1: true,
      error: false,
      error_text: "",

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
      signup_btn: false,
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
     * Show the company details page if given details are correct
     */
    next: function () {
      if (this.username.length == 0 || this.email.length == 0) {
        this.next_btn = false;
        this.error = true;
        this.error_text = " Username or Email should not be empty.";
      } else {
        this.error = false;
        this.error_text = " ";
        localStorage.setItem("username", this.username);
        localStorage.setItem("email", this.email);
        this.page1 = false;
      }
    },
    /**
     * Sign up if given details are correct
     */
    signUp: async function () {
      if (
        this.name.length == 0 ||
        this.website.length == 0 ||
        this.number_of_employees == 0 ||
        this.funding_stage == "" ||
        this.industry == ""
      ) {
        this.next_btn = true;
        this.error = true;
        this.error_text = " Mandatory Fields should not be empty.";
      } else {
        this.next_btn = false;
        this.error = false;
        this.error_text = " ";
        await this.saveCompany();
        await this.saveUser();
      }
    },

    /**
     * check email is valid and not in db already
     */
    checkEmail: async function () {
      try {
        let result = await this.$apollo.query({
          query: gql`
            query($email: String!) {
              checkEmail(email: $email) {
                name
              }
            }
          `,
          variables: {
            email: this.email,
          },
        });
        let length = result["data"]["checkEmail"].length;

        if (length == 0) {
          this.next_btn = true;
          this.error = false;
          this.error_text = "";
        } else {
          this.next_btn = false;
          this.error = true;
          this.error_text = "Email already there.";
        }
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.email.match(mailformat)) {
          return true;
        } else {
          this.next_btn = false;
          this.error = true;
          this.error_text = "Invalid Email.";
        }
      } catch (e) {
        console.error(e); 
      }
    },
     /**
     * username is valid  
     */
    checkUser: function () {
      if (this.username.length == 0) {
        this.next_btn = false;
        this.error = true;
        this.error_text = " Username should not be empty.";
      } else {
        this.next_btn = true;
        this.error = false;
        this.error_text = "";
      }
    },


    /**
     * check company name is valid and not in db already
     */
    checkName: async function () {
      try {
        let result = await this.$apollo.query({
          query: gql`
            query($name: String!) {
              checkCompany(name: $name) {
                name
              }
            }
          `,
          variables: {
            name: this.name,
          },
        });
        let length = result["data"]["checkCompany"].length;

        if (length == 0) {
          this.signup_btn = true;
          this.error = false;
          this.error_text = "";
        } else {
          this.signup_btn = false;
          this.error = true;
          this.error_text = "Company Name already there.";
        }
      } catch (e) {
        console.error(e); 
      }
    },
        
    /**
     * check company website is valid and not in db already
     */
    checkWebsite: async function () {
      try {
        let result = await this.$apollo.query({
          query: gql`
            query($website: String!) {
              checkWebsite(website: $website) {
                website
              }
            }
          `,
          variables: {
            website: this.website,
          },
        });
        let length = result["data"]["checkWebsite"].length;

        if (length == 0) {
          this.signup_btn = true;
          this.error = false;
          this.error_text = "";
        } else {
          this.signup_btn = false;
          this.error = true;
          this.error_text = "website already there.";
        }
      } catch (e) {
        console.error(e); 
      }
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
        this.signup_btn = false;
        this.error = true;
        this.error_text = e;
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
          window.location = "/dashboard.html";
        }
      } catch (e) {
        console.error(e);
        this.showToast(e);
        this.signup_btn = false;
        this.error = true;
        this.error_text = e;
      }
    },
  },

 
};
</script>

