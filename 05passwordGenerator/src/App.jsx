import { useCallback, useState, useEffect, useRef } from 'react'



function App() {

  // for seting the length we need the hook called useState 
  const [length, setLength] = useState(8);

  // for allowing the number we have two options either take the number or not take the number 
  const[numberAllowed, setNumberAllowed] = useState(false);

  // for character allowed we also create  a hook 
  const[charAllowed, setCharAllowed] = useState(false);

  // for generating the password we also need the uase state hook but we need to create another method called password generator
  const[password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);


  // for generating the password we will use "usecallback" hook from react
  // in the usecallback hook there is two parameters (one is the function and the another one is the dependencies)
  // we will write the dependencies within an array 
  const passwordGenerator = useCallback(() => {

    let pass = "";

    // within the string the data will be there using which we will generate our password 
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // if the numbers are allowed in the password then add any number from 0 to 9 in the string 
    if(numberAllowed) str += "0123456789";

    // if any special character is allowed in the password then add any special character 
    if(charAllowed) str += "!@#$%^&*-_+={}[]~'";

    // now we can generate our password using the for loop based on the length variable or dependency 
    for (let i = 0; i <= length; i++) {
      
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
      
    }
    setPassword(pass);

  } , [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClibboard = useCallback(() => {

    // it will change the state a litlebit whnen we copy the password
    passwordRef.current?.select();

    // it will select till a certain range (the range which is mentioned in the method )
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect hook 
  // in useEffect also there are two parameters 
  // one is function and the second one is the dependensiec
  // dependencies means here that if there will occur any change within these feilds then run the process again and again 
  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
      <div className='w-full max-w-md max-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='className = "flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text" 
            value = {password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref = {passwordRef}
            />

            <button
            onClick={copyPasswordToClibboard}
            className='outline-none bg-blue-700 text-white px-2 py-0.5 shrink-0'>copy</button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input
                 type="range"
                 min = {6}
                 max = {100}
                 value = {length}
                 className='cursor-pointer'
                 onChange = {(e) => {setLength(e.target.value)}}
                  />

                  <label >length: {length} </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev); 
              }}
               />
               <label htmlFor="numberInput"> Numbers </label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev); 
              }}
               />
               <label htmlFor="charInput"> Characters </label>
            </div>   
          </div>
      </div>
    </>
  )
}

export default App
