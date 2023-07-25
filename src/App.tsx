import "./App.css";
import { Card } from "./components/card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

export default function App() {

  
  // const [adviceData, setAdviceData] = useState<AdviceData>();
  // const [isLoading, setIsLoading] = useState(false);

  // async function fetchRandomAdvice() {
  //   // Função assincrona
  //   if (isLoading) return;

  //   setIsLoading(true);

  //   const response = await fetch("https://api.adviceslip.com/advice"); // Fetch é uma função do navegador para fazer a requisição do API
  //   const data = (await response.json()) as AdviceData; // await espera a promessa ser cumprida, neste caso ele espera a função terminar de executar
  //   setAdviceData(data);
  //   setIsLoading(false);
  // }

  // //UseEffect funciona como ngOnInit , ngDoCheck ou ngDestroy.
  // useEffect(() => {
  //   fetchRandomAdvice();
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>

      <Card/>
 
    </QueryClientProvider>
  );
}
