<template>
    <div class="value-chip" :class="bg_color">
        <div class="value-chip-icon-container">
            <v-icon class="value-chip-icon" :color="icon_color">{{ icon }}</v-icon>
        </div>
        <div class="value-chip-description">
            <span class="value-chip-title">{{ $t(title) }}</span>
            <span class="value-chip-number">{{ value }}{{ unit }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String
            },
            icon_color: {
                type: String
            },
            title: {
                type: String
            },
            value: {
                type: String
            },
            unit: {
                type: String
            },
            bg_color: {
                type: String
            },
        }
    }
</script>

<style>
    .value-chip {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        height: 70px;
        padding: 7px;
        padding-right: 15px;
        transition: 0.5s;
    }

    .value-chip:hover {
        box-shadow: 0px 0px 10px rgba(56, 73, 86, 0.2);
    }

    .value-chip-description {
        display: flex;
        flex-direction: column;
        padding-left: 7px;
    }

    .value-chip-icon-container {
        height: 50px;
        width: 50px;

        background-color: var(--v-white-base);
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .value-chip-title {
        font-weight: 700;
        font-size: 12px;
        color: var(--v-black-base);
    }

    .value-chip-number {
        color: var(--v-black-base);
    }
</style>