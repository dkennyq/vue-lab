<template>
    <div id="detailPerson">
        <div class="bg-image-div">
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
                            <div class="row">
                                <p>
                                    He's talking tough on clergy sexual abuse, or is he just another pervert protector?
                                    (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
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
    background-image: url('https://e3.365dm.com/24/03/1600x900/skynews-pope-francis-good-friday_6504833.jpg?20240329210104');
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