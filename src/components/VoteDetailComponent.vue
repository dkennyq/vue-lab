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
                            <div class="row">
                                <div class="col">
                                    <button style="width: 100%;" class="btn btn-vote-up square-border">
                                        <font-awesome-icon icon="thumbs-up" class="text-white fs-2" />
                                    </button>
                                </div>
                                <div class="col">
                                    <button style="width: 100%;" class="btn btn-vote-down square-border">
                                        <font-awesome-icon icon="thumbs-down" class="text-white fs-2" />
                                    </button>
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
export default {
    name: 'VoteDetailComponent',
    props: {
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
    padding: 20px;
    border-radius: 10px;
}

.content {
    color: rgb(255, 255, 255);
}
</style>