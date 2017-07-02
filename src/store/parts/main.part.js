import {BeerListPart} from "./beers.list.part";

export const MainPart = {
    initial_state: {
        is_init: false
    },

    reducer: {
        setInit(state) {
            return {
                ...state,
                is_init: true
            }
        }
    },

    complex_parts: {
        beers: BeerListPart
    }
};