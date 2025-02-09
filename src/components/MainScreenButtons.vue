<template>
    <table>
      <tbody>
        <tr>
            <td><button @click="goToReligion" class="button">Vallás</button></td>
            <td><button @click="handleClick(2)" class="button">Horoszkóp</button></td>
            <td><button @click="handleClick(3)" class="button">Személyiség típus</button></td>
        </tr>
        <tr>
            <td><button @click="handleClick(4)" class="button">Nemzetiség</button></td>
            <td><button @click="handleClick(5)" class="button">Szexualitás</button></td>
            <td><button @click="handleClick(6)" class="button">Kínai horoszkóp</button></td>
        </tr>
        <tr>
            <td><button @click="handleClick(4)" class="button">Görög mitólógia</button></td>
            <td><button @click="handleClick(5)" class="button">Római mitólógia</button></td>
            <td><button @click="handleClick(6)" class="button">Egyéb..</button></td>
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
  alert(`Button ${button} clicked!`);

};
</script>

<style scoped>
/* Button Base Styles */
.button {
  width: 200px;  /* Make buttons bigger */
  height: 100px;
  background-color: #3498db; /* Blue background */
  color: white;
  font-size: 1.5rem; /* Larger text */
  font-weight: bold;
  border: none;
  border-radius: 10px; /* Rounded corners */
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

/* Hover Effect */
.button:hover {
  background-color: #2980b9; /* Darker blue */
  transform: scale(1.1); /* Slight zoom effect */
}

/* Active Click Effect */
.button:active {
  transform: scale(1);
  background-color: #1c6691;
}
</style>