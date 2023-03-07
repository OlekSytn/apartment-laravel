<template>
    <div>
        <h1>Cet</h1>
        {{blocks}}
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Projects",
        computed:{
            ...mapGetters([
                'blocks'
            ])
        },
        created() {
            this.$store.dispatch('fetchBlocks');
        }
    }
</script>

<style scoped>



</style>
