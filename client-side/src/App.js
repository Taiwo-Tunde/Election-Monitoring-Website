import "./App.css";
import AnnouncedLG from "./component/AnnouncedLG";
// import AnnouncedPU from "./component/AnnouncedPU";
import { QueryClient, QueryClientProvider } from "react-query";
import { IndividualPU } from "./component/IndividualPU";
import NavBar from "./component/NavBar";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      {/* <AnnouncedPU /> */}
      <AnnouncedLG />
      <IndividualPU />
    </QueryClientProvider>
  );
}

export default App;
