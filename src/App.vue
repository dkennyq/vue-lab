<template>
  <div class="container mt-5">
    <h1>Previous Rulings</h1>
    <VoteComponent v-for="(ruling, index) in rulings" :key="index" :id="ruling.id_person" :title="ruling.name"
      :description="ruling.description" :image="ruling.profile_image" :timeInfo="formatDate(ruling.date_created)"
      :thumbsUp="ruling.total_thumbs_up" :thumbsDown="ruling.total_thumbs_down" />
  </div>
</template>

<script>
import axios from 'axios';
import VoteComponent from './components/VoteComponent.vue';

export default {
  title: 'Rule of Thumbs',
  name: 'App',
  components: {
    VoteComponent
  },
  data() {
    return {
      rulings: []
    };
  },
  mounted() {
    this.getRulings();
  },
  methods: {
    getRulings() {
      axios.get('https://95q6j16jse.execute-api.us-east-2.amazonaws.com/items')
        .then(response => {
          this.rulings = response.data;
        })
        .catch(error => {
          console.error('There was an error:', error);
        });
    },
    formatDate(dateString) {
      const now = new Date();
      const createdDate = new Date(dateString);
      const diff = now - createdDate;

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(days / 365);

      if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago in the vote list`;
      } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago in the vote list`;
      } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago in the vote list`;
      } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago in the vote list`;
      } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago in the vote list`;
      } else {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago in the vote list`;
      }
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
