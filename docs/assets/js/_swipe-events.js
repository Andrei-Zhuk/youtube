import {pages, container, loadInfo} from './_variables';
import requestSearch from './_request-search';
let startingX, mouseIsDown;

export function handleMouseDown (e) {
	mouseIsDown = true;
	startingX = e.clientX;
};

export function handleMouseMove(e) {
	if (mouseIsDown){
        let change, diff;
		change = startingX - e.clientX;
		if(change < 0 && pages.current !== 0) {
            container.style.left = `${document.body.offsetWidth * (-pages.current) - change}px`;
		} else if (change > 0 && pages.current !== pages.list.length - 1) {
            container.style.left = `${document.body.offsetWidth * (-pages.current) - change}px`;
        }
		e.preventDefault()
	}

};

export function handleMouseUp(e) {
	mouseIsDown = false;
    let change, border;
	change = startingX - e.clientX;
	border = 200;
	if (Math.abs(change) < border) {
		container.style.left = `${document.body.offsetWidth * (-pages.current)}px`;
	} else {
		if (change > 0 && pages.current !== pages.list.length - 1) {
			pages.itemsList[pages.current].classList.remove('pages-bar__item-active')
            pages.current++;
			pages.itemsList[pages.current].classList.add('pages-bar__item-active');
            container.style.left = `${document.body.offsetWidth * (-pages.current)}px`;
        } else if (change < 0 && pages.current !== 0){
			pages.itemsList[pages.current].classList.remove('pages-bar__item-active')
            pages.current--;
			pages.itemsList[pages.current].classList.add('pages-bar__item-active');
            container.style.left = `${document.body.offsetWidth * (-pages.current)}px`;
        }
		if (pages.list.length > 5 && pages.current >= 2 && pages.current <= pages.list.length - 3) {
			pages.bar.style.left = `${-25 * (pages.current - 2)}px`;
		}
		if (pages.current >= pages.list.length - 4 && !loadInfo.requestIsGoing) {
			requestSearch(loadInfo.lastQ)
		}
	}
}
