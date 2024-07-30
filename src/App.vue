<template>
  <VoteDetailComponent :person="selectedPerson"></VoteDetailComponent>
  <div class="container mt-5">
    <VoteAlert></VoteAlert>
    <h1>Previous Persons</h1>
    <VoteComponent @select-person="showSelectPerson" v-for="(person, index) in persons" :key="index" :person="person" />
  </div>
</template>

<script>
import axios from 'axios';
import VoteComponent from './components/VoteComponent.vue';
import VoteDetailComponent from './components/VoteDetailComponent.vue';
import VoteAlert from './components/VoteAlert.vue';
import { API_BASE_URL_RULE_OF_THUMBS, PLACEHOLDER_IMAGE_URL } from './config';

export default {
  title: 'Rule of Thumbs',
  name: 'App',
  components: {
    VoteComponent,
    VoteDetailComponent,
    VoteAlert
  },
  data() {
    return {
      persons: [],
      selectedPerson: {
        id_person: 0,
        date_created: "2024-01-01T00:00:00",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        detail_info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. ",
        is_active: true,
        name: "John Doe",
        profile_image: PLACEHOLDER_IMAGE_URL,
        total_thumbs_down: 0,
        total_thumbs_up: 0
      }
    };
  },
  mounted() {
    this.getPersons();
  },
  methods: {
    getPersons() {
      axios.get(`${API_BASE_URL_RULE_OF_THUMBS}/items`)
        .then(response => {
          this.persons = response.data;
          if(this.persons.length > 0) {
            this.selectedPerson = this.persons[0];
          }
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
