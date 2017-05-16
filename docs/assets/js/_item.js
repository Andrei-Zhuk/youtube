export default class Item {
    constructor(title, link, preview, description, author, date) {
        this.item = document.createElement('div');
        this.item.className = 'item';

        this.title = document.createElement('a');
        this.title.href = link;
        this.title.innerText = title;
        this.title.className = 'item__title';

        this.preview = document.createElement('img');
        this.preview.src = preview;
        this.preview.className = 'item__preview';

        this.descriptionBox = document.createElement('div');
        this.descriptionBox.className = 'item__descriptionBox';

        this.description = document.createElement('p');
        this.description.innerText = description;
        this.description.className = 'item__descriptionBox__description';

        this.info = document.createElement('div');
        this.info.className = 'item__info';

        this.author = document.createElement('p');
        this.author.innerHTML = `<i class="fa fa-user" aria-hidden="true"></i>${author}`
        this.author.className = 'item__info__author'

        this.date = document.createElement('p')
        this.date.innerHTML = `<i class="fa fa-calendar" aria-hidden="true"></i>${date}`;
        this.date.className = 'item__info__date'
    }

    setViewCount(viewCount) {
        this.viewCount = document.createElement('p');
        this.viewCount.innerHTML = `<i class="fa fa-eye" aria-hidden="true"></i>${viewCount}`;
        this.viewCount.className = 'item__info__viewCount'
    }

    postItem() {
        let container = document.querySelector('.container')
        this.item.appendChild(this.title)
        this.item.appendChild(this.preview)
        this.info.appendChild(this.author)
        this.info.appendChild(this.date)
        this.info.appendChild(this.viewCount)
        this.item.appendChild(this.info)
        this.descriptionBox.appendChild(this.description)
        this.item.appendChild(this.descriptionBox)
        container.appendChild(this.item)
    }

    deleteItem() {
        let container = document.querySelector('.container')
        container.removeChild(this.item)
    }

    updateWidth(width) {
        this.item.style.width = `${width}px`;
    }

    updateMargin(margin) {
        this.item.style.margin = `0 ${margin}px`;
    }
}
