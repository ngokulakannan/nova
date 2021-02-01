
<template>
  <!-- outer div -->
  <div class="signup_cover">
    
 

    <!-- Company details -->
    <h2>Company Details</h2>
    <table>
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
      </tr>

      <tr>
        <td>
          *No of Employees:

          <input
            type="number"
            v-model.number="number_of_employees"
            min="2"
            @blur="validateEmpty(number_of_employees, 'Number of employees')"
            @change="validateEmpty(number_of_employees, 'Number of employees')"
          />
        </td>
        <td>
          *Funding stage:

          <select
            v-model="funding_stage"
            @blur="validateEmpty(funding_stage, 'Funding stage')"
          >
            <option>Self</option>
            <option>Seed</option>
            <option>Venture</option>
            <option>IPO</option>
          </select>
        </td>
      </tr>

      <tr>
        <td>
          *Industry:

          <input
            type="text"
            v-model="industry"
            @blur="validateEmpty(industry, 'Industry')"
          />
        </td>
        <!-- buttons -->
        <td>
          <input
            type="button"
            value="Back"
            @click="$emit('goTo', 'user')"
            class="button"
          />
          &nbsp;
          <input
            type="button"
            value="Next"
            :disabled="getError"
            @click="next"
            class="button"
          />
        </td>
      </tr>
    </table>

    <!-- error details -->
    * Mandatory Fields<br /><br />
    <div class="error">{{ error_text }}</div>
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
  max-width: 600px;
  position: relative;

  background-color: rgb(245, 237, 222);
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}

/* various input box settings  */

select {
  width: 150px;
  vertical-align: baseline;
  height: 25px;
  color: rgb(7, 7, 7);
  background-color: transparent;
  border: none;
  border-bottom: solid 2px rgb(7, 7, 7);
  outline: none;
  cursor: pointer;
}

select:focus {
  border-bottom: solid 3px rgb(10, 186, 230);
}

option {
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
}
</style>

<script>
// imports
import gql from "graphql-tag";
export default {
  name: "signup",

  data: function () {
    return {
      error_text: "",

      name: "",
      website: "",
      number_of_employees: 0,
      funding_stage: "",
      industry: "",
    };
  },
  methods: {
    /**
     * Validate given item is empty or not
     */
    validateEmpty: function (item, name) {
      if (item == "" || item == 0) {
        if (!this.error_text.includes(name + " should not be empty.")) {
          this.error_text += name + " should not be empty. ";
        }

        return false;
      } else {
        this.error_text = this.error_text.replace(
          name + " should not be empty. ",
          ""
        );
        return true;
      }
    },

    /**
     * go to next page if given details are correct.
     * 
     */
    next: async function () {
      await this.checkName();
      await this.checkWebsite();
      this.validateEmpty(this.number_of_employees, "Number of employees");
      this.validateEmpty(this.funding_stage, "Funding stage");
      this.validateEmpty(this.industry, "Industry");
      if (this.error_text.length < 5) {
        this.$emit("goTo", "benefits");
        this.$emit(
          "fillCompanyDetails",
          this.name,
          this.website,
          this.number_of_employees,
          this.funding_stage,
          this.industry
        );
      }
    },

    /**
     * check company name is not in db already
     */
    checkName: async function () {
      try {
        if (this.validateEmpty(this.name, "Company name")) {
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
            fetchPolicy: "network-only",
          });
          let length = result["data"]["checkCompany"].length;

          if (length == 0) {
            this.error_text = this.error_text.replace(
              "Company Name already there. ",
              ""
            );
          } else {
            if (!this.error_text.includes("Company Name already there. ")) {
              this.error_text += "Company Name already there. ";
            }
          }
        }
      } catch (e) {
        console.error(e);
      }
    },

    /**
     * check company website is not in db already
     */
    checkWebsite: async function () {
      try {
        if (this.validateEmpty(this.website, "Company website")) {
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
            fetchPolicy: "network-only",
          });
          let length = result["data"]["checkWebsite"].length;

          if (length == 0) {
            this.error_text = this.error_text.replace(
              "website already there. ",
              ""
            );
          } else {
            if (!this.error_text.includes("website already there. ")) {
              this.error_text += "website already there. ";
            }
          }
        }
      } catch (e) {
        console.error(e);
      }
    },

 
  },
  computed: {
    getError: function () {
      if (this.error_text.length > 5) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

