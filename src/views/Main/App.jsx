import { useEffect, useState } from 'react'
import './App.css'
import { Header } from '../../components/Header/Header'
import { Categories } from '../../components/Categories/Categories'
import { Card } from '../../components/Card/Card'
import { Tralers } from '../../components/Tralers/Tralers'
import { Footer } from '../../components/Footer/Footer'

function App() {
    const [datad, setData] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then((data) => {
        setData(data)
      })
    }, [])

  return (
    <>
        <Header />
        <Categories />
        <div className='container'>
          <div className="cards__inner">
            {datad?.map((callback) => {
                return (
                  <Card
                    id={callback.id}
                    name={callback.title}
                    image={callback.image}
                    categories={callback.categories}
                    rating={callback.rating}
                  />
                )
            })}
          </div>
          <div className='btn_new'>
            <button>Все новинки</button>
          </div>
          <Tralers />
          <Footer />
        </div>
    </>
  )
}

export default App
