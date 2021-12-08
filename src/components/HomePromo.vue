<script>
    export default {
        name: "HomePromo",
        list() {
            return [
                {
                    title: "Мозговой штурм",
                    desc: "Оперативный подход при старте новой поисковой кампании или улучшении старой",
                    icon: "brainstorming",
                },
                {
                    title: "Стоимость заявки",
                    desc: "Поможем оптимизировать поисковую кампанию для установления оптимальной стоимости заявки",
                    icon: "project-costing",
                },
                {
                    title: "Верное направление",
                    desc: "Выберем верное направление при продвижении кампании. Подберем релевантные ключи",
                    icon: "roadmapping",
                },
                {
                    title: "Долгосрочное планирование",
                    desc: "Расскажем как в долгосрочной перспективе вести кампанию. Какие существуют возможные риски",
                    icon: "sprint-planning",
                },
            ];
        },
    };
</script>

<template functional>
    <div class="home-promo">
        <div class="home-promo__item" v-for="(item, index) in $options.list()" :key="index">
            <div class="home-promo__image">
                <img
                    :src="require(`@/assets/images/promo/${item.icon}.svg`)"
                    :alt="item.title"
                />
            </div>
            <div class="home-promo__content">
                <h3 class="home-promo__title">{{ item.title }}</h3>
                <div class="home-promo__text">{{ item.desc }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .home-promo {
        @include bp($bp-mobile) {
            display: flex;
            flex-wrap: wrap;
        }
    }

    .home-promo__item {
        display: flex;
        align-items: center;
        padding: 8px 0;
        box-sizing: border-box;
        @include bp($bp-mobile) {
            display: block;
            padding: 8px;
            flex-basis: 25%;
            max-width: 25%;
            text-align: center;
        }
    }

    .home-promo__image {
        flex-shrink: 0;
        flex-basis: 80px;
        max-width: 200px;
        margin-right: 4px;
        @include bp($bp-mobile) {
            margin: 0 auto 4px;
        }
    }

    .home-promo__title {
        margin: 0 0 4px;
        font-size: 16px;
        font-weight: 500;
        @include bp($bp-mobile) {
            font-size: 18px;
        }
    }

    .home-promo__text {
        font-size: 14px;
    }
</style>
