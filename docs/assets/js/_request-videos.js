import Url from './_url';
import {host, videosResource, apiKey, partVideos, maxResults, type} from './_variables';
import detailVideos from './_detail-videos'

export default function requestVideos(ids) {
    let xhr = new XMLHttpRequest();
    let url = new Url(host, videosResource, apiKey, partVideos, '', maxResults, type, ids)
    xhr.open('GET', url.makeVideosUrl());
    xhr.onload = function () {
        detailVideos(JSON.parse(xhr.responseText));
    }
    xhr.onload = xhr.onload.bind(this)
    xhr.send();
}
