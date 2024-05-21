import { createContext,useContext } from "react";

// creating context with some another type 
export const ThemeContext = createContext({
    // we can give a default value here 
    // means when ever the context is called by the user there would be  default value 
    // here a variable called themeMode variable is initialised along with two methods
    themeMode: "Light",
    darkTheme: ()=> {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// create a custom hook 
export default function useTheme(){
    return useContext(ThemeContext);
}
