import Vue from 'vue';
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"



// components
import dashboard from '../../components/dashboard/dashboard.vue'

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
    <dashboard></dashboard>
     </div>
    `,
    components: { dashboard },
    apolloProvider,
})

VueObj.$mount('#app')