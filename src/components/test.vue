<template>
    <div id="app">
      <VoteComponent
        title="Pope Francis?"
        description="He's talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)"
        :upVotes="456"
        :downVotes="123"
        :closingDays="22"
        @vote-up="handleVoteUp"
        @vote-down="handleVoteDown"
      />
    </div>
  </template>
  
  <script>
  import VoteComponent from './components/VoteComponent.vue';
  
  export default {
    name: 'App',
    components: {
      VoteComponent
    },
    methods: {
      handleVoteUp() {
        console.log('Voted up');
      },
      handleVoteDown() {
        console.log('Voted down');
      }
    }
  }
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  </style>
  