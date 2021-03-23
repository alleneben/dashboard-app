import React, { createContext, useContext } from "react";


const DataStoreContext = createContext();

// const initialState = {
//     loading: true
// }

// const reducer = (state,action) => {
//     switch(action.type){
//         case 'loading':
//             return {
//                 text: "app is loding"
//             }
//         case 'pre-mest':
//             return {
//                 fullstack: true
//             }
//         default:
//             return "Deafult"
//     }
// }

const DataStoreProvider = (props) => {
    
    return (
        <DataStoreContext.Provider value={{name:"helloooooooo"}}>
            { props.children }
        </DataStoreContext.Provider>
    )
}

const useContextStore = () => useContext(DataStoreContext)

export  {
    DataStoreProvider,
    useContextStore
}
