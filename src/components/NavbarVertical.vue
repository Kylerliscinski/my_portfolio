<script setup>
import { computed, ref } from 'vue';
import navLinks from '../constants/NavLinks';
import heroData from '../constants/Hero';
import { logger } from '../utils/Logger';

let hero = ref(heroData.id);
let activeLinkId = ref(null)

const foundLink = computed(() => {
  return navLinks.find(link => link.id === activeLinkId.value);
});

async function scrollTo(id) {
  try {
    let scrollElem = document.getElementById(id);
    if (!scrollElem) {
      throw new Error(`Element with ref ${id} not found.`);
    }
    activeLinkId.value = id;
    let topOffsetY = scrollElem.getBoundingClientRect().top + window.scrollY - 50;
    window.scrollTo({ top: topOffsetY, behavior: 'smooth' });
    logger.log(`Scrolled to HTMLElement:`, scrollElem)
    logger.log(`ScrollId: '${scrollElem.id}' matches NavLinkId: '${foundLink.value.id}'`)
  } catch (error) {
    logger.error(error.message);
  }
}
</script>

<template>
<nav class="vertical-nav black-gradient d-flex justify-content-start flex-column pt-4">
  <div class="col-12 logo-container d-flex justify-content-start pb-2 ps-4 ms-3">
    <img @click="scrollTo(hero)" title="SVG logo " alt="SVG logo/brand" src="../assets/img/icons/KJlogo.png" class="my-logo" height="65" />
  </div>
  
  <ul class="nav-list">
    <li v-for="link in navLinks" :key="link?.id" :class="{ 'active' : link.id === activeLinkId }" class="nav-item">
      <a :link-text="link.name" class="d-flex align-items-center nav-link" @click="scrollTo(link.id)">{{ link.name }}</a>
    </li>
  </ul>
</nav>
</template>

<style scoped lang="scss">

* {
  color: var(--text-primary) !important;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1.25rem;
}

.vertical-nav::after {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent 70%, #0e0c13);
}

.nav-link::before,
.nav-item::before,
.nav-item::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

:is(.nav-item):has(.active) {
  background-clip: text;
  -webkit-background-clip: text;
  width: 100%;
  display: block;
  background: transparent;
}

.vertical-nav {
  position: relative;
  height: 100vh;
  background: var(--black-purple-radial-gradient) !important;
  .my-logo {
    margin-right: 20px;
    user-select: none;
    z-index: 3;
  }
  ul.nav-list {
    position: relative;
    top: 0.5rem;
    left: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li.nav-item {
    position: relative;
    height: 70px;
    margin: 0.75rem 0.75rem 0.75rem 2rem;
    border-radius: 1rem;
    background: var(--black-purple-radial-gradient);
    user-select: none;
    z-index: 3;
    :active,
    &:focus,
    &.active {
      position: relative;
      width: auto;
      height: 70px;
      display: block;
      background-clip: padding-box;
      border-radius: 1rem;
      transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out, filter 0.3s ease-in-out;
      &::before {
        content: '';
        position: absolute;
        
        background: var(--black-purple-radial-gradient);
        box-shadow: inset 20px 0 30px 10px var(--dark-pink);
        border-radius: 1rem;
        z-index: -1;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, transparent 60%, #14101f  100%);
        border-radius: 1rem;
      }
    }
    &:not(.active) {
      position: relative;
      background: var(--black-purple-radial-gradient-alt);
      filter: drop-shadow(0 0 10px var(--shadow-dark-purple));
      &::before {
        content: '';
        background: var(--black-purple-radial-gradient-alt);
        box-shadow: inset 20px 0 30px 10px #333333a5;
        border-radius: 1rem;
      }
      &::after {
        content: '';
        background: linear-gradient(90deg, transparent, #14101f 75%, #0e0c13 100%);
        border-radius: 1rem;
      }
    }
  }
  
  a.nav-link {
    color: var(--text-primary);
    width: 100%;
    display: block;
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-decoration: none;
    transition: color 0.3s;
    z-index: 3;
    &::before {
      content: attr(link-text) " ";
      position: absolute;
      padding: 0 2rem 0.5rem;
      color: var(--text-primary);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      transition: color 0.3s;
      z-index: 3;
    }
    &:hover::before {
      color: #fff;
      transition: color 0.3s;
    }
  }
}

@media (max-width: 400px) {
  .vertical-nav {
    height: 100dvh;
  }
}
</style>