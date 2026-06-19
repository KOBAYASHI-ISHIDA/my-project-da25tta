function createItemV2(obj) {
    const list = document.getElementById("productlist");

    list.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img
                    src="${obj.image}"
                    class="card-img-top"
                    alt="${obj.name}"
                >

                <div class="card-body">
                    <h5 class="card-title">${obj.name}</h5>
                    <h6 class="text-danger">${obj.price}</h6>

                    <p class="card-text">
                        ${obj.description}
                    </p>

                    <a href="${obj.link}?masp=${obj.id}"
                       class="btn btn-primary">
                        Xem chi tiết
                    </a>
                </div>
            </div>
        </div>
    `;
}

function loadAllProducts(array) {
    document.getElementById("productlist").innerHTML = "";

    array.forEach(item => {
        createItemV2(item);
    });
}