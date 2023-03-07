<template>
    <div>
        <div class="w-75 mx-auto">
            <div class="font-bold h1 text-center">
                <p>Reserve Units for Client</p>
            </div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Client Email</label>
            <input type="email" v-model="email" id="email"
                   class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
            <button @click="retrieveProjects" class="btn btn-primary">Next</button>
            <div class="flex" v-if="show_select">
                <div class="flex-1">
                    <div v-if="show_projects">
                        <label for="project">Select Project</label><br><br>
                        <div class="flex items-center border-b border-b-2 border-teal-500 max-w-sm  py-2">
                            <select class="custom-select" id="project" v-model="project_id">
                                <option v-for="project in projects" v-bind:value=project.id>{{project.name}}</option>
                            </select>
                            <button @click="retrieveBlocks"
                                    class="ml-2 rounded-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                    type="button">
                                Next
                            </button>
                        </div>
                    </div>
                    <div v-if="show_blocks">
                        <label for="block">Choose Block</label><br><br>
                        <div class="flex items-center border-b border-b-2 border-teal-500 max-w-sm  py-2">
                            <select class="custom-select" id="block" v-model="block_id">
                                <option v-for="block in blocks" v-bind:value=block.id>{{block.name}}</option>
                            </select>
                            <button @click="retrieveFloor"
                                    class="ml-2 rounded-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                    type="button">
                                Next
                            </button>
                        </div>
                    </div>
                    <div v-show="show_floors">
                        <label for="floor">Floors in block</label><br><br>
                        <div class="flex items-center border-b border-b-2 border-teal-500 max-w-sm  py-2">
                            <select class="custom-select" id="floor" v-model="floor_id">
                                <option v-for="floor in floors" v-bind:value=floor.id>Floor {{floor.number}}
                                </option>
                            </select>
                            <button @click="retrieveUnits"
                                    class="ml-2 rounded-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                    type="button">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <div v-show="show_units">
                        <div class="font-bold mt-5">
                            <p>Select one or more units</p>
                        </div>
                        <div class="flex flex-wrap -mx-px py-3 sm:-mx-3 md:-mx-px border-2 rounded">
                            <div v-for="unit in floor_units">
                                <div class="my-2 w-1/1 sm:my-3 sm:px-3 md:my-px md:px-px px-1 py-2">
                                    <button @click="selectUnit(unit.id)" type="button"
                                            class="ml-2 rounded-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mr-5 rounded"
                                    >Pick Room {{unit.number}}
                                    </button>
                                    <button @click="removeUnit(unit.id)"
                                            class="ml-2 rounded-full flex-shrink-0 bg-red-500 hover:bg-teal-700   text-sm border-4 text-white py-1 px-2 mr-5 rounded"
                                            type="button">Remove <i class="far fa-trash-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="book">
                        <p>Selected units: {{selected_units}}</p>
                        <button @click="bookForClient" class="btn btn-primary">Book</button>
                    </div>
                </div>
            </div>
            <div v-if="show_results">
                <div class="my-4 font-bold">
                    <h1>You have successful reserved the following units.</h1>
                </div>
                <div class="mb-5">
                    <table class="table">
                        <thead class="bg-gray-500">
                        <tr>
                            <th scope="col">Unit Number</th>
                            <th scope="col">Floor Number</th>
                            <th scope="col">Block</th>
                        </tr>
                        </thead>
                        <tbody v-for="booking in bookings">
                        <tr v-for="reservation in booking">
                            <td>{{reservation.unit_number}}</td>
                            <td>{{reservation.floor_number}}</td>
                            <td>{{reservation.block}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <hr>
                <button type="button"
                        class="ml-2 rounded-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        @click="bookAgain">Book again
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {HTTP} from "../../http.common";
    import {mapGetters} from "vuex";

    export default {
        name: "BookForClient",
        data: () => {
            return {
                blocks: [],
                floors: [],
                floor_units: [],
                block_id: '',
                floor_id: '',
                email: '',
                user_id: '',
                project_id: '',
                show_blocks: false,
                show_floors: false,
                show_units: false,
                show_select: true,
                show_results: false,
                show_projects: false,
                bookings: []
            }
        },
        computed: {
            ...mapGetters([
                'units',
                'projects',
                'selected_units'

            ]),
            book() {
                if (this.units.length > 0) {
                    return true
                }
            }
        },
        created() {
            this.$store.dispatch('fetchProjects');
        },
        methods: {
            retrieveProjects() {
                HTTP.post(`get_user`, {
                    email: this.email
                })
                    .then(res => {
                        if (res.data === 'User not found') {
                            alert("Client not found");
                        } else {
                            this.$store.dispatch('fetchProjects');
                            this.user_id = res.data.id;
                            console.log(this.user_id);
                            this.show_projects = true;
                        }
                    }).catch(err => {
                    console.log(err)
                });
            },
            retrieveBlocks() {
                this.show_blocks = true;
                HTTP.get(`block/project_blocks/${this.project_id}`)
                    .then(res => {
                        this.blocks = res.data;
                    }).catch(err => {
                    console.log(err)
                });
            },
            retrieveFloor() {
                this.show_floors = true;
                HTTP.get(`block/block_floors/${this.block_id}`)
                    .then(res => {
                        this.floors = res.data;
                    }).catch(err => {
                    console.log(err)
                })
            },
            retrieveUnits() {
                this.show_units = true;
                HTTP.get(`block/floor_units/${this.floor_id}`)
                    .then(res => {
                        this.floor_units = res.data;
                    }).catch(err => {
                    console.log(err)
                })
            },
            selectUnit(id) {
                this.$store.dispatch('selectUnit', id);
            },
            removeUnit(id) {
                this.$store.dispatch('removeUnit', id);
            },
            makeReservation() {
                HTTP.post(`book_apartment`, {
                    units: this.selected_units,
                })
                    .then(res => {
                        this.bookings = res.data;
                        swal("Successfully reserved unit(s)");
                        this.show_select = false;
                        this.show_results = true;
                    }).catch(err => {
                    console.log(err)
                })
            },
            bookForClient() {
                HTTP.post(`book_apartment_for_client`, {
                    units: this.units,
                    user: this.user_id,
                })
                    .then(res => {
                        this.bookings = res.data;
                        this.show_select = false;
                        this.show_results = true;
                    }).catch(err => {
                    console.log(err)
                })
            },
            bookAgain() {
                this.show_select = true;
                window.location.href = "/dashboard"
            }
        }
    }
</script>

<style scoped>

</style>
