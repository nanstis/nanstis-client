<script setup lang="ts">
import { Role } from '@/assets/models/data/DtoCompletion';
import { PropType } from 'vue';
const assistantAvatar = 'https://robohash.org/banana';
const userAvatar = 'https://robohash.org/apple';

defineProps({
    text: String,
    role: String as PropType<Role>
});

</script>

<template>
    <div class="flex my-2">
        <div class="flex-none w-8 h-8">
            <img v-if="role == Role.ASS" :src="assistantAvatar" alt="Avatar" class="rounded-full bg-gray-100" />
            <img v-else :src="userAvatar" alt="Avatar" class="rounded-full bg-gray-100" />

        </div>
        <div class="grow h-14 px-4">
            {{ text }}
        </div>
    </div>
</template>