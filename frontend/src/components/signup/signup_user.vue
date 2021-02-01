
<template>
  <!-- outer div -->
  <div class="signup_cover">
   

    <!-- user details -->
    <div class="user-details">
      <h2>User Details</h2>
      <input
        v-model="username"
        type="text"
        placeholder="Enter Username"
        @blur="validateUser"
      />
      <br /><br />
      <input
        v-model="email"
        type="email"
        placeholder="Enter Email"
        @blur="validateEmail"
      />
      <br /><br />
      <input
        type="button"
        value="Next"
        class="button"
        @click="next"
        :disabled="getError"
      /><br />
    </div>

    <!-- error details -->
    <br />
    <div class="error">{{ error_text }}</div>
    <br />
  </div>
</template>


<style scoped>
.error {
  color: red;
}
.signup_cover {
  margin: auto;
  padding: 20px;
  border: black 0px solid;
  display: grid;
  place-items: center;
  max-width: 300px;
  position: relative; 
  background-color: rgb(245, 237, 222);
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
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
      username: "",
      email: "", 
      error_text: "",
    };
  },
  methods: {
    /**
     * Validate given item is empty or not
     */
    validateEmpty: function (item, name) {
      if (item == "") {
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
     * Validate given email address is proper email
     */
    validateIfEmail: function () {
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.email.match(mailformat)) {
        this.error_text = this.error_text.replace("Invalid Email. ", "");
        return true;
      } else {
        if (!this.error_text.includes("Invalid Email. ")) {
          this.error_text += "Invalid Email. ";
        }
      }
    },

    /**
     * Show the company details page if given details are correct
     */
    next: async function () {
      this.validateUser();
      await this.validateEmail();
      if (this.error_text.length < 5) {
        this.$emit("goTo", "company");
        this.$emit("fillUserDetails", this.username, this.email);
      }
    },

    /**
     * check email is not in db already
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
          fetchPolicy: "network-only",
        });
        let length = result["data"]["checkEmail"].length;

        if (length == 0) {
          this.error_text = this.error_text.replace(
            "Email already there. ",
            ""
          );
        } else {
          if (!this.error_text.includes("Email already there. ")) {
            this.error_text += "Email already there. ";
          }
        }
      } catch (e) {
        console.error(e);
      }
    },


    /**
     * username is valid
     */
    validateUser: function () {
      this.validateEmpty(this.username, "Username");
    },

    /**
     * email is valid
     */
    validateEmail: async function () {
      if (this.validateEmpty(this.email, "Email")) {
        this.validateIfEmail();
        await this.checkEmail();
      }
    },
  },

  computed: {
    /**
     * check error is there or not
     */
    getError: function () {
      if (this.error_text.length > 5) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    document.getElementById("loader_cover").style.display = "none";
  },
};
</script>

