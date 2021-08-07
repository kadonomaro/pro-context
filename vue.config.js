module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
			@import "@/assets/css/variables.scss"; @import "@/assets/css/media.scss";
		`,
            },
        },
    },
};
