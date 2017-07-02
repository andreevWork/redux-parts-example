import {ListPart} from "./simple/list.part";
import {beerApi} from "../api/beer.api";

export const BeerListPart = {
    actions: {
        loadData(page_number) {
            return beerApi.loadBeers(page_number);
        }
    },

    simple_parts: [
        ListPart
    ]
};