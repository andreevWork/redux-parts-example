import {ListPart} from "./simple/list.part";
import {beerApi} from "../api/beer.api";
import {LoadPart} from "./simple/load.part";

export const BeerListPart = {
    actions: {
        loadData(page_number) {
            return beerApi.loadBeers(page_number);
        }
    },

    simple_parts: [
        LoadPart,
        ListPart
    ]
};