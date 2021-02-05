import Vue from 'vue';
import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"
import VueRouter from 'vue-router'



// components
import companyList from '../components/dashboard/table.vue'
import company from '../components/company/company.vue'
import signup from '../components/signup/signup.vue'
import NotFoundComponent from '../components/not_found.vue'

const apolloClient = new ApolloClient({
    //uri: "http://localhost:4000/graphql"
    uri: "https://stormy-ravine-18661.herokuapp.com/graphql"
})



Vue.use(VueApollo)
Vue.use(VueRouter)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

const routes = [
    { path: '/', component: companyList, alias: '/dashboard' },
    { path: '/company', component: company },
    { path: '/signup', component: signup },
    { path: '*', component: NotFoundComponent }

]


const router = new VueRouter({
    mode: 'history',
    routes
})

// Vue object
var VueObj = new Vue({

    template: `
    <router-view></router-view>
    `,
    components: { companyList, company },
    apolloProvider,
    router
})

VueObj.$mount('#app')