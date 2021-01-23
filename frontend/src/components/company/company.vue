
<template>
  <!-- outer div -->
  <div>
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

    <!-- Main content -->
    <div class="main" v-if="this.id">
      <div class="main-cover">
        <div class="title">Company Details</div>

        <div>
          <!-- Table to show company details -->
          <table>
            <tr>
              <td>
                Name: <span>{{ name }}</span>
              </td>
              <td>
                Website:<span>{{ website }}</span>
              </td>
              <td>
                No of Employees:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ number_of_employees }}</span>
                <!-- if in editmode show this -->
                <input
                  v-else
                  type="number"
                  v-model.number="number_of_employees"
                />
              </td>
            </tr>

            <tr>
              <td>
                Funding stage:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ funding_stage }}</span>

                <!-- if in editmode show this -->
                <select v-else v-model="funding_stage">
                  <option>Self</option>
                  <option>Seed</option>
                  <option>Venture</option>
                  <option>IPO</option>
                </select>
              </td>
              <td>
                Industry:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ industry }}</span>

                <!-- if in editmode show this -->
                <input v-else type="text" v-model="industry" />
              </td>
              <td>
                Sum Insured:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ number_of_employees }}</span>

                <!-- if in editmode show this -->
                <input v-else type="number" v-model.number="sum_insured" />
              </td>
            </tr>

            <tr>
              <td>
                Family covered:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ family_covered }}</span>

                <!-- if in editmode show this -->
                <span v-else>
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
                </span>
              </td>
              <td>
                Parents covered:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ parents_covered }}</span>

                <!-- if in editmode show this -->
                <span v-else>
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
                </span>
              </td>
              <td>
                Maternity covered:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ maternity_covered }}</span>

                <!-- if in editmode show this -->
                <span v-else>
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
                </span>
              </td>
            </tr>
            <tr>
              <td>
                Gym membership:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ gym_membership }}</span>

                <!-- if in editmode show this -->
                <span v-else>
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
                </span>
              </td>
              <td>
                Free doctor on call:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ free_doctor_on_call }}</span>

                <!-- if in editmode show this -->
                <span v-else>
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
                </span>
              </td>
              <td>
                Paid leaves:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ paid_leaves }}</span>

                <!-- if in editmode show this -->
                <span v-else>
                  <input type="number" v-model.number="paid_leaves" />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                Flexible work timings:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ flexible_work_timings }}</span>

                <!-- if in editmode show this -->
                <span v-else>
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
                </span>
              </td>
              <td>
                Remote option:
                <!-- if not in editmode show this -->
                <span v-if="!edit_mode">{{ remote_option }}</span>

                <!-- if in editmode show this -->
                <span v-else>
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
                </span>
              </td>
              <td>
                <!-- if in editmode show this -->
                <div v-if="edit_mode">
                  <input
                    type="button"
                    value="save"
                    @click="save"
                    class="save-button"
                  />
                  &nbsp;&nbsp;
                  <input
                    type="button"
                    value="reset"
                    @click="reset"
                    class="save-button"
                  />
                </div>
                <!-- if not in editmode show this -->
                <input
                  v-else
                  type="button"
                  class="save-button"
                  value="Edit"
                  @click="edit"
                />
              </td>
            </tr>
          </table>
        </div>
        <br /><br />
        <!-- Show top three competitors -->
        <div class="title">Competitors</div>
        <br />

        <!-- Competitors -->
        <div class="competitors" v-if="competitors.length > 0">
          <competitor v-for="competitor in competitors" :key="competitor.id">
            <template v-slot:header> {{ competitor.name }} </template>
            <template v-slot:insured>{{ competitor.sum_insured }} </template>
            <template v-slot:family>{{ competitor.family_covered }} </template>
            <template v-slot:parents>
              {{ competitor.parents_covered }}
            </template>
            <template v-slot:maternity
              >{{ competitor.maternity_covered }}
            </template>
            <template v-slot:gym> {{ competitor.gym_membership }} </template>
            <template v-slot:doctor
              >{{ competitor.free_doctor_on_call }}
            </template>
            <template v-slot:leaves> {{ competitor.paid_leaves }} </template>
            <template v-slot:timing>
              {{ competitor.flexible_work_timings }}
            </template>
            <template v-slot:remote> {{ competitor.remote_option }} </template>
          </competitor>
        </div>
        <div style="text-align: center" v-else>No Competitors available.</div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* competitors */
.competitors {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: 20px;
}

.benefits {
  color: white;
  font-family: arial, sans-serif;
}

/* main */
.main {
  margin: auto;
  width: 90%;
}

.main-cover {
  margin: auto;
  display: grid;
  grid-template-rows: 30px 60x 800px;
}
.title {
  text-align: center;
  color: #231c57;
  font-size: 32px;
}
.save-button {
  width: 80px;
  height: 30px;
  background-color: #3d9ae2;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
}

/* Table */
.table-controls {
  display: flex;
  align-items: center;
  margin: auto;
  gap: 20px;
  margin-top: 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

td {
  padding: 15px;
}

/* various input box settings  */

input[type="text"] {
  border: none;
  border-bottom: 2px solid rgb(43, 41, 41);
  outline: none;
  width: 250px;
  height: 25px;
  background-color: transparent;
  color: rgb(12, 12, 12);
}

input[type="number"] {
  border: none;
  border-bottom: 2px solid rgb(43, 41, 41);
  outline: none;
  width: 70px;
  height: 25px;
  background-color: transparent;
  color: rgb(12, 12, 12);
}

input[type="radio"] {
  cursor: pointer;
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

/* Header */
.header {
  height: 100px;
  display: grid;
  place-items: center;
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
.add-button {
  width: 120px;
  height: 30px;
  background-color: #3d9ae2;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
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
</style>

<script>
//imports
import gql from "graphql-tag";

// Component Imports
import competitor from "./competitor.vue";
export default {
  name: "company",
  components: { competitor },
  data: function () {
    return {
      company: [],
      competitors: [],
      edit_mode: false,
      id: new URLSearchParams(location.search).get("id"),
      name: "",
      website: "",
      number_of_employees: 0,
      funding_stage: "",
      industry: "",
      sum_insured: "",
      family_covered: false,
      parents_covered: false,
      maternity_covered: false,
      gym_membership: false,
      free_doctor_on_call: false,
      paid_leaves: false,
      flexible_work_timings: false,
      remote_option: false,
      result: "",
      results: "",
    };
  },

  methods: {
    /**
     * Fill the values to vue members obtained from DB
     */
    fillValues: function () {
      let company = this.company[0];
      this.id = company.id;
      this.name = company.name;
      this.website = company.website;
      this.number_of_employees = company.number_of_employees;
      this.funding_stage = company.funding_stage;
      this.industry = company.industry;
      this.sum_insured = company.sum_insured;
      this.family_covered = company.family_covered;
      this.parents_covered = company.parents_covered;
      this.maternity_covered = company.maternity_covered;
      this.gym_membership = company.gym_membership;
      this.free_doctor_on_call = company.free_doctor_on_call;
      this.paid_leaves = company.paid_leaves;
      this.flexible_work_timings = company.flexible_work_timings;
      this.remote_option = company.remote_option;
    },

    /**
     * Update the company information
     * @param  {Number} value Tab to be switched
     */
    save: async function () {
      try {
        this.result = await this.$apollo.mutate({
          mutation: gql`
            mutation(
              $name: String!
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
              updateCompany(
                name: $name
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
              )
            }
          `,
          variables: {
            name: this.name,
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

        this.showToast("Saved successfully");
      } catch (e) {
        console.error(e);
        this.showToast(e);
      }
    },

    /**
     * Get the company information of given id
     */
    getCompanies: async function () {
      try {
        let result = await this.$apollo.query({
          query: gql`
            query($id: ID!) {
              company(id: $id) {
                id
                name
                website
                number_of_employees
                funding_stage
                industry
                sum_insured
                family_covered
                parents_covered
                maternity_covered
                gym_membership
                free_doctor_on_call
                paid_leaves
                flexible_work_timings
                remote_option
              }
            }
          `,
          variables: {
            id: this.id,
          },
        });
        this.company = result["data"]["company"];
      } catch (e) {
        console.error(e);
        this.showToast(e);
      }
    },

    /**
     * Get the competitor information
     */
    getCompetitors: async function () {
      try {
        let result = await this.$apollo.query({
          query: gql`
            query($id: ID!) {
              competitors(id: $id) {
                id
                name
                website
                number_of_employees
                funding_stage
                industry
                sum_insured
                family_covered
                parents_covered
                maternity_covered
                gym_membership
                free_doctor_on_call
                paid_leaves
                flexible_work_timings
                remote_option
              }
            }
          `,
          variables: {
            id: this.id,
          },
        });
        this.competitors = result["data"]["competitors"];
      } catch (e) {
        console.error(e);
        this.showToast(e);
      }
    },

    /**
     * Reset the values in the fields
     */
    reset: async function () {
      this.fillValues();
      this.showToast("Reset successfully");
    },

    /**
     * Show edit mode only if email and website domain are same
     */
    edit: function () {
      let email = localStorage.getItem("email");
      let email_domain = "";
      if (email) {
        email_domain = email.substr(0, email.indexOf("@"));
      }

      let website_domain = this.website.substr(0, this.website.indexOf("."));
      if (email_domain == website_domain) {
        this.edit_mode = true;
      } else {
        this.showToast("Not Authorized");
      }
    },

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
  },

  async mounted() {
    await this.getCompanies();
    await this.getCompetitors();
    this.fillValues();
  },
};
</script>

