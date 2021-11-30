<template>
    <v-app>
        <v-main style="background-color: var(--v-base-base);">
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "App",
    data: () => ({
        //
    }),
});
</script>

<style lang="scss">
.v-application {
    font-family: "Montserrat" !important;
}

body {
    color: var(--v-base-base);
    height: 100%;
    width: 100%;
}

.mobile-nav-bar {
    position: absolute !important;
    bottom: 0;
}
</style>
