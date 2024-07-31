<template>
    <div class="alert alert-secondary" role="alert">
        <div>
            <div class="row">
                <div class="col-sm-2">
                    <strong>Speak out.</strong>
                    <br />
                    <strong>Be Heard.</strong>
                    <br />
                    <strong>Be counted.</strong>
                </div>
                <div class="col-sm-9">
                    <p v-if="!registeredVote">
                        Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can
                        speak out and
                        speak freely. It's You share your opinion, we analyze and put the data in a public report.
                    </p>
                    <h2 v-else>
                        Thank You for submitting your vote.
                    </h2>
                </div>
                <div class="col-md-1 text-end">
                    <button type="button" class="btn-close" @click="closeAlert"  aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VoteAlert',
    props:{
        // Boolean to show or hide the alert message.
        registeredVote: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeAlert() {
            console.log('closeAlert');
            this.$emit('vote-registered', false);
        }
    }
}
</script>