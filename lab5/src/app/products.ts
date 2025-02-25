import { categories } from "./categories";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
    rating: number;
    category: number;
    likes: number;
}

export const products = [
    {
      id: 12,
      name: 'Bella cotton pads Cotton 120 pcs',
      price: 700,
      description: 'Soft, gentle pads made of 100% cotton, very absorbent, hypoallergenic.',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h15/hce/63887012495390.jpg?format=gallery-large',
      rating: 4,
      category: 5,
      likes: 0
    },

    {
      id: 11,
      name: 'Bag Portcase 9011 black',
      price: 3000,
      description: 'Designed for easy carrying and protection of the device.',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-large',
      rating: 3,
      category: 5,
      likes: 0
    },

    {
      id: 10,
      name: 'Apple AirPods Pro 2 with Type-C/Wireless Charging white',
      price: 112000,
      description: 'The built-in batteries in the earbuds now provide up to 6 hours of music playback and up to 30 hours when recharged in the case with active noise cancellation turned on.',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
      rating: 5,
      category: 3,
      likes: 0
    },
    
    {
      id: 0,
      name: 'Apple MacBook Air 15 2023 15.3" / 8 Гб / SSD 512 Гб / macOS',
      price: 779003,
      description: 'The 15.3-inch Liquid Retina display will comfortably work in most applications, including graphics packages, and will provide more screen space.',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/hfe/81547552522270.jpg?format=gallery-large',
      rating: 5,
      category: 2,
      likes: 0
    },

    {
      id: 1,
      name: 'Electric kettle Yingzheng ZY-305 black',
      price: 13000,
      description: 'Modern and stylish, this electric kettle combines elegant design with advanced features for your convenience.',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-large',
      rating: 4.5,
      category: 3,
      likes: 0
    },

    {
      id: 3,
      name: 'Apple 20W USB-C Power Adapter white',
      price: 2197,
      description: 'Type: mains charging. Number of connected devices: 1. Fast charging: Yes. Connector: USB Type-C.',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
      rating: 4.5,
      category: 3,
      likes: 0
    },
    {
      id: 4,
      name: 'Apple iPhone 13 128Gb Midnight black',
      price: 298600,
      description: 'Smartphone Apple iPhone 13 128GB Midnight; Model year. 2022; Display diagonal, inch. 6.1; Display resolution. 2532x1170 ; Matrix type. Super Retina XDR.',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      rating: 5,
      category: 1,
      likes: 0
  
    },
    {
      id: 5,
      name: 'Xiaomi Redmi 12 4G 8GB/256GB black',
      price: 72000,
      description: 'Front-camera. 8 Mpx; Amount of RAM. 8 GB ; Built-in memory capacity. 256 GB; Battery capacity. 5000 mAh; Matrix type. FHD.',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium',
      rating: 5,
      category: 1,
      likes: 0
  
    },
    {
      id: 6,
      name: 'Apple Watch SE 40 mm black',
      price: 130000,
      description: 'Apple Watch SE 40mm and 44mm Aluminum cases with a variety of band styles and colors.',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium',
      rating: 5,
      category: 4,
      likes: 0
  
    },
    {
      id: 7,
      name: 'Samsung Galaxy S23 Ultra 12 GB/256 GB black',
      price: 448374,
      description: 'Samsung Galaxy S23 Ultra 5G SM-S918B/DS 256GB 12GB RAM, 200 MP Camera, Factory Unlocked, International Model (Phantom Black) ; Display · 6.8 inches, 114.7 cm2',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
      rating: 5,
      category: 1,
      likes: 0
    },
    {
      id: 20,
      name: "Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6 / 16 Гб / SSD 512 Гб / Win 11 Pro /",
      price: 500000,
      description: "Процессор Максимальная частота процессора4400.0 МГц ПроцессорIntel Core i5-12450H Базовая частота процессора2000.0 МГц Количество ядер процессора8 ядер Объем кэша L312 Мб",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-large",
      rating: 5,
      category: 2,
      likes: 0
    },
    {
      id: 118,
      name: "Ноутбук Lenovo IdeaPad 3 15.6 / 8 Гб / SSD 512 Гб / Win 11 / 15IAU7 / 82RK00EWRK",
      price: 270000,
      description: "Lenovo ideapad 3 располагает всем необходимым для реализации учебных проектов, участия в видеоконференциях и приятного отдыха. Ноутбук продуман до деталей: от производительной «начинки» до защитной шторки на веб-камере и минималистичного серого оттенка корпуса.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-large",
      rating: 4,
      category: 2,
      likes: 0
    },
    {
      id: 109,
      name: "Ноутбук Apple MacBook Pro 14 2024 / 24 Гб / SSD 512 Гб / macOS / MX2H3",
      price: 1130000,
      description: "Процессор Максимальная частота процессора4500.0 МГц ПроцессорApple M4 Pro Базовая частота процессора2800.0 МГц Количество ядер процессора12 ядер",
      img: "https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-large",
      rating: 5,
      category: 2,
      likes: 0    
    },
    {
      id: 101,
      name: "Ноутбук Acer Aspire 3 15.6 / 8 Гб / SSD 256 Гб / Win 11 / A315-35 / NX.A9AEX.00H",
      price: 230000,
      description: "Воспроизводите видео быстро и без задержек, просматривайте веб-страницы или выполняйте рабочие задачи благодаря процессору и видеокарте от Intel®. Такое сочетание и память гарантируют более высокую скорость загрузки приложений, качественную графику и эффективную работу в режиме многозадачности.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-large",
      rating: 3,
      category: 2,
      likes: 0
    },
    {
      id: 201,
      name: "Смартфон Apple iPhone 16 Pro Max 256Gb черный",
      price: 690000,
      description: "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large",
      rating: 5,
      category: 1,
      likes: 0
    },
    {
      id: 303,
      name: "Смартфон Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий",
      price: 277301,
      description: "Samsung представила новый смартфон среднебюджетной A-серии – Galaxy A55, и на сегодня это топовая модель линейки, получившая значительные улучшения как в характеристиках, так и в программном обеспечении, в том числе и мощный процессор с графикой от AMD.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-large",
      rating: 3,
      category: 1,
      likes: 0
    },
    {
      id: 182,
      name: "Игровой контроллер Sony Dualshock 4 v2 черный",
      price: 4700,
      description: "Новый беспроводной контроллер DUALSHOCK 4 для Playstation 4. Благодаря измененной сенсорной панели с индикатором цвета вашей световой панели, этот стильный матовый контроллер подарит вам самые удобные и интуитивно понятные способы игры.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h2b/h18/63780476616734.jpg?format=gallery-large",
      rating: 5,
      category: 3,
      likes: 0
    },
    {
      id: 500,
      name: "Кабель Xiaomi USB 3.0 (M), USB TypeC (M) белый",
      price: 1414,
      description: "Кабель Xiaomi USB Type-C - USB – продукция широчайшим образом известного производителя портативных устройств. Обладающий безупречным качеством аксессуар прослужит вам долгие годы. Изделие подходит для совместного использования с любым оборудованием, в оснащение которого входит порт USB Type-C.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h4b/h36/64050364186654.jpg?format=gallery-large",
      rating: 3,
      category: 3,
      likes: 0
    },

    {
      id: 401,
      name: "Часы Кварцевые CASIO MTP-1374L-1AVDF сталь",
      price: 23910,
      description: "Наручные часы Casio MTP-1374L-1A является близнецом Casio MTP-1375L-1A.Главное их различие в том, что Casio MTP-1374L-1A имеет чёрный безель с золитистыми цифрами, которые помогают засекать отрезки времени по шкале, аналогично таймеру.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/ha1/ha8/63763581960222.jpg?format=gallery-large",
      rating: 5,
      category: 4,
      likes: 0
    },

    {
      id: 392,
      name: "Часы Кварцевые NORTH EDGE SGM388021 карбон",
      price: 10491,
      description: "Качественные часы. Удобный ремешок. Как я люблю, просто и со вкусом. Работаю в поле, незаменимый аксессуар. Спасибо больше менеджеру за обратную связь. Отличный сервис!",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h0d/h5e/84558265712670.jpg?format=gallery-large",
      rating: 2,
      category: 4,
      likes: 0
    }, 
    {
      id: 220,
      name: "Часы Кварцевые CASIO MTP-1374D-1AVDF сталь",
      price: 25032,
      description: "Японский гигант Casio – один из лидеров мирового рынка бытовой электроники. Все часы имеют придирчивый контроль качества и обеспечены фирменной гарантией. Сегодня наручные часы CASIO представлены в широком ассортименте с четко обозначенными модельными рядами, что облегчает покупателю выбор подходящих часов.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h76/h49/63778732965918.jpg?format=gallery-large",
      rating: 4,
      category: 4,
      likes: 0
    },
    {
      id: 93,
      name: "Часы Кварцевые COSMO Obsidian сталь",
      price: 30103,
      description: "Эти часы воплощают идею минимализма и функциональности, создавая элегантный образ для повседневного ношения. Корпус диаметром 40 мм идеально ложится на запястье, а металлическая основа в сочетании с ремешком из нержавеющей стали гарантируют комфорт и долговечность.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h15/h5e/85458825904158.png?format=gallery-large",
      rating: 5,
      category: 4,
      likes: 0
    },
    {
      id: 506,
      name: "Часы Кварцевые CURREN Curren 191244 нержавеющая сталь",
      price: 14920,
      description: "Крутые часы, думал будет смотреться большими, но нет, все грамотно смотрится на руках.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h77/h94/81169002364958.jpg?format=gallery-large",
      rating: 3,
      category: 4,
      likes: 0
    },
    {
      id: 733,
      name: "Стол компьютерный Лофт,110х70x75 см, белый",
      price: 21000,
      description: "Стол прекрасно подойдет к любому интерьеру, т.к он универсален. Прямые линии и нотки геометрии придадут помещению свободу пространства. Такой письменный стол явно привлечет внимание и внесет изюминку в ваш интерьер.Срок службы и сохранность мебели зависит не только от конструкции и качества изготовления, но и в значительной степени от правильного обращения и своевременного ухода за ней.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h5b/h7c/85119645319198.jpg?format=gallery-large",
      rating: 5,
      category: 5,
      likes: 0
    },
    {
      id: 1000,
      name: "Блендер Slaouwo HB-2075 черный",
      price: 6799,
      description: "Мощность, комплектация, качество материалов и сборки. Сам по себе работает тихо. С помощью этого блендера приготовлено уже много всяких вкусностей.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-large",
      rating: 4,
      category: 5,
      likes: 0
    },
    {
      id: 9999,
      name: "Вафельница DASH F-607 красный",
      price: 2999,
      description: "Выразите любовь к своим близким без слов. Удивите их с помощью приготовления свежих вкусных вафель на семейный завтрак или ужин.",
      img: "https://resources.cdn-kaspi.kz/img/m/p/h93/h67/64313485983774.jpg?format=gallery-large",
      rating: 3,
      category: 5,
      likes: 0
    }
]