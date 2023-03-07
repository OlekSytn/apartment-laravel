<template>
    <div>
        <div class="landing_bg">
            <div class="py-5 px-5 ml-5 col-md-4">
                <div class="h1 font-weight-bold text-white">
                    <p class="mt-5">Welcome to Cetsuites, creating a lasting experience...</p>
                </div>
                <div class="h6 text-white font-weight-bold">
                    <p class="mt-4">Its more than just a living</p>
                </div>
                <a href="/register">
                    <button class="parallelogram  mt-5 bg-teal-500 hover:bg-blue-700 text-white font-bold">
                        Join Cetsuites today
                    </button>
                </a>
            </div>
        </div>
        <div class="container">
            <div class="text-center h1 text-teal-500 py-5 ">
                <p>Cetsuites Projects</p>
            </div>
            <hr>
            <div class="bg-gray-200 mt-3 rounded-full py-3">
            <p class="h6 ml-12 font-bold">Choose the desired project and grab an apartment for yourself.</p>
            </div>
            <div class="flex flex-wrap -mx-px  sm:-mx-3 md:-mx-px">
                <div v-for="project in projects">
                    <div class="my-px w-1/1 sm:my-3 sm:px-3 md:my-px md:px-px">
                        <div class="max-w-lg mx-5 my-3 rounded overflow-hidden shadow-lg">
                            <img class="w-full" :src="`project_images/${project.image}`" alt="">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{{project.name}}</div>
                                <p class="text-gray-700 text-base">
                                    {{project.description}}
                                </p>
                                <div class="px-6 py-4">
                                    <a href="/the_project">
                                        <button
                                            class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                            @click="storePostId(project.id)">
                                            Book Apartment
                                        </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: "LandingPage",
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'projects'
            ]),

        },
        methods: {
            storePostId(id) {
                localStorage.setItem('project_id', id);
            },

        },
        created() {
            this.$store.dispatch('fetchProjects');
        }
    }
</script>

<style scoped lang="scss">
    .landing_bg {
        background: linear-gradient(to right, rgba(241, 168, 11, 0.52), rgba(168, 38, 136, 0.637)),url("../../../public/images/alma.jpeg");
        height: 500px;
        overflow:hidden;
    }
    .parallelogram {
        width: 200px;
        height: 70px;
        transform: skew(340deg);
    }
</style>
