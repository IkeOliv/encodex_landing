<template>
  <div>
    <TheNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ModulesSection />
      <!-- <BenefitsSection /> -->
      <!-- <ImprovementsSection /> -->
      <ContactSection />
      <Encodexchat/>
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ModulesSection from '@/components/sections/ModulesSection.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import ImprovementsSection from '@/components/sections/ImprovementsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Encodexchat from '../components/ui/Encodexchat.vue'
</script>
