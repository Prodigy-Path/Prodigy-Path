import Footer from "./src/Footer";
import Main from "./src/Main";
import HeaderComponent from "./src/Header";
import { AppShell } from "@mantine/core";

const App = () => {
  return (
    <AppShell
      header={<HeaderComponent/>}
    >
        <Main />
    </AppShell>
  )
}
export default App;