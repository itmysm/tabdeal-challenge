<template>
  <button :class="[
    'px-4 py-2 rounded-md font-medium select-none',
    'focus:outline-none',
    variantClasses[variant],
    sizeClasses[size],
    { 'opacity-40 cursor-not-allowed pointer-events-none grayscale': disabled },
    { 'transition-all duration-200 cursor-pointer hover:shadow-md active:scale-95': !disabled },
  ]" :disabled="disabled" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

type ButtonVariant = 'primary'
type ButtonSize = 'sm' | 'md' | 'lg'

const props = defineProps({
  variant: {
    type: String as () => ButtonVariant,
    default: 'primary',
    validator: (value: string) => ['primary'].includes(value)
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

defineEmits(['click'])

const variantClasses = computed(() => ({
  primary: 'bg-primary text-white hover:bg-primary/90',
}))

const sizeClasses = computed(() => ({
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-2.5'
}))
</script>