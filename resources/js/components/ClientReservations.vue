<template>
    <div class="container">
        <div class="font-bold h1 py-6 mb-5 text-center">
            <p>Your Reserved Units</p>
            <hr>
        </div>
        <div v-if="reservations.length> 0">
            <table class="table">
                <thead class="bg-gray-600">
                <tr>
                    <th scope="col">Unit Number</th>
                    <th scope="col">Floor Number</th>
                    <th scope="col">Block</th>
                    <th scope="col">Project</th>
                    <th scope="col">Opt Out</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="reservation in reservations">
                    <td>{{reservation.unit_number}}</td>
                    <td>{{reservation.floor_number}}</td>
                    <td>{{reservation.block}}</td>
                    <td>{{reservation.project}}</td>
                    <td class="text-danger btn" @click="deleteReservation(reservation)">Remove unit</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <div class="font-bold h5">
                <p class="mb-3">You have no booked apartment units</p>
                <div class="my-16 text-blue-500">
                <a href="/" >Grab one unit <i class="fas fa-long-arrow-alt-right ml-2"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ClientReservations",
        data: () => {
            return {}
        },
        computed: {
            ...mapGetters([
                'reservations'
            ])
        },

        created() {
            this.$store.dispatch('fetchReservations');
        },
        methods: {
            deleteReservation(reservation) {
                swal("Unit successfully removed")
                this.$store.dispatch('deleteReservation', reservation);
            }
        }
    }
</script>
