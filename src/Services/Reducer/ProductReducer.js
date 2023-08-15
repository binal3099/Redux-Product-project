const initialstate = {
    carts : [],
}

export const Product_reducer = (state = initialstate, action)=>{

    switch(action.type){
        case "AddToCart" :{
            return {
                ...state,
                carts : [...state.carts, action.payload]
            }
        }

        case "RemovePro" :{

            const Re_cart = state.carts
            const Rem_cart = Re_cart.filter((d)=>{
                return(
                    d.id != action.payload
                )
            })

            return {
                ...state,
                carts : Rem_cart
            }
        }
        default :
            return state
    }
}