<template>
    <div class="container">
        <div class="font-bold h1 text-center">
            <p>Current Reservations</p>
        </div>
        <div v-if="reservations.length> 0">
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">Client Name</th>
                    <th scope="col">Client Email</th>
                    <th scope="col">Unit Number</th>
                    <th scope="col">Floor Number</th>
                    <th scope="col">Block</th>
                    <th scope="col">Project</th>
                    <th scope="col">Opt Out</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="reservation in reservations">
                    <td>{{reservation.client_name}}</td>
                    <td>{{reservation.client_email}}</td>
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
            <h6>No booked apartment units</h6>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Reservations",
        data: () => {
            return {}
        },
        computed: {
            ...mapGetters([
                'reservations'
            ])
        },

        created() {
            this.$store.dispatch('fetchAllReservations');
        },
        methods: {
            deleteReservation(reservation) {
                this.$store.dispatch('deleteReservation', reservation);
                swal("Reservation deleted");
            }
        }
    }
</script>
