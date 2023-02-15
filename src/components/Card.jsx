
export const Card = () => {
    return( <li className="card__item p-30">
            <div className="card d-flex flex-column">
              <div className="card__favorite">
                <img src="/img/unlikedButton.svg" alt="Add to favorite"/>
              </div>
              <img className="card__img mb-15" src="/img/SneakersImg.jpg" alt="SneakersImg" width={133} height={122} />
              <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="cardOrder d-flex justify-between align-center">
                <div className="d-flex flex-column align-start">
                  <span>Цена:</span>
                  <b>12 678 грн</b>
                </div>
                <button className="card__button-add" type="button"><img src="/img/addButton.svg" alt="add" width={32} height={32} /></button>
              </div>
            </div>
          </li>)
}