# infoboard-media-n-news
## Us coding (ノಠ益ಠ)ノ彡┻━┻


### us trying to merch (☞ﾟヮﾟ)☞ ┻━┻ His fault



### Merging agreements
* Aldrig merge direkte ind i master - Altid ind i en kopi først
* Aftale når / hvis vi opdaterer master skal vi sige det til gruppen så de kan få den ned hurtigst murligt
* Lav branches når i begynder på noget nyt


### Kommentering af kode
* Alt kode skal kommenteres
* Vi beskriver funktionerne i toppen af dokumentet og der hvor de bliver lavet


### MVC
* MODEL <br>
API - Links til dokumentationen og endpointsne <br>
[API - Documentation](https://documenter.getpostman.com/view/6540576/TVCZaAub) <br>
[API - Endpoint - News](https://api.mediehuset.net/infoboard/news) <br>
JSON data { id, title, content, timestamp, datetime} <br>
Til News skal vi bruge title, content, datetime. <br> <br>
[API - Endpoint - Media](https://api.mediehuset.net/infoboard/media) <br>
JSON data { title, reference, file } <br>
Media bruges til at få billedere og videoer ud <br> <br>
Nyheder, ude i den virkelige verden, API!

* VIEW <br>
Brug data fra vores sorter, og put det i vores DOM (lav et nyt card som indeholder: title, content, datetime).

* CONTROLLER <br>
Fetch - Data from URI <br>
Sorter data i fetch og send array med vores results til ny sorterings function.
I sorterings function skal man kunne converter vores Content String til at undlade HTML tags/elements, derefter pass videre til View, title, sorted content, og datetime.
