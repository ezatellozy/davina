<template>
  <Banner v-if="home.banners" :items="home.banners" />
  <About />
  <BestOffer v-if="home.bestOffer" :items="home.bestOffer" />
  <Anoncement />
  <BestSailing
    v-if="home.bestSailing"
    :items="home.bestSailing"
    :categories="home.categories"
  />
  <Features />
  <SuperSell />
  <ExclusiveProducts
    v-if="home.bestSailing"
    :items="home.bestSailing"
    :categories="home.categories"
  />
  <Testimonials v-if="home.testimonials" :items="home.testimonials" />
  <Clients v-if="home.partners" :items="home.partners" />
  <Subscription />
  <!-- {{ home.banners }} -->
  <Loading v-if="pageLoading" />
</template>

<script setup>
import Banner from '@/components/home/Banner.vue'
// @ is an alias to /src
import axios from 'axios'
import { useStore } from 'vuex'
import { onMounted, computed, reactive } from 'vue'
import Loading from '@/components/Loading.vue'
import About from '@/components/home/About.vue'
import BestSailing from '@/components/home/BestSailing.vue'
import Anoncement from '@/components/home/Anoncement.vue'
import BestOffer from '../components/home/BestOffer.vue'
import Features from '../components/home/Features.vue'
import ExclusiveProducts from '@/components/home/ExclusiveProducts.vue'
import SuperSell from '../components/home/SuperSell.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import Clients from '@/components/home/Clients.vue'
import Subscription from '@/components/home/Subscription.vue'

const store = useStore()
const home = reactive({
  banners: [],
  bestSailing: [],
  bestOffer: [],
  testimonials: [],
  partners: [],
  categories: [],
})

const pageLoading = computed(() => store.getters.pageLoading)

onMounted(() => {
  getHome()
})

const getHome = function () {
  store.commit('pageLoading', true)
  axios.get('/general/home').then(function (data) {
    store.commit('pageLoading', false)
    let homeData = data.data.data[0]

    home.banners = homeData.galleries
    home.categories = homeData.categories_no_image

    home.bestOffer = homeData.recommended_products
    home.partners = homeData.partners
    home.bestSailing = homeData.best_selling
    home.testimonials = homeData.our_client_say
  })
}
</script>
