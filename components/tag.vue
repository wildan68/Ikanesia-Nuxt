<template>
    <div class="tag-component">
        {{ label }}
    </div>
</template>

<script>
    export default {
        name: 'tag_component',
        props: {
            label: String,
        }
    }
</script>

<style scoped>
    .tag-component {
        background-color: var(--red-light);
        color: var(--red);
        padding: 2px 5px 2px 5px;
        border-radius: 7px;
        font-size: 10px;
        font-weight: 600;
    }
</style>