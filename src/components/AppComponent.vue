<script setup lang="ts">
import { appTitle, get } from "@/env.d";
import { routes } from "@/router";

import NavComponent from "@/components/NavComponent.vue";
import { DtoModel } from "@/assets/models/data/DtoModel";

const avatars: string[] = ["apple", "banana", "cherry", "date", "fig"];

const randomAvatar = (): string => {
  const index = Math.floor(Math.random() * avatars.length);
  return avatars[index];
};


get('/api/models').then(res => {
  const models: DtoModel[] = res.data;
  console.log(models);
});

</script>

<template>
  <NavComponent :routes="routes">
    <template #header>
      <div class="flex h-16 shrink-0 items-center">
        <img :alt="appTitle" class="h-8 w-auto" src="/favicon.svg" />
      </div>
    </template>



    <template #main>
      <main class="bg-gray-800">
        <div>
          <div>
            <router-view />
          </div>
        </div>
      </main>
    </template>

    <template #avatar>
      <img :src="'https://robohash.org/' + randomAvatar" alt="Avatar" class="h-8 w-8 rounded-full bg-gray-50" />
    </template>

  </NavComponent>
</template>

<style scoped></style>
