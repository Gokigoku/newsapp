import React, {Component, useState,useEffect} from "react";
import NewsCard from "./NewsCard";


export default function News(){
   let articles = [
        {
            "status": "ok",
            "totalResults": 11875,
            "articles": [
            {
            "source": {
            "id": null,
            "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "VinFast: Thấy gì từ con số lỗ hàng tỷ đô la?",
            "description": "Đọc báo trong nước sẽ thấy tình hình kinh doanh của VinFast rất sáng sủa. Sự thực thế nào?",
            "url": "https://www.bbc.com/vietnamese/articles/crg9y5de0mgo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_vietnamese/7f5f/live/20e73190-d462-11ee-b83b-0f87a864f372.jpg",
            "publishedAt": "2024-02-26T05:16:34Z",
            "content": "Ngun hình nh, Getty Images\r\nChp li hình nh, Báo chí Vit Nam a nhiu thông tin v nhng hot ng quc t ca VinFast \r\nBáo chí trong nc nhn mnh con s doanh thu tng 91% ca VinFast, báo chí nc ngoài quan tâm nh… [+6671 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "investing.com",
            "title": "BYD shares rise on plans to double $28 mln buyback",
            "description": "Investing.com-- Shares of Chinese electric vehicle maker BYD Co Ltd (SZ: ) rose on Monday after its Chairman and CEO Wang Chuanfu proposed the firm double the size of a planned share buyback. BYD’s CEO suggested doubling the amount of A-shares to be repurchas…",
            "url": "https://biztoc.com/x/f3c470f09692bcbc",
            "urlToImage": "https://c.biztoc.com/p/f3c470f09692bcbc/s.webp",
            "publishedAt": "2024-02-26T05:06:10Z",
            "content": "Investing.com-- Shares of Chinese electric vehicle maker BYD Co Ltd (SZ: ) rose on Monday after its Chairman and CEO Wang Chuanfu proposed the firm double the size of a planned share buyback.BYDs CEO… [+289 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ilgiornale.it"
            },
            "author": "redazione@ilgiornale-web.it (Pierluigi Bonora)",
            "title": "La Germania ferma Tesla, l'Italia studia il sorpasso",
            "description": "Un referendum boccia l'ampliamento dell'impianto vicino a Berlino pur di salvare la foresta. E il governo drizza le antenne",
            "url": "https://www.ilgiornale.it/news/politica/germania-ferma-tesla-litalia-studia-sorpasso-2288750.html",
            "urlToImage": "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2024/01/08/1704734334-elon-musk.jpg?_=1704734334",
            "publishedAt": "2024-02-26T05:00:02Z",
            "content": "Da Grüenheide, città tedesca distante 35 chilometri da Berlino, è arrivato un secco «nein» al progetto di Elon Musk (nella foto) di ampliare lo stabilimento di Tesla, l'unico per ora in Europa. Il re… [+2409 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Pravda.sk"
            },
            "author": "Matej Mikula",
            "title": "Sandero dominuje, Tesla Model Y sa prepadla. Takto sa predávajú autá v Európe",
            "description": "Rumunský hatchback potvrdil trend, že začiatky kalendárnych rokov sú preň veľmi úspešné. Presný opak platí pre americkú Teslu, ktorej Model Y ledva dosiahol na prvú dvadsiatku.",
            "url": "https://auto.pravda.sk/magazin/clanok/700842-dacia-sandero-ovladla-januarove-europske-predaje-tesla-model-y-sa-prepadla/",
            "urlToImage": "http://ipravda.sk/res/2024/02/20/thumbs/43007-dacia-sandero-stepway-2024-3-clanokW.jpg",
            "publishedAt": "2024-02-26T05:00:00Z",
            "content": "Rumunský hatchback potvrdil trend, e zaiatky kalendárnych rokov sú pre vemi úspené. Presný opak platí pre americkú Teslu, ktorej Model Y ledva dosiahol na prvú dvadsiatku.tatistiky predaja automobilo… [+1982 chars]"
            },
            {
            "source": {
            "id": "the-irish-times",
            "name": "The Irish Times"
            },
            "author": "Pilita Clark",
            "title": "The menace of the overblown job title",
            "description": "Terrible epithets confuse and infuriate, but that has done nothing to stem the tide",
            "url": "https://www.irishtimes.com/business/work/2024/02/26/the-menace-of-the-overblown-job-title/",
            "urlToImage": "https://www.irishtimes.com/resizer/DZvFAo1bNr2wnuepjdkhvBpJhn4=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/ACRECTEFDNEVVKECIDTYFOBUKY.jpg",
            "publishedAt": "2024-02-26T05:00:00Z",
            "content": "Wall Street banks are always getting into hot water, but its generally over something more exciting than a job title. Not so last week when it emerged that a senior banker claimed he was given a fanc… [+4042 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Businessinsider.com.pl"
            },
            "author": "Mateusz Madejski",
            "title": "Niemcy w \"pętli upadku\". Światełko w tunelu wielu przeraża",
            "description": "Jeszcze niedawno Niemcy były gospodarczym motorem napędowym Unii, \"najlepszym krajem świata\" i ostoją demokracji. Teraz ich gospodarka zwalnia, nie wytrzymuje konkurencji z Chinami, walczy z falą populizmu, bańką na rynku nieruchomości i coraz bardziej wpada …",
            "url": "https://businessinsider.com.pl/gospodarka/banka-chiny-populisci-wszystkie-problemy-niemiec/t2e6f58",
            "urlToImage": "https://ocdn.eu/pulscms-transforms/1/_LWk9kpTURBXy83YTk0MmExZmExZDI5NzQ5YmI3MWIyNzdkNTc1ZjE5ZC5qcGeSlQPMUgDNB2zNBC6TBc0EsM0Cdt4AAaEwAQ",
            "publishedAt": "2024-02-26T04:58:00Z",
            "content": "Gdzie nie spojrze, tam problemy. Pierwszy przykad z brzegu brana motoryzacyjna, tradycyjnie kojarzca si z Niemcami. Mercedes, VW i spóka wyranie zaspay na elektryczn rewolucj. Dzi o miano najwikszego… [+10012 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Qooah.com"
            },
            "author": "Sky Yee",
            "title": "實測 Cybertruck 續航力，竟比 Tesla 官方公佈更多",
            "description": "文章來源：Qooah.com 自從 Tesla Cybertruck 推出之後，其續航測試一直備受關注，媒體都 […]",
            "url": "https://qooah.com/2024/02/26/the-measured-cybertruck-battery-life-is-actually-more-than-what-tesla-officially-announced/",
            "urlToImage": "https://qooah.com/wp-content/uploads/2024/02/7898766798909787989.jpg",
            "publishedAt": "2024-02-26T04:55:31Z",
            "content": "Tesla Cybertruck Cybertruck Tesla \r\nCybertruck Cybertruck \r\n Edmunds Cybertruck \r\n Cybertruck Tesla 340 ( 547 ) 318 ( 512 )\r\n Edmunds 334 ( 537 ) 318 \r\n Cybertruck Tesla Cybertruck\r\n Cybertruck EPA 2… [+29 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "finance.yahoo.com",
            "title": "Stock Split Watch: Is Meta Platforms Next?",
            "description": "In recent years, stock splits have become increasingly frequent on Wall Street, with companies such as Alphabet, Amazon, and Tesla joining the trend. While stock splits may not drastically alter a company's valuation, they can serve a purpose, including entic…",
            "url": "https://biztoc.com/x/4baf5f41f8ec0c5b",
            "urlToImage": "https://c.biztoc.com/p/4baf5f41f8ec0c5b/s.webp",
            "publishedAt": "2024-02-26T04:52:07Z",
            "content": "In recent years, stock splits have become increasingly frequent on Wall Street, with companies such as Alphabet, Amazon, and Tesla joining the trend. While stock splits may not drastically alter a co… [+300 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "mobiFlip.de"
            },
            "author": "Oliver Schwuchow",
            "title": "Tesla Model 3 Performance: Neue Version für 2024 in Videos zu sehen",
            "description": "Tesla wird das neue Model 3 wieder in drei Versionen anbieten, doch eine fehlt noch und wir haben schon seit Wochen immer mehr Details zur Performance-Version für 2024 bekommen. Jetzt […]",
            "url": "https://www.mobiflip.de/shortnews/tesla-model-3-performance-neu-2024-videos/",
            "urlToImage": "https://www.mobiflip.de/wp-content/uploads/2023/09/tesla-model-3-2023-heck-header.jpg",
            "publishedAt": "2024-02-26T04:34:29Z",
            "content": "Tesla wird das neue Model 3 wieder in drei Versionen anbieten, doch eine fehlt noch und wir haben schon seit Wochen immer mehr Details zur Performance-Version für 2024 bekommen. Jetzt gibt es tatsäch… [+1597 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Investing.com"
            },
            "author": "Investing.com",
            "title": "BYD shares rise on plans to double $28 mln buyback",
            "description": "BYD shares rise on plans to double $28 mln buyback",
            "url": "https://www.investing.com/news/stock-market-news/byd-shares-rise-on-plans-to-double-28-mln-buyback-3314575",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEB2S09I_L.jpg",
            "publishedAt": "2024-02-26T04:27:06Z",
            "content": "Investing.com-- Shares of Chinese electric vehicle maker BYD Co Ltd (SZ:002594) rose on Monday after its Chairman and CEO Wang Chuanfu proposed the firm double the size of a planned share buyback. \r\n… [+1333 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Moneycontrol"
            },
            "author": "Abhinav Kaul",
            "title": "How Indian investors are gaining as Nvidia sees record rally",
            "description": "Nvidia has grabbed the limelight among global investors as the company recently reached a market capitalisation of $2 trillion, after more than doubling its stock price in the last one year.",
            "url": "https://www.moneycontrol.com/news/business/personal-finance/how-indian-investors-are-gaining-as-nvidia-sees-record-rally-12348461.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/02/Nvidia-652x435.jpg",
            "publishedAt": "2024-02-26T04:23:19Z",
            "content": "The breakneck rally in US-based chipmaker Nvidias share has made Indian investors richer with Rs 1,699 crore invested via the mutual fund route alone, shows data.\r\nNvidia's stock surged 16 percent on… [+5144 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hurriyet.com.tr"
            },
            "author": "Taylan Özgür Dil",
            "title": "Düşük vergi dilimi için Türkiye’ye özel elektrikli motor geliştiren üretici sayısı artıyor... Türkiye’ye özel elektrikli",
            "description": "Geçmişte otomobillerini düşük vergi dilimine sokabilmek için Türkiye’ye özel 1.6 litre veya daha düşük hacimde benzinli motorlar geliştiren üreticiler, elektrikli otomobiller için de benzer bir formül geliştirdi. Motor gücü 160 kW’yı geçmeyen elektrikli araçl…",
            "url": "https://www.hurriyet.com.tr/ekonomi/dusuk-vergi-dilimi-icin-turkiyeye-ozel-elektrikli-motor-gelistiren-uretici-sayisi-artiyor-turkiyeye-ozel-elektrikli-42410663",
            "urlToImage": "https://image.hurimg.com/i/hurriyet/75/0x0/65db9eb2a37685292bf81831.jpg",
            "publishedAt": "2024-02-26T04:00:00Z",
            "content": "p&gt;OTOMOTV üreticileri uzun yllardr modellerini daha düük ÖTV dilimlerine sokabilmek amacyla Türkiyeye özel 1.5 veya 1.6 litre silindir hacminde benzinli motorlar üretiyordu. Bu sayede, aracn fiyat… [+8804 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Tistory.com"
            },
            "author": "T.B",
            "title": "'현실을 받아들이기'까지 5단계",
            "description": "'유명'한 '학자'인 Elizabeth Kubler Ross는 인간이 '현실'을 '받아들이기'까지 5단계를 거친다고 말합니다. '부정'(denial)은 사실에 대한 '통지'를 받은 후 나타나는 '첫 번째' 반응입니다. 희노애락과 '좌절의 끝'에 '마지막' 반응인 수용(acceptance)이라는 단계에 도달합니다. Berkshire Hathaway’s cash pile hit a record $167.6 billion as Warren Buffett decrie…",
            "url": "https://ryueyes11.tistory.com/17698",
            "urlToImage": "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKloQm%2FbtsFhgCt9Mm%2Fdrll9VT0FDB8Fyffqn2fOK%2Fimg.jpg",
            "publishedAt": "2024-02-26T03:58:37Z",
            "content": "'' '' Elizabeth Kubler Ross '' '' 5 . ''(denial) '' '' . '' '' (acceptance) .\r\nBerkshire Hathaway’s cash pile hit a record $167.6 billion as Warren Buffett decried a lack of deals with a chance of \"e… [+3058 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": "Sanji Feng",
            "title": "芭比的粉色摺疊手機將在 MWC 登場，打造它的是剛剛告別 Nokia 品牌的 HMD",
            "description": "2024年2月26日 上午4:57\r\n芭比的粉色摺疊手機將在 MWC 登場，打造它的是剛剛告別 Nokia 品牌的 HMD\r\n去年《芭比》電影帶起的熱度仍在繼續，剛剛告別了 Nokia 品牌的 HMD 宣布將在 MWC 上公布一款以芭比道具為靈感的摺疊手機。它毫無疑問會是一款粉色的產品，而且有閃亮元素點綴。可惜的地方在於 HMD 和 Mattel 只打算做一款「時尚、懷舊、不會讓人對數位世界上癮」的功能型手機，所以在功能上各位就不要有過高的期待了。不過換個思路，如果是給小朋友用的話，這倒也不失為一個好的選擇呢。\r…",
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_3cd33d42-13ea-41d6-a1e7-74e5fecc68a1",
            "urlToImage": null,
            "publishedAt": "2024-02-26T03:57:45Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "finance.yahoo.com",
            "title": "BYD’s New $233,450 EV Supercar to Rival Ferrari, Lamborghini",
            "description": "BYD Co. debuted its most expensive car on Sunday, a 1.68 million yuan ($233,450) high-performance fully-electric supercar pitted against luxury gas-guzzling options offered by rivals such as Ferrari NV and Lamborghini. • None Zelenskiy Says 31,000 Troops Kill…",
            "url": "https://biztoc.com/x/aff7352425e8b611",
            "urlToImage": "https://c.biztoc.com/p/aff7352425e8b611/s.webp",
            "publishedAt": "2024-02-26T03:42:07Z",
            "content": "BYD Co. debuted its most expensive car on Sunday, a 1.68 million yuan ($233,450) high-performance fully-electric supercar pitted against luxury gas-guzzling options offered by rivals such as Ferrari … [+285 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "fortune.com",
            "title": "Tesla-beating BYD unveils $230,000 supercar and $14,000 hatchback in same week",
            "description": "BYD, the Chinese carmaker that recently overtook Elon Musk’s Tesla in global sales of electric vehicles, has struck fear into legacy automakers. That’s primarily because of its low production costs and inexpensive vehicles, which has the likes of Ford and Ste…",
            "url": "https://biztoc.com/x/472590864a297119",
            "urlToImage": "https://c.biztoc.com/p/472590864a297119/og.webp",
            "publishedAt": "2024-02-26T03:16:13Z",
            "content": "BYD, the Chinese carmaker that recently overtook Elon Musks Tesla in global sales of electric vehicles, has struck fear into legacy automakers. Thats primarily because of its low production costs and… [+290 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "abc7news.com",
            "title": "Business booms for San Jose shop, The Giving Pies, after Tesla unexpectedly cancels order",
            "description": "The community is giving back to The Giving Pies in San Jose after Tesla canceled its order that was worth more than $2,000. The community is giving back to The Giving Pies in San Jose after Tesla canceled its order that was worth more than $2,000. The communi…",
            "url": "https://biztoc.com/x/a78d575db58cc067",
            "urlToImage": "https://c.biztoc.com/p/a78d575db58cc067/og.webp",
            "publishedAt": "2024-02-26T03:16:12Z",
            "content": "The community is giving back to The Giving Pies in San Jose after Tesla canceled its order that was worth more than $2,000.The community is giving back to The Giving Pies in San Jose after Tesla canc… [+299 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Tesla-beating BYD unveils $230,000 supercar and $14,000 hatchback in same week - Fortune",
            "description": "Tesla-beating BYD unveils $230,000 supercar and $14,000 hatchback in same weekFortune View Full Coverage on Google News ...",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173154532",
            "urlToImage": null,
            "publishedAt": "2024-02-26T03:14:34Z",
            "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Diksha Madhok",
            "title": "‘India has arrived.’ Why Modi’s economy offers a real alternative to China",
            "description": "China’s slump leaves the world needing a new growth engine. India may fit the bill.",
            "url": "https://www.cnn.com/2024/02/26/business/modi-india-economy-growth-optimism-hnk-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24051373794102.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-02-26T03:08:34Z",
            "content": "For the last three decades, Peeyush Mittal has frequently driven the 185 miles from the Indian capital to the city of Jaipur. The journey always took him 6 hours.\r\nFor 30 years theres been this promi… [+7986 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Paul Tan's Automotive News"
            },
            "author": "Anthony Lim",
            "title": "2024 Tesla Model 3 Performance facelift spied fully uncovered – new styling elements, Ludicrous badging",
            "description": "Following the sighting of a new Tesla Model 3 Performance with its front and rear ends covered last week, the upcoming higher-performance variant of the Model 3 Highland has been spotted again, this time fully […]\nThe post 2024 Tesla Model 3 Performance facel…",
            "url": "https://paultan.org/2024/02/26/2024-tesla-model-3-performance-facelift-spied-fully-uncovered-new-styling-elements-ludicrous-badging/",
            "urlToImage": "https://paultan.org/image/2024/02/Tesla-Model-3-Performance-uncovered-spy-2-1200x630.jpg",
            "publishedAt": "2024-02-26T03:05:20Z",
            "content": "Following the sighting of a new Tesla Model 3 Performance with its front and rear ends covered last week, the upcoming higher-performance variant of the Model 3 Highland has been spotted again, this … [+1755 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Unwire.hk"
            },
            "author": "唐美鳳",
            "title": "為方便員工往返超級工廠 Tesla 德國收購鐵路提供免費列車服務",
            "description": "位於德國格林海德的 Tesla 柏林超級工廠，其員工列車將會在未來數月增設新路線，每天為員工提供往來城市和工廠的免費鐵路服務。Tesla 的員工列車去年 9 月起投入服務，根據當地交通委員會的文件，鐵路會由今年 4 月開始增設以柏林為起點，途經多個車站，並以 Tesla 南站作終點的全新路線。\nThe post 為方便員工往返超級工廠 Tesla 德國收購鐵路提供免費列車服務 appeared first on 香港 unwire.hk 玩生活．樂科技.",
            "url": "https://unwire.hk/2024/02/26/tesla-employee-train-giga-berlin/life-tech/auto/",
            "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2024/02/03-27-694x390.png",
            "publishedAt": "2024-02-26T03:00:13Z",
            "content": "Tesla Tesla 9 4 Tesla \r\n 5:01am 5:41am Tesla Tesla Tesla 24 \r\n 4,500 8 Tesla 1 2 Tesla \r\nteslarati\r\n:<li>YouTuber Cybertruck Tesla</li> <li>Tesla Model 3 Performance </li> <li> Tesla Model 2 </li> \r\n… [+1 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "markets.businessinsider.com",
            "title": "The era of the Magnificent 7 is over, says the analyst who invented the term",
            "description": "It was a good run, but the era of the Magnificent Seven is over for the stock market. • The group's fortunes have diverged, with stocks like Nvidia soaring and Tesla tanking. • \"I don't see these seven names rising together,\" said the analyst who coined the n…",
            "url": "https://biztoc.com/x/d800e9fb35f14102",
            "urlToImage": "https://c.biztoc.com/p/d800e9fb35f14102/og.webp",
            "publishedAt": "2024-02-26T02:34:07Z",
            "content": "It was a good run, but the era of the Magnificent Seven is over for the stock market.The group's fortunes have diverged, with stocks like Nvidia soaring and Tesla tanking.\"I don't see these seven nam… [+245 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Marketscreener.com"
            },
            "author": null,
            "title": "Faraday Future Announces Updated Master Plan 1.1 to Strategically Position Itself for Growth in 2024",
            "description": "(marketscreener.com) \n\nAn open letter from Matthias Aydt, Global CEO of Faraday Future.\n\n\nhttps://www.marketscreener.com/quote/stock/FARADAY-FUTURE-INTELLIGEN-125090786/news/Faraday-Future-Announces-Updated-Master-Plan-1-1-to-Strategically-Position-Itself-for…",
            "url": "https://www.marketscreener.com/quote/stock/FARADAY-FUTURE-INTELLIGEN-125090786/news/Faraday-Future-Announces-Updated-Master-Plan-1-1-to-Strategically-Position-Itself-for-Growth-in-2024-46025218/",
            "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
            "publishedAt": "2024-02-26T02:01:02Z",
            "content": "An open letter from Matthias Aydt, Global CEO of Faraday Future.\r\nFaraday Future Intelligent Electric Inc. (NASDAQ: FFIE) (Faraday Future, FF or Company), a California-based global shared intelligent… [+15990 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "R7.com"
            },
            "author": "Marcos Camargo Jr.",
            "title": "Marcas mudam a direção e vão lançar carros elétricos pequenos",
            "description": "Vendas\ncaíram em média 17% neste segmento só no ano passado nos EUA",
            "url": "https://noticias.r7.com/prisma/autos-carros/marcas-mudam-a-direcao-e-vao-lancar-carros-eletricospequenos-26022024",
            "urlToImage": "https://img.r7.com/images/ford-lanca-primeiro-suv-pequeno-e-eletrico-na-europa-puma-gen-e-17022024083652996?dimensions=160x90",
            "publishedAt": "2024-02-26T02:00:02Z",
            "content": "Ford ainda não deu detalhes sobre a capacidade da bateria e a autonomia do carro\n Ford/Divulgação\n \n\n\n \n\nA recente crise dos carros elétricos com redução nas vendas deixou os executivos atentos ao mo… [+3363 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Standaard.be"
            },
            "author": "Ruben Mooijman",
            "title": "Tesla verliest aan populariteit als bedrijfswagen: heeft het zichzelf buitenspel gezet?",
            "description": "Door de prijspolitiek van het Amerikaanse merk Tesla zijn leasebedrijven terughoudender geworden. Het automerk staat onder druk op de bedrijfswagenmarkt.",
            "url": "https://www.standaard.be/cnt/dmf20240225_96144521",
            "urlToImage": "https://static.standaard.be/Assets/Images_Upload/2024/02/25/1a624482-602c-4a00-ba52-3eae61cafb9f.jpg?maxheight=416&maxwidth=568",
            "publishedAt": "2024-02-26T02:00:00Z",
            "content": "Ben je -26 jaar? Ontdek de jongerenformule van De Standaard en lees alle artikels van 5 nieuwsmerken."
            },
            {
            "source": {
            "id": null,
            "name": "The Daily Caller"
            },
            "author": "Will Kessler",
            "title": "‘Potential Is Unknown’: What Nvidia’s Meteoric Stock Rise Says About The Future Of The Economy",
            "description": "Nvidia has shot up in value following speculation about the potential economic impact of new technology that some investors believe could increase productivity.",
            "url": "https://dailycaller.com/2024/02/25/nvidias-stock-rise-says-about-future-economy/",
            "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2024/02/GettyImages-1258278859-scaled-e1708718802622.jpg",
            "publishedAt": "2024-02-26T00:14:03Z",
            "content": "<ul><li>Nvidia posted huge fourth quarter results on Tuesday, up 265% from one year prior, launching the largest one-day single-stock rally the market has ever seen.</li><li>Investors are flocking to… [+8138 chars]"
            },
            {
            "source": {
            "id": "cbs-news",
            "name": "CBS News"
            },
            "author": "Lesley Stahl, Aliza Chasan",
            "title": "U.S. ambassador to China stresses importance of managing competition",
            "description": "The U.S. ambassador to China explains why navigating America's competing interests in China is a difficult balancing act.",
            "url": "https://www.cbsnews.com/news/china-us-relationship-nicholas-burns-60-minutes/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/02/22/d1f6f5e5-ca9f-4ea1-be59-cd3f2a3a72f2/thumbnail/1200x630/81794016e1a86418ba52fc5fee015fa6/burns-cu-china.jpg?v=26439302e0bbe3219b6ef78d2fd37ce0",
            "publishedAt": "2024-02-26T00:00:23Z",
            "content": "Rivalry and mistrust between the U.S. and China have shaken the confidence of the business world and pushed the relationship between the two countries to its lowest point in decades.\r\nBut walking awa… [+7423 chars]"
            },
            {
            "source": {
            "id": "cbs-news",
            "name": "CBS News"
            },
            "author": "Lesley Stahl",
            "title": "China's crackdown on American businesses leaves investors in the U.S. wary",
            "description": "America's relationship with China is the \"most important, most competitive and most dangerous\" the U.S. has in the world right now, the U.S. ambassador to China says.",
            "url": "https://www.cbsnews.com/news/china-crackdown-on-american-business-leaves-investors-in-us-wary-60-minutes-transcript/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/02/22/d9a61fce-69da-4fb8-8c3f-40dc90d3439c/thumbnail/1200x630/156879febfa837a6611534f106e8adec/china-video.jpg?v=26439302e0bbe3219b6ef78d2fd37ce0",
            "publishedAt": "2024-02-26T00:00:21Z",
            "content": "American CEOs used to swoon over China. Its vast pool of consumers has been a magnetic draw for decades. But doing business there has become so fraught and risky – with intellectual property theft an… [+24523 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "aol.com",
            "title": "Tesla-beating BYD unveils $230,000 supercar and $14,000 hatchback in same week",
            "description": "BYD, the Chinese carmaker that recently overtook Elon Musk’s Tesla in global sales of electric vehicles, has struck fear into legacy automakers. That’s primarily because of its low production costs and inexpensive vehicles, which has the likes of Ford and Ste…",
            "url": "https://biztoc.com/x/a92cf93b75125b4d",
            "urlToImage": "https://c.biztoc.com/p/a92cf93b75125b4d/s.webp",
            "publishedAt": "2024-02-25T23:36:06Z",
            "content": "BYD, the Chinese carmaker that recently overtook Elon Musks Tesla in global sales of electric vehicles, has struck fear into legacy automakers. Thats primarily because of its low production costs and… [+284 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Thebridge.jp"
            },
            "author": "TechNode",
            "title": "移動型産業ロボットを開発する中国YOUIBOT（優艾智合）、日本進出から2年を経てCEOが語る世界戦略",
            "description": "中国国内のスマート製造業が新たな発展段階に入るにつれ、ロボットの需要は高まり続けている。YOUIBOT は、産業用移動ロボットの生産に大きな影響力を持つ企業として、中国の製造業全体におけるロボット利用の正常化に大きな影響を与えている。中国におけるパイオニアである同社は、アジア太平洋地域、ヨーロッパ、アメリカの市場を開拓し、国際的な拡大も視野に入れている。 TechNode は、Next China...\nThe post 移動型産業ロボットを開発する中国YOUIBOT（優艾智合）、日本進出から2年を経てCEOが語…",
            "url": "https://thebridge.jp/2024/02/next-china-youibot-chinas-industrial-mobile-robot-pioneer-is-going-global",
            "urlToImage": "https://thebridge.jp/wp-content/uploads/2024/02/1a0cb2586a599176a243b94ca0c85b67.png",
            "publishedAt": "2024-02-25T23:00:32Z",
            "content": "YOUIBOT CEO Zhang ChaohuiCredit: YOUIBOT\r\nYOUIBOT \r\nTechNode Next China YOUIBOT CEO Zhang Chaohui\r\n1. YOUIBOT \r\nYOUIBOT \r\nYOUIBOT YOUIBOT YOUIBOT \r\nCredit: YOUIBOT\r\nYOUIBOT AI YOUIBOT \r\nYOUIBOT 2021Y… [+313 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "China, Xi Jinping Plan to Crush Elon Musk, Tesla, and the US EV Industry - Business Insider",
            "description": "China, Xi Jinping Plan to Crush Elon Musk, Tesla, and the US EV IndustryBusiness Insider Even the World's Biggest Electric-Vehicle Market Is SlowingThe Wall Street Journal West braces for China's electric car shockYahoo Finance China's EV Growth Set To Explod…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173153248",
            "urlToImage": null,
            "publishedAt": "2024-02-25T22:52:55Z",
            "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "WCVB Boston"
            },
            "author": "Russ Reed",
            "title": "Puppy spotted along I-93 on-ramp in Boston quickly finds new home",
            "description": "The 10-week-old Chihuahua named Sparkle was officially available for adoption Sunday, and it didn't take long before a couple took her in.",
            "url": "https://www.wcvb.com/article/puppy-found-on-i93-on-ramp-rescued-boston-massachusetts/46962591",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/sparkle-the-chihuahua-arl-boston-2-25-2024-65dbb82615ca2.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            "publishedAt": "2024-02-25T22:49:41Z",
            "content": "BOSTON —A young puppy that was recently found along an on-ramp heading toward Interstate 93 in Boston did not take long to find a new place to call home.\r\nMike DeFina, media relations manager for the… [+2978 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Softpedia.com"
            },
            "author": "Softpedia Drivers",
            "title": "NVIDIA Data Center Graphics Driver 474.82 for Server 2022",
            "description": "Compatible A-Series:- NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA A10, NVIDIA A2Compatible RTX-Series:- RTX 8000, RTX 6000, NVIDIA RTX A6000, NVIDIA RTX A5000, NVIDIA RTX A4000, NVIDIA T1000, NVIDIA T600, NVIDIA T400 Compatible HGX-Se…",
            "url": "https://drivers.softpedia.com/get/GRAPHICS-BOARD/NVIDIA/NVIDIA-Data-Center-Graphics-Driver-474-82-for-Server-2022.shtml",
            "urlToImage": "https://cdnssl.softpedia.com/_img/softpedia_logo_rss.png",
            "publishedAt": "2024-02-25T22:48:00Z",
            "content": "Compatible A-Series:\r\n- NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA A10, NVIDIA A2\r\nCompatible RTX-Series:\r\n- RTX 8000, RTX 6000, NVIDIA RTX A6000, NVIDIA RTX A5000, NVIDIA R… [+2108 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "VOA News"
            },
            "author": "webdesk@voanews.com (Reuters)",
            "title": "Facing Chinese EV Rivals, Europe's Automakers Squeeze Suppliers on Costs",
            "description": "London — Europe's automakers and their already-stretched suppliers face a tough year as they race to cut costs for electric models to counter leaner Chinese rivals which are bringing cheaper vehicles to challenge them on their home turf.\n\nA big question is ho…",
            "url": "https://www.voanews.com/a/facing-chinese-ev-rivals-europe-s-automakers-squeeze-suppliers-on-costs/7502058.html",
            "urlToImage": "https://gdb.voanews.com/4DC0E1B3-3A7E-454D-A39F-5EDDCD7D45F6.jpg",
            "publishedAt": "2024-02-25T22:46:03Z",
            "content": "London  Europe's automakers and their already-stretched suppliers face a tough year as they race to cut costs for electric models to counter leaner Chinese rivals which are bringing cheaper vehicles … [+3797 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Softpedia.com"
            },
            "author": "Softpedia Drivers",
            "title": "NVIDIA Data Center Graphics Driver 474.82 for Server 2016",
            "description": "Compatible RTX-Series:- RTX 8000, RTX 6000, NVIDIA RTX A6000, NVIDIA RTX A5000, NVIDIA RTX A4000, NVIDIA T1000, NVIDIA T600, NVIDIA T400 Compatible T-Series:- Tesla T4 Compatible V-Series:- Tesla V100 Compatible P-Series:- Tesla P100, Tesla P40, Tesla P6, Tes…",
            "url": "https://drivers.softpedia.com/get/GRAPHICS-BOARD/NVIDIA/NVIDIA-Data-Center-Graphics-Driver-474-82-for-Server-2016.shtml",
            "urlToImage": "https://cdnssl.softpedia.com/_img/softpedia_logo_rss.png",
            "publishedAt": "2024-02-25T22:45:39Z",
            "content": "Compatible RTX-Series:\r\n- RTX 8000, RTX 6000, NVIDIA RTX A6000, NVIDIA RTX A5000, NVIDIA RTX A4000, NVIDIA T1000, NVIDIA T600, NVIDIA T400\r\nCompatible T-Series:\r\n- Tesla T4\r\nCompatible V-Series:\r\n- T… [+1951 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Softpedia.com"
            },
            "author": "Softpedia Drivers",
            "title": "NVIDIA Data Center Graphics Driver 474.82 for Server 2019",
            "description": "Compatible RTX-Series:- RTX 8000, RTX 6000, NVIDIA RTX A6000, NVIDIA RTX A5000, NVIDIA RTX A4000, NVIDIA T1000, NVIDIA T600, NVIDIA T400 Compatible T-Series:- Tesla T4 Compatible V-Series:- Tesla V100 Compatible P-Series:- Tesla P100, Tesla P40, Tesla P6, Tes…",
            "url": "https://drivers.softpedia.com/get/GRAPHICS-BOARD/NVIDIA/NVIDIA-Data-Center-Graphics-Driver-474-82-for-Server-2019.shtml",
            "urlToImage": "https://cdnssl.softpedia.com/_img/softpedia_logo_rss.png",
            "publishedAt": "2024-02-25T22:45:39Z",
            "content": "Compatible RTX-Series:\r\n- RTX 8000, RTX 6000, NVIDIA RTX A6000, NVIDIA RTX A5000, NVIDIA RTX A4000, NVIDIA T1000, NVIDIA T600, NVIDIA T400\r\nCompatible T-Series:\r\n- Tesla T4\r\nCompatible V-Series:\r\n- T… [+1951 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Softpedia.com"
            },
            "author": "Softpedia Drivers",
            "title": "NVIDIA Data Center Graphics Driver 474.82",
            "description": "Compatible A-Series:- NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA A10, NVIDIA A2 Compatible RTX-Series:- RTX 8000, RTX 6000, NVIDIA RTX A6000, NVIDIA RTX A5000, NVIDIA RTX A4000, NVIDIA T1000, NVIDIA T600, NVIDIA T400 Compatible HGX-S…",
            "url": "https://drivers.softpedia.com/get/GRAPHICS-BOARD/NVIDIA/NVIDIA-Data-Center-Graphics-Driver-474-82.shtml",
            "urlToImage": "https://cdnssl.softpedia.com/_img/softpedia_logo_rss.png",
            "publishedAt": "2024-02-25T22:44:55Z",
            "content": "Compatible A-Series:\r\n- NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA A10, NVIDIA A2\r\nCompatible RTX-Series:\r\n- RTX 8000, RTX 6000, NVIDIA RTX A6000, NVIDIA RTX A5000, NVIDIA R… [+2106 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Softpedia.com"
            },
            "author": "Softpedia Drivers",
            "title": "NVIDIA Data Center Graphics Driver 551.61 for Server 2022",
            "description": "Compatible L-Series:- L40, L40S, L20, L4, L2 Compatible H-Series:- NVIDIA H100 PCIe, NVIDIA H100 NVL, NVIDIA H800 PCIe, NVIDIA H800 NVL Compatible A-Series: - NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA A10, NVIDIA A2 Compatible RTX-S…",
            "url": "https://drivers.softpedia.com/get/GRAPHICS-BOARD/NVIDIA/NVIDIA-Data-Center-Graphics-Driver-551-61-for-Server-2022.shtml",
            "urlToImage": "https://cdnssl.softpedia.com/_img/softpedia_logo_rss.png",
            "publishedAt": "2024-02-25T22:40:11Z",
            "content": "Compatible L-Series:\r\n- L40, L40S, L20, L4, L2\r\nCompatible H-Series:\r\n- NVIDIA H100 PCIe, NVIDIA H100 NVL, NVIDIA H800 PCIe, NVIDIA H800 NVL\r\nCompatible A-Series:\r\n - NVIDIA A800, NVIDIA A100, NVIDIA… [+2224 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Softpedia.com"
            },
            "author": "Softpedia Drivers",
            "title": "NVIDIA Data Center Graphics Driver 551.61 for Server 2019",
            "description": "Compatible L-Series:- L40, L40S, L20, L4, L2 Compatible H-Series:- NVIDIA H100 PCIe, NVIDIA H100 NVL, NVIDIA H800 PCIe, NVIDIA H800 NVL Compatible A-Series: - NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA A10, NVIDIA A2 Compatible RTX-S…",
            "url": "https://drivers.softpedia.com/get/GRAPHICS-BOARD/NVIDIA/NVIDIA-Data-Center-Graphics-Driver-551-61-for-Server-2019.shtml",
            "urlToImage": "https://cdnssl.softpedia.com/_img/softpedia_logo_rss.png",
            "publishedAt": "2024-02-25T22:40:11Z",
            "content": "Compatible L-Series:\r\n- L40, L40S, L20, L4, L2\r\nCompatible H-Series:\r\n- NVIDIA H100 PCIe, NVIDIA H100 NVL, NVIDIA H800 PCIe, NVIDIA H800 NVL\r\nCompatible A-Series:\r\n - NVIDIA A800, NVIDIA A100, NVIDIA… [+2224 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Softpedia.com"
            },
            "author": "Softpedia Drivers",
            "title": "NVIDIA Data Center Graphics Driver 551.61",
            "description": "Compatible L-Series:- L40, L40S, L20, L4, L2 Compatible H-Series:- NVIDIA H100 NVL, NVIDIA H800 NVL Compatible A-Series:- NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA A10, NVIDIA A2 Compatible RTX-Series:- RTX 8000, RTX 6000, NVIDIA RT…",
            "url": "https://drivers.softpedia.com/get/GRAPHICS-BOARD/NVIDIA/NVIDIA-Data-Center-Graphics-Driver-551-61.shtml",
            "urlToImage": "https://cdnssl.softpedia.com/_img/softpedia_logo_rss.png",
            "publishedAt": "2024-02-25T22:40:11Z",
            "content": "Compatible L-Series:\r\n- L40, L40S, L20, L4, L2\r\nCompatible H-Series:\r\n- NVIDIA H100 NVL, NVIDIA H800 NVL\r\nCompatible A-Series:\r\n- NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA … [+2154 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Softpedia.com"
            },
            "author": "Softpedia Drivers",
            "title": "NVIDIA Data Center Graphics Driver 538.33 for Server 2022",
            "description": "Compatible L-Series:- L40, L40S, L20, L4, L2 Compatible H-Series:- NVIDIA H100 PCIe, NVIDIA H100 NVL, NVIDIA H800 PCIe, NVIDIA H800 NVL Compatible A-Series: - NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA A10, NVIDIA A2 Compatible RTX-S…",
            "url": "https://drivers.softpedia.com/get/GRAPHICS-BOARD/NVIDIA/NVIDIA-Data-Center-Graphics-Driver-538-33-for-Server-2022.shtml",
            "urlToImage": "https://cdnssl.softpedia.com/_img/softpedia_logo_rss.png",
            "publishedAt": "2024-02-25T22:37:04Z",
            "content": "Compatible L-Series:\r\n- L40, L40S, L20, L4, L2\r\nCompatible H-Series:\r\n- NVIDIA H100 PCIe, NVIDIA H100 NVL, NVIDIA H800 PCIe, NVIDIA H800 NVL\r\nCompatible A-Series:\r\n - NVIDIA A800, NVIDIA A100, NVIDIA… [+2235 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Softpedia.com"
            },
            "author": "Softpedia Drivers",
            "title": "NVIDIA Data Center Graphics Driver 538.33 for Server 2019",
            "description": "Compatible L-Series:- L40, L40S, L20, L4, L2 Compatible H-Series:- NVIDIA H100 PCIe, NVIDIA H100 NVL, NVIDIA H800 PCIe, NVIDIA H800 NVL Compatible A-Series: - NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA A10, NVIDIA A2 Compatible RTX-S…",
            "url": "https://drivers.softpedia.com/get/GRAPHICS-BOARD/NVIDIA/NVIDIA-Data-Center-Graphics-Driver-538-33-for-Server-2019.shtml",
            "urlToImage": "https://cdnssl.softpedia.com/_img/softpedia_logo_rss.png",
            "publishedAt": "2024-02-25T22:37:03Z",
            "content": "Compatible L-Series:\r\n- L40, L40S, L20, L4, L2\r\nCompatible H-Series:\r\n- NVIDIA H100 PCIe, NVIDIA H100 NVL, NVIDIA H800 PCIe, NVIDIA H800 NVL\r\nCompatible A-Series:\r\n - NVIDIA A800, NVIDIA A100, NVIDIA… [+2235 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Softpedia.com"
            },
            "author": "Softpedia Drivers",
            "title": "NVIDIA Data Center Graphics Driver 538.33",
            "description": "Compatible L-Series:- L40, L40S, L20, L4, L2 Compatible H-Series:- NVIDIA H100 NVL, NVIDIA H800 NVL Compatible A-Series:- NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA A10, NVIDIA A2 Compatible RTX-Series:- RTX 8000, RTX 6000, NVIDIA RT…",
            "url": "https://drivers.softpedia.com/get/GRAPHICS-BOARD/NVIDIA/NVIDIA-Data-Center-Graphics-Driver-538-33.shtml",
            "urlToImage": "https://cdnssl.softpedia.com/_img/softpedia_logo_rss.png",
            "publishedAt": "2024-02-25T22:37:02Z",
            "content": "Compatible L-Series:\r\n- L40, L40S, L20, L4, L2\r\nCompatible H-Series:\r\n- NVIDIA H100 NVL, NVIDIA H800 NVL\r\nCompatible A-Series:\r\n- NVIDIA A800, NVIDIA A100, NVIDIA A40, NVIDIA A30, NVIDIA A16, NVIDIA … [+2164 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "dailywire.com",
            "title": "Mercedes Scraps Plan To Only Sell Electric Vehicles",
            "description": "Mercedes-Benz is scrapping its plans to only sell electric vehicles after 2030 as consumer demand for EVs remains lower than what automakers projected. The Verge said that the report showed a stunning turnaround for the German automaker from its pledge three …",
            "url": "https://biztoc.com/x/c09bda4875a97576",
            "urlToImage": "https://c.biztoc.com/p/c09bda4875a97576/og.webp",
            "publishedAt": "2024-02-25T22:22:09Z",
            "content": "Mercedes-Benz is scrapping its plans to only sell electric vehicles after 2030 as consumer demand for EVs remains lower than what automakers projected.The Verge said that the report showed a stunning… [+275 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Quartz India"
            },
            "author": "Tom McParland / Jalopnik",
            "title": "Porsche's electric rival to Tesla has lost up to $100,000 in value",
            "description": "Depreciation is hitting EVs harder than most other vehicles. A combination of technology upgrades, price fluctuations on new cars, and lack of demand has meant a rapid drop in value for many electric models. This phenomenon is especially dramatic for Porsche’…",
            "url": "https://qz.com/porsche-tesla-taycan-turbo-ev-1851285396",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/46321e656b2c04f2219a62c4ebfbb25a.jpg",
            "publishedAt": "2024-02-25T21:49:00Z",
            "content": "Depreciation is hitting EVs harder than most other vehicles. A combination of technology upgrades, price fluctuations on new cars, and lack of demand has meant a rapid drop in value for many electric… [+2467 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "特斯拉棄單4千個派「店家慘賠50萬」！馬斯克開口結局神反轉",
            "description": "國際中心／巫旻璇報導電動車大廠特斯拉（Tesla）遭媒體爆料，本月14日向美國一家麵包店下訂4000個派，卻在店家出貨前「棄單」，讓店家損失1.6萬美元（約新台幣50萬元），消息曝光後，特斯拉飽受民眾批評。對此執行長馬斯克（Elon Musk）也親自發文回覆，會妥善處理該事件，讓此事「變得美好」。不過店家爆出特斯拉棄單事件後，生意反而更興隆，吸引大批民眾朝聖。",
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_8f867e0e-958f-4e58-89da-2c302a35a430",
            "urlToImage": null,
            "publishedAt": "2024-02-25T21:28:43Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "nypost.com",
            "title": "Only fools believe stock surge is just the ‘Magnificent 7’",
            "description": "Current mythology claims “just a handful of stocks” took the S&P 500 to new highs. Supposedly AI hype driving the “Magnificent 7” Tech stocks in a 2000-era bubblicious redux. Wrong. That just grasps at straws to dismiss the bull market so few foresaw. No, thi…",
            "url": "https://biztoc.com/x/e50785368b59f092",
            "urlToImage": "https://c.biztoc.com/p/e50785368b59f092/og.webp",
            "publishedAt": "2024-02-25T21:26:11Z",
            "content": "Current mythology claims just a handful of stocks took the S&amp;P 500 to new highs. Supposedly AI hype driving the Magnificent 7 Tech stocks in a 2000-era bubblicious redux. Wrong. That just grasps … [+286 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "fortune.com",
            "title": "Tesla-beating BYD unveils $230,000 supercar and $14,000 hatchback in same week",
            "description": "BYD, the Chinese carmaker that recently overtook Elon Musk’s Tesla in global electric-vehicle sales, has struck fear into legacy automakers. That’s primarily because of its low production costs and inexpensive vehicles, which has the likes of Ford and Stellan…",
            "url": "https://biztoc.com/x/47b7affe86f08f8b",
            "urlToImage": "https://c.biztoc.com/p/47b7affe86f08f8b/s.webp",
            "publishedAt": "2024-02-25T21:22:05Z",
            "content": "BYD, the Chinese carmaker that recently overtook Elon Musks Tesla in global electric-vehicle sales, has struck fear into legacy automakers. Thats primarily because of its low production costs and ine… [+286 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Koreaboo.com"
            },
            "author": "Koreaboo",
            "title": "K-Pop Fans Have The Most Divided Reactions To Former NCT Member Lucas's Documentary",
            "description": "Following the release of former NCT Lucas's \"Freeze,\" a YouTube documentary highlighting his return, K-Pop fans are fiercely divided in their reactions.",
            "url": "https://www.koreaboo.com/news/kpop-fans-reactions-nct-lucas-documentary-sm/",
            "urlToImage": "https://img.koreaboo.com/2024/02/lucas-doc-feature.jpg",
            "publishedAt": "2024-02-25T21:20:34Z",
            "content": "Following the release of former NCT member Lucas‘s Freeze, a YouTube documentary highlighting the resumption of his activities, K-Pop fans from Korea and worldwide are fiercely divided in their react… [+5049 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "finance.yahoo.com",
            "title": "Missed Out on Nvidia? Buy These Artificial Intelligence (AI) Stocks Instead",
            "description": "Without a doubt, many artificial intelligence (AI) investors are kicking themselves for missing out on Nvidia's big gains. With the stock up 280% in the last year and over 1,800% in five years, it is one of the major beneficiaries in the AI space. Nonetheless…",
            "url": "https://biztoc.com/x/972f75168bb14b51",
            "urlToImage": "https://c.biztoc.com/p/972f75168bb14b51/og.webp",
            "publishedAt": "2024-02-25T21:12:08Z",
            "content": "Without a doubt, many artificial intelligence (AI) investors are kicking themselves for missing out on Nvidia's big gains. With the stock up 280% in the last year and over 1,800% in five years, it is… [+286 chars]"
            },
            {
            "source": {
            "id": "fortune",
            "name": "Fortune"
            },
            "author": "Steve Mollman",
            "title": "Tesla-beating BYD unveils $230,000 supercar and $14,000 hatchback in same week",
            "description": "China's top EV maker BYD, backed by Warren Buffett’s Berkshire Hathaway, is more versatile than many might realize.",
            "url": "https://fortune.com/2024/02/25/byd-unveils-230k-supercar-14k-hatchback-same-week-china-ev-automotive-tesla-beater/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2024/02/GettyImages-1915751378-e1708894758728.jpg?resize=1200,600",
            "publishedAt": "2024-02-25T21:06:48Z",
            "content": "BYD, the Chinese carmaker that recently overtook Elon Musks Tesla in global sales of electric vehicles, has struck fear into legacy automakers. Thats primarily because of its low production costs and… [+3016 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Tesla-beating BYD unveils $230,000 supercar and $14,000 hatchback in same week",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_a8ad5a17-de6d-481d-b084-ce02a1b09641",
            "urlToImage": null,
            "publishedAt": "2024-02-25T21:06:48Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Mobile-review.com"
            },
            "author": "Эльдар Муртазин",
            "title": "Бирюльки №787. Как США лишились связи, а фондовый рынок показал рекорды",
            "description": "Сбой в России, массовый сбой в США у AT&T; про умные часы Galaxy Fit3 и конкурентов; типичный средний сегмент Honor X9b; технология NearLink как замена Bluetooth; фондовый рынок США и рост NVIDIA.",
            "url": "https://mobile-review.com/all/articles/birulki/biryulki-n787-kak-ssha-lishilis-svyazi-a-fondovyj-rynok-pokazal-rekordy/",
            "urlToImage": "https://mobile-review.com/all/wp-content/uploads/2024/02/anons-62.jpg",
            "publishedAt": "2024-02-25T21:02:00Z",
            "content": ".\r\n , , - , . Qiwi , . , App Gallery Huawei, Qiwi . , «», - ( ). - , , , , . , AT&amp;T. , .\r\n, , , — , .\r\nke ji gan, . . . - , . , , . - — , , .\r\n , , , . 52.8 ! , , ( 38 ), , ! . , , .\r\n , , . !\r\nT… [+2373 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "InvestorsObserver"
            },
            "author": "InvestorsObserver",
            "title": "Faraday Future Announces Updated Master Plan 1.1 to Strategically Position Itself for Growth in 2024",
            "description": "An open letter from Matthias Aydt, Global CEO of Faraday Future.             Faraday Future Intelligent Electric Inc. (NASDAQ: FFIE) (&#x201C;Faraday Future&#x201D;, &#x201C;FF&#x201D; or &#x201C;Company&#x201D;), a California-based global shared intel...",
            "url": "https://www.investorsobserver.com/news/qm-pr/5823765138594883",
            "urlToImage": "https://s3.amazonaws.com/images.investorsobserver.com/io-logo-800x450.jpg",
            "publishedAt": "2024-02-25T21:00:00Z",
            "content": "News HomeMentioned in this article\r\n<ul><li>\r\n An open letter from Matthias Aydt, Global CEO of Faraday Future.\r\n </li></ul>\r\nFaraday Future Intelligent Electric Inc. (NASDAQ: FFIE) (“Faraday Future”… [+16336 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Nacion.com"
            },
            "author": "Alejandro Durán",
            "title": "Nvidia alcanza cifras récord de la mano de la IA. ¿Qué impulsa su éxito?",
            "description": "Nvidia nació enfocada en el desarrollo gráficos para videojuegos, pero más de 30 años después su valor se disparó de la mano de la IA. La Nación explica a qué se debe el rápido crecimiento de la compañía y porqué sus acciones se dispararon un 233% en el últim…",
            "url": "https://www.nacion.com/economia/negocios/nvidia-alcanza-cifras-record-de-la-mano-de-la-ia/QUTCEP567BGVTMNLO45AYNULHA/story/",
            "urlToImage": "https://www.nacion.com/resizer/-GLsY7AnC4gso_2QaWAtpCHL1zk=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/RB6O3MQL2BBXLKNSIGDORAISRM.jpg",
            "publishedAt": "2024-02-25T20:50:44Z",
            "content": "Nvidia, compañía dedicada a la fabricación de procesadores, destacó en los mercados internacionales durante la última semana tras la publicación de sus resultados fiscales del último año, los cuales … [+5606 chars]"
            },
            {
            "source": {
            "id": "t3n",
            "name": "T3n"
            },
            "author": "Jörn Brien",
            "title": "Streik gegen Tesla: Jetzt geht es auch den Supercharger-Stationen an den Kragen",
            "description": "Keine E-Autos, keine Nummernschilder, keine Müllabfuhr: Immer mehr Gewerkschaften in Schweden und anderen skandinavischen Ländern streiken gegen Tesla. Jetzt ist auch das Supercharger-Netz dran.weiterlesen auf t3n.de",
            "url": "https://t3n.de/news/streik-tesla-schweden-supercharger-1610092/",
            "urlToImage": "https://t3n.de/news/wp-content/uploads/2022/09/tesla-supercharger-standorte-deutschland.jpg",
            "publishedAt": "2024-02-25T20:19:57Z",
            "content": "Ende Oktober 2023 waren in Schweden rund 130 Mechaniker:innen in den Streik getreten, um von Tesla einen Tarifvertrag zu erkämpfen. Seitdem haben sich erst mehrere schwedische und später auch weitere… [+2130 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "BeInCrypto"
            },
            "author": "Luis Blanco",
            "title": "¿Por qué Satoshi Nakamoto no era partidario en describir a Bitcoin como una “inversión”?",
            "description": "Bitcoin (BTC) se ha apreciado tanto en los últimos meses que la cripto moneda vuelve a valer más que algunas empresas importantes, incluida Tesla. Desde entonces, ha vuelto a ser muy popular entre los inversores, pero el creador de Bitcoin, Sathoshi Nakamoto,…",
            "url": "https://es.beincrypto.com/sathoshi-nakamoto-no-partidario-describir-bitcoin-inversion/",
            "urlToImage": "https://s32679.pcdn.co/wp-content/uploads/2023/03/BIC_DUSTING_ATTACK_VENDETTA.png.webp",
            "publishedAt": "2024-02-25T20:16:00Z",
            "content": "Bitcoin (BTC) se ha apreciado tanto en los últimos meses que la cripto moneda vuelve a valer más que algunas empresas importantes, incluida Tesla. Desde entonces, ha vuelto a ser muy popular entre lo… [+2970 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ferra.ru"
            },
            "author": "Максим Многословный",
            "title": "Илон Маск столкнулся с новыми проблемами на фоне резкого падения акций Tesla",
            "description": "Илон Маск, самый богатый человек в мире, столкнется с множеством проблем в 2024 году, среди которых центральное место занимает значительное падение стоимости акций Tesla, сообщают аналитики и СМИ.",
            "url": "https://www.ferra.ru/news/techlife/ilon-mask-stolknulsya-s-novymi-problemami-na-fone-rezkogo-padeniya-akcii-tesla-25-02-2024.htm",
            "urlToImage": "https://www.ferra.ru/imgs/2024/02/25/10/6370722/5f4ac8229af9443ad3945029d55804ac9d860f90.png",
            "publishedAt": "2024-02-25T20:15:11Z",
            "content": "2023 Tesla  23%   . ,     . 188   Tesla,    « »,   . ,      Tesla,  21 - .\r\n ,      Tesla   55 ,  . Tesla  .\r\n , , Tesla - , ,    . , ,   , ."
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "finance.yahoo.com",
            "title": "Missed Out on Nvidia? Buy These Artificial Intelligence (AI) Stocks Instead",
            "description": "Without a doubt, many artificial intelligence (AI) investors are kicking themselves for missing out on Nvidia's big gains. With the stock up 280% in the last year and over 1,800% in five years, it is one of the major beneficiaries in the AI space. Nonetheless…",
            "url": "https://biztoc.com/x/d2a6d665275fdca7",
            "urlToImage": "https://c.biztoc.com/p/d2a6d665275fdca7/s.webp",
            "publishedAt": "2024-02-25T20:14:08Z",
            "content": "Without a doubt, many artificial intelligence (AI) investors are kicking themselves for missing out on Nvidia's big gains. With the stock up 280% in the last year and over 1,800% in five years, it is… [+286 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Freerepublic.com"
            },
            "author": "Barons via MSN",
            "title": "Moon Stock Plummets After Odysseus Lunar Lander Tips Over. NASA Calls Landing a Success.",
            "description": "Stock in Intuitive Machines sharply dropped in after-hours trading Friday after the company’s Odyessus lunar lander tipped over when it landed on the moon’s surface. The extreme stock move shows just how hard it is to trade events that will move a small capit…",
            "url": "https://freerepublic.com/focus/f-news/4219911/posts",
            "urlToImage": null,
            "publishedAt": "2024-02-25T20:09:42Z",
            "content": "Skip to comments.\r\nMoon Stock Plummets After Odysseus Lunar Lander Tips Over. NASA Calls Landing a Success.Barons via MSN ^\r\n | February 24, 2024\r\n | Al Root\r\nPosted on 02/25/2024 12:09:42 PM PST by … [+4122 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": "陳慜蔚",
            "title": "特斯拉插旗新店 全台第10個展示店座落裕隆城誠品生活",
            "description": "特斯拉（TESLA）2023 年繳出全年總交付量超過 1.3萬輛銷售成績後，今年繼續深耕經營台灣市場，再開出全新TESLA 新北新店體驗店。為TESLA在台第10個展示與體驗店點，坐落於裕隆城內的「誠品生活新店」1 樓，將提供大台北地區消費者全方位的電動車生活風格體驗。",
            "url": "https://tw.stock.yahoo.com/news/%E7%89%B9%E6%96%AF%E6%8B%89%E6%8F%92%E6%97%97%E6%96%B0%E5%BA%97-%E5%85%A8%E5%8F%B0%E7%AC%AC10%E5%80%8B%E5%B1%95%E7%A4%BA%E5%BA%97%E5%BA%A7%E8%90%BD%E8%A3%95%E9%9A%86%E5%9F%8E%E8%AA%A0%E5%93%81%E7%94%9F%E6%B4%BB-040510701.html",
            "urlToImage": "https://media.zenfs.com/ko/chinatimes_money_465/f57665136bbf431ff5798e30431c00f1",
            "publishedAt": "2024-02-25T20:05:10Z",
            "content": "TESLA2023 1.3TESLA TESLA101 \r\nTESLATESLA\r\nTESLA10799550100TESLA 100 8\r\nSCFI2 56.4 3878 1"
            },
            {
            "source": {
            "id": null,
            "name": "TechSpot"
            },
            "author": "Zane Khan",
            "title": "AI startup 'Figure AI' scores $675M from Bezos, Nvidia, and others to advance humanoid robots",
            "description": "Figure AI develops human-like robots powered by artificial intelligence. It raised around $675 million in a recent funding round, with Amazon founder Jeff Bezos and Nvidia investing heavily. Bloomberg sources note that the massive capital injection boosted th…",
            "url": "https://www.techspot.com/news/102017-ai-startup-figure-ai-scores-675m-bezos-nvidia.html",
            "urlToImage": "https://www.techspot.com/images2/news/bigimage/2024/02/2024-02-25-image-3.jpg",
            "publishedAt": "2024-02-25T19:57:00Z",
            "content": "Show me the money: A massive funding round in an AI startup signaled a surge in investor interest in humanoid robots in the wake of the ChatGPT frenzy. The company aims to spearhead a new wave of cap… [+2952 chars]"
            },
            {
            "source": {
            "id": "der-tagesspiegel",
            "name": "Der Tagesspiegel"
            },
            "author": "Gerd Nowakowski",
            "title": "Peugeot E-3008: Der glänzt auch ohne Chrom",
            "description": "Der vollelektrische Kompakt-SUV überzeugt mit einem mutigen sportlich-expressiven Design, bis zu 700 Kilometer Reichweite und 160.000 Kilometer Garantie",
            "url": "https://www.tagesspiegel.de/peugeot-e-3008-der-glanzt-auch-ohne-chrom-11269570.html",
            "urlToImage": "https://www.tagesspiegel.de/images/peugeot1jpg/alternates/BASE_16_9_W1400/peugeot1jpg.jpeg",
            "publishedAt": "2024-02-25T19:49:22Z",
            "content": "Achtung, dies ist eine Warnung: Wenn Sie glitzernden Chrom und Design-Gimmick mögen, dann ist dieses Auto nichts für Sie. Ohne Chrom und Schnörkel - das ist die Devise der Peugeot-Designer für den ne… [+10747 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "cnn.com",
            "title": "No, electric vehicle sales aren’t dropping. Here’s what’s really going on",
            "description": "Tesla has been slashing prices. Ford just cut the price of its Mustang Mach-E, too, plus it cut back production of its electric pickup. And General Motors is thinking about bringing back plug-in hybrids, possibly taking a step back from GM’s earlier commitmen…",
            "url": "https://biztoc.com/x/1618396907f37c7a",
            "urlToImage": "https://c.biztoc.com/p/1618396907f37c7a/og.webp",
            "publishedAt": "2024-02-25T19:32:08Z",
            "content": "Tesla has been slashing prices. Ford just cut the price of its Mustang Mach-E, too, plus it cut back production of its electric pickup. And General Motors is thinking about bringing back plug-in hybr… [+274 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "New York Post"
            },
            "author": "Ken Fisher",
            "title": "Only fools believe stock surge is just the ‘Magnificent 7’ —  It’s not",
            "description": "But every bull market has leaders and laggards.",
            "url": "https://nypost.com/2024/02/25/business/only-fools-believe-stock-surge-is-just-the-magnificent-7-its-not/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/02/newspress-collage-mxxeqad1t-1708888636417.jpg?quality=75&strip=all&1708870690&w=1024",
            "publishedAt": "2024-02-25T19:20:49Z",
            "content": "Current mythology claims just a handful of stocks took the S&amp;P 500 to new highs. Supposedly AI hype driving the Magnificent 7 Tech stocks in a 2000-era bubblicious redux. Wrong. That just grasps … [+4058 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Tesla員工：公司計畫有變「棄單4千個派」害賠50萬！馬斯克開口　結局曝",
            "description": "國際中心／羅欣怡報導 電動車大廠特斯拉（Tesla）遭爆，今年2月14日向加州一間烘焙坊以電話訂購了4000個派，但卻在沒付訂金的情形下，在出貨前片面取消訂單，導致店",
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_5d7139a0-a664-4a2c-9f6d-fecc7e55e9fb",
            "urlToImage": null,
            "publishedAt": "2024-02-25T19:15:10Z",
            "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "ZyCrypto"
            },
            "author": "Olivia Brooke",
            "title": "Bitcoin Bulls Look To Conquer Fresh Milestones After Reclaiming $1 Trillion Market Cap",
            "description": "Bitcoin bulls have been working overtime this month. As prices strive to return to previous highs, other notable metrics have corrected upward.",
            "url": "https://zycrypto.com/bitcoin-bulls-look-to-conquer-fresh-milestones-after-reclaiming-1-trillion-market-cap/",
            "urlToImage": "https://zycrypto.com/wp-content/uploads/2021/02/Bitcoin-Flashes-2017-Bull-Pattern-Metric-Suggests-Price-Can-Go-As-High-As-300K.jpg",
            "publishedAt": "2024-02-25T18:54:00Z",
            "content": "Bitcoin bulls have been working overtime this month. As prices strive to return to previous highs, other notable metrics have corrected upward. Bitcoins market valuation is one metric that has return… [+2680 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Forbes.com.mx"
            },
            "author": "Forbes Staff",
            "title": "Fabricantes de autos europeos buscan reducir costos ante competencia china",
            "description": "Forbes México.\n Fabricantes de autos europeos buscan reducir costos ante competencia china\n\nFabricantes de automóviles europeos buscan reducir costos de los modelos eléctricos para contrarrestar a sus rivales chinos\nFabricantes de autos europeos buscan reduci…",
            "url": "https://www.forbes.com.mx/fabricantes-de-autos-europeos-buscan-reducir-costos-ante-competencia-china/",
            "urlToImage": "https://cdn.forbes.com.mx/2024/01/vehiculos-inteligentes-BYD-autos-electricos.webp",
            "publishedAt": "2024-02-25T18:50:01Z",
            "content": "Fabricantes de automóviles europeos, así como sus proveedores, buscan reducir costos de los modelos eléctricos para contrarrestar a sus rivales chinos, quienes ofertan vehículos más baratos en propio… [+1814 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ferra.ru"
            },
            "author": "Максим Многословный",
            "title": "Последнее видео с роботом Илона Маска выглядело так, будто снимали в 2002 году",
            "description": "Илон Маск недавно поделился видеороликом, демонстрирующим человекоподобного робота Optimus компании Tesla, но интернет больше обсуждал качество видео, чем самого робота.",
            "url": "https://www.ferra.ru/news/techlife/poslednee-video-s-robotom-ilona-maska-vyglyadelo-tak-budto-snimali-v-2002-godu-25-02-2024.htm",
            "urlToImage": "https://www.ferra.ru/imgs/2024/02/25/18/6371185/d82494d92453ed36e4c32da910b4b7300d7ba95a.png",
            "publishedAt": "2024-02-25T18:46:56Z",
            "content": ",  , «»     ,   2000- .   ,     .\r\n,       30 .   ,      .\r\n    .  , ,     ,  «» « »."
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "Elon Musk relied on China to fuel Tesla's rise. Now Beijing is turning on him",
            "description": "When Tesla CEO Elon Musk was asked in 2011 about the Chinese electric-car maker BYD — a Warren Buffett-backed company focused on cheaper eclectic vehicles with a name short for Build Your Dreams — he simply laughed it off. \"Have you seen their car?\" he said w…",
            "url": "https://biztoc.com/x/758b09befc16979a",
            "urlToImage": "https://c.biztoc.com/p/758b09befc16979a/og.webp",
            "publishedAt": "2024-02-25T18:36:08Z",
            "content": "When Tesla CEO Elon Musk was asked in 2011 about the Chinese electric-car maker BYD a Warren Buffett-backed company focused on cheaper eclectic vehicles with a name short for Build Your Dreams he sim… [+287 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Protothema.gr"
            },
            "author": null,
            "title": "Χωρίς να ανατριχιάσουμε, ιδού το ρομπότ της Tesla που είναι έτοιμο",
            "description": "Όλα όσα γνωρίζουμε για το ρομπότ Optimus 2 της Tesla (+video) | Newsauto.gr",
            "url": "https://www.protothema.gr/newsautogr/article/1470680/horis-na-anatrihiasoume-idou-to-robot-tis-tesla-pou-einai-etoimo/",
            "urlToImage": "https://i1.prth.gr/images/640x360share/files/2024-02-25/240212145239_Tesla-Optimus-2-2023_II.jpg",
            "publishedAt": "2024-02-25T18:34:06Z",
            "content": ". , . 6.000+ . On Demand EON."
            },
            {
            "source": {
            "id": null,
            "name": "Frandroid"
            },
            "author": "Jean-Baptiste Passieux",
            "title": "On a essayé le Peugeot E-3008 électrique : enfin un concurrent français du Tesla Model Y",
            "description": "Le Peugeot 3008 profite de sa troisième génération pour faire le grand saut en adoptant une motorisation 100 % électrique. Baptisé Peugeot E-3008, comment la nouvelle voiture électrique de la marque se défend face aux Tesla Model Y et Renault Scénic E-Tech ? …",
            "url": "https://www.frandroid.com/marques/peugeot/1945556_on-a-essaye-le-peugeot-e-3008-electrique-enfin-un-concurrent-francais-du-tesla-model-y",
            "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/02/peugeot-e3008testdrive-2402tc248.jpeg",
            "publishedAt": "2024-02-25T18:31:38Z",
            "content": "Peugeot continue délectrifier sa gamme à marche forcée. Après le segment des citadines (avec la E-208), des petits SUV (E-2008), des compactes et des breaks (E-308 &amp; E-308 SW), la marque français… [+23137 chars]"
            },
            {
            "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
            },
            "author": "Bloomberg",
            "title": "BYD unveils $233,450 EV to rival Ferrari, Lamborghini",
            "description": "BYD became the biggest EV seller globally, overtaking Tesla in the last quarter of 2023. While it is better known for making affordable EVs, the company markets its luxury models under the Yangwang and Fang Cheng Bao brands. With a post-Lunar New Year price w…",
            "url": "https://economictimes.indiatimes.com/industry/renewables/byd-unveils-233450-ev-to-rival-ferrari-lamborghini/articleshow/107990725.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-107990749,width-1200,height-630,imgsize-76980,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-02-25T18:22:41Z",
            "content": "BYD Co debuted its most expensive car on Sunday, a 1.68 million yuan ($233,450) high-performance fully-electric supercar pitted against gas-guzzling options offered by rivals such as Ferrari NV and L… [+1047 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biziday.ro"
            },
            "author": "Vlad",
            "title": "Analiză. Producătorii auto și investitorii își pierd entuziasmul pentru mașini electrice, în special în Europa și SUA, unde stimulentele financiare au fost diminuate în ultimul an. O creștere semnificativă a vânzărilor în acest an va fi evidentă doar pe piața chineză.",
            "description": "Cu toate că în urmă cu doar câțiva ani, vehiculele electrice erau extrem de apreciate de către investitori, acum ele sunt considerate mai puțin profitabile în comparație cu vehiculele cu combustie internă, iar acest lucru se vede inclusiv în “entuziasmul” pro…",
            "url": "https://www.biziday.ro/276906-2/",
            "urlToImage": "https://cdn.biziday.ro/wp-content/uploads/2023/08/dreamstime_l_124527153-scaled.jpg",
            "publishedAt": "2024-02-25T18:20:39Z",
            "content": "Cu toate c în urm cu doar câiva ani, vehiculele electrice erau extrem de apreciate de ctre investitori, acum ele sunt considerate mai puin profitabile în comparaie cu vehiculele cu combustie intern, … [+2912 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "N-tv.de"
            },
            "author": "n-tv NACHRICHTEN",
            "title": "Tesla lässt Kleinbetrieb hängen: Musk will \"die Dinge mit der Bäckerei\" in Ordnung bringen",
            "description": "Die Geschichte einer kleinen Bäckerei in Kalifornien, die vom Autokonzern Tesla einen Großauftrag bekommt und im letzten Moment eiskalt abserviert wird, sorgt weltweit für Empörung. Nun schaltet sich Tesla-Chef Musk persönlich ein. Er fürchtet offenbar einen …",
            "url": "https://www.n-tv.de/wirtschaft/Musk-will-die-Dinge-mit-der-Baeckerei-in-Ordnung-bringen-article24762308.html",
            "urlToImage": "https://bilder3.n-tv.de/img/incoming/crop24762314/9521324331-cImg_16_9-w1200/445401085.jpg",
            "publishedAt": "2024-02-25T18:04:36Z",
            "content": "Die Geschichte einer kleinen Bäckerei in Kalifornien, die vom Autokonzern Tesla einen Großauftrag bekommt und im letzten Moment eiskalt abserviert wird, sorgt weltweit für Empörung. Nun schaltet sich… [+2281 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Donanimhaber.com"
            },
            "author": "Metin Akpınar",
            "title": "Nvidia ve Jeff Bezos, insansı robot girişimi Figure AI’a yatırım yaptı",
            "description": "Nvidia ve Jeff Bezos, insansı robot girişimi Figure AI’a yatırım yaptı. Figure AI, daha önce Microsoft ve ChatGPT, Sora ve Dall E gibi yapay zekaların arkasındaki OpenAI’dan da yatırım almıştı.",
            "url": "https://www.donanimhaber.com/nvidia-ve-jeff-bezos-insansi-robot-girisimine-yatirim-yapti--174567",
            "urlToImage": "https://www.donanimhaber.com/images/images/haber/174567/src_340x1912xnvidia-ve-jeff-bezos-insansi-robot-girisimine-yatirim-yapti.jpg",
            "publishedAt": "2024-02-25T18:00:00Z",
            "content": "a').click(); event.preventDefault();\"&gt;Tam Boyutta Görnsans robot giriimlerine yönelik yatrmlar giderek artyor. Son zamanlarda hzla büyüyen bu endüstriye imdi de Amazonun kurucusu Jeff Bezos ve tek… [+2380 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "aol.com",
            "title": "The era of the Magnificent 7 is over, says the analyst who invented the term",
            "description": "None It was a good run, but the era of the Magnificent Seven is over for the stock market. • None The group's fortunes have diverged, with stocks like Nvidia soaring and Tesla tanking. • None \"I don't see these seven names rising together,\" said the analyst w…",
            "url": "https://biztoc.com/x/41008844f4cfca5e",
            "urlToImage": "https://c.biztoc.com/p/41008844f4cfca5e/s.webp",
            "publishedAt": "2024-02-25T17:56:08Z",
            "content": "None It was a good run, but the era of the Magnificent Seven is over for the stock market.None The group's fortunes have diverged, with stocks like Nvidia soaring and Tesla tanking.None \"I don't see … [+278 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNET"
            },
            "author": "Ry Crist",
            "title": "Starlink Internet Review: Low Satellites, High Pricing - CNET",
            "description": "Starlink’s fleet of low-orbiting satellites promises decent speeds, low latency and unlimited data, but the service comes at a sky-high price.",
            "url": "https://www.cnet.com/home/internet/starlink-internet-review/",
            "urlToImage": "https://www.cnet.com/a/img/resize/f706eda611071e2b30bc8f99602b75c78f78434d/hub/2023/09/14/fb1a9aeb-5da0-4723-ae13-e2f7b528f4c6/starlink-cnetbb-logo-c.png?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2024-02-25T17:56:00Z",
            "content": "\" offer=\"{\"id\":\"bdffaddd-58fd-45e6-bb9f-97b5d96f17e6\",\"label\":\"Starlink\",\"slug\":\"starlink\",\"edition\":[\"us\"],\"imageId\":\"\",\"imgUrl\":\"\",\"imageHeight\":0,\"imageWidth\":0,\"typeLabel\":\"Product\",\"objectType\":… [+24674 chars]"
            },
            {
            "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
            },
            "author": "Dia Rekhi",
            "title": "Ground breaking ceremony of VinFast takes place at Tamil Nadu's Thoothukudi facility",
            "description": "The ground breaking ceremony took place in the presence of Tamil Nadu chief minister MK Stalin along with the senior representatives of the Vin group. ET had reported on February 10 that the Vietnamese company that is looking to compete with the likes of Tesl…",
            "url": "https://economictimes.indiatimes.com/tech/technology/ground-breaking-ceremony-of-vinfast-takes-place-at-tamil-nadus-thoothukudi-facility/articleshow/107990046.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-107990342,width-1200,height-630,imgsize-13646,overlay-ettech/photo.jpg",
            "publishedAt": "2024-02-25T17:39:28Z",
            "content": "Vietnamese electric vehicle (EV) player VinFast on Sunday broke ground for its new integrated factory in Thoothukudi, Tamil Nadu and is looking to complete construction and start production in 15 mon… [+2760 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "urielblanco",
            "title": "La Cybertruck de Tesla es impresionante pero también preocupante",
            "description": "La Cybertruck de Tesla no se parece a nada de lo que hay en la carretera. Y su tamaño es aún más llamativo. Por supuesto, una vez que lleve un tiempo en el mercado, su atractivo disminuirá.",
            "url": "https://cnnespanol.cnn.com/2024/02/25/cybertruck-tesla-impresionante-preocupante-trax/",
            "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2024/02/Copia-de-FOTO-PARA-WP-2024-02-25T111433.920.jpg?quality=100&strip=info",
            "publishedAt": "2024-02-25T17:34:44Z",
            "content": "Así es la camioneta eléctrica Cybertruck, de Tesla 1:38\r\n(CNN) -- Hubo un tiempo en que una camioneta eléctrica de Tesla, algo diseñado para ir de frente contra los productos más populares de Estados… [+9800 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "investorplace.com",
            "title": "It’s Time! 3 Overvalued EV Stocks to Sell in February",
            "description": "These overvalued EV stocks are in trouble Many electric vehicle stocks rallied in 2020 and 2021 as investors got excited about the industry gaining market share. While some stocks appreciated due to strong financials, other EV stocks soared just because they …",
            "url": "https://biztoc.com/x/6f4ebb76f247fe65",
            "urlToImage": "https://c.biztoc.com/p/6f4ebb76f247fe65/s.webp",
            "publishedAt": "2024-02-25T17:30:11Z",
            "content": "These overvalued EV stocks are in troubleMany electric vehicle stocks rallied in 2020 and 2021 as investors got excited about the industry gaining market share. While some stocks appreciated due to s… [+280 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "investorplace.com",
            "title": "Sector Standouts: 3 EV Stocks That Wall Street Loves",
            "description": "Charge up your portfolio: 3 EV stocks Wall Street can't resist. EV stocks have witnessed a price correction in recent months. Sluggish sales have forced automakers to cut production or pivot back to hybrid vehicles. Inflationary pressures and supply chain hea…",
            "url": "https://biztoc.com/x/28625a6cfa6c612f",
            "urlToImage": "https://c.biztoc.com/p/28625a6cfa6c612f/s.webp",
            "publishedAt": "2024-02-25T17:30:11Z",
            "content": "Charge up your portfolio: 3 EV stocks Wall Street can't resist.EV stocks have witnessed a price correction in recent months. Sluggish sales have forced automakers to cut production or pivot back to h… [+276 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "finance.yahoo.com",
            "title": "Tesla-beating BYD and other Chinese carmakers using Mexico as back door poses ‘extinction-level’ threat to U.S. auto sector, warns trade group",
            "description": "China has become a powerhouse in electric vehicles. Its automaker BYD recently topped Tesla in global EV sales, with Elon Musk warning of Chinese carmakers, “If there are no trade barriers established, they will pretty much demolish most other car companies i…",
            "url": "https://biztoc.com/x/3e2fc9f1c025d0a0",
            "urlToImage": "https://c.biztoc.com/p/3e2fc9f1c025d0a0/og.webp",
            "publishedAt": "2024-02-25T17:24:09Z",
            "content": "China has become a powerhouse in electric vehicles. Its automaker BYD recently topped Tesla in global EV sales, with Elon Musk warning of Chinese carmakers, If there are no trade barriers established… [+287 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Jennifer Sensiba",
            "title": "Should EVs Have Start/Stop Buttons?",
            "description": "To many readers, what I’m about to get into might sound bizarre. After all, EVs often copy (at least in ... [continued]\nThe post Should EVs Have Start/Stop Buttons? appeared first on CleanTechnica.",
            "url": "https://cleantechnica.com/2024/02/25/should-evs-have-start-stop-buttons/",
            "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/02/Bolt-EUV-Power-Button-Jennifer-Sensiba-1600x890-1.png",
            "publishedAt": "2024-02-25T17:03:18Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nTo many readers, what I’m about to get into might sound bizarre. After all, EVs often copy (at least in part)… [+6506 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "finance.yahoo.com",
            "title": "Party Like It's 1999? Why Walmart Stock Should Be on Your Radar",
            "description": "Last month, leading retailer Walmart (NYSE: WMT) announced that it would conduct a 3-for-1 stock split on Feb. 23. In recent years, investors have a seen a number of high-profile tech companies such as Alphabet, Amazon, and Tesla conduct stock splits. However…",
            "url": "https://biztoc.com/x/af74e5a1f7f4eb0a",
            "urlToImage": "https://c.biztoc.com/p/af74e5a1f7f4eb0a/s.webp",
            "publishedAt": "2024-02-25T16:54:09Z",
            "content": "Last month, leading retailer Walmart (NYSE: WMT) announced that it would conduct a 3-for-1 stock split on Feb. 23. In recent years, investors have a seen a number of high-profile tech companies such … [+283 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Olhardigital.com.br"
            },
            "author": "Bruno Ignacio de Lima",
            "title": "SpaceX é acusada de restringir serviços de satélite em Taiwan",
            "description": "Elon Musk e SpaceX são acusados por congressista dos EUA de potencialmente prejudicar comunicações em Taiwan em caso de investida chinesa\nO post SpaceX é acusada de restringir serviços de satélite em Taiwan apareceu primeiro em Olhar Digital.",
            "url": "https://olhardigital.com.br/2024/02/25/pro/spacex-e-acusada-de-restringir-servicos-de-satelite-em-taiwan/",
            "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2023/11/spacex-695x500.jpg",
            "publishedAt": "2024-02-25T16:48:39Z",
            "content": "Um congressista influente dos EUA levantou preocupações sobre a SpaceX estar retendo serviços de satélite em Taiwan, possivelmente violando seus compromissos contratuais com o governo americano. O re… [+2719 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "asoni@insider.com (Aruni Soni)",
            "title": "The era of the Magnificent 7 is over, says the analyst who invented the term",
            "description": "\"This big rising tide of seven names lifting all boats in the stock market is what I see ending. I don't see these seven names rising together.\"",
            "url": "https://markets.businessinsider.com/news/stocks/us-tech-stocks-spx-forecast-nvidia-meta-magnificent-seven-label-2024-2",
            "urlToImage": "https://i.insider.com/65d909b7ce7f1785b2e39e05?width=1200&format=jpeg",
            "publishedAt": "2024-02-25T16:29:48Z",
            "content": "The Magnificent Seven are looking a little less magnificent, and aren't really even a band of seven anymore. \r\nTheir diverging fortunes this year might mark the end of an era for the stock market, ac… [+3754 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "teslarati.com",
            "title": "Tesla shares more footage of Optimus walking improvements",
            "description": "Tesla has shared its latest clip of the Optimus humanoid robot, once again showing off how smoothly the bot is able to walk around. On Saturday, Tesla’s Optimus account on X shared footage of the humanoid robot walking around one of its testing facilities, fe…",
            "url": "https://biztoc.com/x/5d0f9035e73db3e2",
            "urlToImage": "https://c.biztoc.com/p/5d0f9035e73db3e2/og.webp",
            "publishedAt": "2024-02-25T16:28:12Z",
            "content": "Tesla has shared its latest clip of the Optimus humanoid robot, once again showing off how smoothly the bot is able to walk around.On Saturday, Teslas Optimus account on X shared footage of the human… [+257 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
            },
            {
            "source": {
            "id": null,
            "name": "Securityaffairs.com"
            },
            "author": "Pierluigi Paganini",
            "title": "A cyber attack hit the Royal Canadian Mounted Police",
            "description": "A cyber attack hit the Royal Canadian Mounted Police (RCMP), the federal and national law enforcement agency of Canada. The Royal Canadian Mounted Police (RCMP), the federal and national law enforcement agency of Canada, confirmed that it was the target of a …",
            "url": "https://securityaffairs.com/159568/hacking/cyber-attack-hit-royal-canadian-mounted-police.html",
            "urlToImage": "https://securityaffairs.com/wp-content/uploads/2023/01/canada.png",
            "publishedAt": "2024-02-25T16:05:45Z",
            "content": "US GOV OFFERS A REWARD OF UP TO $15M FOR INFO ON LOCKBIT GANG MEMBERS AND AFFILIATES\r\n | New Redis miner Migo uses novel system weakening techniques\r\n | Critical flaw found in deprecated VMware EAP. … [+47995 chars]"
            },
            {
            "source": {
            "id": "il-sole-24-ore",
            "name": "Il Sole 24 Ore"
            },
            "author": "di Luca Figini",
            "title": "Xiaomi Su7: la sfida del brand sull’auto elettrica si rinnova con la versione Max",
            "description": "Al Mobile World Congress di Barcellona, il costruttore di Smartphone svela in Europa la versione Max della sua berlina elettrica",
            "url": "https://www.ilsole24ore.com/art/xiaomi-su7-sfida-brand-sull-auto-elettrica-si-rinnova-la-versione-max-AFgkAuqC",
            "urlToImage": "https://i2.res.24o.it/images2010/2024/02/AFgkAuqC/images/1fd496b4-d3f7-11ee-8896-2d0cd038271f-fotohome0.jpg",
            "publishedAt": "2024-02-25T16:02:55Z",
            "content": "Ascolta la versione audio dell'articolo\r\n3' di lettura\r\nLinee morbide che accarezzano laria, interni avveniristici e limmancabile tocco IoT (o IA) del brand. Per Xiaomi il Su7 rappresenta il tanto at… [+2841 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Xatakamovil.com"
            },
            "author": "Eduardo Marín",
            "title": "Xiaomi 14 Ultra: el móvil más premium de Xiaomi no sólo tiene mucha potencia, sino también una cámara impresionante",
            "description": "En 2023 Xiaomi nos sorprendió con un Xiaomi 13 Ultra que llevaba a otro nivel la fotografía móvil: Este terminal contaba con un hardware de primer nivel, pero su mayor protagonista era la cámara y sus capacidades en fotografía móvil, algo que pudimos comproba…",
            "url": "https://www.xatakamovil.com/xiaomi/xiaomi-14-ultra-caracteristicas-precio-ficha-tecnica-1",
            "urlToImage": "https://i.blogs.es/448f5b/xiaomi-14-ultra-4/840_560.jpeg",
            "publishedAt": "2024-02-25T16:01:18Z",
            "content": "En 2023 Xiaomi nos sorprendió con un Xiaomi 13 Ultra que llevaba a otro nivel la fotografía móvil: Este terminal contaba con un hardware de primer nivel, pero su mayor protagonista era la cámara y su… [+4664 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Xataka.com"
            },
            "author": "Jose García",
            "title": "Xiaomi 14: el nuevo gama alta de Xiaomi aterriza en España estrenando HyperOS y a tope de potencia",
            "description": "Xiaomi se ha paseado por el Mobile World Congress y ha dejado a su paso todo un reguero de dispositivos de todo tipo, siendo el Xiaomi 14 uno de ellos. El nuevo smartphone de gama alta, lanzado en China hace escasos días, aterriza oficialmente en España para …",
            "url": "https://www.xataka.com/moviles/xiaomi-14-caracteristicas-precio-ficha-tecnica",
            "urlToImage": "https://i.blogs.es/722c0a/1/840_560.jpeg",
            "publishedAt": "2024-02-25T16:01:17Z",
            "content": "Xiaomi se ha paseado por el Mobile World Congress y ha dejado a su paso todo un reguero de dispositivos de todo tipo, siendo el Xiaomi 14 uno de ellos. El nuevo smartphone de gama alta, lanzado en Ch… [+6248 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "washingtonpost.com",
            "title": "Tesla price cuts show EV market faces challenges",
            "description": "The start of the year has been rough. Mercedes-Benz this week delayed its electrification goals by up to five years. Ford slashed the price of its electric Mustang Mach-E to compete with Tesla’s Model Y, which got its own price cut this month. Hertz has begun…",
            "url": "https://biztoc.com/x/f6de08fa4cf713b5",
            "urlToImage": "https://c.biztoc.com/p/f6de08fa4cf713b5/og.webp",
            "publishedAt": "2024-02-25T16:00:17Z",
            "content": "The start of the year has been rough. Mercedes-Benz this week delayed its electrification goals by up to five years. Ford slashed the price of its electric Mustang Mach-E to compete with Teslas Model… [+292 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Skai.gr"
            },
            "author": "Newsroom",
            "title": "Επιστημονική Φαντασία: Το βίντεο του Ίλον Μασκ με το ρομπότ Optimus να κάνει βόλτα στο εργαστήριο της Tesla",
            "description": "Το βίντεο δημοσιεύτηκε το πρωί του Σαββάτου και, μέχρι στιγμής, έχει συγκεντρώσει 71 εκατομμύρια προβολές",
            "url": "https://www.skai.gr/news/technology/optimus-o-ilon-mask-anevase-neo-vinteo-me-to-rompot-tis-tesla-na-perpataei-sto-ergastirio",
            "urlToImage": "https://www.skai.gr/sites/default/files/styles/article_16_9/public/2024-02/optimus-elon-musk-3-1024x550.jpg?itok=Ib6h3gDb",
            "publishedAt": "2024-02-25T15:57:50Z",
            "content": "... O   Optimus, Tesla 2021.\r\n , , 71 . Optimus Tesla. \r\n\" Optimus \" , o CEO Tesla. \r\nOptimus strolling around the lab pic.twitter.com/E25ttHGsF0\r\nElon Musk (@elonmusk) February 24, 2024\r\n .Skai.gr G… [+11 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "aol.com",
            "title": "No, electric vehicle sales aren’t dropping. Here’s what’s really going on",
            "description": "Tesla has been slashing prices. Ford just cut the price of its Mustang Mach-E, too, plus it cut back production of its electric pickup. And General Motors is thinking about bringing back plug-in hybrids, possibly taking a step back from GM’s earlier commitmen…",
            "url": "https://biztoc.com/x/0e839a62103c4115",
            "urlToImage": "https://c.biztoc.com/p/0e839a62103c4115/s.webp",
            "publishedAt": "2024-02-25T15:50:06Z",
            "content": "Tesla has been slashing prices. Ford just cut the price of its Mustang Mach-E, too, plus it cut back production of its electric pickup. And General Motors is thinking about bringing back plug-in hybr… [+272 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "fortune.com",
            "title": "Tesla-beating BYD, after spooking legacy carmakers with its low costs, unveils $233,450 supercar to rival Ferrari and Lamborghini",
            "description": "BYD Co. debuted its most expensive car on Sunday, a 1.68 million yuan ($233,450) high-performance fully-electric supercar pitted against gas-guzzling options offered by rivals such as Ferrari NV and Lamborghini. The Yangwang U9 will initially be for the China…",
            "url": "https://biztoc.com/x/f347456993501824",
            "urlToImage": "https://c.biztoc.com/p/f347456993501824/s.webp",
            "publishedAt": "2024-02-25T15:46:06Z",
            "content": "BYD Co. debuted its most expensive car on Sunday, a 1.68 million yuan ($233,450) high-performance fully-electric supercar pitted against gas-guzzling options offered by rivals such as Ferrari NV and … [+283 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "ETF Daily News"
            },
            "author": "MarketBeat News",
            "title": "Federated Hermes Inc. Raises Stock Position in Tesla, Inc. (NASDAQ:TSLA)",
            "description": "Federated Hermes Inc. grew its stake in shares of Tesla, Inc. (NASDAQ:TSLA – Free Report) by 13.3% in the 3rd quarter, according to its most recent disclosure with the SEC. The institutional investor owned 82,508 shares of the electric vehicle producer’s stoc…",
            "url": "https://www.etfdailynews.com/2024/02/25/federated-hermes-inc-raises-stock-position-in-tesla-inc-nasdaqtsla/",
            "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
            "publishedAt": "2024-02-25T15:36:53Z",
            "content": "Federated Hermes Inc. grew its stake in shares of Tesla, Inc. (NASDAQ:TSLA – Free Report) by 13.3% in the 3rd quarter, according to its most recent disclosure with the SEC. The institutional investor… [+6223 chars]"
            },
            {
            "source": {
            "id": "fortune",
            "name": "Fortune"
            },
            "author": "Danny Lee, Bloomberg",
            "title": "Tesla-beating BYD, after spooking legacy carmakers with its low costs, unveils $233,450 supercar to rival Ferrari and Lamborghini",
            "description": "The Yangwang U9 can hit 100 km/h (62 mph) in 2.36 seconds and reach a top speed of 192 mph, BYD said.",
            "url": "https://fortune.com/2024/02/25/byd-ev-supercar-yangwang-u9-to-rival-ferrari-lamborghini/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2024/02/GettyImages-1800086078-e1708874824282.jpg?resize=1200,600",
            "publishedAt": "2024-02-25T15:33:25Z",
            "content": "BYD Co. debuted its most expensive car on Sunday, a 1.68 million yuan ($233,450) high-performance fully-electric supercar pitted against gas-guzzling options offered by rivals such as Ferrari NV and … [+11 chars]"
            }
            ]
            }
    ]
    let i=0;
    let [article,setArticle] = useState(null
//         {
//         article : article,
//         loding : false,
//         page:1,
// }
)
useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ffd1d316147f404f88f15886e75d23a0')
      .then(response => response.json())
      .then(result => {
        console.log("use effect running")
        console.log(result)
        setArticle({
            article:result.articles,
            loding:true,
        })
        //const apts = result.map(item => {
          //item.aptId = aptId;
          //console.log(aptId);
          //setAptId(aptId + 1);
          //return item;
        //})
        //(apts);
      });
  }, []);
    return (
        
        <div className="container my-3">
        <div className="row">
         <h2>Today's Headlines</h2>
         {articles.map((e) => {
    console.log("article is working");
    console.log(e.article);
    const newsCards = [];
    for (let i = 0; i < 20; i++) {
        newsCards.push(
            <div className="col-md-4" key={e.articles[i].url}>
                <NewsCard title={e.articles[i].title} description={e.articles[i].description} imageurl={e.articles[i].urlToImage} url = {e.articles[i].url}/>
            </div>
        );
    }
    return newsCards;
})}
   {/* <NewsCard  />
            <NewsCard />
            <NewsCard />
            <NewsCard /> */}

        </div>
        <div class="d-flex justify-content-between">
        <button className="btn-primary">Prev</button>
        <button className="btn-primary">Next</button>

        </div>
        

        </div>

    );
    
}

