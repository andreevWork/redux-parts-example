import {BaseApi} from "./base.api";

class BeerApi extends BaseApi {

    loadBeers(page_number = 1) {
        const query_params = {
            p: page_number,
            availableId: 2
        };

        return this.request('/beers', query_params)
    }
}

export const beerApi = new BeerApi();