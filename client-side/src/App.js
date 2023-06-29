import "./App.css";
import AnnouncedPU from "./component/AnnouncedPU";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnnouncedPU />
    </QueryClientProvider>
  );
}

export default App;
