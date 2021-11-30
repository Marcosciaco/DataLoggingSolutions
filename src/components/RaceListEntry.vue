<template>
    <div class="entry" :class="bg_color" v-on:click="click">
        <div class="entry-position">#{{ position }}</div>
        <div class="entry-description">
            <span class="entry-title">{{ $t(title) }}</span>
            <div>
                <v-icon class="entry-icon" :color="icon_color">{{ icon }}</v-icon>
                <span class="entry-subtitle">{{ $t(subtitle) }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            bg_color: {
                type: String
            },
            position: {
                type: String
            },
            title: {
                type: String
            },
            icon: {
                type: String
            },
            icon_color: {
                type: String
            },
            subtitle: {
                type: String
            },
            click: {
                type: Function
            }
        }
    }
</script>

<style>
    .entry {
        display: flex;
        border-radius: 15px;
        transition: 0.5s;
        cursor: pointer;
    }

    .entry:hover {
        box-shadow: 0px 0px 10px rgba(56, 73, 86, 0.2);
    }

    .entry-position {
        height: 70px;
        width: 70px;
        border-radius: 12px;
        
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        
        background-color: var(--v-base-base);

        font-weight: 700;
        font-size: 26px;
        color: var(--v-black-base);

        margin-right: 10px;
    }

    .entry-description {
        margin: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .entry-title {
        font-weight: 700;
        font-size: 16px;
        color: var(--v-black-base);
    }

    .entry-subtitle {
        font-weight: 400;
        font-size: 12px;
    }
</style>