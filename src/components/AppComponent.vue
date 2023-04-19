<script setup lang="ts">

import { appTitle, get } from '@/env.d';
import { DtoModels } from '@/assets/models/data/DtoModels';
import { AxiosResponse } from 'axios';
import { routes } from '@/router';
import NavComponent from '@Components/NavComponent.vue';

const avatars: string[] = ['apple', 'banana', 'cherry', 'date', 'fig'];

const randomAvatar = (): string => {
    const index = Math.floor(Math.random() * avatars.length);
    return avatars[index];
}

get('/models').then((response: AxiosResponse<DtoModels>) => {
    const data = response.data.models;
    console.log(data);
});

</script> 

<template>
    <NavComponent>
        <template #header>
            <div class="flex h-16 shrink-0 items-center">
                <img class="h-8 w-auto" src="/favicon.svg" :alt="appTitle" />
            </div>
        </template>

        <template #items>
            <li>
                <ul role="list" class="-mx-2 space-y-1">
                    <li v-for="route in routes" :key="route.path">
                        <router-link :to="route.path"
                            :class="['text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                            <component :is="route.icon"
                                :class="['text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                                aria-hidden="true" />
                            {{ route.name }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </template>

        <template #avatar>
            <img class="h-8 w-8 rounded-full bg-gray-50" :src="'https://robohash.org/' + randomAvatar" alt="Avatar" />
        </template>

    </NavComponent>
</template>

<style scoped></style>
