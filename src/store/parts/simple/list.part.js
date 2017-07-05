export const ListPart = {
    initial_state: {
        has_more: false,
        next_page: 1,
        items_count: 0,
        pages_count: 0
    },

    reducer: {
        loadData_Success(state, {payload}) {
            const {totalResults, numberOfPages, data} = payload;
            const old_data = state.data || [];

            return {
                ...state,
                is_pending: false,
                items_count: totalResults,
                pages_count: numberOfPages,
                next_page: state.next_page + 1,
                has_more: state.next_page < numberOfPages,
                data: old_data.concat(data)
            }
        }
    }
};