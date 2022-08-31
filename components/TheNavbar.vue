<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { navbarRoutes } from "~~/globals/routes";
const currentRoute = useRoute();
const { locale: localLang } = useI18n()

const setLang = ():void=>{
  localStorage.setItem('lang', localLang.value)
}
</script>

<template>
  <nav
    class="sticky p-3 lg:p-6 flex w-full dark:bg-neutral-900/90 transition-colors ease-in-out duration-300 bg-white"
  >
    <div class="container container-xl mx-auto">
      <div class="flex justify-between">
        <!-- Logo-->
        <nuxt-link
          to="/"
          class="d:text-xl uppercase font-black logo text-blue-600"
        >
          Haniel Dev
        </nuxt-link>

        <!-- Main nav-->
        <ul
          id="navMenu"
          class="hidden transitions md:shadow-none md:py-0 w-100 md:flex dark:text-white"
        >
          <li
            v-for="(route, index) in navbarRoutes"
            :key="`route-${index}`"
            class="nav-link-container text-center"
          >
            <navbar-link
              :to="route.path"
              :active="route.path == currentRoute.path"
            >
              {{ $t(route.text) }}
            </navbar-link>
          </li>
        </ul>

        <!-- End of Main nav-->

        <!-- Lang selector -->
        <select
            id="lang-select"
            v-model="$i18n.locale"
            class="hidden md:inline-block focus:outline-none transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-600 rounded-sm p-1 font-bold dark:text-white"
            name="language"
            @change="setLang()"
          >
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
            >
              {{ locale.toUpperCase() }}
            </option>
          </select>
        <!-- Lang selector -->
      </div>
    </div>
  </nav>
</template>
