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
        <td><button @click="handleClick(9)" class="button">Egyéb..</button></td>
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
/* Center the table in the middle of the page */
.table {
  display: flex;  /* Use flexbox to align items */
  justify-content: center;  /* Center items horizontally */
  align-items: center;  /* Center items vertically */
  margin: 0;  /* Remove default margin */
}

/* Each row inside the table should also be flex */
.table tbody {
  display: flex; 
  flex-direction: column;
  gap: 10px;  /* Add space between rows */
  justify-content: center;
  align-items: center;
}

.table tr {
  display: flex;
  justify-content: center;  /* Center buttons horizontally within the row */
  gap: 20px;  /* Space between buttons */
}

/* Button styles stay the same */
.button {
  width: 200px;  /* Make buttons bigger */
  height: 100px;
  background-color: cadetblue; /* Blue background */
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