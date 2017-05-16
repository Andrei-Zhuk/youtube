// import Url from './_url';
import SearchBar from './_search-bar';
import {handleMouseDown, handleMouseMove, handleMouseUp} from './_swipe-events';
import {container, results, containerPaging, pages} from './_variables';
import update from './_update';

let search = new SearchBar();
search.create();

let containerMobile = document.createElement('div');
containerMobile.style.width = '100%';
containerMobile.style.overflowX = 'hidden';

container.className = 'container';
// container.onmousedown = handleMouseDown;
// container.onmousemove = handleMouseMove;
// container.onmouseup = handleMouseUp;
// container.ontouchstart = function (e) {
//     console.log(e);
// };
// container.ontouchmove = function (e) {
//     console.dir(e);
// };;
// container.ontouchend = function (e) {
//     console.dir(e);
// };;
container.addEventListener('mousedown', handleMouseDown)
container.addEventListener('mousemove', handleMouseMove)
container.addEventListener('mouseup', handleMouseUp)
container.addEventListener('touchstart', handleMouseDown)
container.addEventListener('touchmove', handleMouseMove)
container.addEventListener('touchend', handleMouseUp)
container.style.transition = 'all .3s';
containerMobile.appendChild(container);
document.body.appendChild(containerMobile)

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
