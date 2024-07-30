<template>
    <div class="card mb-3 square-border" :style="{ background: `linear-gradient(to right, #F2F2F2, #303338)` }">
        <div class="row g-0" id="cardContent">
            <div class="col-md-4">
                <img :src="image" class="img-fluid rounded-start" alt="{{ title }}" style="height: 200px; width:350px;">
                <div :class="['icon-container', thumbIconColor]">
                    <font-awesome-icon :icon="thumbIcon" class="text-white fs-2" />
                </div>
            </div>
            <div class="col-md-8">
                <div class="card-body square-border">
                    <div class="row">
                        <div class="col d-flex justify-content-between align-items-start" id="cardInfoContainer">
                            <div class="col" id="cardInfo">
                                <h1 class="card-title text-white fw-lighter">{{ title }}</h1>
                                <p class="card-text text-white fw-lighter">{{ description }}</p>
                            </div>
                            <div clas="col" id="votesControl">
                                <p class="card-text text-white">
                                    <small class="text-muted-white">{{ timeInfo }}</small>
                                </p>
                                <div>
                                    <button @click="rate('up')" :class="{ active: userThumb === 'up' }"
                                        class="btn btn-up square-border">
                                        <font-awesome-icon icon="thumbs-up" class="text-white fs-2" />
                                    </button>
                                    <button @click="rate('down')" :class="{ active: userThumb === 'down' }"
                                        class="btn btn-down square-border">
                                        <font-awesome-icon icon="thumbs-down" class="text-white fs-2" />
                                    </button>
                                    <button class="btn bt-custom fs-5 square-border">{{ voteButtonText }}</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row g-0 opacity-75" id="progressBar">
            <div class="progress square-border" style="height:50px;">
                <div class="progress-bar progress-bar-up" role="progressbar"
                    :style="{ width: thumbsUpPercentage + '%' }" aria-valuenow="thumbsUpPercentage" aria-valuemin="0"
                    aria-valuemax="100">
                    <div class="d-flex align-items-center">
                        <font-awesome-icon icon="thumbs-up" class="text-white fs-2 m-1" />
                        <span class="text-white fs-2 ml-2">
                            {{ thumbsUpPercentage }}%
                        </span>
                    </div>
                </div>
                <div class="progress-bar progress-bar-down" role="progressbar"
                    :style="{ width: thumbsDownPercentage + '%' }" aria-valuenow="thumbsDownPercentage"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="d-flex align-items-center justify-content-end square-border">
                        <font-awesome-icon icon="thumbs-down" class="text-white fs-2 m-1" />
                        <span class="text-white fs-2">
                            {{ thumbsDownPercentage }}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

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
        },
        thumbIcon() {
            return this.thumbsUpPercentage >= this.thumbsDownPercentage ? faThumbsUp : faThumbsDown;
        },
        thumbIconColor() {
            return this.thumbsUpPercentage >= this.thumbsDownPercentage ? 'icon-up' : 'icon-down';
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

<style>
:root {
    --color-up: #5BA69E;
    --color-down: #BF9445;
    --color-btn-up: #5BA69E;
    --color-btn-down: #F2A649;
}

.card {
    max-width: 100%;
}

.progress-bar {
    white-space: nowrap;
    overflow: hidden;
    border-radius: 0 !important;
}

.progress-bar-up {
    background-color: var(--color-up);
}

.progress-bar-down {
    background-color: var(--color-down);
}

.btn-up {
    background-color: var(--color-btn-up);
    margin-right: 10px;
}

.btn-down {
    background-color: var(--color-btn-down);
    margin-right: 10px;
}

.bt-custom {
    background-color: #303338;
    color: #fff;
}

#progressBar {
    position: absolute;
    bottom: 0cap;
    left: 0;
    width: 100%;
    z-index: 1;
    border-radius: 0;
}

#cardContent {
    position: relative;
    z-index: 0;
    border-radius: 0;
}

#cardInfoContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

#votesControl {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.icon-container {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
}

.icon-up {
    background-color: var(--color-btn-up);
}

.icon-down {
    background-color: var(--color-btn-down);
}

.square-border {
  border-radius: 0 !important;
}
</style>