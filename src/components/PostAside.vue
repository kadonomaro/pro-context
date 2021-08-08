<script>
    import { isMobile, stickyScroll, throttle } from "@/utils";
    import Swiper from "swiper/swiper-bundle.min";
    import CardListItem from "@/components/CardListItem";

    export default {
        name: "PostAside",
        components: {
            CardListItem,
        },
        props: {
            posts: {
                type: Array,
                required: true,
            },
            title: String,
        },
        data() {
            return {
                stickyScrollWithThrottle: throttle(this.stickyImageScroll, 35),
                slider: null,
            };
        },
        mounted() {
            window.addEventListener("scroll", this.stickyScrollWithThrottle);
            this.$nextTick(() => {
                this.slider = new Swiper(".js-cards-slider", {
                    spaceBetween: 20,
                    direction: "horizontal",
                    grabCursor: true,
                    mousewheel: {
                        forceToAxis: true,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar",
                    },
                });
            });
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.stickyScrollWithThrottle);
        },
        methods: {
            stickyImageScroll() {
                if (!isMobile()) {
                    const el = document.querySelector(".js-scroll-sidebar");
                    const elWrap = document.querySelector(".js-scroll-sidebar-wrapper");
                    if (el && elWrap) {
                        stickyScroll({
                            el,
                            elWrap,
                            topMargin: 90,
                            classNameDivider: "footer",
                        });
                    }
                }
            },
        },
    };
</script>

<template>
    <div class="post-aside js-scroll-sidebar-wrapper">
        <h2 class="post-aside__title">{{ title }}</h2>
        <div class="post-aside__slider">
            <div class="swiper-container js-cards-slider">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide post-aside__slide"
                        v-for="post in posts"
                        :key="post.id"
                    >
                        <card-list-item :card="post" is-vertical></card-list-item>
                    </div>
                </div>
            </div>
            <div class="post-aside__slider-pagination">
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .post-aside {
        padding: 16px;
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 0 0 25px $color-shadow;
        box-sizing: border-box;
        .card-list__item {
            max-width: 100%;
            padding: 0 0 16px;
        }
    }

    .post-aside__title {
        margin: 0 0 10px;
        font-size: 24px;
    }

    .post-aside__slider {
        position: relative;
        .swiper-pagination {
            width: 100%;
            height: 3px;
            border-radius: 3px;
            overflow: hidden;
        }
        .swiper-slide {
            height: auto;
        }
        .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
            background-color: #007ae9;
        }
    }

    .post-aside__slider-pagination {
        padding-top: 15px;
    }
</style>
