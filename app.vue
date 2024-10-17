<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script>
import "./styles/global.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Adiciona o ícone à biblioteca
library.add(faPhone, faEnvelope, faInstagram, faWhatsapp, faBars)
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
