import {beerApi} from "../api/beer.api";
import {LoadPart} from "./simple/load.part";

export const DetailsPart = {
    actions: {
        loadData(beer_id) {
            return beerApi.loadBeerItem(beer_id);
        }
    },

    simple_parts: [
        LoadPart
    ]
};