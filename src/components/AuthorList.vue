<script>
    import AuthorCard from "@/components/AuthorCard";
    export default {
        name: "AuthorList",
        components: { AuthorCard },
        props: {
            authors: {
                type: Array,
                required: true,
            },
        },
    };
</script>

<template>
    <div class="author-list">
        <div class="author-list__card" v-for="author in authors" :key="author.id">
            <author-card :author="author"></author-card>
        </div>
    </div>
</template>

<style lang="scss">
    .author-list {
        @include bp($bp-mobile) {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -8px;
        }
        @include bp($bp-desktop-sm) {
            margin: 0 -12px;
        }
    }

    .author-list__card {
        padding-bottom: 12px;
        box-sizing: border-box;
        @include bp($bp-mobile) {
            flex-basis: 50%;
            max-width: 50%;
            padding: 0 8px 16px;
        }
        @include bp($bp-desktop-sm) {
            flex-basis: 33.3333%;
            max-width: 33.3333%;
            padding: 0 12px 24px;
        }
    }
</style>
