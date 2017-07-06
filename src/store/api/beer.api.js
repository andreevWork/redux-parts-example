import {BaseApi} from "./base.api";

class BeerApi extends BaseApi {

    loadBeers(page_number = 1, options = {}) {
        const query_params = {
            p: page_number,
            availableId: 2,
            ...options
        };

        return this.request('/beers', query_params)
    }

    loadBeerItem(beer_id) {
        const query_params = {
            withBreweries: 'Y'
        };

        return this.request(`/beer/${beer_id}`, query_params)
    }
}

export const beerApi = new BeerApi();