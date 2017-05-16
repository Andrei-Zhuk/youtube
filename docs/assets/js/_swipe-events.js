import {pages, container, loadInfo} from './_variables';
import requestSearch from './_request-search';
let startingX, mouseIsDown, isTouched;

export function handleMouseDown (e) {
	if (e.touches){
		isTouched = true;
		startingX = e.touches[0].clientX;
	} else {
		mouseIsDown = true;
		startingX = e.clientX;
	}

};

export function handleMouseMove(e) {
	if (mouseIsDown || isTouched){
        let change, diff;
		if (mouseIsDown){
			change = startingX - e.clientX;
		} else {
			change = startingX - e.touches[0].clientX;
		}

		if(change < 0 && pages.current !== 0) {
            container.style.left = `${document.body.offsetWidth * (-pages.current) - change}px`;
		} else if (change > 0 && pages.current !== pages.list.length - 1) {
            container.style.left = `${document.body.offsetWidth * (-pages.current) - change}px`;
        }
		e.preventDefault()
	}

};

export function handleMouseUp(e) {
	let change, border;
	if (mouseIsDown){
		change = startingX - e.clientX;
	} else {
		change = startingX - e.changedTouches[0].clientX;
	}
	mouseIsDown = false;
	isTouched = false;
	border = 200 > screen.width / 3 ? screen.width / 3 : 200;
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
