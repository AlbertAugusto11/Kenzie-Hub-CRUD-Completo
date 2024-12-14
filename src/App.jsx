import { RoutesMain } from "./Routes/RoutesMain";
import { UserProvider } from "./Providers/UserProvider";

function App() {
  

  return (
    <>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  )
}

export default App
