<template>
    <div>
        <label for="project">Select Project</label><br><br>
        <div class="flex items-center border-b border-b-2 border-teal-500 max-w-sm  py-2">
            <select class="custom-select" id="project" v-model="project">
                <option v-for="project in projects" v-bind:value=project>{{project.name}}</option>
            </select>
        </div>
        <div v-if="show_created">
        <div v-if="isProjectSelected">
            <form @submit.prevent="editProject(project.id)">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Project Name</label>
                    <input v-model="project.name"
                           class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                           id="name" type="text" >
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="tagline">
                        Project Tag Line
                    </label>
                    <input type="text" v-model="project.tag"
                           class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                           id="tagline" >
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                        Project Description
                    </label>
                    <textarea v-model="project.description" required placeholder="Write description"
                              class="resize-y appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="description" ></textarea>
                </div>
                <button
                    class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    type="submit">
                    Edit
                </button>
            </form>
        </div>
        </div>

        <div v-if="show_upload">
            <div class="my-2 h4 font-bold">
                <p>Project Name:<span class="text-success ml-3">{{new_project.name}}</span></p>
            </div>
            <div>
                <div class="h6 my-4 font-bold">
                    <p>Image upload</p>

                </div>
                <form @submit="formSubmit" enctype="multipart/form-data">
                    <div id="preview">
                        <img v-if="url" :src="url"/>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="file" accept="image/*"
                                   class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                   v-on:change="onFileChange">
                        </div>
                        <div class="col-md-3">
                            <button class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Upload Project Burner</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {{new_project}}
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {HTTP} from "../../../http.common";

    export default {
        name: "EditProject",
        data: () => {
            return {
                project: '',
                name: '',
                description: '',
                tag: '',
                id: '',
                show_upload: false,
                show_created: true,
                url: null,
            }
        },
        computed: {
            ...mapGetters([
                'projects',
                'new_project'

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
            onFileChange(e) {
                this.file = e.target.files[0];
                this.url = URL.createObjectURL(this.file);
            },
            editProject(id) {
                this.id = id
                HTTP.post(`/edit_project/${this.id}`, this.project
                )
                    .then(res => {
                        swal("Project successfully edited");
                        this.$store.commit('CREATE_PROJECT', res.data)
                        this.show_upload = true;
                    }).catch(err => {
                    console.log(err)
                })
            },
            formSubmit(e) {
                e.preventDefault();
                const config = {
                    headers: {'content-type': 'multipart/form-data'}
                };
                let formData = new FormData();
                formData.append('file', this.file);
                HTTP.post(`add_image/${this.project.id}`, formData, config)
                    .then(function (response) {
                        if (response.data.success) {
                            swal(response.data.message);
                            window.location.href = "/dashboard";
                        } else {
                            swal(response.data.error);
                        }
                    })
                    .catch(function (error) {
                        console.log(e)
                    });
            }
        }
    }
</script>

<style scoped>
    #preview img {
        max-width: 200px;
        max-height: 200px;
    }
</style>
