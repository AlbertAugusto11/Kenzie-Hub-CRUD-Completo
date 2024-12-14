import { RoutesMain } from "./Routes/RoutesMain";
import { UserProvider } from "./Providers/UserContext";
import { TechProvider } from "./Providers/TechContext";

function App() {

  return (
    <>
      <UserProvider>
        <TechProvider>
          <RoutesMain/>
        </TechProvider>
      </UserProvider>
    </>
  )
}
export default App
