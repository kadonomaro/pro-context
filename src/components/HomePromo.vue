<script>
    export default {
        name: "HomePromo",
    };
</script>

<template>
    <div class="home-promo">
        <div class="home-promo__item">
            <div class="home-promo__image">
                <img src="@/assets/images/promo/brainstorming.svg" alt="" />
            </div>
            <div class="home-promo__content">
                <h3 class="home-promo__title">Мозговой штурм</h3>
                <div class="home-promo__text">
                    Оперативный подход при старте новой поисковой кампании или улучшении старой
                </div>
            </div>
        </div>
        <div class="home-promo__item">
            <div class="home-promo__image">
                <img src="@/assets/images/promo/project-costing.svg" alt="" />
            </div>
            <div class="home-promo__content">
                <h3 class="home-promo__title">Стоимость заявки</h3>
                <div class="home-promo__text">
                    Поможем оптимизировать поисковую кампанию для установления оптимальной
                    стоимости заявки
                </div>
            </div>
        </div>
        <div class="home-promo__item">
            <div class="home-promo__image">
                <img src="@/assets/images/promo/roadmapping.svg" alt="" />
            </div>
            <div class="home-promo__content">
                <h3 class="home-promo__title">Верное направление</h3>
                <div class="home-promo__text">
                    Выберем верное направление при продвижении кампании. Подберем релевантные
                    ключи
                </div>
            </div>
        </div>
        <div class="home-promo__item">
            <div class="home-promo__image">
                <img src="@/assets/images/promo/sprint-planning.svg" alt="" />
            </div>
            <div class="home-promo__content">
                <h3 class="home-promo__title">Долгосрочное планирование</h3>
                <div class="home-promo__text">
                    Расскажем как в долгосрочной перспективе вести кампанию. Какие существуют
                    возможные риски
                </div>
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
