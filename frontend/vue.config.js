module.exports = {
    publicPath: './',

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
            './'
        } else {
            // mutate for development...
        }
    },

    runtimeCompiler: true,

    pages: {
        company: {
            entry: './src/pages/company/company.js',
            template: 'public/index.html',
            filename: 'company.html',
            title: 'Company Details',
            chunks: ['chunk-vendors', 'chunk-common', 'company']
        },
        dashboard: {

            entry: './src/pages/dashboard/dashboard.js',
            template: 'public/index.html',
            filename: 'dashboard.html',
            title: 'Dashboard',
            chunks: ['chunk-vendors', 'chunk-common', 'dashboard']
        },
        signup: {

            entry: './src/pages/signup/signup.js',
            template: 'public/index.html',
            filename: 'signup.html',
            title: 'Signup',
            chunks: ['chunk-vendors', 'chunk-common', 'signup']
        },

    }
}