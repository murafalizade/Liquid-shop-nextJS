const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|svg|png|jpe?g|gif)$/,
            use:
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            },
        })
        // config.module.rules.push({
        //     test: /\.(mp4|svg|png|jpe?g|gif)$/,
        //     use: 
        //         {
        //             loader: 'file-loader',
        //             options: {}
        //         },
        // })

        return config
    },
}