import {HTTP} from "../http.common";

let actions = {
    createProject({commit}, project) {
        HTTP.post('project/create', project)
            .then(res => {
                commit('CREATE_PROJECT', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    createProjectDetails({commit}, details) {
        HTTP.post('project/add_blocks_floor_units', details)
            .then(res => {
                commit('CREATE_PROJECT_DETAILS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchProjects({commit}) {
        HTTP.get('project/fetch')
            .then(res => {
                commit('FETCH_PROJECTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchBlocks({commit}) {
        HTTP.get('block/project_blocks')
            .then(res => {
                commit('FETCH_BLOCKS', res.data.input)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchReservations({commit}) {
        HTTP.get('fetch_user_reservations')
            .then(res => {
                commit('FETCH_RESERVATIONS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchAllReservations({commit}) {
        HTTP.get('fetch_all_reservations')
            .then(res => {
                commit('FETCH_RESERVATIONS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchClients({commit}) {
        HTTP.get('fetch_clients')
            .then(res => {
                commit('FETCH_CLIENTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    selectUnit({commit}, id) {
        commit('SELECT_UNIT', id);
    },
    removeUnit({commit}, id) {
        commit('REMOVE_UNIT', id);
    },
    deleteReservation({commit}, reservation) {
        HTTP.delete(`delete_reservation/${reservation.id}`)
            .then(res => {
                commit('DELETE_RESERVATION', reservation);
            }).catch(err => {
            console.log(err)
        })
    },
    removeClient({commit}, client) {
        HTTP.delete(`remove_client/${client.id}`)
            .then(res => {
                commit('DELETE_CLIENT', client);
            }).catch(err => {
            console.log(err)
        })
    },
    deleteProject({commit}, project) {
        HTTP.delete(`delete_project/${project.id}`)
            .then(res => {
                commit('DELETE_PROJECT', project);
            }).catch(err => {
            console.log(err)
        })
    }
};
export default actions;
