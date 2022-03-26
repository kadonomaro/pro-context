module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/css/variables.scss"; @import "@/assets/css/media.scss";`,
            },
        },
    },
};
