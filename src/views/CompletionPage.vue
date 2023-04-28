
<script setup lang="ts">
const columns = 3

</script>

<template>
    <div class="grid grid-flow-col h-screen">

        <div class="col-span-2 border relative">
            <div class="bottom-0 absolute border lr-0 m-4">
                <input type="email" class="form-input px-4 py-3 rounded-full">
            </div>
        </div>
        <div class="border">A</div>
        <div class="border">A</div>
        <div class="border">A</div>
    </div>
</template>
