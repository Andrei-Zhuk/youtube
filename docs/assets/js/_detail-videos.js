import {results, loadInfo} from './_variables';
import update from './_update';

export default function detailVideos(result) {
    let i;
    for (i = results.length - 15; i < results.length; i++) {
        results[i].setViewCount(result.items[i % 15].statistics.viewCount)
        results[i].postItem()
    }
    update(results);
    loadInfo.requestIsGoing = false
}
