<template>
  <nuxt-link
    :to="to"
    class="px-6 py-4 text-2xl md:px-4 md:py-0 text-center nav-link md:text-base hover:opacity-90 dark:opacity-80 font-medium dark:text-white dark:hover:text-gray-100 hover:text-gray-600 text-gray-900 transition-all ease-in-out duration-300"
    :class="{ active: active }"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script lang="ts">
export default {
  name: 'NavbarLink',
  props: {
    active: {
      type: Boolean,
      default: () => false
    },
    to: {
      type: [Object, String],
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-link {
  &.active {
    @apply opacity-100;
    @apply text-blue-600;
  }
}
</style>
