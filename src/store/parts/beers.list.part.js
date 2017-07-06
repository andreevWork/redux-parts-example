import {beerApi} from "../api/beer.api";
import {createListPart} from "./fabrics/ListFabric";

function loadData(page_number) {
    return beerApi.loadBeers(page_number);
}

export const BeerListPart = createListPart(loadData);