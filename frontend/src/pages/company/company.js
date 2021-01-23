import Vue from 'vue';
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"

// components
import company from '../../components/company/company.vue'

const apolloClient = new ApolloClient({
    uri: "http://localhost:4000/graphql"
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})


// Vue object
var VueObj = new Vue({

    template: `
    <div class="main">
    <company></company>
     </div>
    `,
    components: { company },
    apolloProvider,
})


VueObj.$mount('#app')