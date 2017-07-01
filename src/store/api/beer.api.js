import {BaseApi} from "./base.api";

class BeerApi extends BaseApi {

    loadBeers() {
        const query_params = {
            p: 1,
            availableId: 1
        };

        return this.request('/beers', query_params)
    }
}

export const beerApi = new BeerApi();