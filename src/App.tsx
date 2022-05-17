import Chart from "./components/Chart/Chart";
import TradeForm from "./components/TradeForm/TradeForm";


function App() {

  return (
    <main className="w-full bg-[#131722] min-h-[100vh]">

      <section className="w-full flex">

        <Chart />
        <TradeForm />

      </section>


    </main>
  )
}

export default App
