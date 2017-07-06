import {LoadPart} from "../simple/load.part";
import {ListPart} from "../simple/list.part";

export function createListPart(loadData) {
    return  {
        actions: {
            loadData(...args) {
                return loadData(...args)
            }
        },

        simple_parts: [
            LoadPart,
            ListPart
        ]
    };
}