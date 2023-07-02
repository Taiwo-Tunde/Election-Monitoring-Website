import "./App.css";
import AnnouncedLG from "./component/AnnouncedLG";
// import AnnouncedPU from "./component/AnnouncedPU";
import { QueryClient, QueryClientProvider } from "react-query";
import { IndividualPU } from "./component/IndividualPU";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AnnouncedPU /> */}
      <AnnouncedLG />
      <IndividualPU />
    </QueryClientProvider>
  );
}

export default App;
