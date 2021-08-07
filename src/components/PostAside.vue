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
                    navigation: {
                        nextEl: `.js-cards-slider-next`,
                        prevEl: `.js-cards-slider-prev`,
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
            <div class="post-aside__slider-arrow arrow-prev js-cards-slider-prev">
                <svg viewBox="0 0 24 24">
                    <path
                        d="M16.989 2.25a1.6 1.6 0 00-2.325-.039L5 12.106l9.465 9.69a1.664 1.664 0 102.375-2.33l-7.252-7.36 7.373-7.668a1.6 1.6 0 00.028-2.188z"
                    ></path>
                </svg>
            </div>
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
            <div class="post-aside__slider-arrow arrow-next js-cards-slider-next">
                <svg viewBox="0 0 24 24">
                    <path
                        d="M16.989 2.25a1.6 1.6 0 00-2.325-.039L5 12.106l9.465 9.69a1.664 1.664 0 102.375-2.33l-7.252-7.36 7.373-7.668a1.6 1.6 0 00.028-2.188z"
                    ></path>
                </svg>
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
    }

    .post-aside__slider-arrow {
        position: absolute;
        z-index: 5;
        top: 50%;
        width: 40px;
        height: 40px;
        background-color: rgba(#000, 0);
        border-radius: 50%;
        transition: background-color 0.2s ease-in;
        cursor: pointer;
        &:hover {
            background-color: rgba(#000, 0.1);
        }
        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 24px;
            height: 24px;
            fill: #505050;
            transform: translate(-50%, -50%);
        }
        &[aria-disabled="true"] {
            opacity: 0.3;
            cursor: default;
            &:hover {
                background-color: transparent;
            }
        }
        &.arrow-prev {
            left: -15px;
        }
        &.arrow-next {
            right: -15px;
            transform: scale(-1);
        }
    }
</style>
