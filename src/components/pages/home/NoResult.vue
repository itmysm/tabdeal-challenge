<template>
  <div class="flex flex-col justify-center items-center w-full">
    <IconIronMan class="w-30 h-30 md:w-36 md:h-36 text-orange-400" />
    <p class="w-10/12 text-xl lg:text-2xl text-center font-bold text-foreground">Even Tony Stark's AI couldn't find that one</p>
    <Button class="mt-5 w-fit" @click="$emit('backToFirstPage')">Back To First Page</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/shared/Button.vue"
import IconIronMan from "@/components/icons/IconIronMan.vue"

defineEmits(['backToFirstPage'])
</script>