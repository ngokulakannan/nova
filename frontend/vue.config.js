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

        dashboard: {

            entry: './src/pages/dashboard.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Dashboard',
            chunks: ['chunk-vendors', 'chunk-common', 'dashboard']
        },

    }
}