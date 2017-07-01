export const ListPart = {
    initial_state: {
        is_pending: false,
        data: null
    },

    reducer: {
        loadData(state) {
            return {
                ...state,
                is_pending: true
            }
        },
        setData(state, {payload}) {
            return {
                ...state,
                is_pending: false,
                data: payload
            }
        }
    }
};