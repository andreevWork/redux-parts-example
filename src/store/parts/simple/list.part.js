export const ListPart = {
    initial_state: {
        is_pending: false,
        has_more: false,
        next_page: 1,
        items_count: 0,
        pages_count: 0,
        data: []
    },

    reducer: {
        loadData_Pending(state) {
            return {
                ...state,
                is_pending: true
            }
        },
        loadData_Success(state, {payload}) {
            const {totalResults, numberOfPages, data} = payload;

            return {
                ...state,
                is_pending: false,
                items_count: totalResults,
                pages_count: numberOfPages,
                next_page: state.next_page + 1,
                has_more: state.next_page < numberOfPages,
                data: state.data.concat(data)
            }
        }
    }
};