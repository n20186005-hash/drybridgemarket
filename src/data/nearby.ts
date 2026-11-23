export const nearbyLocales = ["en", "ka", "zh-hant"] as const;
export type NearbyLocale = (typeof nearbyLocales)[number];

export const nearbyLabels = {
  en: { heading: "Near Dry Bridge Market", intro: "Explore parks, museums and historic streets near the market, then plan an onward trip across central Tbilisi.", map: "Open in Google Maps", source: "Visitor information", visit: "Planning your visit" },
  ka: { heading: "მშრალი ხიდის ბაზრის ახლოს", intro: "ბაზრობის ახლოს პარკები, მუზეუმები და ისტორიული ქუჩები დაათვალიერეთ, შემდეგ კი თბილისის ცენტრში გზა გააგრძელეთ.", map: "გახსენით Google Maps-ში", source: "ვიზიტორის ინფორმაცია", visit: "დაგეგმეთ ვიზიტი" },
  "zh-hant": { heading: "乾橋市集周邊景點", intro: "探索市集附近的公園、博物館和歷史街道，再安排提比里斯市中心的下一站。", map: "在 Google 地圖開啟", source: "景點資料", visit: "遊覽建議" },
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
  {
    slug: "march-9-garden",
    source: "https://1tv.ge/lang/en/news/pm-regards-opening-of-dedaena-and-march-9-gardens-as-great-gift/",
    copy: {
      "en": ["9 March Garden", "Cross from Dedaena Garden through the pedestrian passage created during the restoration of the Dry Bridge area.", "Use the two gardens as a short loop around the bridge and return to the stalls from the park side."],
      "ka": ["9 მარტის ბაღი", "დედაენის ბაღიდან გადმოდით რეაბილიტაციისას მოწყობილი ქვეითთა გვირაბით.", "ორივე ბაღს მოკლე წრიული მარშრუტით შემოუარეთ და დახლებს ბაღის მხრიდან დაუბრუნდით."],
      "zh-hant": ["三月九日公園", "可從母語公園經由乾橋周邊整修時增設的行人通道前往。", "沿兩座公園繞一小圈，再從公園一側返回市集。"],
    },
  },
  {
    slug: "saarbrucken-bridge",
    source: "https://www.tbilisi.gov.ge/news/7208",
    copy: {
      "en": ["Saarbrücken Bridge", "This bridge continues the route from the Dry Bridge area across the main channel of the Mtkvari.", "Cross toward Chugureti for a change of scene, then look back toward the gardens from the far bank."],
      "ka": ["ზაარბრიუკენის ხიდი", "მშრალი ხიდის მიდამოებიდან ეს ხიდი მტკვრის მთავარ კალაპოტზე გადადის.", "ჩუღურეთისკენ გადადით და მეორე ნაპირიდან ბაღებს გახედეთ."],
      "zh-hant": ["薩爾布呂肯橋", "從乾橋周邊沿這座橋可跨過庫拉河的主河道。", "走向楚古列季區，再從對岸回望公園。"],
    },
  },
  {
    slug: "giorgi-leonidze-garden",
    source: "https://georgia.travel/family-attractions/giorgi-leonidze-garden",
    copy: {
      "en": ["Giorgi Leonidze Garden", "The lower part of the former Alexander Garden is named for a Georgian writer and has paths around its historic fountain.", "Follow the paths between Atoneli Street and the edge of Rustaveli Avenue for a quieter approach to the museums."],
      "ka": ["გიორგი ლეონიძის ბაღი", "ყოფილი ალექსანდრეს ბაღის ქვედა ნაწილს ქართველი მწერლის სახელი ჰქვია. ბილიკები ისტორიულ შადრევანს გარს უვლის.", "ათონელის ქუჩიდან რუსთაველის გამზირისკენ ბაღის ბილიკებით გაიარეთ."],
      "zh-hant": ["吉奧爾吉・列奧尼澤花園", "昔日亞歷山大花園的下半部以喬治亞作家命名，園內步道環繞歷史噴泉。", "從阿托內利街穿過花園往魯斯塔韋利大道，可經較安靜的路線到博物館。"],
    },
  },
  {
    slug: "public-service-hall",
    source: "https://georgia.travel/family-attractions/dedaena-park",
    copy: {
      "en": ["Tbilisi Public Service Hall", "The sculptural roof of this working civic building is a modern landmark downriver from Dedaena Park.", "View the roof from public space during a riverside walk. Leave the entrances clear for people using city services."],
      "ka": ["თბილისის იუსტიციის სახლი", "დედაენის ბაღიდან დინების მიმართულებით მდებარე მოქმედ საჯარო დაწესებულებას გამორჩეული სახურავი აქვს.", "სახურავი სანაპიროს საჯარო სივრციდან დაათვალიერეთ და შესასვლელები თავისუფალი დატოვეთ."],
      "zh-hant": ["提比里斯公共服務大廳", "母語公園下游這座仍在運作的公共服務建築，以造型鮮明的屋頂聞名。", "沿河散步時可從公共空間欣賞屋頂，請讓出出入口。"],
    },
  },
  {
    slug: "atoneli-street",
    source: "https://georgia.travel/orbeliantubani-in-tbilisi",
    copy: {
      "en": ["Atoneli Street", "Atoneli Street passes through Orbeliantubani, where restored merchant houses sit within the old street grid.", "Walk from the bridge toward Orbeliani Square and look up for balconies and surviving architectural details."],
      "ka": ["ათონელის ქუჩა", "ათონელის ქუჩა ორბელიანთუბანს მიუყვება, სადაც ძველ ქუჩებზე ვაჭრების აღდგენილი სახლები დგას.", "ხიდიდან ორბელიანის მოედნისკენ გაიარეთ და აივნებსა და შემორჩენილ დეტალებს დააკვირდით."],
      "zh-hant": ["阿托內利街", "街道穿過奧爾貝利安圖巴尼街區，修復過的商人住宅仍保留在老街格局中。", "從乾橋步行往奧爾貝利亞尼廣場，沿途抬頭看陽台和留存的建築細節。"],
    },
  },
  {
    slug: "liberty-square",
    source: "https://georgia.travel/liberty-square-tbilisi",
    copy: {
      "en": ["Liberty Square", "Liberty Square links Rustaveli Avenue with streets leading into the historic center and Sololaki.", "Use designated crossings around this busy junction. Continue uphill toward Sololaki or turn toward the old town."],
      "ka": ["თავისუფლების მოედანი", "თავისუფლების მოედანი რუსთაველის გამზირს ისტორიული ცენტრისა და სოლოლაკისკენ მიმავალ ქუჩებთან აკავშირებს.", "დატვირთულ კვანძზე გადასასვლელებით ისარგებლეთ. შემდეგ სოლოლაკისკენ აუყევით ან ძველ ქალაქში გადაუხვიეთ."],
      "zh-hant": ["自由廣場", "自由廣場連接魯斯塔韋利大道，以及通往歷史中心和索洛拉基的街道。", "路口交通繁忙，請使用行人穿越設施，再選擇往索洛拉基上坡或轉入老城。"],
    },
  },
  {
    slug: "gabriadze-clock-tower",
    source: "https://georgia.travel/gabriadze-clock-tower",
    copy: {
      "en": ["Gabriadze Clock Tower", "The tilted masonry tower beside the puppet theater is a distinctive stop on Shavteli Street.", "View the tower from the street before or after a visit to Anchiskhati Basilica. The lanes are narrow, so leave room for people passing."],
      "ka": ["გაბრიაძის საათის კოშკი", "შავთელის ქუჩაზე თოჯინების თეატრთან დახრილი საათის კოშკი დგას.", "კოშკი ანჩისხატის ბაზილიკის მონახულებამდე ან შემდეგ ნახეთ. ვიწრო ქუჩაზე გამვლელებს ადგილი დაუტოვეთ."],
      "zh-hant": ["加布里阿澤鐘樓", "這座傾斜的磚石鐘樓位於沙夫泰利街，緊鄰木偶劇院。", "可與安奇斯哈蒂聖殿一併參觀。巷道較窄，拍照時請留出通行空間。"],
    },
  },
  {
    slug: "gabriadze-theatre",
    source: "https://georgia.travel/rezo-gabriadze-marionette-theatre",
    copy: {
      "en": ["Rezo Gabriadze Marionette Theatre", "Rezo Gabriadze’s small theater on Shavteli Street stages performances using marionettes.", "If you plan to see a show, check the program, ticket availability and language information before leaving the market."],
      "ka": ["რეზო გაბრიაძის მარიონეტების თეატრი", "შავთელის ქუჩაზე რეზო გაბრიაძის პატარა თეატრი მარიონეტების სპექტაკლებს მართავს.", "თუ სპექტაკლზე მიდიხართ, ბაზრობიდან გასვლამდე გადაამოწმეთ პროგრამა, ბილეთები და ინფორმაცია ენის შესახებ."],
      "zh-hant": ["列佐・加布里阿澤木偶劇院", "沙夫泰利街上的小劇院演出提線木偶戲。", "如果想看演出，離開市集前先確認節目、票況與語言資訊。"],
    },
  },
  {
    slug: "anchiskhati-basilica",
    source: "https://georgia.travel/anchiskhati-basilica",
    copy: {
      "en": ["Anchiskhati Basilica", "This early basilica stands on Shavteli Street, near the turns that lead down toward the river.", "Step inside only when access is open and avoid interrupting worship. Compare the simple stone façade with the neighboring clock tower."],
      "ka": ["ანჩისხატის ბაზილიკა", "ეს ადრეული ბაზილიკა შავთელის ქუჩაზე, მდინარისკენ ჩასასვლელებთან მდებარეობს.", "შედით, თუ ტაძარი ღიაა, და მსახურებას ხელი არ შეუშალოთ. სადა ქვის ფასადი მეზობელ საათის კოშკს შეადარეთ."],
      "zh-hant": ["安奇斯哈蒂聖殿", "這座早期巴西利卡式教堂位於沙夫泰利街，靠近通往河畔的轉角。", "開放時可入內，請勿打擾禮拜。外觀簡潔，與旁邊的鐘樓形成對照。"],
    },
  },
  {
    slug: "bridge-of-peace",
    source: "https://georgia.travel/family-attractions/rike-park",
    copy: {
      "en": ["Bridge of Peace", "This covered pedestrian bridge links Erekle II Street on the old town side with Rike Park.", "Cross toward the park for an open riverside walk. Pause at wider points to see the glass canopy and both banks."],
      "ka": ["მშვიდობის ხიდი", "გადახურული ქვეითთა ხიდი ძველი ქალაქის ერეკლე II-ის ქუჩას რიყის პარკთან აკავშირებს.", "რიყისკენ გადადით სანაპიროზე გასასეირნებლად. ფართო მონაკვეთებიდან მინის გადახურვასა და ორივე ნაპირს გახედეთ."],
      "zh-hant": ["和平橋", "這座有頂行人橋連接老城一側的埃雷克勒二世街與里克公園。", "過橋後可沿公園河岸散步。在較寬的位置停下，欣賞玻璃頂棚和兩岸景色。"],
    },
  },
  {
    slug: "rike-park",
    source: "https://georgia.travel/family-attractions/rike-park",
    copy: {
      "en": ["Rike Park", "Rike is a contemporary public park on the left bank with sculptures, open lawns and access to the cable car.", "Walk among the public artworks first. If taking the cable car uphill, check operation and queues at the station."],
      "ka": ["რიყის პარკი", "მარცხენა ნაპირზე მდებარე თანამედროვე პარკში ქანდაკებები, ღია გაზონები და საბაგირო სადგურია.", "ჯერ ქანდაკებები დაათვალიერეთ. თუ საბაგიროთი ასვლას აპირებთ, სადგურზე გადაამოწმეთ მუშაობა და რიგი."],
      "zh-hant": ["里克公園", "庫拉河左岸的現代公園有雕塑、開放草坪及纜車站。", "可先散步看公共藝術。若要搭纜車上山，到站後先確認營運與排隊狀況。"],
    },
  },
  {
    slug: "sioni-cathedral",
    source: "https://georgia.travel/sioni-cathedral",
    copy: {
      "en": ["Sioni Cathedral", "Sioni Cathedral stands in the old town near the river and the historic lanes around Sioni Street.", "Approach from Erekle II Street and pause in the courtyard when open. Keep voices low around services."],
      "ka": ["სიონის საკათედრო ტაძარი", "სიონის ტაძარი ძველ ქალაქში, მდინარესა და სიონის ქუჩის ისტორიულ შესახვევებთან დგას.", "ერეკლე II-ის ქუჩიდან მიდით და ღია ეზოში შეჩერდით. მსახურების დროს ხმას დაუწიეთ."],
      "zh-hant": ["錫安主教座堂", "主教座堂位於老城，靠近河岸及錫安街一帶的歷史巷道。", "可從埃雷克勒二世街走過來。庭院開放時可短暫停留，禮拜期間請保持安靜。"],
    },
  },
  {
    slug: "tbilisi-history-museum",
    source: "https://georgia.travel/tbilisi-history-museum",
    copy: {
      "en": ["Tbilisi History Museum", "The museum occupies a former caravanserai on Sioni Street, a reminder of the district’s role in commerce.", "Compare the building’s courtyard and passages with the smaller shops around Sioni. Check exhibitions before planning an indoor stop."],
      "ka": ["თბილისის ისტორიის მუზეუმი", "სიონის ქუჩაზე მუზეუმი ყოფილ ქარვასლაშია მოწყობილი, რომელიც უბნის სავაჭრო წარსულს გვახსენებს.", "შენობის ეზო და გასასვლელები სიონის გარშემო პატარა მაღაზიებს შეადარეთ. წინასწარ გადაამოწმეთ გამოფენები."],
      "zh-hant": ["提比里斯歷史博物館", "博物館設在錫安街昔日的商旅驛站內，反映街區的商貿歷史。", "可比較驛站的庭院和通道與周圍的小商店，入館前先查展覽資訊。"],
    },
  },
  {
    slug: "wine-museum",
    source: "https://georgia.travel/wine-museum",
    copy: {
      "en": ["Wine Museum", "The museum uses old-town cellar spaces to introduce Georgian winemaking traditions and vessels.", "Reserve this indoor stop for a walk around Sioni Street. Check current visiting arrangements before heading below street level."],
      "ka": ["ღვინის მუზეუმი", "ძველი ქალაქის სარდაფებში მოწყობილი მუზეუმი ქართული მეღვინეობის ტრადიციებსა და ჭურჭელს აცნობს სტუმრებს.", "სიონის ქუჩის მონახულებისას მოინახულეთ მუზეუმიც. ჩასვლამდე გადაამოწმეთ ვიზიტის მიმდინარე პირობები."],
      "zh-hant": ["葡萄酒博物館", "博物館利用老城地窖介紹喬治亞的釀酒傳統及器具。", "可安排在錫安街散步途中，前往地下展區前先確認參觀安排。"],
    },
  },
  {
    slug: "metekhi-church",
    source: "https://georgia.travel/strolling-through-the-old-city-of-tbilisi",
    copy: {
      "en": ["Metekhi Church", "Metekhi Church sits on the rocky east bank above the Mtkvari, across the river from the old town.", "From Rike Park follow the river toward Metekhi Bridge, then head uphill toward the church terrace."],
      "ka": ["მეტეხის ტაძარი", "მეტეხის ტაძარი ძველი ქალაქის პირისპირ, მტკვრის კლდოვან აღმოსავლეთ ნაპირზე დგას.", "რიყის პარკიდან მდინარეს მეტეხის ხიდამდე გაუყევით და შემდეგ ტაძრის ტერასისკენ აუყევით."],
      "zh-hant": ["梅特希教堂", "教堂坐落於庫拉河東岸的岩石高地，與對岸老城相望。", "可由里克公園沿河走向梅特希橋，再上坡往教堂平台。"],
    },
  },
  {
    slug: "darejan-palace",
    source: "https://georgia.travel/strolling-through-the-old-city-of-tbilisi",
    copy: {
      "en": ["Queen Darejan Palace", "Queen Darejan’s palace looks over the river from the Avlabari side, where its balcony is visible from below.", "Look up from the public routes around Rike and Metekhi. Check access locally before attempting to enter the complex."],
      "ka": ["დარეჯანის სასახლე", "დედოფალ დარეჯანის სასახლე ავლაბრის მხრიდან მდინარეს გადაჰყურებს. მისი აივანი ქვემოდანაც ჩანს.", "რიყისა და მეტეხის საჯარო გზებიდან სასახლეს გახედეთ. შესვლამდე ადგილზე გადაამოწმეთ დაშვების პირობები."],
      "zh-hant": ["達雷詹王后宮殿", "宮殿從阿夫拉巴里一側俯瞰河流，從下方可看見外挑陽台。", "可由里克與梅特希周邊的公共道路仰望。打算入內時，請先確認現場開放規定。"],
    },
  },
  {
    slug: "sameba-cathedral",
    source: "https://georgia.travel/strolling-through-the-old-city-of-tbilisi",
    copy: {
      "en": ["Holy Trinity Cathedral of Tbilisi", "Sameba rises above Avlabari and is a prominent landmark on the east side of the river.", "Allow time for the uphill approach from Avlabari. Walk through the grounds quietly and respect service times."],
      "ka": ["თბილისის წმინდა სამების საკათედრო ტაძარი", "სამების ტაძარი ავლაბარს გადაჰყურებს და მდინარის აღმოსავლეთ ნაპირზე გამორჩეული ორიენტირია.", "ავლაბრიდან აღმართისთვის დრო გაითვალისწინეთ. ეზოში მშვიდად გაიარეთ და მსახურებას პატივი ეცით."],
      "zh-hant": ["提比里斯聖三一主教座堂", "教堂高踞阿夫拉巴里，是庫拉河東岸醒目的地標。", "從阿夫拉巴里前往需走一段上坡。請在教堂範圍內保持安靜並尊重禮拜安排。"],
    },
  },
  {
    slug: "abanotubani",
    source: "https://georgia.travel/popular-trips/a-short-tour-through-old-tbilisi",
    copy: {
      "en": ["Abanotubani Sulfur Baths", "Low brick domes mark the old town’s bath district near the foot of Narikala hill.", "Walk the public paths to see the domes and façades. Confirm availability and arrangements with the individual bathhouse if planning to bathe."],
      "ka": ["აბანოთუბანი", "ნარიყალას ფერდობის ძირში, ძველი ქალაქის აბანოების უბანში, დაბალი აგურის გუმბათები ჩანს.", "გუმბათები და ფასადები საჯარო ბილიკებიდან ნახეთ. აბანოში წასვლამდე პირობები უშუალოდ აბანოსთან გაარკვიეთ."],
      "zh-hant": ["阿巴諾圖巴尼硫磺浴區", "納里卡拉山腳老城浴區的低矮磚砌圓頂十分醒目。", "可從公共步道看圓頂與立面。想泡澡時，請向個別浴場確認預約及各項安排。"],
    },
  },
  {
    slug: "jumah-mosque",
    source: "https://georgia.travel/jumah-mosque",
    copy: {
      "en": ["Jumah Mosque", "Tbilisi’s Jumah Mosque stands above the sulfur-bath district on the route toward the botanical garden.", "Take the uphill lane from Abanotubani. Follow posted visitor guidance and avoid interrupting prayers."],
      "ka": ["თბილისის ჯუმა მეჩეთი", "თბილისის ჯუმა მეჩეთი აბანოთუბნის ზემოთ, ბოტანიკური ბაღისკენ მიმავალ გზაზე დგას.", "აბანოთუბნიდან აღმართით ადით. დაიცავით ადგილზე მითითებული წესები და ლოცვას ხელი არ შეუშალოთ."],
      "zh-hant": ["聚禮清真寺", "提比里斯的聚禮清真寺位於硫磺浴區上方，在通往植物園的路上。", "從阿巴諾圖巴尼沿巷上坡前往。請依現場訪客指引，勿打擾祈禱。"],
    },
  },
  {
    slug: "narikala-fortress",
    source: "https://georgia.travel/narikala",
    copy: {
      "en": ["Narikala Fortress", "The fortress walls crown the ridge above the bath quarter and overlook the Mtkvari valley.", "Check which paths and sections are open before climbing. View the walls from the ridge paths and avoid closed or exposed masonry."],
      "ka": ["ნარიყალას ციხე", "ციხის კედლები აბანოთუბნის ზემოთ ქედზეა და მტკვრის ხეობას გადაჰყურებს.", "ასვლამდე გადაამოწმეთ, რომელი ბილიკები და მონაკვეთებია ღია. კედლებს ბილიკიდან დააკვირდით."],
      "zh-hant": ["納里卡拉堡壘", "城牆位於浴區上方的山脊，可俯瞰庫拉河谷。", "上山前先確認步道及開放區段。從山脊步道看城牆，請勿進入封閉處或攀爬裸露砌體。"],
    },
  },
  {
    slug: "botanical-garden",
    source: "https://georgia.travel/the-botanical-garden",
    copy: {
      "en": ["National Botanical Garden of Georgia", "The botanical garden occupies the ravine on the far side of the ridge above Abanotubani.", "Save time for the descent and walk back uphill. Check the entrance arrangements before crossing the ridge."],
      "ka": ["საქართველოს ეროვნული ბოტანიკური ბაღი", "ბოტანიკური ბაღი აბანოთუბნის ზემოთ, ქედის მეორე მხარეს, ხეობაში მდებარეობს.", "დაღმართისა და უკან ასვლისთვის დრო დატოვეთ. ქედის გადაკვეთამდე გადაამოწმეთ შესასვლელი."],
      "zh-hant": ["喬治亞國家植物園", "植物園位於阿巴諾圖巴尼上方山脊另一側的山谷。", "下行和回程上坡都需要時間。越過山脊前可先核對入口安排。"],
    },
  },
  {
    slug: "upper-betlemi-church",
    source: "https://georgia.travel/upper-betlemi-church-of-nativity",
    copy: {
      "en": ["Upper Betlemi Church of the Nativity", "The church stands on the hillside below the Sololaki ridge, above the old lanes of Betlemi.", "Approach using the hillside stairs if the route suits you. Pause at a clear viewpoint before returning downhill."],
      "ka": ["ზემო ბეთლემის შობის ტაძარი", "ტაძარი სოლოლაკის ქედის ქვემოთ, ბეთლემის ძველი ქუჩების თავზეა.", "თუ მარშრუტი თქვენთვის მოსახერხებელია, კიბეებს აუყევით. დაბრუნებამდე ხედის ადგილას შეჩერდით."],
      "zh-hant": ["上伯利恆聖誕教堂", "教堂坐落於索洛拉基山脊下方，俯瞰伯利恆的老巷道。", "若適合走樓梯，可沿山坡階梯上行，返程下坡前在開闊處看看街景。"],
    },
  },
  {
    slug: "georgian-national-museum",
    source: "https://georgia.travel/the-museum-of-georgia",
    copy: {
      "en": ["Simon Janashia Museum of Georgia", "This Georgian National Museum site on Rustaveli Avenue exhibits archaeological finds and artifacts from Georgia.", "Choose a few galleries for a focused visit, leaving time to continue on foot along Rustaveli Avenue."],
      "ka": ["სიმონ ჯანაშიას სახელობის საქართველოს მუზეუმი", "რუსთაველის გამზირზე მდებარე ეროვნულ მუზეუმში საქართველოს არქეოლოგიური აღმოჩენები და ნივთებია წარმოდგენილი.", "მოკლე ვიზიტისთვის რამდენიმე დარბაზი შეარჩიეთ და რუსთაველის გამზირზე გასეირნებისთვის დრო დატოვეთ."],
      "zh-hant": ["西蒙・賈納希亞喬治亞博物館", "喬治亞國家博物館位於魯斯塔韋利大道的館舍，展示本地考古發現與文物。", "短時間內可挑幾個展廳參觀，再沿魯斯塔韋利大道繼續步行。"],
    },
  },
  {
    slug: "opera-and-ballet-theatre",
    source: "https://georgia.travel/popular-trips/architectural-tour-of-rustaveli-avenue",
    copy: {
      "en": ["Tbilisi Opera and Ballet Theatre", "The opera and ballet theater is a Rustaveli Avenue landmark with patterned masonry and arched openings.", "See the exterior during an avenue walk. If you want to attend, confirm the performance, start time and tickets independently."],
      "ka": ["თბილისის ოპერისა და ბალეტის თეატრი", "რუსთაველის გამზირზე ოპერისა და ბალეტის თეატრს ორნამენტული წყობა და თაღოვანი ღიობები გამოარჩევს.", "გამზირზე სეირნობისას ფასადი ნახეთ. სპექტაკლისთვის გადაამოწმეთ პროგრამა, დაწყების დრო და ბილეთები."],
      "zh-hant": ["提比里斯歌劇與芭蕾舞劇院", "劇院以裝飾砌紋和拱形開口著稱，是魯斯塔韋利大道的地標。", "沿大道散步時可欣賞外觀。若要看演出，請另行確認場次、開演時間及票況。"],
    },
  },
  {
    slug: "rustaveli-theatre",
    source: "https://georgia.travel/popular-trips/architectural-tour-of-rustaveli-avenue",
    copy: {
      "en": ["Rustaveli Theatre", "The theater’s ornamented frontage is part of the concentration of cultural buildings on Rustaveli Avenue.", "View the façade from the pavement, then continue toward the opera house for a comparison of the two theaters."],
      "ka": ["რუსთაველის თეატრი", "თეატრის მორთული ფასადი რუსთაველის გამზირზე თავმოყრილი კულტურული შენობების ნაწილია.", "ფასადი ტროტუარიდან ნახეთ, შემდეგ ოპერისკენ გააგრძელეთ და ორი თეატრის არქიტექტურა შეადარეთ."],
      "zh-hant": ["魯斯塔韋利劇院", "裝飾華麗的劇院立面是魯斯塔韋利大道文化建築群的一部分。", "可從人行道欣賞立面，再步行往歌劇院比較兩座劇場的建築風格。"],
    },
  },
  {
    slug: "tbilisi-funicular",
    source: "https://georgia.travel/family-attractions/the-funicular",
    copy: {
      "en": ["Tbilisi Funicular", "The railway runs up the steep slope from the city toward Mtatsminda and has a stop below the summit area.", "Use the lower station if you prefer to avoid the steep upper walk, and check current tickets and operation before departure."],
      "ka": ["თბილისის ფუნიკულიორი", "ფუნიკულიორი ქალაქიდან მთაწმინდის ციცაბო ფერდობზე ადის და ზედა სადგურამდე შუალედური გაჩერება აქვს.", "თუ ციცაბო აღმართის გავლა არ გსურთ, ქვედა სადგურით ისარგებლეთ. გამგზავრებამდე ფასი და მუშაობა გადაამოწმეთ."],
      "zh-hant": ["提比里斯登山纜車", "軌道沿陡坡往姆塔茨明達山攀升，在山頂區之前設有中途站。", "若想避開陡坡，可由山下站搭乘，出發前查詢票務及營運狀態。"],
    },
  },
  {
    slug: "mtatsminda",
    source: "https://georgia.travel/mtatsminda",
    copy: {
      "en": ["Mtatsminda", "The mountain overlooks the dense city center from the west, with viewpoints above the river valley.", "Plan this as a separate uphill leg after the market. Leave enough time to reach the viewpoint and arrange the descent."],
      "ka": ["მთაწმინდა", "მთა დასავლეთიდან ქალაქის ცენტრს გადაჰყურებს და მდინარის ხეობაზე ხედები იშლება.", "ბაზრობის შემდეგ ცალკე მონაკვეთად დაგეგმეთ ასვლა. ხედის ადგილზე მისასვლელად და უკან დასაბრუნებლად დრო დატოვეთ."],
      "zh-hant": ["姆塔茨明達山", "山在市中心西側，觀景處可望見密集街區與河谷。", "可把上山安排為逛市集後的一段獨立行程，預留抵達觀景台及下山的時間。"],
    },
  },
  {
    slug: "marjanishvili-house-museum",
    source: "https://georgia.travel/kote-marjanishvili-house-museum",
    copy: {
      "en": ["Kote Marjanishvili House Museum", "The house museum tells the story of theater director Kote Marjanishvili through objects and records from his life.", "Cross toward Chugureti for this quieter cultural visit. Check opening arrangements before making the detour."],
      "ka": ["კოტე მარჯანიშვილის სახლ-მუზეუმი", "სახლ-მუზეუმი რეჟისორ კოტე მარჯანიშვილის ცხოვრებას ნივთებითა და დოკუმენტებით წარმოაჩენს.", "ამ კულტურული სანახაობისთვის ჩუღურეთისკენ გადადით. გზიდან გადახვევამდე გადაამოწმეთ სამუშაო საათები."],
      "zh-hant": ["科特・馬爾賈尼什維利故居博物館", "故居透過物件與文獻介紹劇場導演科特・馬爾賈尼什維利的一生。", "可過河往楚古列季安排較安靜的文化參訪，繞道之前請先查開館安排。"],
    },
  },
  {
    slug: "dezerter-market",
    source: "https://www.geotour.ge/ka/blog/tbilisi-markets-dezerter-dry-bridge",
    copy: {
      "en": ["Dezerter Market", "This market near Station Square is known for produce and pantry goods, a different shopping stop from Dry Bridge’s antiques.", "Treat it as an onward trip across town. Bring a bag if shopping and ask permission before photographing individual vendors."],
      "ka": ["დეზერტირების ბაზარი", "სადგურის მოედანთან მდებარე ბაზარი ხილით, ბოსტნეულითა და სურსათითაა ცნობილი.", "ეს ქალაქში ცალკე გასვლად დაგეგმეთ. საყიდლების ჩანთა იქონიეთ და მოვაჭრის გადაღებამდე ნებართვა ითხოვეთ."],
      "zh-hant": ["逃兵市場", "車站廣場附近這座市場以生鮮及食品聞名，與乾橋古董攤是不同的購物去處。", "可另排一段跨區行程。購物可自備提袋，拍攝個別攤商前請先詢問。"],
    },
  },
  {
    slug: "sololaki",
    source: "https://georgia.travel/strolling-through-the-old-city-of-tbilisi",
    copy: {
      "en": ["Sololaki", "The streets uphill from Liberty Square lead into a historic residential district of decorative apartment houses and sloping lanes.", "Choose a short circuit on public streets. Many entrances lead to private homes, so view the buildings from the pavement."],
      "ka": ["სოლოლაკი", "თავისუფლების მოედნიდან აღმართი ისტორიულ საცხოვრებელ უბანში მიდის, სადაც მორთული სახლები და დაქანებული ქუჩებია.", "საჯარო ქუჩებზე მოკლე წრე შეარჩიეთ. ბევრი შესასვლელი კერძო სახლს ეკუთვნის, ამიტომ შენობები ტროტუარიდან ნახეთ."],
      "zh-hant": ["索洛拉基", "從自由廣場上坡便到歷史住宅區，可看見帶有裝飾的公寓與斜坡巷道。", "沿公共街道選一條短環線。許多入口通往私人住宅，可在人行道上觀賞建築。"],
    },
  },
];

export function nearbyPath(locale: NearbyLocale, slug: string) {
  return (locale === "en" ? "" : "/" + locale) + "/nearby/" + slug;
}
