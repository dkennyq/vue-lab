<template>
  <div class="vote-component">
    <div class="header">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <a href="#" class="more-info">More information</a>
      <h2>What's Your Verdict?</h2>
    </div>
    <div class="voting">
      <button @click="vote('up')" :class="{ active: userVote === 'up' }">
        👍
      </button>
      <button @click="vote('down')" :class="{ active: userVote === 'down' }">
        👎
      </button>
    </div>
    <div class="results">
      <div class="up-votes" :style="{ width: upVotesPercentage + '%' }">
        {{ upVotesPercentage }}%
      </div>
      <div class="down-votes" :style="{ width: downVotesPercentage + '%' }">
        {{ downVotesPercentage }}%
      </div>
    </div>
    <p class="closing">CLOSING IN {{ closingDays }} days</p>
  </div>
</template>

<script>
export default {
  name: "VoteComponent",
  props: {
    title: String,
    description: String,
    upVotes: Number,
    downVotes: Number,
    closingDays: Number,
  },
  data() {
    return {
      userVote: null,
    };
  },
  computed: {
    totalVotes() {
      return this.upVotes + this.downVotes;
    },
    upVotesPercentage() {
      return ((this.upVotes / this.totalVotes) * 100).toFixed(1);
    },
    downVotesPercentage() {
      return ((this.downVotes / this.totalVotes) * 100).toFixed(1);
    },
  },
  methods: {
    vote(type) {
      this.userVote = type;
      if (type === 'up') {
        this.$emit('vote-up');
      } else {
        this.$emit('vote-down');
      }
    },
  },
};
</script>

<style scoped>
.vote-component {
  background: url('/path/to/your/image.jpg') no-repeat center center;
  background-size: cover;
  padding: 20px;
  color: white;
}

.header h1 {
  font-size: 2rem;
}

.header p {
  font-size: 1rem;
}

.more-info {
  color: white;
  text-decoration: underline;
}

.voting {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.voting button {
  background: none;
  border: 2px solid white;
  color: white;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
}

.voting button.active {
  background: white;
  color: black;
}

.results {
  display: flex;
  margin-top: 20px;
}

.up-votes {
  background: green;
  color: white;
  text-align: center;
  padding: 10px;
}

.down-votes {
  background: red;
  color: white;
  text-align: center;
  padding: 10px;
}

.closing {
  margin-top: 20px;
  text-align: center;
  font-size: 1rem;
}
</style>
