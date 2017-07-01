
import * as queryString from 'query-string';

export class BaseApi {

    base_url = 'http://api.brewerydb.com/v2';
    api_key = '131a13ca2250177855f454b6dd0ed541';

    request(url, query_params, options) {
        url = this.buildUrl(url, query_params);

        return fetch(url, {mode: 'no-cors', headers: new Headers(
            {"Content-Type": "application/json",
                "Accept":"application/json"}
        )})
            .then(res => res.json())
    }

    buildUrl(url, query_params = {}) {
        query_params = {
            ...query_params,
            key: this.api_key
        };

        return `${this.base_url}${url}?${queryString.stringify(query_params)}`;
    }
}