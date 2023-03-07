<template>
    <div>
        <div class="w-75 mx-auto">
            <div class="font-bold h1 text-center">
                <p>Add details to the project</p>
            </div>
            <div v-if="show_create">
                <form @submit.prevent="postDetails(details)">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Project Name</label>
                        <select
                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"                            id="name" v-model="details.project_id">
                            <option v-for="project in projects" v-bind:value=project.id>{{project.name}}</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Block Name</label>
                        <input type="text" v-model="details.name" id="block"
                               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="floors">Number of Floors in
                            Block</label>
                        <input type="number" v-model="details.floor_number" id="floors"
                               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="unit">No of Units Per
                            Floor:</label>
                        <input type="number" v-model="details.units" id="unit"
                               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                    </div>
                    <button
                        class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        type="submit">
                        Save
                    </button>
                </form>
            </div>
            <div v-if="show_results">
                {{detailsh}}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "AddBlocksFloorsUnits",
        data: () => {
            return {
                details: {
                    project_id: '',
                    name: '',
                    floor_number: '',
                    units: '',
                },
                show_create: true,
                show_results: false
            }
        },
        computed: {
            ...mapGetters([
                'projects',
                'detailsh',
            ])
        },
        methods: {
            postDetails(details) {
                this.$store.dispatch('createProjectDetails', details);
                this.show_create = false;
                this.show_results = true
            }
        },
        created() {
            this.$store.dispatch('fetchProjects')
        }
    }
</script>

<style scoped>

</style>
