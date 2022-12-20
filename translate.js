/* Botones de traducción */
let espanol = document.getElementById("espanol");
let english = document.getElementById("english");
let deutsch = document.getElementById("deutsch");


/* Elementos a traduccir */
/*Navbar*/
let bienvenidos = document.getElementById("bienvenidos");
let nuestrahistoria = document.getElementById("nuestrahistoria");
let enlaactualidad = document.getElementById("enlaactualidad");
let ubicacion = document.getElementById("ubicacion");
let contacto = document.getElementById("contacto");
let sementales = document.getElementById("sementales");
let caballos = document.getElementById("caballos");
let yeguas = document.getElementById("yeguas");
let enventa = document.getElementById("enventa");
let vendidos = document.getElementById("vendidos");
let nuestrosanimales = document.getElementById("nuestrosanimales");

/*Nuestra historia*/
let alprincipio = document.getElementById("alprincipio");
let alprincipio1 = document.getElementById("alprincipio1");
let alprincipio2 = document.getElementById("alprincipio2");
let alprincipio3 = document.getElementById("alprincipio3");


/* Eventos de click para cambiar idioma */
espanol.onclick = ()=>{
    setLanguage("espanol");
    localStorage.setItem("Lang","espanol");
};

english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("Lang","english");
};

deutsch.onclick = ()=>{
    setLanguage("deutsch");
    localStorage.setItem("Lang","deutsch");
};

onload = ()=>{
    setLanguage(localStorage.getItem("Lang"));
};

/* Traducciones */

function setLanguage(getLanguage){
  if(getLanguage === "espanol"){
	  
/*Navbar*/
bienvenidos.innerHTML = "Bienvenidos";
nuestrahistoria.innerHTML = "Nuestra historia";
enlaactualidad.innerHTML = "En la actualidad";
ubicacion.innerHTML = "Ubicación";
contacto.innerHTML = "Contacto";
sementales.innerHTML = "Sementales";
caballos.innerHTML = "Caballos";
yeguas.innerHTML = "Yeguas";
enventa.innerHTML = "En venta";
vendidos.innerHTML = "Vendidos";
nuestrosanimales.innerHTML = "Nuestros animales";
	  
/*Bienvenidos*/
bienvenidostitulo.innerHTML = "Bienvenidos";
bienvenidostexto1.innerHTML = "Desde esta página web,hemos tratado de recopilar la información que te pueda ser útil para darte a conocer nuestro trabajo: Criar caballos de Pura Raza Española. Un caballo con las hechuras propias del patrón racial y la funcionalidad que es demandada hoy en día por jinetes y aficionados. Porque la Pura Raza Española es una de las más apreciadas a nivel mundial. Le distinguen su nobleza y su belleza y destaca su carácter y su entrega en el trabajo diario. Así son los caballos de Yeguada Molero Malo.";
bienvenidostitulo2.innerHTML = "Sementales en Parada Pública";
bienvenidostexto2.innerHTML = "En Yeguada Molero Malo, ponemos a disposición de nuestros amigos ganaderos y aficionados en general, un plantel de sementales de Pura Raza Española en Parada Pública. Creemos que, ofreciendo el caudal genético de estos ejemplares seleccionados,  contribuimos a la mejora de la Pura Raza Española.";
  	  
/*Nuestra historia*/
alprincipio.innerHTML = "Al principio";
alprincipio1.innerHTML = "Fue hacia finales de los ochenta cuando pasamos de ir a clases de equitación con nuestros hijos, a descubrir y enamorarnos del Pura Raza Española y empezar a criarlo.Primero llegó una punta de yeguas procedentes de dos líneas distintas: don Virgilio Fernández de la Vega y don José Luis de la Escalera. Al poco tiempo llegaría otra partida de yeguas esta vez sólo de línea Escalera.Cubríamos con dos sementales, uno para cada línea: ÁLAMO III, cerrado en bocao, hijo de Naranjero V, para las yeguas de  Virgilio; MISTERIOSO, con el hierro de Escalera, hijo de Vinatero III, para sus hermanas. Poco a poco, las Escalera fueron ganando terreno.Cuando las hijas de Misterioso empezaron a ser yeguas, llegó SUPERIOR IV, de hierro Escalera de nuevo, hijo de Faraón XXIV, imprimiendo su carácter y belleza en la yeguada.";
alprincipio2.innerHTML = "Para los productos de Superior IV buscamos sangre nueva en la línea Guardiola. Cuando conocimos a EFUSIVO, hijo de Centella V y Efusiva II, ambos multipremiados en SICAB, nos dimos cuenta de que aquel caballo podía aportarnos mucho en casa.Y así fue, Efusivo está dando aún hoy en día animales espectaculares morfológica y funcionalmente. Después con nuestra apuesta por la capa negra llegó VELETO, hijo de Doctor IX de Maria Fernanda. Hoy en día sus hijas son fantásticas madres.Con el crecimiento de la yeguada, fuimos introducioendo nuevos y jóvenes sementales procedentes de nuestras madres y los sementales utilizados. FUMADOR V, hijo de Efusivo  y  BERBERISCO XII, hijo de Estudioso XI; siguiero con la línea Guardiola. ";
alprincipio3.innerHTML = "En el afán de buscar funcionalidad y raza, así como talla y carácter incorporamos también la línea de don Salvador Sánchez Barbudo con NOVELERO XXXII, posiblemente uno de los mejores sementales alazanes del momento.Este caballo, además de una morfologia importante, con unos sólidos suelos y buenas lineas superiores, nos aportó unos movimientos desgraciadamente fuera de lo común en el caballo español.Aparte de la amplitud y cadencia de estos, destacan por su suspensión, la impulsión del tercio posterior y la facilidad en las espaldas. ";
	  
/*Ubicacion*/	  
instalaciones.innerHTML = "Instalaciones";
instalaciones1.innerHTML = "Nuestros productos se crían en régimen de libertad controlada, tenemos unos amplios cercados para que los potros se ejerciten a sus anchas hasta que llegue el momento del trabajo. En nuestra finca 'Valdeherreros Alto', lo primordial son ellos y se programan los cultivos de cereales y los barbechos en función de sus necesidades. Todo gira en torno a su bienestar.";
instalaciones2.innerHTML = "Para cuando llega la hora del trabajo, todas nuestras instalaciones son de reciente construcción y están adaptadas para darles a nuestros animales la mayor comodidad posible. Entre ellas destacamos:";
instalaciones4.innerHTML = "800 m2 de naves para yeguas.<br>400m2 de naves para potros.<br>700m2 de graneros y pajares.<br>Guadarnés.<br>Ducha cubierta.<br>Ducha exterior.";
instalaciones3.innerHTML = "Un picadero al aire libre.<br>Una pista de doma reglamentaria al aire libre.<br>Una pista de doma cubierta.<br>Quince boxes interiores.<br>Corraletas exteriores.<br>Tres Boxes adaptados como parideras.<br>Dos potros para la exploración veterinaria.";
osesperamos.innerHTML = "Os esperamos...";
osesperamos1.innerHTML = "Nuestros animales cumplen un programa de entrenamiento diario, por lo que en caso de que decidas visitarnos, te agradeceremos que conciertes una visita y así podremos atenderte como te mereces.";
contacto.innerHTML = "Contacto";
contacto1.innerHTML = "Desde esta web, os hemos querido dar una primera impresión de quién somos y qué hacemos. Si estáis interesados en nuestros animales, os podemos enviar más información, fotografias y videos sin ningún compromiso.<br>YEGUADA MOLERO MALO<br>Finca Valdeherreros Alto13370<br> Calzada de Calatrava.<br>CIUDAD REAL<br>Teléfonos- 926 338 203<br>Móviles. 680 422 844 - 680 422 845<br>Código REGA ES130270000146<br>email. info@yeguadamolero.es<br>y en el Google Earth nos puedes encontrar en:Latitud 38º 38'52.74'' y Longitud 3º 39' 13.29'' O";
  }else if(getLanguage ==="english"){
/*Navbar*/
bienvenidos.innerHTML = "Welcome";
nuestrahistoria.innerHTML = "Our history";
enlaactualidad.innerHTML = "Nowadays";
ubicacion.innerHTML = "Location";
contacto.innerHTML = "Contact";
sementales.innerHTML = "Stallions";
caballos.innerHTML = "Horses";
yeguas.innerHTML = "Mares";
enventa.innerHTML = "On sale";
vendidos.innerHTML = "Sold";
nuestrosanimales.innerHTML = "Our animals";
	  
/*Bienvenidos*/
bienvenidostitulo.innerHTML = "Welcome";
bienvenidostexto1.innerHTML = "From this website, we have tried to collect the information that could be useful to let you know our work: Raising Purebred Spanish horses. A horse with the makings own racial pattern and functionality that is demanded today by riders and fans. Purebred Because Spanish is one of the most appreciated worldwide. We distinguish its nobility and beauty and highlight its character and its delivery in the daily work. So Stud horses are Molero Malo.";
bienvenidostitulo2.innerHTML = "Stop Stallions at Public";
bienvenidostexto2.innerHTML = "In Stud Molero Malo, we offer our friends and fans in general farmers, a team of Spanish thoroughbred stallions Public Parada. We believe that offering the gene pool of these selected examples,  we contribute to the improvement of Purebred Spanish. ";

/*Nuestra historia*/	  
alprincipio.innerHTML = "Initially";
alprincipio1.innerHTML = "It was the late eighties when we go to riding lessons with our children, to discover and fall in love with the Spanish Purebred and begin to raise him. First tip mares came from two different lines: Don Virgilio Fernandez de la Vega and Don José Luis de la Escalera. Soon another batch of mares come this time only ladder line. We covered with two stallions, one for each line: POPLAR III, closed in bocao, son of Naranjero V, for mares of Virgil, MYSTERIOUS, with iron staircase, son of Vintner III, for his sisters. Gradually, the staircase were gaining ground. When the daughters of Mystery began to be mares, came SUPERIOR IV iron ladder again, son of Pharaoh XXIV, printing its character and beauty in the stud.";
alprincipio2.innerHTML = "Superior Products To seek new blood IV line Guardiola. When we met effusive, son of Centella V and Effusive II, both multiplatinum in SICAB, we realized that this horse could tell us much at home. And so, Effusive is giving even today morphologically and functionally spectacular animals. After our commitment to black cape came vane, son of Maria Fernanda Doctor IX. Today mothers daughters are fantastic. With the growth of the stud, we introducioendo new young stallions from our mothers and sires used. SMOKING V, son of Effusive and Berber XII, XI Scholar son; siguiero line with Guardiola. ";
alprincipio3.innerHTML = "In an effort to find and breed functionality and incorporate character size and also the line of Don Salvador Sánchez Bearded with Novelero XXXII, possibly one of the best stallions steeds of time. This horse, plus a significant morphology, with solid lines and good top soil, gave us some moves unfortunately unusual in the Spanish horse. Apart from the extent and timing of these, distinguished by their suspension, rear third drive and easy on the back. ";

/*Ubicacion*/  
instalaciones.innerHTML = "Facilities";
instalaciones1.innerHTML = "Our products are raised in controlled freedom regime, we have a large fenced for the Colts are exercised at home until the time of labor. On our farm 'Valdeherreros High', the bottom line is they are programmed and cereal crops and fallow land according to their needs. Everything revolves around your being.";
instalaciones2.innerHTML = "When it comes time to work, all our facilities are newly built and are adapted to give our animals the best possible comfort.";
instalaciones4.innerHTML = "800 m2 of warehouses for mares.<br>Ships 400m2 foals.<br>700m2 of barns and haystacks.<br>Guadarnés.<br>Shower cover.<br>Outdoor shower.";
instalaciones3.innerHTML = "An outdoor riding.<br>A regulation dressage arena outdoors.<br>An indoor dressage arena.<br>Fifteen inner boxes.<br>Outdoor pens.<br>Three Boxes adapted as farrowing.<br>Two ponies for veterinary examination.";
osesperamos.innerHTML = "I hope ...";
osesperamos1.innerHTML = "Our animals met daily training program, so if you decide to visit, I appreciate it conciertes a visit so we can serve you as you deserve.";

/*Ubicacion*/  
contacto.innerHTML = "Contact";
contacto1.innerHTML = "From this web, we wanted to show you who we are. If you are interested about our animals, we can share more information with you, photos and videos with no compromise.<br>YEGUADA MOLERO MALO<br>Finca Valdeherreros Alto13370<br> Calzada de Calatrava.<br>CIUDAD REAL<br>Phone- 926 338 203<br>Mobile phone. 680 422 844 - 680 422 845<br>REGA Code ES130270000146<br>email. info@yeguadamolero.es<br>and you can find us on Google Earth: Latitud 38º 38'52.74'' y Longitud 3º 39' 13.29'' O";
  }
  else if(getLanguage ==="deutsch"){
	  /*Navbar*/
	  bienvenidos.innerHTML = "Willkommen";
      nuestrahistoria.innerHTML = "Der Anfang";
      enlaactualidad.innerHTML = "Aktuell";
      ubicacion.innerHTML = "Installationen";
     	contacto.innerHTML = "Kontakt";
      sementales.innerHTML = "Hengst";
      caballos.innerHTML = "Pferde";
      yeguas.innerHTML = "Stuten";
      enventa.innerHTML = "Im Angebot";
      vendidos.innerHTML = "Verkauft";
      nuestrosanimales.innerHTML = "Unsere Tiere";
      bienvenidostitulo.innerHTML = "Willkommen";
      bienvenidostexto1.innerHTML = "Auf dieser Website versuchen wir die Info´s zusammenzustellen um Ihnen, unsere Arbeit näher zu bringen: die Zucht von reinrassigen spanischen Pferde. Eine Pferdart nach dem eigentlichen spanischen Rassenmuster und nach der nachgefragten Funktionalität von Reiter und Liebhaber Reinrassige spanische Pferde sind weltweit sehr angesehene Tiere. Diese Pferde auserkennen sich aufgrund deren Edelmut, deren Schönheit sowie deren Charakter und deren Aufopferung in der täglichen Arbeit. So sind die Pferde des Molero Malo´s Gestüt.";
  	  bienvenidostitulo2.innerHTML = "Angebotene Hengste";
      bienvenidostexto2.innerHTML = "Im Gestüt Molero Malo stellen wir unseren Zuchtfreunden und generell jedem Liebhaber eine Gruppe an reinrassigen spanischen Hengste als Parada Pública zur Verfügung. Wir sind der Meinung, dass mit dem Angebot des genetischen Vermögen dieser ausgewählten Exemplare wir der Verbesserung der spanischen Rasse beitragen.";
  	  alprincipio.innerHTML = "Über uns";
      alprincipio1.innerHTML = "Ende der Achtziger war der Zeitpunkt an dem wir die Besuche von Reitstunden mit unseren Kinder gegen die Entdeckung und Liebe für reinrassige spanischen Pferde sowie deren Zucht austauschten. Zuerst kamen zwei “Zackenende” zwei verschiedener Linien her: Don Virgilio Fernández de la Vega und Don José Luis de la Escalera. Nach kurzer Zeit würde ein weiterer Stutenausschnitt nur von der Linie Escalera ankommen. Wir deckten mit zwei Hengsten jeweils jede Linie ab: ÁLAMO III erhalten in “bocao” (Cartuja), Sohn von Naranjero V für die Stuten von Virgilio; MISTERIOSO aus dem Ahnen von Escalera, Sohn von Vinatero III für deren Schwestern. Stück für Stück gewannen die Escaleras an Terrain. Als die Tochtern von Misterioso zu Stuten heranwachsten, kam SUPERIOR IV erneuert vom Eisen Escalera, Sohn von Faraón XXIV, an. Er prägte mit seinem Charakter und Schönheit das Gestüt.";
      alprincipio2.innerHTML = "Für die Produkte von Superior IV suchten wir neues Blut in der Linie Guardiola. Als wir EFUSIVO, Sohn von Centella V und Efusiva II, kennenlernten (desöfteres in SICAB gekrönt) sahen wir, dass dieses Pferd uns viel im eigenen Haus beibringen konnte. So war es auch. Efusivo gibt uns bis dato morphologisch und funktionell spektakuläre Tiere. Desweiteren mit unserem Einsatz auf schwarzes Rosshaar kam VELETO, Sohn von Doctor IX von María Fernanda. Heutzutage sind deren Tochtern fantastische Muttern. Mit der Erweiterung unseres Gestüts führten wir von unseren Müttern und Hengsten ausgestammt, neue und junge Hengste ein. FUMADOR V, Sohn von Efusivo, und BERBERISCO XII, Sohn von Estudioso XI; in der Folge der Guardiola Linie.";
      alprincipio3.innerHTML = "Im Bestreben der Suche von Funktionalität und Rasse sowie Figur und Charakter reihten wir auch die Linie von Don Salvador Sánchez Barbudo mit NOVELERO XXXII ein. Wahrscheinlich einer der besten rotfuchshaarigen Hengste im Moment. Dieses Pferd abgesehen der besonderen morphologie seiner Bodenfestigkeit und guten übergeordneten Linien, brachte eine Art an Bewegungen mit die unter dem Spanischem Pferd leider aussergewöhnlich ist. Abgesehen der Geräumigkeit und Trittfrequenz dieser, heben sie sich durch deren Federung, deren Anstoss des hinteren Drittels und deren Leichtigkeit der Rückseiten hervor.";
      
/*Ubicacion*/
instalaciones.innerHTML = "Installationen";
instalaciones1.innerHTML = "Unsere Produkte werden in einem kontrolliertem Freiheitsregime gezüchtet. Wir zählen mit breiten Einzäunungen damit sich die Fohlen seineswillen einüben bis zu dem ergeben des Arbeitszeitpunktes. Auf unserer Finca “Valdeherreros Alto” sind diese, dass wichtigste, so dass Brachland und Anpflanzung von Getreide nach ihren Bedürfnissen programmiert wird. Alles dreht sich um deren Wohlbefinden.";
instalaciones2.innerHTML = "Wenn dann der Arbeitszeitpunkt ansteht zählen wir mit neuen und angepassten Installationen um den Tieren die bestmöglichste Behaglichkeit anbieten zu können.Unter diesen heben wir hervor:";
instalaciones4.innerHTML = "800 m² an Hallen für Stuten400<br> m² an Hallen für Fohlen.<br>700 m² an Scheunen und Schober.<br>Geschirrkammer.<br>Bedeckte Dusche.<br>Freiluft Dusche.";
instalaciones3.innerHTML = "Eine Reitbahn in freier Luft.<br>Eine vorschriftsmässige Dressurpiste in freier Luft.<br>Eine bedeckte Dressurpiste.<br>Fünfzehn Innenraum Boxen.<br>Außenhöfe.<br>Drei als Geburtsstellen adaptierte Boxen.<br>Zwei Pferdkasten für tierärztliche Untersuchungen.";
osesperamos.innerHTML = "Wir erwarten euch...";
osesperamos1.innerHTML = "Wenn Sie in dem Kästchen unter der Karte Ihren Startort eingeben, führen wir Sie bis zu unserem Hause.";

/*Contacto*/
contacto.innerHTML = "Contact";
contacto1.innerHTML = "Auf dieser Website möchten wir Ihnen einen ersten Eindruck davon vermitteln, wer wir sind und was wir tun. Bei Interesse an unseren Tieren senden wir Ihnen unverbindlich weitere Informationen, Fotos und Videos zu..<br>YEGUADA MOLERO MALO<br>Finca Valdeherreros Alto13370<br> Calzada de Calatrava.<br>CIUDAD REAL<br>elefon- 926 338 203<br>Mobiltelefon. 680 422 844 - 680 422 845<br>REGA-Code ES130270000146<br>E-Mail. info@yeguadamolero.es<br>und Sie finden uns auf Google Earth: Breitengrad 38º 38'52.74'' und Längengrad 3º 39' 13.29'' W";
  }
}
