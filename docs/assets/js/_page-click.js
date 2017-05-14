import {pages, container, loadInfo} from './_variables';

export default function handleClick(number) {
    pages.itemsList[pages.current].classList.remove('pages-bar__item-active');
    pages.current = number;
    pages.itemsList[pages.current].classList.add('pages-bar__item-active');
    container.style.left = `${document.body.offsetWidth * (-pages.current)}px`;
    if (pages.list.length > 5 && pages.current >= 2 && pages.current <= pages.list.length - 3) {
        pages.bar.style.left = `${-25 * (pages.current - 2)}px`;
    }
    if (pages.current >= pages.list.length - 4 && !loadInfo.requestIsGoing) {
        requestSearch(loadInfo.lastQ)
    }
}
