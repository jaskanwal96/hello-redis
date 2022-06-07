<script setup>
import WelcomeItem from './WelcomeItem.vue';
import { ref, computed } from 'vue';

const welcomeItems = ref([
    {
        icon: 'file-document',
        heading: 'Documentation',
        description:
            ' Vue’s official documentation provides you with all information you need to get started',
    },
    {
        icon: 'restore',
        heading: 'Ecosystem',
        description: ' Get official tools and libraries for your project:',
    },
    {
        icon: 'database',
        heading: 'Redis',
        description: 'Reason of this project',
    },
]);
</script>

<template>
    <WelcomeItem v-for="(welcomeItem, index) of welcomeItems" :key="index">
        <template #icon>
            <i class="mdi" :class="'mdi-' + welcomeItem.icon" />
        </template>
        <template #heading>{{ welcomeItem.heading }}</template>

        <div class="text-blue-400">{{ welcomeItem.description }}</div>
    </WelcomeItem>
</template>
