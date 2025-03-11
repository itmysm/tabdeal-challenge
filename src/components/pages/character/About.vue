<template>
  <div class="flex flex-col md:flex-row md:gap-x-8">
    <NuxtImg class="w-full min-w-[176px] max-w-[176px] md:min-w-[240px] md:max-w-[240px] aspect-square rounded-lg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2A1Ti8pDwugdjMu69iJs5Ic5i4M3AnZMKQ&s"
      alt="Gradient Wrapper" />
    <div class="flex flex-col justify-center gap-y-4">
      <h1 class="font-medium text-2xl md:text-3xl text-foreground mt-3 mb-4 md:mt-0">About</h1>
      <p class="text-xs sm:text-sm md:text-base text-neutral">
        As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae in id iure cum facere. Tenetur temporibus
        eos facere eius nulla quasi reprehenderit quod nam, iste ipsum? Explicabo perferendis culpa aperiam?
      </p>
      <div class="flex gap-x-5 mt-4">
        <Button :class="externalLinkButtonsStyles" size="sm">
          <IconExternalLink size="18" />
          Details
        </Button>
        <Button size="sm" :class="externalLinkButtonsStyles">
          <IconExternalLink size="18" />
          Wiki
        </Button>
        <Button size="sm" :class="externalLinkButtonsStyles">
          <IconExternalLink size="18" />
          Comiclink
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/shared/Button.vue';
import IconExternalLink from '@/components/icons/IconExternalLink.vue';

const externalLinkButtonsStyles = 'flex items-center gap-x-3 rounded-sm text-sm !font-normal'
</script>
