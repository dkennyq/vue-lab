<template>
    <div id="detailPerson">
        <div class="bg-image-div" :style="{ backgroundImage: `url(${person.profile_image})` }">
            <div class="container">
                <div class="row">
                    <div class="col">
                    </div>
                </div>
                <div class="row">
                    <div class="col-4 mt-5 bg-box-blur-overlay">
                        <div class="content">
                            <div class="row">
                                <h2>Rule of Thumb.</h2>
                            </div>
                            <div class="row">
                                <p>What's your opinion on...</p>
                            </div>
                            <div class="row">
                                <h1 v-if="person">{{ person.name }}</h1>
                                <h1 v-else>Oh no 😢</h1>
                            </div>
                            <div class="row" style="max-height: 180px; overflow-y: auto;">
                                <p>
                                    {{ person.detail_info }}
                                </p>
                            </div>
                            <div class="row mt-3">
                                <div :class="[thumbIconColor]">
                                    <font-awesome-icon :icon="thumbIcon" class="text-white fs-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">

                    </div>
                    <div class="col">

                    </div>
                </div>
                <!-- <div class="row">
                    <div class="hero__closing-gauge">
                        <div class="closing-gauge__left">
                            <span class="closing-gauge__title">closing in</span>
                        </div>
                        <div class="closing-gauge__right">
                            <span class="closing-gauge__number">22</span>
                            <span class="closing-gauge__desc">days</span>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
export default {
    name: 'VoteDetailComponent',
    props: {
        // Person object to display in the detail component.
        person: {
            type: Object,
            default: null,
            validator(value) {
                return value === null || (Object.prototype.hasOwnProperty.call(value, 'name'));
            }
        }
    },
    watch: {
        person(newValue) {
            console.log('Received person:', newValue);
        }
    },
    methods: {
        Vote(voteValue) {
            this.$emit('register-vote', voteValue);
        }
    },
    computed: {
        // Method to set the thumb up or thumb down icon
        thumbIcon() {
            return this.person.total_thumbs_up >= this.person.total_thumbs_down ? faThumbsUp : faThumbsDown;
        },
        // Method to set the thumb up or thumb down icon color
        thumbIconColor() {
            return this.person.total_thumbs_up >= this.person.total_thumbs_down ? 'icon-vote-up' : 'icon-vote-down';
        }
    }
}
</script>

<style>
#detailPerson {
    height: 100%;
    margin: 0;
}

.bg-image-div {
    background-size: cover;
    background-position: center;
    height: 50vh;
    width: 100%;
}

.bg-box-blur-overlay {
    background: rgb(121 104 104 / 50%);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
}

.content {
    color: rgb(255, 255, 255);
}
</style>