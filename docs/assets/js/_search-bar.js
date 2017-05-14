import requestSearch from './_request-search';
import {results, loadInfo} from './_variables';

export default class SearchBar {
    constructor() {
        this.form = document.createElement('form');
        this.form.className = "search-form";


        this.input = document.createElement('input');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('name', 'search');
        this.input.className = "search-form__input";
        this.btn = document.createElement('input');
        this.btn.setAttribute('type', 'image');
        this.btn.setAttribute('src', './../../assets/search.png');
        this.btn.className = 'search-form__btn'
    }

    create() {
        document.body.appendChild(this.form);
        this.form.appendChild(this.input);
        this.form.appendChild(this.btn);
        this.form.onsubmit = function () {
            if (loadInfo.requestIsGoing) {
                return false
            } else {
                results.forEach(res => res.deleteItem())
                results.splice(0, results.length);
                requestSearch(this.input.value);
                return false;
            }
        };
        this.form.onsubmit = this.form.onsubmit.bind(this)
    }
}
