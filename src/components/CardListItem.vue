<script>
    export default {
        name: "CardListItem",
        props: {
            card: {
                type: Object,
                required: true,
            },
            type: {
                type: String,
                default: "post",
            },
            isVertical: Boolean,
        },
        computed: {
            previewImage() {
                return this.card.previewImage?.url || "/static/empty-photo.svg";
            },
            backgroundImageColor() {
                return this.card.backgroundImageColor
                    ? this.card.backgroundImageColor?.hex
                    : "linear-gradient(135deg, #f395ba 0%, #fed182 100%)";
            },
            routerPathComponent() {
                return this.type === "post" ? "PostDetail" : "NewsDetail";
            },
        },
    };
</script>

<template>
    <router-link
        class="card-list-item-link"
        :class="{ 'card-list-item-link--vertical': isVertical }"
        :to="{ name: routerPathComponent, params: { slug: card.slug } }"
    >
        <article class="card-list-item" :class="{ 'card-list-item--vertical': isVertical }">
            <div class="card-list-item__image" :style="{ background: backgroundImageColor }">
                <img :src="previewImage" :alt="card.title" />
            </div>
            <div class="card-list-item__content">
                <div class="card-list-item__head">
                    <div class="card-list-item__tags">
                        <div class="card-list-item__tag" v-for="tag in card.tags" :key="tag">
                            {{ tag }}
                        </div>
                    </div>
                    <div class="card-list-item__date">{{ card.createdAt | date }}</div>
                </div>
                <h3 class="card-list-item__title">{{ card.title }}</h3>
                <div class="card-list-item__text">{{ card.announce }}</div>
                <footer class="card-list-item__footer" v-if="card.author">
                    <div class="card-list-item__author">
                        <img
                            :src="card.author.picture.url"
                            :alt="card.author.name"
                            class="card-list-item__author-image"
                        />
                        <span class="card-list-item__author-name">{{ card.author.name }}</span>
                    </div>
                </footer>
            </div>
        </article>
    </router-link>
</template>

<style lang="scss">
    .card-list-item-link {
        display: block;
        text-decoration: none;
        color: inherit;
    }

    .card-list-item-link--vertical {
        height: 100%;
    }

    .card-list-item {
        display: flex;
        flex-direction: column;
        height: 100%;
        text-decoration: none;
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 0 0 25px $color-shadow;
        overflow: hidden;
        transition: box-shadow 0.2s ease-in;
        @include bp($bp-desktop-md) {
            flex-direction: row;
            &:hover {
                box-shadow: 0 0 7px #f1f1f1;
                .card-list-item__image img {
                    transform: translate(-50%, -50%) scale(1.03);
                }
            }
        }
    }

    .card-list-item--vertical {
        flex-direction: column;
        background-color: #f9f9f9;
        box-shadow: none;
        &:hover {
            box-shadow: none;
        }
        .card-list-item__image {
            width: calc(100% - 12px);
        }
    }

    .card-list-item__image {
        position: relative;
        flex-shrink: 0;
        width: calc(100% - 12px);
        margin: 6px;
        border-radius: 12px;
        overflow: hidden;
        @include bp($bp-desktop-md) {
            width: 200px;
        }
        &::before {
            content: "";
            display: block;
            padding-bottom: 50%;
            @include bp($bp-desktop-sm) {
                padding-bottom: 100%;
            }
        }
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            height: 75%;
            transform: translate(-50%, -50%);
            transition: transform 0.2s ease-in;
            @include bp($bp-desktop-sm) {
                width: 75%;
                height: auto;
            }
        }
    }

    .card-list-item__content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 16px;
        @include bp($bp-mobile) {
            padding: 24px;
        }
    }

    .card-list-item__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        color: #6e798c;
    }

    .card-list-item__tags {
        display: flex;
    }

    .card-list-item__tag {
        text-transform: uppercase;
        font-size: 14px;
        &:not(:last-child) {
            margin-right: 5px;
        }
    }

    .card-list-item__date {
        font-size: 12px;
    }

    .card-list-item__title {
        margin: 0 0 15px;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        @include bp($bp-mobile) {
            font-size: 20px;
        }
    }

    .card-list-item__text {
        flex-grow: 1;
        color: #374a59;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        @include bp($bp-mobile) {
            font-size: 16px;
        }
    }

    .card-list-item__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    .card-list-item__author {
        display: flex;
        align-items: center;
        color: $color-link;
        font-size: 14px;
        font-weight: 500;
    }

    .card-list-item__author-image {
        width: 35px;
        height: 35px;
        flex-shrink: 0;
        margin-right: 10px;
        border-radius: 50%;
        overflow: hidden;
    }
</style>
