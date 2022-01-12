<template>
    <div class="item-box-container">
        <div class="item-box">
            <div class="item-box-inside">
                <div class="img">
                    <img src="~/assets/img/s1.jpg">
                </div>
                <div class="item-info">
                    Ikan 1
                    <h4>Rp. 99.000,-</h4>
                </div>
            </div>
        </div>
        <div class="item-box">
            <div class="item-box-inside">
                <div class="img">
                    <img src="~/assets/img/s1.jpg">
                </div>
                <div class="item-info">
                    Ikan 2
                    <h4>Rp. 99.000,-</h4>
                </div>
            </div>
        </div>
        <div class="item-box">
            <div class="item-box-inside">
                <div class="img">
                    <img src="~/assets/img/s1.jpg">
                </div>
                <div class="item-info">
                    Ikan 3
                    <h4>Rp. 99.000,-</h4>
                </div>
            </div>
        </div>
        <div class="item-box">
            <div class="item-box-inside">
                <div class="img">
                    <img src="~/assets/img/s1.jpg">
                </div>
                <div class="item-info">
                    Ikan 4
                    <h4>Rp. 99.000,-</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'most_searched'
}
</script>

<style>
    .home .right .most-searched .item-box-container {
        display: grid;
        grid-template-columns: auto auto;
    }
    .home .right .most-searched .item-box-container .item-box {
        width: 100%;
        height: 10em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .home .right .most-searched .item-box-container .item-box .item-box-inside {
        width: 90%;
        background-color: var(--white);
        height: 90%;
        border-radius: 7px;
        display: flex;
        overflow: hidden;
        box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 35px -10px rgba(0, 0, 0, 0.25);
    }
    .home .right .most-searched .item-box-container .item-box .item-box-inside .img {
        height: 100%;
        width: 8em;
        overflow: hidden;
    }
    .home .right .most-searched .item-box-container .item-box .item-box-inside .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .home .right .most-searched .item-box-container .item-box .item-box-inside .item-info {
        margin-left: 10px;
        padding: 10px 0 10px 0;
    }
    .home .right .most-searched .item-box-container .item-box .item-box-inside .item-info h4 {
        margin: 0;
    }
    @media (max-width: 1366px) {
        .home .right .most-searched .item-box-container .item-box {
            height: 8em;
        }
        .home .right .most-searched .item-box-container .item-box .item-box-inside .img {
            width: 7em;
        }
    }
    @media (max-width: 768px) {
        .home .right .most-searched .item-box-container {
            grid-template-columns: auto;
        }
        .home .right .most-searched .item-box-container .item-box {
            height: 8em;
        }
    }
</style>