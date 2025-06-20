export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    token: null,
  }
};

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
      
    case 'set_message':
      return {
        ...store, 
        message: action.payload
      }

    case 'add_token':
      return {
        ...store, 
        token: action.payload
      }

      case 'set_token':
        return {
        ...store,
        message: action.payload
      };

        case 'remove_token':
          sessionStorage.removeItem("token");
          return {
            ...store, 
            token: null
          }

    default:
      throw Error('Unknown action.');
  }    
}
