import { createContext, useState } from 'react'
export const UserContext = createContext()
function UserProvider({ children }) {
 const [theme, setTheme] = useState('light')
 const user = {
   name: 'Mallikarjun',
   email: 'mallikarjun@gmail.com',
   role: 'React Intern',
   company: 'ABC Technologies'
 }
 const toggleTheme = () => {
   setTheme(theme === 'light' ? 'dark' : 'light')
 }
 return (
<UserContext.Provider
     value={{
       user,
       theme,
       toggleTheme
     }}
>
     {children}
</UserContext.Provider>
 )
}
export default UserProvider