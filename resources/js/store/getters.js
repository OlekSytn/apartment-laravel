import state from "./state";

let getters = {
    projects: state => {
        return state.projects
    },
    detailsh: state => {
        return state.details
    },
    new_project: state => {
        return state.new_project[state.new_project.length - 1]
    },
    blocks: state => {
        return state.blocks
    },
    units: state => {
        return state.units
    },
    reservations: state => {
        return state.reservations
    },
    clients: state => {
        return state.clients
    },
    selected_units: state => {
        return [...new Set(state.units)];
    }
}
export default getters
