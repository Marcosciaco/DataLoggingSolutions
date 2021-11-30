<template>
    <div class="chip" :class="bg_color">
        <v-icon class="chip-icon" :color="color">{{ icon }}</v-icon>
        <span class="chip-text">{{ $t(text) }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String
            },
            color: {
                type: String
            },
            text: {
                type: String
            },
            bg_color: {
                type: String
            } 
        }
    }
</script>

<style>
    .chip {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 8px;
    }

    .chip-icon {
        padding-right: 4px;
    }

    .chip-text {
        color: var(--v-black-base);
        font-size: 12px;
    }
</style>