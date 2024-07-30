<template>
  <VoteDetailComponent :person="selectedPerson"></VoteDetailComponent>
  <div class="container mt-5">
    <h1>Previous Persons</h1>
    <VoteComponent @select-person="showSelectPerson" v-for="(person, index) in persons" :key="index" :person="person" />
  </div>
</template>

<script>
import axios from 'axios';
import VoteComponent from './components/VoteComponent.vue';
import VoteDetailComponent from './components/VoteDetailComponent.vue';
import { API_BASE_URL_RULE_OF_THUMBS } from './config';

export default {
  title: 'Rule of Thumbs',
  name: 'App',
  components: {
    VoteComponent,
    VoteDetailComponent
  },
  data() {
    return {
      persons: []
    };
  },
  mounted() {
    this.getPersons();
  },
  methods: {
    getPersons() {
      axios.get('https://95q6j16jse.execute-api.us-east-2.amazonaws.com/items')
        .then(response => {
          this.persons = response.data;
        })
        .catch(error => {
          console.error('There was an error:', error);
        });
    },
    showSelectPerson(person) {
      this.selectedPerson = person;
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
</style>
