<template>
    <button class="btn" v-on:click="click">
        <span class="btn-text">{{ $t(text) }}</span>
    </button>
</template>

<script>
export default {
    props: {
        click: {
            type: Function
        },
        text: {
            type: String
        }
    },
};
</script>

<style>
.btn {
    background: radial-gradient(
        105.58% 105.58% at 50% -5.58%,
        var(--v-tertiary-base) 0%,
        var(--v-secondary-base) 0.01%,
        var(--v-primary-base) 100%
    );
    border-radius: 8px;
    padding: 10px 40px;
    transition: 0.5s;
}

.btn:hover {
    box-shadow: 0px 0px 10px rgba(56, 73, 86, 0.3);
}

.btn-text {
    color: var(--v-text_primary-base);
    font-weight: 700;
}
</style>
