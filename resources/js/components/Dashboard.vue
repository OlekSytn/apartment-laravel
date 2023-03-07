<template>
    <div class="bg">
        <div class="flex justify-between h-full">
            <div class="flex-2 side-bar w-1/6">
                <div class="text-center">
                    <h5 class="my-3 btn btn-primary text-white px-5 py-2">Admin Dashboard</h5>
                </div>
                <div class="helper" @click="selectedComponent = 'ManageProject'">
                    <h6>Manage Projects</h6>
                </div>
                <div class="helper" @click="selectedComponent = 'CreateProject'">
                    <h6>Create Project</h6>
                </div>
                <div class="helper" @click="selectedComponent = 'AddBlocksFloorsUnits'">
                    <h6>Add Project Details</h6>
                </div>
                <div class="helper" @click="selectedComponent = 'BookForClient'">
                    <h6>Book For Client</h6>
                </div>
                <div class="helper" @click="selectedComponent = 'Clients'">
                    <h6>Client directory</h6>
                </div>
                <div class="helper" @click="selectedComponent = 'Reservations'">
                    <h6>View Reservations</h6>
                </div>
            </div>
            <div class="w-10/12 mx-auto px-4 m-2 ser">
                <div class="mt-4">
                <component :is="selectedComponent"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: "AdminDash",

        components: {
            AddBlocksFloorsUnits: () => import('./Project/AddBlocksFloorsUnits'),
            CreateProject: () => import('./Project/CreateProject'),
            BookForClient: () => import('./Project/BookForClient'),
            Clients: () => import('./Project/Clients'),
            Reservations: () => import('./Project/Reservations'),
            ManageProject: () => import('./Project/ManageProject')
        },
        data: () => {
            return {
                selectedComponent: 'CreateProject'
            }
        },

    }
</script>

<style scoped>
    .bg {
        background-color: whitesmoke;
    }

    .side-bar {
        background: rgba(181, 147, 34, 0.58);
        z-index: 99;
    }

    .btn {
        border-radius: 25px;
        margin: auto;

    }

    .ser {
        height: 800px;
    }

    .helper {
        height: 50px;
        text-align: center;
        cursor: pointer;
    }
</style>
