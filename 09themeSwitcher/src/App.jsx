import { useEffect, useState } from 'react'

import './App.css'
import Card from './Components/Card'
import ThemeButton from './Components/ThemeButton'
import { ThemeProvider } from './contexts/theme'

function App() {
 

  // here we have the access of the method lighttheme and darktheme but the methods are not decleared 
  //in these kind of cases we can simpley create the method 

  // by default the value of the mode is st as light 
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme 
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
      
      
    <ThemeProvider values={{themeMode, lightTheme, darkTheme}}>

    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton/>
                
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
        </div>
    </div>
    </ThemeProvider>
    </>
  )
}

export default App
