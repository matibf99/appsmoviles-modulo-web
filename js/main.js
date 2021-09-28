const cartPrice = $(".cart-price");
const cartItemsCount = $(".cart-items-count");

const calculatePrice = () => {
    const gamesSelected = $(".game-card-selected");

    let totalPrice = gamesSelected.length * 1000;
    let itemsSelected = gamesSelected.length;

    let priceFormatted = `$${totalPrice},00`;
    let itemsFormatted = itemsSelected;

    if (itemsSelected == 0)
        itemsFormatted = "CARRITO VACÍO"
    else if (itemsSelected <= 1)
        itemsFormatted += " PRODUCTO";
    else
        itemsFormatted += " PRODUCTOS";

    cartPrice.text(priceFormatted);
    cartItemsCount.text(itemsFormatted);
}

// Load games
$.ajax({
    url: "https://api.json-generator.com/templates/R2MxLIGJNpE8/data",
    headers: { "Authorization": "Bearer rshp2b2b8ow36anxnh31ficqfs7iiyal8xy12iuo" },
    type: "GET",
    dataType: "json",
    success: (games) => {
        games.forEach(element => {
            let e =
                `<article class="game-card">
                    <img src=${element.imagen} alt="" class="game-card-image"/>
                    <div class="game-card-text-container">
                        <p class="game-card-title">${element.nombre}</p>
                        <p class="game-card-subtitle">${element.descripcion}</p>
                    </div>
                    <p class="game-card-price">$${element.precio.toFixed(2).replaceAll(".", ",")}</p>
                </article>`;

            // Generate search string to localize the correct section
            const sectionId = element.categoria.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replaceAll(" ", "-");
            const section = $(`section#${sectionId}`).first();

            // Add game to container
            section.find(".categoria-content").append(e);
        });

        // Add click listener on cards
        $(".game-card-image").on("click", (e) => {
            $(e.target).toggleClass("game-card-image-selected");
            $(e.target).closest(".game-card").toggleClass("game-card-selected");

            calculatePrice();
        });
    },
    error: (xhr, status) => {
        console.log("Se ha producido un error al intentar cargar el contenido");
    }
})