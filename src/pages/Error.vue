<script>
    export default {
        name: "Error",
        data() {
            return {
                isLoaded: false,
            };
        },
        mounted() {
            setTimeout(() => {
                this.isLoaded = true;
            }, 600);
        },
    };
</script>

<template>
    <div class="error">
        <div class="error__image" :class="{ loaded: isLoaded }">
            <span>4</span>
            <router-link :to="{ name: 'Home' }">
                <img src="@/assets/images/search.svg" alt="" />
            </router-link>
            <span>4</span>
        </div>
        <div class="error__text">
            <h1 class="error__title">К сожалению запрашиваемая страница не найдена</h1>

            <div class="error__subtitle">
                Пока мы работаем над этой проблемой, вы можете посетить другие страницы сайта
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .error {
        padding-top: 40px;
        @include bp($bp-desktop-sm) {
            padding-top: 120px;
        }
    }

    .error__image {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 12px;
        font-size: 70px;
        font-weight: 600;
        @include bp($bp-mobile) {
            margin-bottom: 24px;
            font-size: 96px;
        }
        img {
            position: relative;
            z-index: 2;
            width: 90px;
            @include bp($bp-mobile) {
                width: 120px;
            }
        }
        span {
            transition: transform 0.5s ease-in, opacity 0.5s ease-in;
            &:first-of-type {
                transform: translateX(100%);
                opacity: 0;
            }
            &:last-of-type {
                transform: translateX(-100%);
                opacity: 0;
            }
        }
        &.loaded {
            span {
                &:first-of-type {
                    transform: translateX(0);
                    opacity: 1;
                }
                &:last-of-type {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        }
    }

    .error__text {
        text-align: center;
    }

    .error__title {
        margin: 0 0 10px;
        font-size: 18px;
        font-weight: 500;
        @include bp($bp-desktop-sm) {
            font-size: 28px;
        }
    }

    .error__subtitle {
        font-size: 14px;
        @include bp($bp-desktop-sm) {
            font-size: 16px;
        }
    }
</style>
