const cartPrice = $(".cart-price");
const cartItemsCount = $(".cart-items-count");

const calculatePrice = () => {
    const gamesSelected = $(".game-card-selected");

    let totalPrice = gamesSelected.length * 1000;
    let itemsSelected = gamesSelected.length;

    let priceFormatted = `$${totalPrice},00`;
    let itemsFormatted = itemsSelected;

    console.log(itemsSelected)
    if (itemsSelected == 0)
        itemsFormatted = "CARRITO VACÍO"
    else if (itemsSelected <= 1)
        itemsFormatted += " PRODUCTO";
    else
        itemsFormatted += " PRODUCTOS";

    cartPrice.text(priceFormatted);
    cartItemsCount.text(itemsFormatted);
}

// Select card on click
$(".game-card-image").on("click", (e) => {
    $(e.target).toggleClass("game-card-image-selected");
    $(e.target).closest(".game-card").toggleClass("game-card-selected");

    calculatePrice();
});
