export let XHR, host, apiKey, searchResource, videosResource, partSearch, partVideos, maxResults, type, results,
    pages, container, containerPaging, loadInfo;

XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

host = 'https://www.googleapis.com/youtube/v3/';
apiKey = 'AIzaSyDH4jGoxH8VnlXA92DI2ZSdAXNIoq8Sc8U';
searchResource = 'search';
videosResource = 'videos';
partSearch = 'snippet';
partVideos = 'snippet,statistics';
maxResults = '15';
type = 'video';
results = [];

pages = {
    list: [],
    current: 0,
    items: 0,
    bar: document.createElement('ul'),
    itemsList: []
}

loadInfo = {
    lastQ:'',
    nextPage:'',
    requestIsGoing: false
}
pages.bar.className = 'pages-bar';

container = document.createElement('div');
containerPaging = document.createElement('div')
