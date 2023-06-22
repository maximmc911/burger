const cardSection = [
    {
        nameCard: `Авторские рецепты` ,
        textCard: `Наши бургеры обладают уникальным сочетанием вкусов и не похожи ни на какие другие. Мы тщательно отбираем лучшие ингредиенты и сочетания вкусов для нашего меню.`,
        imgCard: `./image/burger.png` ,
    },
    {
        nameCard: `Мраморная говядина` ,
        textCard: `Для наших бургеров мы используем отборную 100% мраморную говядину, которую закупаем исключительно у фермеров. Мы уверены в качестве нашего мяса.`,
        imgCard: `./image/meat.png` ,
    },
    {
        nameCard: `Быстрая доставка` ,
        textCard: `Мы доставляем в пределах МКАД за 30 минут, а если не успеем — доставка бесплатно. Мы тщательно упаковываем наши бургеры, чтобы по дороге они не остыли.`,
        imgCard: `./image/food_truck.png` ,
    },
];
const CardFood = [
    {
        img: `./image/1.png`,
        name: `Бургер чеддер & бекон`,
        about: `Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус`,
        price: 8,
        mass: `360`,
        money: `$`,
    },
    {
        img: `./image/2.png`,
        name: `BBQ с беконом и курицей`,
        about: `Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ`,
        price: 7,
        mass: `390`,
        money: `$`,
    },
    {
        img: `./image/3.png`,
        name: `Дабл биф бургер`,
        about: `Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук,соус бургер, горчица`,
        price: 10,
        mass: `420`,
        money: `$`,
    },
    {
        img: `./image/4.png`,
        name: `Баварский бургер`,
        about: `Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг`,
        price: 7,
        mass: `220`,
        money: `$`,
    },
    {
        img: `./image/5.png`,
        name: `Бекон чизбургер`,
        about: `Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень`,
        price: 8,
        mass: `220`,
        money: `$`,
    },
    {
        img: `./image/6.png`,
        name: `Индиана бургер`,
        about: `Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень`,
        price: 9,
        mass: `320`,
        money: `$`,
    },
    {
        img: `./image/7.png`,
        name: `Вегги бургер`,
        about: `Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг`,
        price: 8,
        mass: `280`,
        money: `$`,
    },
    {
        img: `./image/8.png`,
        name: `Плаксивый Джо`,
        about: `Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень`,
        price: 7,
        mass: `380`,
        money: `$`,
    },
    {
        img: `./image/9.png`,
        name: `Двойной чиз бургер`,
        about: `Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень`,
        price: 11,
        mass: `400`,
        money: `$`,
    },
    {
        img: `./image/10.png`,
        name: `Фрешбургер`,
        about: `Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат`,
        price: 9,
        mass: `300`,
        money: `$`,
    },
    {
        img: `./image/11.png`,
        name: `	Цуккини бургер`,
        about: `Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень`,
        price: 8,
        mass: `320`,
        money: `$`,
    },
    {
        img: `./image/12.png`,
        name: `Двойной бургер чеддар`,
        about: `Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень`,
        price: 9,
        mass: `360`,
        money: `$`,
    },
];

const moneyChoose =[
    {
        name: `$`,
        price: 1,
    },
    {
        name: `&#8381`,
        price: 80,
    },
    {
        name: `BYN`,
        price: 3,
    },
    {
        name: `&euro;`,
        price: 0.9,
    },
    {
        name: `&#165;`,
        price: 7,
    },

] 
            // !Замена валюты Start
const moneyBtn = document.querySelector(".content__btn");
const moneyCard = document.querySelector(".btn__valut");
let check = 0;
function CreatMoney() {
    for (const iterator in CardFood) {
        CardFood[iterator].money = moneyChoose[check].name;
        CardFood[iterator].price =CardFood[iterator].price * moneyChoose[check].price;
        moneyCard.innerHTML = `${moneyChoose[check].name}`
    }
    
};

function CleanCreatMoney() {
    for (const iterator in CardFood) {
        CardFood[iterator].money = moneyChoose[0].name;
        CardFood[iterator].price =CardFood[iterator].price / moneyChoose[check].price;
        moneyCard.innerHTML = `${moneyChoose[check].name}`
    }
    
};

moneyBtn.addEventListener(`click`, () =>{
    
    console.log(check);
    if (check==4) {
        check=-1;
    }
    check++;
      switch (check) {
        case 0:
            CreatMoney();
            CreateCatalogCard(CardFood , catalogCard);
            CleanCreatMoney()
            break;
        case 2:
        case 1:
            CreatMoney();
            CreateCatalogCard(CardFood , catalogCard);
            CleanCreatMoney()
            break;
        case 2:
            CreatMoney();
      
            CreateCatalogCard(CardFood , catalogCard);
            CleanCreatMoney();
            
            break;
        case 3:
            CreatMoney();
            CreateCatalogCard(CardFood , catalogCard);
            CleanCreatMoney()
            
            break;
        case 4:
            CreatMoney();
            CreateCatalogCard(CardFood , catalogCard);
            CleanCreatMoney()
            
            break;
    
    } 
    
});
                // !Замена валюты End

                //! Make Card Start
const mainCards = document.querySelector(".main__cards");
const catalogCard = document.querySelector(".catalog__cards")
   
const CreateMainCard = (card , parentDiv) => {
                    
    parentDiv.innerHTML = card.map(({imgCard , nameCard , textCard}) =>
        `
        <div class="main__card">
             <div class="card__img">
               <img src="${imgCard}" alt="">
                                    
               </div>
              <div class="card__name">
                 <h2>${nameCard}</h2>
                 </div>
                  <div class="card__text">
                  <p>
                ${textCard}
               </p>
                   </div>
                   </div>
          `
    ).join(``);
};
 CreateMainCard(cardSection , mainCards);
const CreateCatalogCard = (card , parentDiv) => {
                    
     parentDiv.innerHTML = card.map(({img , name , about , price, mass , money}) =>
        `
                        
           <div class="catalog__card">
              <div class="catalog__card__img">
                <img src="${img}" alt="img">
            </div>
             <div class="catalog__card__name">
                   <p>${name}</p>
              </div>
              <div class="catalog__card__about">
                    <p>${about}</p>
              </div>
                <div class="catalog__card__price">
                   <div class="card__priceMass">
           <div class="card__price">
                   <p>${price}  </p><p> ${money}</p>
                    </div>
                   <div class="card__mass">
                 <p>${mass} гр.</p>
                </div>
              </div>
                   <div class="catalog__card__btn">
              <button class="catalog__btn">
                        <p>Заказать</p>
                      </button> 
                     </div>
            </div>
             </div>
         
         `
         ).join(``);
};
 CreateCatalogCard(CardFood , catalogCard);
                
                //! Make Card End