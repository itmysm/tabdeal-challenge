<template>
  <button :class="[
    'px-4 py-2 rounded-md font-medium select-none',
    'focus:outline-none',
    resolvedVariantClass,
    sizeClasses[size],
    { 'opacity-40 cursor-not-allowed pointer-events-none grayscale': disabled },
    { 'transition-all duration-200 hover:shadow-md active:scale-95 cursor-pointer': !disabled },
  ]" :disabled="isDisabled" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'outlined' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'

defineEmits(['click'])
const props = defineProps({
  variant: {
    type: String as () => ButtonVariant,
    default: 'primary',
    validator: (value: string) => ['primary', 'outlined', 'text'].includes(value)
  },
  size: {
    type: String as () => ButtonSize,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const isDisabled = computed(() => props.disabled)

const resolvedVariantClass = computed(() => {
  const colorClass = 'bg-primary text-white hover:bg-primary/90';
  const outlinedClass = 'border border-primary text-primary hover:bg-primary/10';
  const textClass = 'text-primary hover:bg-primary/10';

  switch (props.variant) {
    case 'primary':
      return colorClass;
    case 'outlined':
      return outlinedClass;
    case 'text':
      return textClass;
    default:
      return colorClass;
  }
});

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-2.5'
};
</script>