<template>
  <!--Popup -->
  <div class="popup-cover">
    <div class="popup">
      <div class="modal-header">
        Authenticate with Email &nbsp;&nbsp;&nbsp;<span class="close" @click="$emit('close' )">&#10008;</span>
      </div>
      <div class="body">
        Email :<input type="email"  v-model="email"  />
        <input type="button" value="validate" @click="validate" class="button" />
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="email"] {
  border: none;
  border-bottom: 2px solid rgb(43, 41, 41);
  outline: none;
  width: 250px;
  height: 20px;
  background-color: transparent;
  color: black;
  transition: border-bottom 0.25s ease-out;
}

input[type="email"]:focus {
  border-bottom: 3px solid rgb(13, 186, 199);
  color: black;
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
  margin: 5px;
}
.button:disabled {
  background-color: #4b677c;
  opacity: 0.5;
  cursor: not-allowed;
}
.button:hover,
.button:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 3px #3d9ae2;
}

.body {
 
  text-align: center;
  padding: 15px;
}

/* popup */

.popup {
  position: relative;
  top: 200px;
  width: 600px;
  height: 120px;
  border: black 1px solid;
  z-index: 100;
  margin: auto;
  background-color: seashell;
  border-radius: 15px;
}
.modal-header {
  border-bottom: solid 1px black;
  padding: 5px;
  height: 30px;
  text-align: center;
  font-family: cursive;
}
.close {
  color: red;
  cursor: pointer;
  float: right;
  padding-right: 10px;
  font-size: 25px;  
}
.popup-cover {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(10, 10, 10, 0.65);
  overflow: hidden;
}
</style>

<script>
export default {
  name: "modal",
  props:[
    'website'
  ],
  data: function(){

    return{
email:""
    }
  },
  methods:  {
     validate: function(){
        
      let email_domain = "";
      if (this.email) {
        email_domain = this.email.substr(this.email.indexOf("@")+1, this.email.length);
      }

      let prefix = (this.website.indexOf("www.") > -1)? this.website.indexOf(".")+1 : 0
      let website_domain = this.website.substr(prefix, this.website.length);
      if (email_domain == website_domain) {
        this.$emit('edit' )  
        this.$emit('close' ) 
      } else {
        this.$emit('toast',"Not Authorized" )  
      }
     }
 
  },
};
</script>