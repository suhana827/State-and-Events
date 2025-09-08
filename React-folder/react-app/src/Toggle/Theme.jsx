import React,{useReducer} from "react";


const initialState = {theme : "light"};

function themeReducer (state, action) {
    switch (action.type) {
        case "TOGGLE":
            return {theme: state.theme === "light" ? "dark": "light"};
            default:
                return state;
    }
}

function ThemeToggle() {
    const [state,dispatch] = useReducer(themeReducer,initialState);

    return (
        <div
        style={{
            backgroundColor: state.theme === "light" ? "white" : "black",
            color : state.theme === "light" ? "black" : "white",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}
        
        >
        <h1>{state.theme.toUpperCase()} MODE</h1>
        <button onClick={()=> dispatch({type:"TOGGLE"})}>
            Toggle Theme
        </button>

        </div>
    );
}

export default ThemeToggle;