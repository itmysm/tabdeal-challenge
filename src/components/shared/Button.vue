<template>
  <button :class="[
    'px-4 py-2 rounded-md font-medium select-none',
    'focus:outline-none',
    resolvedVariantClass,
    sizeClasses[size],
    { 'opacity-40 cursor-not-allowed pointer-events-none grayscale': disabled },
    { 'transition-all duration-200 hover:shadow-md active:scale-95 cursor-pointer': !disabled },
  ]" :disabled="disabled" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type ButtonVariant = 'primary' | 'outlined' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'

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
  },
  color: {
    type: String,
    default: 'primary'
  }
})

defineEmits(['click'])

const resolvedVariantClass = computed(() => {
  const colorClass = `bg-${props.color} text-white hover:bg-${props.color}/90`;
  const outlinedClass = `border border-${props.color} text-${props.color} hover:bg-${props.color}/10`;
  const textClass = `text-${props.color} hover:bg-${props.color}/10`;

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

const sizeClasses = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-2.5'
};
</script>