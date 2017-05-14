// import Url from './_url';
import SearchBar from './_search-bar';
import {handleMouseDown, handleMouseMove, handleMouseUp} from './_swipe-events';
import {container, results, containerPaging, pages} from './_variables';
import update from './_update';

let search = new SearchBar();
search.create();

container.className = 'container';
container.onmousedown = handleMouseDown;
container.onmousemove = handleMouseMove;
container.onmouseup = handleMouseUp;
container.style.transition = 'all .3s';
document.body.appendChild(container);

containerPaging.className = 'container-paging';
containerPaging.style.margin = '0 auto';
containerPaging.style.overflowX = 'hidden';
document.body.appendChild(containerPaging);
containerPaging.appendChild(pages.bar);

window.onresize = function (e) {
    if (!!results.length) {
        update(results)
    }
    e.preventDefault()
}

// let container = document.createElement('div');
// container.className = 'container';
// container.onmousedown = handleMouseDown;
// container.onmousemove = handleMouseMove;
// container.onmouseup = handleMouseUp;
// document.body.appendChild(container);



// var xhr = new XHR();
// var url = new Url(host, searchResource, apiKey, part, q, maxResults, type)
// xhr.open('GET', url.makeSearchUrl());
//
// xhr.onload = function() {
//   console.log( JSON.parse(xhr.responseText));
// }
//
// xhr.send();
//
// var xhr2 = new XHR();
// xhr2.open('GET', 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=r-BExc9SS68&part=snippet,statistics')
// xhr2.onload = function() {
//   console.log( JSON.parse(xhr2.responseText));
// }
// xhr2.send();
