import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data'



function App() {

  const cards = data.map((item) => {
    return (

      <Card 
        key = {item.key}
        {...item}
      />

    )
  })
  
  console.log(data)

  
  return (
    <>
      <Header />
      <main>
        {cards}
      </main>
    </>
  )
}

export default App
