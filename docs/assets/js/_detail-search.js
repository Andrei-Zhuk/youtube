import {results, loadInfo} from './_variables'
import requestVideos from './_request-videos';
import Item from './_item'

export default function detailSearch(result) {
    let i, item, ids, title, link, preview, description, author, date, day, month, year;
    ids = [];
    loadInfo.nextPage = result.nextPageToken;
    for (i = 0; i < result.items.length; i++) {
        title = result.items[i].snippet.title;
        link = `https://youtube.com/watch?v=${result.items[i].id.videoId}`;
        preview = result.items[i].snippet.thumbnails.high.url;
        description = result.items[i].snippet.description;
        author = result.items[i].snippet.channelTitle;
        date = new Date(Date.parse(result.items[i].snippet.publishedAt));
        day = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate();
        month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        year = date.getFullYear();
        date = `${day}-${month}-${year}`

        results.push(new Item(title, link, preview, description, author, date))
        ids.push(result.items[i].id.videoId)
    }
    requestVideos(ids.join(','))
}
