import {beerApi} from "../api/beer.api";
import {LoadPart} from "./simple/load.part";
import {createListPart} from "./fabrics/ListFabric";

function loadSimilarData(page_number, filters) {
    return beerApi.loadBeers(page_number, filters);
}

export const DetailsPart = {
    actions: {
        loadData(beer_id) {
            return beerApi.loadBeerItem(beer_id);
        }
    },

    simple_parts: [
        LoadPart
    ],

    complex_parts: {
        similar: createListPart(loadSimilarData)
    }
};