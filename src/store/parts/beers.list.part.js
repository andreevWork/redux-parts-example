import {ListPart} from "./simple/list.part";
import {beerApi} from "../api/beer.api";

export const BeerListPart = {
    actions: {
        loadData() {
            return beerApi.loadBeers();
        }
    },

    simple_parts: [
        ListPart
    ]
};