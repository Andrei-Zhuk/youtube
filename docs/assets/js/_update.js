import {pages, container, containerPaging} from './_variables';
import handleClick from './_page-click';

export default function update(results) {
    let widthScreen, margin, widthItem, i, itemNumber, func;
    widthScreen = document.body.offsetWidth;
    if (widthScreen >= 1200) {
        margin = 30;
        widthItem = (widthScreen - 8 * margin) / 4;

        if (pages.items === 3) {
            itemNumber = pages.current * pages.items + 1;
            pages.itemsList[pages.current].classList.remove('pages-bar__item-active')
            pages.current = Math.ceil(itemNumber / 4) - 1;
            pages.itemsList[pages.current].classList.add('pages-bar__item-active');
            if (pages.list.length > 5 && pages.current >= 2 && pages.current <= pages.list.length - 3) {
    			pages.bar.style.left = `${-25 * (pages.current - 2)}px`;
    		}
        }
        pages.items = 4;
        container.style.left = `${widthScreen * (-pages.current)}px`;
        pages.list.splice(0, pages.list.length);

        for(i = 1; i <= Math.ceil(results.length / 4); i++) {
            pages.list.push(i)
        }
        container.style.width = `${widthScreen * pages.list.length}px`;

        for(i = 0; i < results.length; i++){
            results[i].updateWidth(widthItem);
            results[i].updateMargin(margin)
        }
    } else if (widthScreen >= 992) {
        margin = 40;
        widthItem = (widthScreen - 6 * margin) / 3;

        if (pages.items === 2 || pages.items === 4) {
            itemNumber = pages.current * pages.items + 1;
            pages.itemsList[pages.current].classList.remove('pages-bar__item-active');
            pages.current = Math.ceil(itemNumber / 3) - 1;
            pages.itemsList[pages.current].classList.add('pages-bar__item-active');
            if (pages.list.length > 5 && pages.current >= 2 && pages.current <= pages.list.length - 3) {
    			pages.bar.style.left = `${-25 * (pages.current - 2)}px`;
    		}
        }
        pages.items = 3;
        container.style.left = `${widthScreen * (-pages.current)}px`;

        pages.list.splice(0, pages.list.length);
        for(i = 1; i <= Math.ceil(results.length / 3); i++) {
            pages.list.push(i)
        }
        container.style.width = `${widthScreen * pages.list.length}px`;

        for(i = 0; i < results.length; i++){
            results[i].updateWidth(widthItem)
            results[i].updateMargin(margin)
        }
    } else if (widthScreen >= 700) {
        margin = 50;
        widthItem = (widthScreen - 4 * margin) / 2;

        if (pages.items === 1 || pages.items === 3) {
            itemNumber = pages.current * pages.items + 1;
            pages.itemsList[pages.current].classList.remove('pages-bar__item-active');
            pages.current = Math.ceil(itemNumber / 2) - 1;
            pages.itemsList[pages.current].classList.add('pages-bar__item-active');
            if (pages.list.length > 5 && pages.current >= 2 && pages.current <= pages.list.length - 3) {
    			pages.bar.style.left = `${-25 * (pages.current - 2)}px`;
    		}
        }
        pages.items = 2;
        container.style.left = `${widthScreen * (-pages.current)}px`;

        pages.list.splice(0, pages.list.length);
        for(i = 1; i <= Math.ceil(results.length / 2); i++) {
            pages.list.push(i)
        }
        container.style.width = `${widthScreen * pages.list.length}px`;

        for(i = 0; i < results.length; i++){
            results[i].updateWidth(widthItem)
            results[i].updateMargin(margin)
        }
    } else {
        margin = 50;
        widthItem = widthScreen - 2 * margin;
        if (widthItem > 300) {
            widthItem = 300;
            margin = (widthScreen - widthItem) / 2
        }

        if (pages.items === 2) {
            itemNumber = pages.current * pages.items + 1;
            pages.itemsList[pages.current].classList.add('pages-bar__item-active');
            pages.current = itemNumber - 1;
            pages.itemsList[pages.current].classList.add('pages-bar__item-active');
            if (pages.list.length > 5 && pages.current >= 2 && pages.current <= pages.list.length - 3) {
    			pages.bar.style.left = `${-25 * (pages.current - 2)}px`;
    		}
        }
        pages.items = 1;
        container.style.left = `${widthScreen * (-pages.current)}px`;

        pages.list.splice(0, pages.list.length);
        for(i = 1; i <= results.length; i++) {
            pages.list.push(i)
        }
        container.style.width = `${widthScreen * pages.list.length}px`;

        for(i = 0; i < results.length; i++){
            results[i].updateWidth(widthItem)
            results[i].updateMargin(margin)
        }
    }
    if (pages.list.length > 5) {
        containerPaging.style.width = `${5 * 25}px`;
    } else {
        containerPaging.style.width = `${pages.list.length * 25}px`;
    }

    if (pages.itemsList.length !== 0) {
        for (i = 0; i < pages.itemsList.length; i++) {
            pages.bar.removeChild(pages.itemsList[i])
        };
        pages.itemsList.splice(0, pages.itemsList.length)
    }

    for (i = 0; i < pages.list.length; i++) {
        pages.itemsList[i] = document.createElement('li');
        pages.itemsList[i].innerText = `${pages.list[i]}`;
        pages.itemsList[i].classList.add('pages-bar__item');
        func = function() {
            var number = i;
            return function(){
                handleClick(number)
            }
        }
        pages.itemsList[i].onclick = func();
        pages.bar.appendChild(pages.itemsList[i])
    }
    pages.itemsList[pages.current].classList.add('pages-bar__item-active');
    pages.bar.style.width = `${pages.list.length * 25}px`;
}
