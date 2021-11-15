class FurnitureGridComponent {
    constructor() {
        this.state = {
            loading: false,
            furniture: []
        }
        this.init();
    }

    fetchFurniture = () => 
    setTimeout(() => {
    API.fetchFurniture(this.saveFurniture, alert);
    }, 1000);

    saveFurniture = (furniture) => {
        this.state.furniture = furniture;
        this.state.loading = false;

        this.render();
    }

    init = () => {
        this.state.loading = true;
        this.fetchFurniture();
        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'row g-3';

        this.render();
    }

    wrapInColumn = (element) => {
        const column = document.createElement('div');
        column.className = 'col 12 col-sm-6 col-lg-4 col-xl-3';
        column.appendChild(element);
        return column;
    }

    render = () => {
        const {loading, furniture} = this.state;
        if(loading) {
            this.htmlElement.innerHTML = `<div class="text-center"><img src="../assets/loading.gif" /></div>`
        } else if(furniture.length > 0){
            this.htmlElement.innerHTML = '';
            const furnitureElements = furniture
            .map(x => new FurnitureCardComponent(x))
            .map(x => x.htmlElement)
            .map(this.wrapInColumn)
            this.htmlElement.append(...furnitureElements);
        }else {
            this.htmlElement.innerHTML = `<h2>šiuo metu jokių baldų nėra</h2>`
        }
    }
}