<template>
    <div>
        <div class="flex mt-4 mb-3">
            <div class="flex-1">
                <img :src="`/project_images/${project.image}`" alt="">
            </div>
            <div class="flex-1 px-4">
                <div class="text-gray-900 font-bold text-xl mb-2 mt-16">{{project.name}}</div>
                <p class="text-gray-700 text-base">{{project.description}}</p>
            </div>
        </div>
        <div class="flex" v-if="show_select">
            <div class="flex-1">
                <div>
                    <label for="name">Choose Block</label><br><br>
                    <div class="flex items-center border-b border-b-2 border-teal-500 max-w-sm  py-2">
                        <select class="custom-select" id="name" v-model="block_id">
                            <option v-for="block in blocks" v-bind:value=block.id>{{block.name}}</option>
                        </select>
                        <button @click="retrieveFloor"
                                class="ml-2 rounded-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                type="button">
                            Next
                        </button>
                    </div>
                    <div v-show="show_floors">
                        <label for="floor">Floors in block</label><br><br>
                        <div class="flex items-center border-b border-b-2 border-teal-500 max-w-sm  py-2">
                            <select class="custom-select" id="floor" v-model="floor_id">
                                <option v-for="floor in floors" v-bind:value=floor.id>Floor {{floor.number}}</option>
                            </select>
                            <button @click="retrieveUnits"
                                    class="ml-2 rounded-full flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                    type="button">
                                Next
                            </button>
                        </div>
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
                    <p>You have selected units: {{selected_units}}</p>
                    <button
                        class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        @click="makeReservation()">
                        Book Apartment
                    </button>
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
</template>

<script>
    import {HTTP} from "../http.common";
    import {mapGetters} from "vuex";

    export default {
        name: "ViewProject",
        data: () => {
            return {
                project: '',
                blocks: [],
                floors: [],
                floor_units: [],
                block_id: '',
                floor_id: '',
                show_floors: false,
                show_units: false,
                show_select: true,
                show_results: false,
                bookings: []
            }
        },
        computed: {
            getProjectId() {
                return localStorage.getItem("project_id")
            },
            ...mapGetters([
                'units',
                'selected_units'
            ]),
            book() {
                if (this.units.length > 0) {
                    return true
                }
            }
        },
        created() {
            HTTP.get(`/project/view_project/${this.getProjectId}`)
                .then(res => {
                    this.project = res.data;
                }).catch(err => {
                console.log(err)
            });
            HTTP.get(`block/project_blocks/${this.getProjectId}`)
                .then(res => {
                    this.blocks = res.data;
                }).catch(err => {
                console.log(err)
            })
        },
        methods: {
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
                    swal("Kindly log in to the system to proceed with booking.Thank you");
                })
            },
            bookAgain() {
                this.show_select = true;
                window.location.href = "/the_project"
            }
        }
    }
</script>

<style scoped>
    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        padding: 10px;
    }

    .grid-item {
        margin: 15px;
        width: 100%;
        /*font-size: 30px;*/
        text-align: center;
        padding: 0 10px 0 10px
    }
</style>
