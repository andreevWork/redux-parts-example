export const LoadPart = {
    initial_state: {
        is_pending: false,
        data: null
    },

    reducer: {
        loadData_Pending(state) {
            return {
                ...state,
                is_pending: true,
                data: null
            }
        },

        loadData_Success(state, {payload}) {
            const {data} = payload;

            return {
                ...state,
                is_pending: false,
                data: data
            }
        }
    }
};