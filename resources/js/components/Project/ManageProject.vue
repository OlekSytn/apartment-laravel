<template>
    <div>
        <div class="w-75 mx-auto">
            <div class="font-bold mb-4 h1">
                <p>Alter the project</p>
            </div>
            <hr>
            <div class="flex mt-5">
                <div class="flex-1">
                    <div @click="selectedComponent = 'DeleteProject'">
                        <button
                            class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            type="button">
                            Delete Project
                        </button>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="helper" @click="selectedComponent = 'EditProject'">
                        <button
                            class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            type="button">
                            Edit Project
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div class="mt-4">
                    <component :is="selectedComponent"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManageProject",
        components: {
            DeleteProject: () => import('./ManageProject/DeleteProject'),
            EditProject: () => import('./ManageProject/EditProject')
        },
        data: () => {
            return {
                selectedComponent: 'DeleteProject'
            }
        },
    }
</script>

<style scoped>

</style>
