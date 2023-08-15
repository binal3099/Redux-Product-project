export const ProductCart = (data)=>{
    return{
        type : "AddToCart",
        payload : data
    }
}

export const Removeproduct = (id)=>{
    return{
        type : "RemovePro",
        payload : id
    }
}