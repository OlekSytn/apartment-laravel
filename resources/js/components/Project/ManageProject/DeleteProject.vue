<template>
    <div>
        <label for="project">Select Project</label><br><br>
        <div class="flex items-center border-b border-b-2 border-teal-500 max-w-sm  py-2">
            <select class="custom-select" id="project" v-model="project">
                <option v-for="project in projects" v-bind:value=project>{{project.name}}</option>
            </select>
        </div>
        <div v-if="isProjectSelected">
            <p>Project Name: {{project.name}}</p>
            <p>Project Tag: {{project.tag}}</p>
            <button @click="deleteProject(project)"
                    class="ml-2 rounded-full flex-shrink-0 bg-red-500 hover:bg-red-700 border-teal-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button">
                Delete
            </button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "DeleteProject",
        data: () => {
            return {
                project: ''
            }
        },
        computed: {
            ...mapGetters([
                'projects',

            ]),
            isProjectSelected() {
                if (this.project !== '') {
                    return true;
                }
            }

        },
        created() {
            this.$store.dispatch('fetchProjects');
        },
        methods: {
            deleteProject(project) {
                this.$store.dispatch('deleteProject', project);
                this.project = '';
                swal("Project successfully removed");
            }
        }
    }
</script>

<style scoped>

</style>
