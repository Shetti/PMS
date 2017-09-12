
var config = {
    
        paths: {
            html:   './PMS.Web/*.html',
            js: 	['./PMS.Web/**/*.js'],
            jsLibraries: 
            [
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/bootstrap/dist/js/bootstrap.min.js'
            ],
            clientJs: './PMS.Web/client.js',
            serverJs: './PMS.Server/server.js',
            contents: '../PMS.Content/**/*',
            sassEntry : '../PMS.Content/css/mainPMS.css',
            dist: '../PMS.Deployment/'
        }
    }
    
    module.exports = config;