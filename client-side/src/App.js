import "./App.css";
import AnnouncedPU from "./component/AnnouncedPU";
import DynamicTable from "./component/DynamicTable";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DynamicTable />
      <AnnouncedPU />
    </QueryClientProvider>
  );
}

export default App;
