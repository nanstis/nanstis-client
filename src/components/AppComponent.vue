<script setup lang="ts">
import { environment } from '../env.d';

import HelloWorld from '@Components/HelloWorld.vue';


</script>

<template>
    <HelloWorld :msg="environment.VITE_APP_TITLE" />
</template>

<style scoped></style>
