function createItemV2(obj) {
    const list = document.getElementById("productlist");

    list.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img class="card-img-top" src="${obj.image}" alt="${obj.name}">
                
                <div class="card-body text-center">
                    <h4 class="card-title text-danger">${obj.name}</h4>
                    <h5>${obj.price}</h5>
                    <p style="text-align:justify;">
                        ${obj.description}
                    </p>
                    <a href="${obj.linkProduct}" class="btn btn-info">
                        Xem chi tiết
                    </a>
                </div>
            </div>
        </div>
    `;
}

function loadAllProducts(array) {
    array.forEach(item => createItemV2(item));
}