<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="image" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="card-text">{{ description }}</p>
                    <p class="card-text"><small class="text-muted">{{ timeInfo }}</small></p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <button @click="rate('up')" :class="{ active: userThumb === 'up' }"
                                class="btn btn-success">👍</button>
                            <button @click="rate('down')" :class="{ active: userThumb === 'down' }"
                                class="btn btn-danger">👎</button>
                        </div>
                        <button class="btn btn-primary">{{ voteButtonText }}</button>
                    </div>
                    <div class="mt-3">
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar"
                                :style="{ width: thumbsUpPercentage + '%' }" aria-valuenow="thumbsUpPercentage"
                                aria-valuemin="0" aria-valuemax="100">{{ thumbsUpPercentage }}%</div>
                            <div class="progress-bar bg-danger" role="progressbar"
                                :style="{ width: thumbsDownPercentage + '%' }" aria-valuenow="thumbsDownPercentage"
                                aria-valuemin="0" aria-valuemax="100">{{ thumbsDownPercentage }}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'VoteCard',
    props: {
        id: { type: Number, required: true },
        title: String,
        description: String,
        image: String,
        timeInfo: String,
        thumbsUp: { type: Number, default: 0 },
        thumbsDown: { type: Number, default: 0 }
    },
    data() {
        return {
            userThumb: null,
            currentRatingUp: this.thumbsUp,
            currentRatingDown: this.thumbsDown
        };
    },
    computed: {
        totalVotes() {
            return this.currentRatingUp + this.currentRatingDown;
        },
        thumbsUpPercentage() {
            return this.totalVotes === 0 ? 0 : ((this.currentRatingUp / this.totalVotes) * 100).toFixed(1);
        },
        thumbsDownPercentage() {
            return this.totalVotes === 0 ? 0 : ((this.currentRatingDown / this.totalVotes) * 100).toFixed(1);
        },
        voteButtonText() {
            return this.userThumb ? 'Vote Again' : 'Vote Now';
        }
    },
    methods: {
        rate(thumb) {
            if (thumb === 'up') {
                this.currentRatingUp++;
                this.userThumb = 'up';
                this.Vote('thumbs-up');
            } else {
                this.currentRatingDown++;
                this.userThumb = 'down';
                this.Vote('thumbs-down');
            }
        },
        Vote(type) {
            const apiUrl = `https://95q6j16jse.execute-api.us-east-2.amazonaws.com/items/${this.id}/${type}`;
            axios.patch(apiUrl)
                .then(response => {
                    console.log('Vote submitted:', response.data);
                })
                .catch(error => {
                    console.error('Error voting:', error);
                });
        }
    }
}
</script>

<style scoped>
.card {
    max-width: 100%;
}

.progress-bar {
    white-space: nowrap;
    overflow: hidden;
}

button.active {
    background-color: #007bff !important;
}
</style>