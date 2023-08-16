const initialProduct = {
    products: [
        {
            id: 1,
            title: "Product #1"
        },
        {
            id: 2,
            title: "Product #2"
        }
    ],
    cart: [
        {
            id: 1,
            title: "Product #1",
            quantity: 1,
        }
    ],
    activeProduct: {
        id: 1,
        title: "Product #1",
    },
}


const productReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export { initialProduct }
export default productReducer;