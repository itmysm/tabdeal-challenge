<template>
  <div class="bg-background rounded-lg p-4 flex gap-4">
    <input
      tabindex="0"
      v-model="searchInput"
      class="w-auto text-white h-12 bg-background-secondary border-2 border-transparent focus:border-secondary focus:outline-none rounded-lg px-3 flex-grow placeholder-foreground caret-pink-500"
      type="text"
      placeholder="Search for characters..."
      @keydown.enter="onHandleSearch"
    />

    <Button
      class="min-w-12 flex gap-x-3 items-center"
      variant="primary"
      :disabled="loading"
      @click="onHandleSearch"
    >
    <IconLoading v-show="loading" class="text-foreground" size="14" />
    <IconsIconSearch v-show="!loading" size="14" />
    <p class="hidden md:block text-sm">Search</p>
    </Button>
  </div>
</template>

<script setup lang="ts">
import IconLoading from "@/components/icons/IconLoading.vue";
import Button from "@/components/shared/Button.vue";
const emit = defineEmits(["onSearch"]);

const searchInput = ref("");

const props = defineProps<{
  resetTrigger?: boolean
  loading?: boolean
}>();

watch(() => props.resetTrigger, (newValue) => {
  if (newValue) {
    searchInput.value = "";
  }
});

const onHandleSearch = () => {
  emit("onSearch", searchInput.value);
};
</script>
