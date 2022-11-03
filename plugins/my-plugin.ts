import { defineNuxtPlugin } from "#app";

export const xyz = 'xyz';

export default defineNuxtPlugin(() => {
    console.log('RUNNING THE PLUGIN');
})