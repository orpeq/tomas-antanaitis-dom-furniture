class FurnitureGridComponent {
    constructor() {
        this.state = {
            loading: false,
            furniture: []
        }
        this.init();
    }

    fetchFurniture = () => API.fetchFurniture(this.saveFurniture, alert);

    saveFurniture = (furniture) => {
        this.state.furniture = furniture;
        this.state.loading = false;

        this.render();
    }

    init = () => {
        this.state.loading = true;
        this.fetchFurniture();
        this.htmlElement = document.createElement('div');
        this.render();
    }

    render = () => {
        const {loading, furniture} = this.state;
        if(loading) {
            this.htmlElement.innerHTML = 'Siunčiama...';
        } else {
            this.htmlElement.innerHTML = 'Parsiųsta!';
        }
    }
}