<script setup lang="ts">
import { DtoSegment } from '@/assets/models/data/DtoSegment';
import { postForm } from '@/env.d';
import { PhotoIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import { AxiosResponse } from 'axios';
import { ref } from 'vue';

const formData = new FormData()
const fileReference = ref<File>()
const segments = ref<DtoSegment[]>()
const loading = ref<boolean>(false)

function onFileChange(e: Event): void {
    const files = (e.target as HTMLInputElement).files;
    if (files) {
        fileReference.value = files[0]
        formData.append('file', fileReference.value);
        console.log(fileReference.value);
    }
}

const onSubmit = () => {
    loading.value = true
    postForm('/api/transcription', formData)
        .then((response: AxiosResponse<DtoSegment[]>) => response.data)
        .then((data: DtoSegment[]) => {
            loading.value = false
            segments.value = data
        })
}

</script>


<template>
    <div>
        <form @submit.prevent="onSubmit()">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Tanscribe File</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                    <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div v-if="!fileReference">
                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                            <label for="file-upload"
                                class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span>Upload a file</span>
                                <input accept="audio/*,video/*" id="file-upload" name="file-upload" type="file"
                                    @change="onFileChange" class="sr-only" />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                        </div>
                        <p v-if="!fileReference" class="text-xs leading-5 text-gray-600">
                            Video / Audio
                        </p>
                    </div>
                    <div v-else>
                        <label for="file-upload"
                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>{{ fileReference.name }}</span>
                            <input accept="audio/*,video/*" id="file-upload" name="file-upload" type="file"
                                @change="onFileChange" class="sr-only" />
                        </label>

                    </div>

                </div>
            </div>

            <hr>
            <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Submit
            </button>
        </form>

        <div v-if="segments">

            <div class="mt-2">
                <textarea rows="4" name="comment" id="comment"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>

            <ul>
                <textarea>{{ segments.map((segment: DtoSegment) => segment.text) }}</textarea>
            </ul>
        </div>
    </div>
</template>