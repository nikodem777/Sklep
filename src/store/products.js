import { atom } from "nanostores";

export const $products = atom([
  {
    id: 1,
    name: "Krzesło tarasowe",
    image: "../../public/productChair.jpg",
    price: 65.35,
    discount: "10%",
    description:
      "Stylowe i wygodne krzesło tarasowe to połączenie elegancji, trwałości i komfortu, stworzone z myślą o relaksie na świeżym powietrzu. Wykonane z wysokiej jakości materiałów odpornych na warunki atmosferyczne, doskonale sprawdzi się zarówno na tarasie, w ogrodzie, jak i na balkonie. Solidna konstrukcja gwarantuje stabilność i bezpieczeństwo użytkowania, a ergonomicznie wyprofilowane oparcie oraz siedzisko zapewniają wyjątkowy komfort nawet podczas dłuższego siedzenia. Nowoczesny design krzesła pozwala z łatwością dopasować je do różnych aranżacji przestrzeni — od nowoczesnych po klasyczne. Materiał siedziska jest łatwy w czyszczeniu i odporny na promieniowanie UV, dzięki czemu zachowuje swój kolor przez wiele sezonów. Krzesło można ustawiać pojedynczo lub w zestawach, tworząc przytulny kącik wypoczynkowy idealny do porannej kawy czy wieczornego spotkania z przyjaciółmi.",
  },
  {
    id: 2,
    name: "Drewniana komoda",
    image: "../../public/productWSTable.jpg",
    price: 32.1,
    discount: "10%",
    description:
      "Elegancka drewniana komoda to ponadczasowy mebel, który łączy w sobie funkcjonalność, trwałość i naturalne piękno drewna. Wykonana z wysokiej jakości litego surowca, zachwyca solidnym wykonaniem i dbałością o każdy detal. Gładka, lakierowana powierzchnia podkreśla unikalne usłojenie drewna, nadając wnętrzu ciepły i przytulny charakter. Dzięki klasycznej formie i uniwersalnemu wyglądowi komoda doskonale komponuje się zarówno z nowoczesnymi, jak i tradycyjnymi aranżacjami. Wyposażona w pojemne szuflady i zamykane szafki, oferuje dużo miejsca na ubrania, dokumenty lub domowe drobiazgi. Stabilna konstrukcja i precyzyjnie dopasowane elementy sprawiają, że mebel posłuży przez wiele lat. To idealne rozwiązanie do sypialni, salonu czy przedpokoju — praktyczne i stylowe zarazem. Drewniana komoda to inwestycja w jakość, elegancję i ponadczasowy design, który nigdy nie wychodzi z mody.",
  },
  {
    id: 3,
    name: "Krzesło jajko",
    image: "../../public/productEggChair.jpg",
    price: 50.25,
    discount: "10%",
    description:
      "Ikoniczne krzesło Jajko to połączenie nowoczesnego designu, wyjątkowego komfortu i luksusowego stylu. Inspirowane klasycznymi projektami skandynawskimi, zachwyca swoim charakterystycznym, organicznym kształtem, który nie tylko przyciąga wzrok, ale też doskonale dopasowuje się do sylwetki użytkownika. Miękkie, profilowane siedzisko i wysokie oparcie zapewniają pełen relaks, niezależnie od tego, czy odpoczywasz przy kawie, czy czytasz książkę. Krzesło wykonane jest z wysokiej jakości materiałów — solidnej podstawy z metalu oraz miękkiej tapicerki dostępnej w wielu wariantach kolorystycznych. Jego obracana konstrukcja i subtelne wykończenia czynią je zarówno funkcjonalnym, jak i niezwykle eleganckim dodatkiem do wnętrza. Doskonale sprawdzi się w salonie, biurze lub przestrzeni komercyjnej, nadając jej nowoczesnego charakteru i wyjątkowego stylu. Krzesło Jajko to mebel, który łączy komfort z designem na najwyższym poziomie.",
  },
  {
    id: 4,
    name: "Drewniany stolik",
    image: "../../public/productTeaTable.jpg",
    price: 40.5,
    discount: "10%",
    description:
      "Stylowy drewniany stolik to idealne połączenie naturalnej elegancji i praktycznego zastosowania. Wykonany z wysokiej jakości litego drewna, zachwyca unikalnym rysunkiem słojów i ciepłym odcieniem, który wnosi do wnętrza przytulność oraz harmonię. Prosta, ponadczasowa forma sprawia, że stolik doskonale komponuje się z różnymi aranżacjami — od klasycznych po nowoczesne. Stabilna konstrukcja i solidne wykończenie gwarantują trwałość na lata, a starannie szlifowana powierzchnia jest odporna na codzienne użytkowanie. Świetnie sprawdzi się jako stolik kawowy w salonie, nocny w sypialni lub pomocniczy w kąciku wypoczynkowym. To mebel, który łączy w sobie funkcjonalność i estetykę, stanowiąc naturalny akcent, który podkreśla styl i charakter każdego wnętrza.",
  },
  {
    id: 5,
    name: "Drewniana szafka",
    image: "../../public/productWTable.jpg",
    price: 80.3,
    discount: "",
    description:
      "Piękna i solidna drewniana szafka to mebel, który łączy w sobie klasyczne rzemiosło z nowoczesnym designem. Wykonana z wysokiej jakości drewna, zachwyca naturalną fakturą oraz ciepłym odcieniem, który wprowadza do wnętrza harmonię i przytulny klimat. Jej uniwersalna forma sprawia, że doskonale sprawdzi się zarówno w salonie, sypialni, jak i w przedpokoju, pełniąc funkcję praktycznego schowka na codzienne drobiazgi. Szafka wyposażona jest w pojemne półki i szuflady, które ułatwiają utrzymanie porządku i organizację przestrzeni. Starannie wykonane detale, solidne uchwyty oraz trwałe wykończenie gwarantują długowieczność mebla. To idealny wybór dla osób ceniących naturalne materiały, funkcjonalność i ponadczasowy styl. Drewniana szafka stanie się eleganckim i praktycznym elementem każdego wnętrza.",
  },
  {
    id: 6,
    name: "Drewniane łóżko",
    image: "../../public/productWBed.jpg",
    price: 430.0,
    discount: "",
    description:
      "Eleganckie drewniane łóżko to połączenie naturalnego piękna, solidnego wykonania i ponadczasowego stylu. Wykonane z wysokiej jakości drewna, zachwyca szlachetnym usłojeniem oraz trwałą konstrukcją, która gwarantuje stabilność i wygodę na wiele lat. Ciepły odcień drewna wprowadza do sypialni przytulną atmosferę, sprzyjającą relaksowi i wypoczynkowi. Dzięki prostemu, a zarazem eleganckiemu designowi łóżko doskonale komponuje się z różnymi aranżacjami — od nowoczesnych po klasyczne wnętrza. Starannie wykonane detale i gładkie wykończenie podkreślają wysoką jakość rzemiosła. To mebel, który nie tylko zapewnia komfortowy sen, ale też staje się stylową ozdobą pomieszczenia. Drewniane łóżko to wybór dla tych, którzy cenią trwałość, naturalność i elegancję w najlepszym wydaniu.",
  },
]);

export function addProduct(product) {
  $products.set([...$products.get(), product]);
}

export function getDiscountedPrice(product) {
  // jeśli nie ma zniżki, zwróć oryginalną cenę
  if (!product.discount) return product.price;

  const discountValue = Number(product.discount.replace("%", "")) / 100;
  const finalPrice = product.price * (1 - discountValue);

  return finalPrice;
}
