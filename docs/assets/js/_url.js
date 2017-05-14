import {loadInfo} from './_variables'

export default class Url {
    constructor(host, resource, api, part, q, maxResults, type, ids) {
        this.host = host;
        this.resource = `${resource}?`;
        this.apiKey = `key=${api}`;
        this.part = `part=${part}`;
        this.q = `q=${encodeURIComponent(q)}`;
        this.maxResults = `maxResults=${maxResults}`;
        this.type = `type=${type}`;
        this.ids = `id=${ids}`
    }

    makeSearchUrl() {
        if (!loadInfo.nextPage){
            return this.host + this.resource + '&' + this.apiKey + '&' +
                this.part + '&' + this.q + '&' + this.maxResults + '&' +
                this.type;
        } else {
            return this.host + this.resource + '&' + this.apiKey + '&' +
                this.part + '&' + this.q + '&' + this.maxResults + '&' +
                this.type + '&' + `pageToken=${loadInfo.nextPage}`;
        }

    }

    makeVideosUrl() {
        return this.host + this.resource + '&' + this.apiKey + '&' +
            this.part + '&' + this.ids
    }
}
