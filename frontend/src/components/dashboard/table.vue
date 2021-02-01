
<template>
 
    
    <!--Main  -->
    <div class="main">
      <div class="main-cover" style="">
        <div class="title">Company List</div>
        <div class="table-controls">
          <!-- search box -->
          <div>
            Search Company:
            <input type="text" class="text" v-model="search_text" />
          </div>

          <!-- pagination -->
          <div class="pagination">
            Go to page:<input
              type="number"
              class="number"
              min="0"
              :max="filterMatches.length / records_per_page"
              v-model="start_page"
            />  of {{ Math.floor(filterMatches.length / records_per_page) }} pages
          </div>
          <!-- Add company -->
          <a href="/signup">
            <input type="button" value="Add company " class="add-button"
          /></a>
        </div>
        <div>
          <!-- Table to list companies -->
          <table v-if="getTable.length > 0">
            <tr>
              <th style="width: 200px">Company Name</th>
              <th style="width: 250px">Website</th>
              <th style="width: 100px">Link</th>
            </tr>

            <tr v-for="company in getTable" :key="company.id">
              <td>{{ company.name }}</td>
              <td>{{ company.website }}</td>
              <td>
                <a
                  class="comapany-link"
                  :href="'/company?id=' + company.id"
                   
                  >View Details</a
                >
              </td>
            </tr>
          </table>
          <!-- Show if no data found -->
          <div
            v-else
            style="
              width: 100%;
              text-align: center;
              margin-top: 40px;
              font-size: 25px;
            "
          >
            No Data Found.
          </div>
          <div v-if="loading"> </div>
        </div>
      </div>
    </div>
  
</template>


<style scoped>
/* main */
.main {
  margin: auto;
  width: 70%;
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
  font-family: cursive;
}

.table-controls {
  display: flex;
  align-items: center;
  margin: auto;
  gap: 20px;
  margin-top: 20px;
}

/* table */
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  text-align: left;
  background-color: #3d9ae2;
  color: white;
}
th:first-child {
  border-top-left-radius: 10px;
}
th:last-child {
  border-top-right-radius: 10px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

.comapany-link {
  text-decoration: none;
  color: #231c57;
  cursor: pointer;
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
  width: 40px;
  height: 25px;
  background-color: transparent;
  color: rgb(12, 12, 12);
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
  color: rgb(7, 7, 7);
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
// imports
import gql from "graphql-tag";

export default {
  name: "dashboard",
  components: {},
  data: function () {
    return {
      companies: [],
      search_text: "",
      start_page: 0,
      records_per_page: 5, // change to alters recors per page
    };
  },
  apollo: {
    companies: gql`
      query {
        companies {
          id
          name
          website
        }
      }
    `,
  },
  methods: {
    /**
     * filter function to filter in matches table 
     * @param  {Array} item row in matches table
     */
    search: function (item) {
      // reset to first page
      this.start_page = 0
      //if search string is not empty
      if (this.search_text != "") {
        // if search string is present in company name
        if (
          item["name"].toLowerCase().includes(this.search_text.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      }
      //if search string  not empty
      else {
        return true;
      }
    },
  },
  computed: {
    /**
     * Go to particular page
     */
    getTable: function () {
      return this.filterMatches.slice(
        this.start_page * this.records_per_page,
        this.start_page * this.records_per_page + this.records_per_page
      );
    },

    /**
     * filter the table data
     */
    filterMatches: function () {
      
      return this.companies.filter(this.search);
    },

    /**
     * Get the loading status
     */
    loading: function(){
      if(this.$apollo.loading){
         document.getElementById("loader_cover").style.display = "block";
         return this.$apollo.loading
      }
      else{
        document.getElementById("loader_cover").style.display = "none";
         return this.$apollo.loading
      }
      }
     
  },
  
 
};
</script>

