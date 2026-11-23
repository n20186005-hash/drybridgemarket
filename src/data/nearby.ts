export const nearbyLocales = ["en", "ka", "zh-hant"] as const;
export type NearbyLocale = (typeof nearbyLocales)[number];

export const nearbyLabels = {
  en: { heading: "Near Dry Bridge Market", intro: "Continue on foot from the market to parks, art and historic streets in central Tbilisi.", map: "Open in Google Maps", source: "Georgia Travel visitor information", visit: "Planning your visit" },
  ka: { heading: "მშრალი ხიდის ბაზრის ახლოს", intro: "ბაზრიდან ფეხით გაემართეთ თბილისის ცენტრის პარკების, ხელოვნებისა და ისტორიული ქუჩების სანახავად.", map: "გახსენით Google Maps-ში", source: "საქართველოს ტურიზმის გზამკვლევი", visit: "დაგეგმეთ ვიზიტი" },
  "zh-hant": { heading: "乾橋市集周邊景點", intro: "逛完市集後，步行探索提比里斯市中心的公園、藝術與歷史街道。", map: "在 Google 地圖開啟", source: "喬治亞旅遊資訊", visit: "遊覽建議" },
} satisfies Record<NearbyLocale, Record<string, string>>;

type Place = {
  slug: string;
  source: string;
  copy: Record<NearbyLocale, [name: string, overview: string, visit: string]>;
};

export const nearby: Place[] = [
  {
    slug: "dedaena-park",
    source: "https://georgia.travel/family-attractions/dedaena-park",
    copy: {
      en: ["Dedaena Park", "This green space beside Dry Bridge lies on the right bank of the Mtkvari. Its skatepark gives the riverside park a different rhythm from the flea market above.", "Pair it with the market for a short outdoor break. Follow the riverside paths and stop near the skatepark to watch without entering the skating area."],
      ka: ["დედაენის ბაღი", "მშრალ ხიდთან მდებარე ეს მწვანე სივრცე მტკვრის მარჯვენა ნაპირზეა. სკეიტპარკი სანაპიროს ბაღს ბაზრისგან განსხვავებულ ხასიათს სძენს.", "ბაზრის დათვალიერების შემდეგ ბაღში შეისვენეთ. გაისეირნეთ სანაპიროს ბილიკებზე და სკეიტერებს მოედნის გარედან უყურეთ."],
      "zh-hant": ["母語公園", "這座公園位於乾橋旁的庫拉河右岸，設有滑板場，和橋上市集的氛圍很不一樣。", "逛完市集可以沿河畔步道散步休息。想看滑板活動，可在場地外停留。"],
    },
  },
  {
    slug: "painters-market",
    source: "https://georgia.travel/flea-markets/painters-market",
    copy: {
      en: ["Painters Market (Garden of Artists)", "Artists display paintings outdoors at Dry Bridge, close to the stalls selling antiques and collectibles. Take time to compare how different painters depict the same city.", "Browse the art after the flea market stalls. Ask about the medium, dimensions and packing before buying a work to carry home."],
      ka: ["მხატვრების ბაღი", "მშრალ ხიდთან მხატვრები ნამუშევრებს ღია ცის ქვეშ გამოფენენ, ძველ ნივთებსა და საკოლექციო საგნებთან ახლოს. დააკვირდით, როგორ ასახავენ სხვადასხვა მხატვრები ერთსა და იმავე ქალაქს.", "ბაზრის შემდეგ ნახატებიც დაათვალიერეთ. შეძენამდე იკითხეთ ტექნიკის, ზომისა და შეფუთვის შესახებ."],
      "zh-hant": ["畫家市集（藝術家花園）", "藝術家在乾橋旁露天展售畫作，附近就是販售古董與收藏品的攤位。可以比較不同畫家如何描繪同一座城市。", "逛完古董攤再來看畫。若打算把作品帶回家，購買前先詢問媒材、尺寸與包裝方式。"],
    },
  },
  {
    slug: "orbeliani-square",
    source: "https://georgia.travel/family-attractions/orbeliani-square",
    copy: {
      en: ["Orbeliani Square", "This central square dates to 1828, when it was known as Post Square. It later took its name from the markets held there before acquiring its current name.", "Walk here from Dry Bridge via Atoneli Street. Pause at the edge of the square for a wider view of its façades and the streets that feed into it."],
      ka: ["ორბელიანის მოედანი", "თბილისის ცენტრში მდებარე ეს მოედანი 1828 წლიდანაა ცნობილი. მას თავდაპირველად ფოსტის მოედანი ერქვა, მოგვიანებით კი სახელები აქ გამართულ ბაზრობებს უკავშირდებოდა.", "მშრალი ხიდიდან ათონელის ქუჩას გაუყევით. მოედნის კიდიდან კარგად ჩანს ფასადები და მოედნისკენ მიმავალი ქუჩები."],
      "zh-hant": ["奧爾貝利亞尼廣場", "這座市中心廣場的歷史可追溯至 1828 年，早期稱為郵政廣場，後來也曾因在此舉辦的市集而更名。", "可從乾橋沿阿托內利街步行前往。走到廣場邊緣，可以看清周圍的立面和匯入廣場的街道。"],
    },
  },
  {
    slug: "9-april-park",
    source: "https://georgia.travel/family-attractions/9th-of-april-park",
    copy: {
      en: ["9 April Park", "The upper part of the former Alexander Garden sits just off Rustaveli Avenue. Its name commemorates the events of 9 April 1989, which also touched nearby Kashveti Church.", "Start on Rustaveli Avenue and make a short circuit through the gardens. Continue to Kashveti Church or the National Gallery if you have time."],
      ka: ["9 აპრილის ბაღი", "ყოფილი ალექსანდრეს ბაღის ზედა ნაწილი რუსთაველის გამზირთან მდებარეობს. სახელი 1989 წლის 9 აპრილის მოვლენებს უკავშირდება, რომელთა დროსაც ხალხმა ქაშვეთის ტაძარს შეაფარა თავი.", "რუსთაველის გამზირიდან შედით და ბაღის ბილიკებს გაუყევით. თუ დრო გაქვთ, ქაშვეთის ტაძარი ან ეროვნული გალერეაც მოინახულეთ."],
      "zh-hant": ["四月九日公園", "公園緊鄰魯斯塔韋利大道，原為亞歷山大花園的上半部。現名紀念 1989 年 4 月 9 日的事件，當時有人在附近的卡什韋蒂教堂避難。", "從魯斯塔韋利大道進入，沿園內步道繞行一圈。有時間可接著參觀教堂或國家美術館。"],
    },
  },
  {
    slug: "national-gallery",
    source: "https://georgia.travel/georgian-national-gallery",
    copy: {
      en: ["Georgian National Gallery", "Also called the Blue Gallery, this museum on Rustaveli Avenue is a place to discover Georgian artists including Niko Pirosmani and Davit Kakabadze.", "Check the current exhibitions, hours and admission before walking over from the market. Pair the gallery with a stroll in adjoining 9 April Park."],
      ka: ["საქართველოს ეროვნული გალერეა", "რუსთაველის გამზირზე მდებარე ცისფერ გალერეაში ქართულ ხელოვნებას გაეცნობით, მათ შორის ნიკო ფიროსმანისა და დავით კაკაბაძის ნამუშევრებს.", "ბაზრიდან წამოსვლამდე გადაამოწმეთ გამოფენები, სამუშაო საათები და ბილეთის ფასი. გალერეის შემდეგ გაისეირნეთ მომიჯნავე 9 აპრილის ბაღში."],
      "zh-hant": ["喬治亞國家美術館", "這座美術館又稱藍色美術館，位於魯斯塔韋利大道，可在此認識尼科・皮羅斯馬尼與達維特・卡卡巴澤等喬治亞藝術家。", "從市集出發前先核對展覽、開放時間及票價。參觀後可以接著逛相鄰的四月九日公園。"],
    },
  },
  {
    slug: "kashveti-church",
    source: "https://georgia.travel/kashveti-church",
    copy: {
      en: ["Kashveti Church", "Kashveti stands between the National Gallery and the Georgian Museum of Fine Arts on Rustaveli Avenue. Its carved stone exterior rewards a closer look before you enter.", "Visit as part of a Rustaveli Avenue walk. Give worshippers space and ask before photographing inside."],
      ka: ["ქაშვეთის ტაძარი", "ქაშვეთი რუსთაველის გამზირზე, ეროვნულ გალერეასა და სახვითი ხელოვნების მუზეუმს შორის მდებარეობს. შესვლამდე ქვის ფასადის ჩუქურთმებს დააკვირდით.", "ტაძარი რუსთაველის გამზირზე სეირნობისას მოინახულეთ. პატივი ეცით მლოცველებს და შიგნით გადაღებამდე ნებართვა ითხოვეთ."],
      "zh-hant": ["卡什韋蒂教堂", "這座教堂位於魯斯塔韋利大道，介於國家美術館和喬治亞當代美術博物館之間。入內前可以仔細看看石雕立面。", "可將教堂排入魯斯塔韋利大道步行行程。請讓出空間給禮拜者，入內拍攝前先詢問。"],
    },
  },
];

export function nearbyPath(locale: NearbyLocale, slug: string) {
  return (locale === "en" ? "" : "/" + locale) + "/nearby/" + slug;
}
