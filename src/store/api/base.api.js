import * as queryString from 'query-string';

export class BaseApi {

    base_url = 'https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2';
    base_options = {
        method: 'GET',
        mode: 'cors'
    };

    api_key = '131a13ca2250177855f454b6dd0ed541';


    request(url, query_params, options) {
        url = this.buildUrl(url, query_params);
        options = {
            ...this.base_options,
            ...options
        };

        return fetch(url, options).then(res => res.json());
    }

    buildUrl(url, query_params = {}) {
        query_params = {
            ...query_params,
            key: this.api_key,
            format: 'json'
        };

        return `${this.base_url}${url}?${queryString.stringify(query_params)}`;
    }
}