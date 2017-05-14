import detailSearch from './_detail-search';
import Url from './_url';
import {host, searchResource, apiKey, partSearch, maxResults, type, loadInfo} from './_variables';

export default function requestSearch(q){
    loadInfo.requestIsGoing = true;
    loadInfo.lastQ = q;
    let xhr = new XMLHttpRequest();
    let url = new Url(host, searchResource, apiKey, partSearch, q, maxResults, type)
    xhr.open('GET', url.makeSearchUrl());
    xhr.onload = function () {
        detailSearch(JSON.parse(xhr.responseText));
    }
    xhr.onload = xhr.onload.bind(this)
    xhr.send();
}
