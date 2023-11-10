import React, { useEffect, useState } from 'react';
import './Card.css'
import { Header } from '../../components/Header/Header'
import { CardData } from '../../components/Card/CardData';
import { CardTable } from '../../components/Table/CardTable';
import { Quote } from '../../components/Quote/Quote';
import { useParams } from 'react-router-dom';

function CardView() {
  const params = useParams()
  const [card, setCard] = useState({}) 

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${params.id}`)
      .then(response => response.json())
      .then((data) => {
        setCard(data)
      })
  }, {})
  return (
    <>
      <Header />
      <div className="card__container">
        <div className="card__inner">
          <img src={card.image} alt="" />
          <CardData 
            name={card.title}
            text={card.text}
          />
        </div>
        <CardTable />
        <h1 style={{
          marginTop: "30px",
          fontSize: "40px",
          color: "#fff"
        }}>Цитаты из фильма</h1>
        <Quote
          text="Принимая во внимание показатели успешности, высококачественный прототип будущего проекта не оставляет шанса для своевременного выполнения сверхзадачи. Равным образом, дальнейшее развитие различных форм деятельности играет определяющее значение для благоприятных перспектив!"
          name="Слова отца"
        />
        <Quote
          text="Мы вынуждены отталкиваться от того, что постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает актуальность форм воздействия. Приятно, граждане, наблюдать, как непосредственные участники технического прогресса представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть функционально разнесены на независимые элементы. Господа, понимание сути ресурсосберегающих технологий создаёт предпосылки для приоритизации разума над эмоциями. Приятно, граждане, наблюдать, как некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме."
          name="Слова странного человека"
        />
      </div>

    </>
  )
}

export default CardView
