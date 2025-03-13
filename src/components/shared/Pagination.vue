<template>
  <div class="flex justify-center items-center gap-2 mt-4">
    <button
      @click="emit('change', 1)"
      :disabled="currentPage <= 1"
      :class="[
        navButtonClasses,
        (currentPage <= 1 && navButtonDisabledClasses) || ' hover:-translate-x-1',
      ]"
    >
      <IconsIconChevronsLeft size="16" />
    </button>

    <button
      @click="emit('change', currentPage - 1)"
      :disabled="currentPage <= 1"
      :class="[
        navButtonClasses,
        (currentPage <= 1 && navButtonDisabledClasses) || ' hover:-translate-x-1',
      ]"
    >
      <IconsIconChevronLeft size="16" />
    </button>

    <button v-if="showStartEllipsis" class="text-secondary w-8 h-8" disabled>...</button>

    <button
      v-for="page in displayedPages"
      :key="page"
      @click="emit('change', page)"
      :class="[pageButton, page === currentPage && pageButtonActive]"
    >
      {{ page }}
    </button>

    <button v-if="showEndEllipsis" class="text-secondary w-8 h-8" disabled>...</button>

    <button
      @click="emit('change', currentPage + 1)"
      :disabled="currentPage >= totalPages"
      :class="[
        navButtonClasses,
        (currentPage >= totalPages && navButtonDisabledClasses) || ' hover:translate-x-1',
      ]"
    >
      <IconsIconChevronRight size="16" />
    </button>

    <button
      @click="emit('change', totalPages)"
      :disabled="currentPage >= totalPages"
      :class="[
        navButtonClasses,
        (currentPage >= totalPages && navButtonDisabledClasses) || ' hover:translate-x-1',
      ]"
    >
      <IconsIconChevronsRight size="16" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  maxVisiblePages: {
    type: Number,
    default: 4
  }
});

const emit = defineEmits(["change"]);

const navButtonClasses =
  "px-2 md:px-3 py-2 rounded text-foreground transition-all duration-300 select-none cursor-pointer";
const navButtonDisabledClasses = "opacity-50 !cursor-not-allowed text-secondary";
const pageButton =
  "w-8 h-8 md:w-10 md:h-10 cursor-pointer text-lg font-semibold text-sm md:text-base text-secondary rounded-full hover:bg-primary hover:text-foreground transition-all duration-300";
const pageButtonActive = "bg-primary !text-foreground";

const displayedPages = computed(() => {
  const pages: number[] = [];

  let start = Math.max(1, props.currentPage - 2);
  let end = Math.min(props.totalPages, start + props.maxVisiblePages - 1);

  if (end - start + 1 < props.maxVisiblePages) {
    start = Math.max(1, end - props.maxVisiblePages + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const showStartEllipsis = computed(() => {
  return displayedPages.value[0] > 1;
});

const showEndEllipsis = computed(() => {
  return displayedPages.value[displayedPages.value.length - 1] < props.totalPages;
});
</script>
