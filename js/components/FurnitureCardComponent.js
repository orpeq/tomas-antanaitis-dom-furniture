class FurnitureCardComponent{
    constructor(props) {
        this.props = props;

        this.init();
    }

    init = () => {
        const { title, type, price, location: {country, city, street}, owner: {fullname, mobile, address, email}, imgSrc, onDelete} = this.props
        this.htmlElement = document.createElement('article');
        this.htmlElement.className = 'card shadow';
        this.htmlElement.innerHTML = `
        <img src="${imgSrc}" class="card-img-top" / height="300px" style="object-fit: cover"/>
        <div class="card-body"> 
        <h2 class="h5">${title}</h2>
        
        <ul>
        <h6><strong>Tipas:</strong>${type}</h6>
        <li style="list-style:none">
        <h6><strong>Kaina:</strong>${price} EUR</h6>
        </li>

        <li style="list-style:none">
        <h6><strong>Vieta:</strong>  ${street}, ${city}, ${country}</h6>
        </li>

        <li style="list-style:none">
        <h6><strong>Pardavėjas:</strong>  ${fullname}</h6>
        </li>
       
        <li style="list-style:none">
        <h6><strong>Tel. nr.</strong>  ${mobile}</h6>
        </li>

        <li style="list-style:none">
        <h6><strong>El. paštas</strong>  ${email}</h6>
        </li>
        
        <li style="list-style:none">
        <h6><strong>Rajonas</strong>  ${address}</h6>
        </li>

        </ul>
        
        <div class="text-center">
        <button class="btn btn-danger position-absolute top-0 start-0">X</button>
        </div>
        </div>

        `;
        const btn = this.htmlElement.querySelector('.btn');
        btn.addEventListener('click', onDelete);

    }
}