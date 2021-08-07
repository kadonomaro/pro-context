<script>
    import CardListItem from "@/components/CardListItem";

    export default {
        name: "CardList",
        components: { CardListItem },
        props: {
            cards: {
                type: Array,
                required: true,
            },
            type: String,
        },
    };
</script>

<template>
    <div class="card-list">
        <div class="card-list__item" v-for="card in cards" :key="card.id">
            <card-list-item :card="card" :type="type"></card-list-item>
        </div>
    </div>
</template>

<style lang="scss">
    .card-list {
        @include bp($bp-mobile) {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -12px -24px;
        }
    }

    .card-list__item {
        padding-bottom: 12px;
        @include bp($bp-mobile) {
            flex-basis: 50%;
            max-width: 50%;
            padding: 0 12px 24px;
            box-sizing: border-box;
        }
    }
</style>
