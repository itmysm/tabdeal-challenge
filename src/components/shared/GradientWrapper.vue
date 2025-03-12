<template>
  <div class="bg-linear-90 from-background via-tertiary to-tertiary relative py-3 pb-8 md:pb-16 overflow-hidden">
    <div class="container mx-auto">
      <NuxtImg src="/gradient-wrapper.png" alt="Gradient Wrapper"
        class="z-1 absolute top-1/3 -left-1/3 md:top-0 md:w-5/12 md:left-3/12 w-full select-none" />

      <div class="relative w-full h-fit z-2">
        <slot />
      </div>
    </div>
  </div>
</template>