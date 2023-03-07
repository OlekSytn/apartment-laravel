let mutations = {
    CREATE_PROJECT(state, project) {
        state.projects.unshift(project)
        state.new_project.unshift(project)
    },
    CREATE_PROJECT_DETAILS(state, detail) {
        state.details.unshift(detail)
    },
    FETCH_PROJECTS(state, project) {
        return state.projects = project
    },
    FETCH_BLOCKS(state, block) {
        return state.blocks = block
    },
    FETCH_RESERVATIONS(state, reservation) {
        return state.reservations = reservation
    },
    FETCH_CLIENTS(state, client) {
        return state.clients = client
    },
    SELECT_UNIT(state, unit) {
        state.units.unshift(unit)
    },
    REMOVE_UNIT(state, unit) {
        let index = state.units.findIndex(item => item === unit);
        Vue.delete(state.units, index);

    },
    DELETE_RESERVATION(state, reservation) {
        let index = state.reservations.findIndex(item => item.id === reservation.id);
        Vue.delete(state.reservations, index);
    },
    DELETE_CLIENT(state, client) {
        let index = state.clients.findIndex(item => item.id === client.id);
        Vue.delete(state.clients, index);
    },
    DELETE_PROJECT(state, project) {
        let index = state.projects.findIndex(item => item.id === project.id);
        Vue.delete(state.projects, index);
    }
};
export default mutations;
