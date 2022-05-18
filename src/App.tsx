import Chart from "./components/Chart/Chart";
import EuroPriceBox from "./components/EuroPriceBox/EuroPriceBox";
import TradeForm from "./components/TradeForm/TradeForm";
import TransactionList from "./components/TransactionList/TransactionList";


function App() {

  return (
    <main className="w-full bg-[#131722] min-h-[100vh]">

      <section className="w-full flex flex-col items-center lg:items-stretch lg:flex-row">

        <Chart />
        <TradeForm />

      </section>


      <section className="w-full flex">
        <TransactionList />
      </section>

    </main>
  )
}

export default App
