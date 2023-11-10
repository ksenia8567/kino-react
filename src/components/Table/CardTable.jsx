import * as React from 'react';
import "./CardTable.css"
export const CardTable = () => {
    return (
        <div className='card__table'>
            <div className='table__inner'>
                <div className='table__block'>
                    <div className='block__item'>
                        <span>Год:</span>
                        <span className='item__name'>2020</span>
                    </div>
                    <div className='block__item'>
                        <span>Страна:</span>
                        <span className='item__name'>Великобритания, Австралия</span>
                    </div>
                    <div className='block__item'>
                        <span>Слоган:</span>
                        <span className='item__name'>«Подбери ключ к свободе»</span>
                    </div>
                    <div className='block__item'>
                        <span>Режиссер:</span>
                        <span className='item__name'> Фрэнсис Аннан</span>
                    </div>
                    <div className='block__item'>
                        <span>Продюсер:</span>
                        <span className='item__name'> Фрэнсис Аннан, Л.Х. Адамс, Кэрол Гриффитс, ...</span>
                    </div>
                    <div className='block__item'>
                        <span>Оператор:</span>
                        <span className='item__name'>Дэвид Баррон, Марк Блэйни, Гари Хэмилтон, ...</span>
                    </div>
                    <div className='block__item'>
                        <span>Композитор:</span>
                        <span className='item__name'>  Джеффри Холл</span>
                    </div>
                </div>
    
                <div className='table__block'>
                    <div className='block__item'>
                        <span>Художник:</span>
                        <span className='item__name'>Скотт Бёрд, Эрика Брайан, Мариот Керр, ...</span>
                    </div>
                    <div className='block__item'>
                        <span>Монтаж:</span>
                        <span className='item__name'>Ник Фентон</span>
                    </div>
                    <div className='block__item'>
                        <span>Жанр:</span>
                        <span className='item__name'>Триллер, ...</span>
                    </div>
                    <div className='block__item'>
                        <span>Сборы в мире:</span>
                        <span className='item__name'>$12 808</span>
                    </div>
                    <div className='block__item'>
                        <span>Премьера (мир):</span>
                        <span className='item__name'>1 марта 2020</span>
                    </div>
                    <div className='block__item'>
                        <span>Премьера (РФ):</span>
                        <span className='item__name'>14 мая 2020</span>
                    </div>
                    <div className='block__item'>
                        <span>Возраст:</span>
                        <span className='item__name'>16+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};