

const initialState = {
    product: null,
    loading: false,
    error: null,
  };
  
  const cartState ={
 cartProducts:[],
    error:null,
    loading:false
  }

const storedData = {
  data :null
}  
 
  export default function SingleproductReducer(state = initialState, action) {
    switch (action.type) {
      case "PARTICULAR_PRODUCT_SUCCESS":
        return { ...state, product:action.payload, loading: false, error: null };
  
      case "PARTICULAR_PRODUCT_LOADING":
        return { ...state, loading: true, error: null };
  
      case "PARTICULAR_PRODUCT_FAILURE":
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  }
  

  export function CartReducer(state = cartState, action) {
    switch (action.type) {
      case "PARTICULAR_CARTPRODUCT_SUCCESS":
        console.log("PARTICULAR_CARTPRODUCT_SUCCESS88888888888888888888888", state);
    
   
        const isProductAlreadyInCart = state.cartProducts.some(product => product.id === action.payload.id);
    
    
        if (!isProductAlreadyInCart) {
          const updated_data = [...state.cartProducts, action.payload];
          return {
            ...state,
            cartProducts: updated_data,
            loading: false,
            error: null,
          };
        }else{
        return state;
    
        }
    
    
       
      case "PARTICULAR_CARTPRODUCT_LOADING":
        return { ...state, loading: true, error: null };
  
      case "PARTICULAR_CARTPRODUCT_FAILURE":
        return { ...state, loading: false, error: action.payload };
        case 'REMOVE_FROM_CART':
          return {
            ...state,
            cartProducts: state.cartProducts.filter(item => item.id !== action.payload.id)
          };
      default:
        return state;
    }
  }

  