
<script setup lang="ts">
import { ref } from 'vue'
import { debounce, post } from '@/env.d'
import { CompletionMessage, Role, DtoCompletion, DtoCompletionChoice } from "../assets/models/data/DtoCompletion";

import BotCompletion from '@Components/Completion/BotCompletion.vue'

const prompt = ref<string>()
const messages = ref<CompletionMessage[]>([])



const onSubmit = debounce(() => {
    if (prompt.value) {
        messages.value.push(new CompletionMessage(Role.USR, prompt.value))

        post<DtoCompletion>('/api/completion', {
            model: 'gpt-3.5-turbo',
            messages: messages.value
        }).choices

    }

}, 1000);



</script>

<template>
    <div class="grid grid-flow-col h-screen text-gray-100">

        <div class="col-span-2 border relative h-5/6">

            <div class="m-4">

                <div v-for="message in messages">
                    <BotCompletion :text="message.content" :role="message.role" />
                </div>




            </div>

            <div class="bottom-0 absolute lr-0 m-4">
                <form @submit.prevent="onSubmit">
                    <input type="text" v-model="prompt" class="completion-input" @keypress.enter="onSubmit">
                </form>
            </div>
        </div>

        <div class="border">A</div>
        <div class="border">A</div>
        <div class="border">A</div>
    </div>
</template>
