<template>
  <table class="table">
    <tbody>
      <tr>
        <td><button @click="handleClick(1)" class="button">Vallás</button></td>
        <td><button @click="handleClick(2)" class="button">Horoszkóp</button></td>
        <td><button @click="handleClick(3)" class="button">Személyiség típus</button></td>
      </tr>
      <tr>
        <td><button @click="handleClick(4)" class="button">Nemzetiség</button></td>
        <td><button @click="handleClick(5)" class="button">Szexualitás</button></td>
        <td><button @click="handleClick(6)" class="button">Kínai horoszkóp</button></td>
      </tr>
      <tr>
        <td><button @click="handleClick(7)" class="button">Görög mitológia</button></td>
        <td><button @click="handleClick(8)" class="button">Római mitológia</button></td>
        <td><button @click="handleClick(9)" class="button">...</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToReligion = () => {
  router.push('/vallas');
};

const handleClick = (button) => {
  if (button == 1) {
    router.push('/vallas');
  } else if (button == 2) {
    router.push('/horoszkop');
  } else if (button == 3) {
    router.push('/szemelyisegtipus');
  } else if (button == 4) {
    router.push('/nemzetiseg');
  } else if (button == 5) {
    router.push('/szexualitas');
  } else if (button == 6) {
    router.push('/kinaihoroszkop');
  } else if (button == 7) {
    router.push('/gorogmitologia');
  } else if (button == 8) {
    router.push('/romaimitologia');
  } else if (button == 9) {
    router.push('/egyeb');
  } 
};
</script>

<style scoped>
</style>