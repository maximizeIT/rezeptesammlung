const RECIPES = [
	{
		id: '328',
		recipe_content:
			'Für eine kleine Springform.<br/>Für den Mürbeteig <strong>300 g Mehl</strong> und <strong>75 g Puderzucker</strong> in eine Schüssel sieben. Das Mark von <strong>einer Vanilleschote, 1 Prise Salz</strong> und<strong> 1 Eigelb </strong>hinzugeben. <strong>150 g kalte Butter </strong>(!) würfeln und mit <strong>2-3 EL kaltem Wasser</strong> zu den restlichen Zutaten geben. Mit den Händen rasch zu einem glatten Teig verkneten. 1 Stunde im Kühlschrank ruhen.<br/><br/>In der Zwischenzeit <strong>250 g Sahnequark</strong> mit <strong>1 PK Vanillepuddingpulver, 2 PK Vanillezucker</strong> und <strong>4 EL Milch </strong>glattrühren.<strong> 100 g Marzipan</strong> auf einer feinen Reibe reiben und unterheben. <strong>2 Äpfel schälen</strong> und in feine Spalten schneiden.<br/><br/>Den Backofen auf 200 Grad vorheizen. Nach der vergangenen Stunde 2/3 des Teiges zu einem Kreis, der etwas größer als die Springform ist, ausrollen. Diesen in die gefettete Form legen, sodass an den Seiten ein Rand steht. Den Boden 15 Minuten im Ofen backen. Herausholen und mit der Pudding-Quark-Creme bestreichen. Die Apfelspalten kreisförmig darauf anordnen. Den restlichen Teig in Form von Streuseln darauf verteilen.<br/>Im Ofen noch einmal 15-20 Minuten backen.',
		recipe_title: 'Apfel Streusel Tarte mit Marzipan Pudding Creme',
	},
	{
		id: '33',
		recipe_content:
			'Hummus<br/><strong>300 g Möhren</strong> schälen und in Würfel schneiden. In einem Topf mit Brühe 20 Minuten weichkochen. <strong>300 g Kichererbsen</strong> (Dose) unter Wasser abbrausen. <strong>1 Knoblauchzehe</strong> pressen. Kichererbsen, Möhren, <strong>6 EL Zitronensaft</strong>, Knoblauch, <strong>3 EL Paprikapulver</strong> mit <strong>Salz &amp; Pfeffer</strong> pürieren. 80 ml kaltes Wasser hinzugeben. Hummus mit <strong>Olivenöl</strong> beträufeln.<br/><br/>Gemüse<br/><strong>2 Auberginen</strong> und <strong>2 Paprika</strong> in Scheiben schneiden. <strong>4</strong> gedrittelte <strong>Lauchzwiebeln</strong> und das Gemüse in <strong>Olivenöl</strong> mischen und auf einem Backblech bei 200 Grad (Umluft) 20 Minuten garen.<br/><strong>2 Zucchini</strong> in Stücke schneiden und mit <strong>Olivenöl</strong> in einer Pfanne anbraten und garen.<br/><br/><strong>8 Tortillas</strong> erhitzen und mit dem Hummus bestreichen. Mit dem Gemüse und <strong>Feta</strong> belegen.',
		recipe_title: 'Tortilla mit Hummus',
	},
	{
		id: '117',
		recipe_content:
			'<strong>1 Fladenbrot</strong> halbieren. Die Unterseite mit <strong>Frischkäse</strong> bestreichen. Mit <strong>200 g Lachs</strong> und <strong>4 Tomaten</strong> in Scheiben belegen. <strong>250 g Rucola</strong> waschen und ebenfalls auf das Fladenbrot geben. Mit <strong>Salz</strong> und <strong>Pfeffer</strong> würzen.',
		recipe_title: 'Fladenbrot',
	},
	{
		id: '133',
		recipe_content:
			'Teig<br/><strong>15 g Hefe</strong> mit <strong>½ TL Zucker</strong> in <strong>125 ml Wasser</strong> auflösen. Mit <strong>400 g Mehl</strong>, <strong>125 ml Milch</strong> und <strong>½ TL Salz</strong> zu einem Teig verkneten. Für 2 Stunden gehen lassen. Danach den Teig zu vier länglichen Ovalen ausrollen.<br/><br/>Füllung<br/><strong>1 Zwiebel</strong>, <strong>1 Knoblauchzehe</strong>, <strong>3 Tomaten</strong> und <strong>1 Paprika</strong> würfeln, mit <strong>300 g Hackfleisch</strong>, <strong>Petersilie</strong>, <strong>3 EL Tomatenmark</strong>, <strong>2 EL Paprikapulver</strong>, <strong>Salz</strong> und <strong>Pfeffer</strong> vermengen.<br/>Die Füllung auf dem Teig verteilen. Einen schmalen Rand übrig lassen und diesen einklappen. Mit <strong>1 Ei</strong> bepinseln. Bei 180 Grad für 25 Minuten backen.<br/><br/>Topping<br/><strong>200 g Joghurt</strong> mit <strong>1 geraspelten Gurke</strong> (+ <strong>Salz</strong> &amp; <strong>Pfeffer</strong>) vermengen.',
		recipe_title: 'Pide',
	},
	{
		id: '190',
		recipe_content:
			'<strong>1 Gurke</strong> raspeln. Mit <strong>400 g Joghurt</strong> vermengen, mit <strong>Salz</strong> und <strong>Pfeffer</strong> würzen. Enjoy!',
		recipe_title: 'Tsatsiki',
	},
	{
		id: '226',
		recipe_content:
			'<strong>130 g Zucker</strong>, <strong>260 g Mehl</strong>, <strong>1 Pck. Vanillezucker</strong>, <strong>1/4 l Milch</strong>, <strong>3 Eier</strong>, <strong>5 EL Öl</strong> und <strong>1 Pck. Backpulver</strong> zu einem glatten Teig verrühren. Nach und nach in den <strong>Donutmaker</strong> füllen und backen.<br/><br/>Auskühlen lassen und mit <strong>Kuvertüre</strong> und <strong>Streuseln</strong> verzieren.',
		recipe_title: 'Donuts',
	},
	{
		id: '236',
		recipe_content:
			'<strong>1 Paprika</strong>, <strong>1 Zwiebel</strong>, <strong>100 g Knollensellerie</strong>, <strong>1 Möhre</strong> und <strong>1 Zucchini</strong> in kleine Würfel schneiden und in einer Pfanne in heißem <strong>Olivenöl</strong> 6 Minuten garen.<br/><strong>250 ml Gemüsebrühe</strong> aufkochen und <strong>100 g Bulgur</strong> hinzufügen, bei mittlerer Hitze 10 Minuten garen.<br/>Den Bulgur mit <strong>1 verquirlten Ei</strong>, <strong>4 El Semmelbrösel</strong>, <strong>3 El Mehl</strong> und den Gemüsewürfeln vermengen. Mit <strong>Salz</strong>, <strong>Pfeffer</strong> und <strong>Paprika</strong> würzen. Masse formen und in Olivenöl braten.<br/><br/>Dazu <strong>Joghurt</strong> mit <strong>Petersilie</strong>, Salz und Pfeffer.',
		recipe_title: 'Veggie: Bulgur-Gemüse-Bratlinge',
	},
	{
		id: '254',
		recipe_content:
			'Backofen auf 160 Grad Umluft vorheizen.<br/>Boden einer <strong>Springform</strong> mit Backpapier auslegen. <strong>250 g Haferkekse</strong> zerkrümeln und mit <strong>100 g weicher Butter</strong> verkneten. Den Keksteig auf dem Boden der Form verteilen und 15 Minuten vorbacken.<br/><br/>Für den Belag <strong>750 g Frischkäse</strong>, <strong>100 g Creme Fraiche</strong>, <strong>200 g Zucker</strong>, Vanillemark von <strong>1 Vanilleschote</strong>, Saft und Schale von <strong>1 Zitrone</strong> verrühren. <strong>4 Eier</strong> und <strong>2 Eigelbe</strong> unterrühren. Frischkäsemasse auf dem Keksteig verteilen. 50 Minuten backen.<br/>3 Stunden auskühlen lassen.',
		recipe_title: 'Cheesecake',
	},
	{
		id: '269',
		recipe_content:
			'<strong>1</strong> große Handvoll <strong>getrocknete Tomaten in Öl</strong>, <strong>1 Zwiebel</strong>, <strong>1 Knoblauchzehe</strong> und <strong>1 Bund Basilikum</strong> klein hacken. Mit <strong>1 Philadelphia-Frischkäse</strong> pürieren.',
		recipe_title: 'Best Tomato Spread',
	},
	{
		id: '276',
		recipe_content:
			'<strong>500 g Dinkel-Vollkornmehl</strong>, <strong>7 g Trockenhefe</strong>, <strong>20 g brauner Zucker</strong> und <strong>10 g Salz</strong> in einer Schüssel vermischen.<br/><strong>200 ml Wasser</strong>, <strong>40 ml Rapsöl</strong> und <strong>1 Ei</strong> zu den trockenen Zutaten geben. Den Teig mit der Küchenmaschine ca. 4 Minuten kneten, zu einer Kugel formen und ca. 1 Stunde gehen lassen.<br/>Den Teig in 8 Teile teilen. Die einzelnen Teigstücke zu einer gleichmäßigen Kugel formen und nochmals abgedeckt ca. 30 Minuten ruhen lassen. Mit dem bemehlten Ende eines Kochlöffels in jede Teigkugel ein Loch drücken, etwas größer ziehen. Nochmals 15 Minuten ruhen lassen.<br/>Ofen auf 215 Grad vorheizen.<br/>Wasser mit <strong>20 g Zucker</strong> zum Kochen bringen. Wenn das Wasser kocht, die Bagels 2 Minuten kochen lassen, anschließend mit einem Schaumlöffel aus dem Wasser holen und auf ein mit Backpapier belegtes Backblech setzen. Mit <strong>Haferflocken</strong> bestreuen.<br/>Auf mittlerer Schiene ca. 15 Minuten backen.',
		recipe_title: 'Bagels',
	},
	{
		id: '292',
		recipe_content:
			'<strong>1 Joghurt</strong> mit <strong>1 EL Honig</strong> verrühren. Die Hälfte des Joghurts in die Tasse geben. <strong>3 Löffelbiskuits</strong> zerkrümeln und den Joghurt damit bedecken. <strong>1 Handvoll Himbeeren</strong> (gefroren) dazugeben und das ganze mit Joghurt bedecken.<br/>Für die ideale Konsistenz ein bisschen stehen lassen..',
		recipe_title: 'Himbeertraum',
	},
	{
		id: '295',
		recipe_content:
			'Für den Boden <strong>200 g Mehl</strong>, <strong>1/2 TL Salz</strong>, <strong>100 g kalte Butter</strong> und <strong>5-7 EL kaltes Wasser</strong> schnell zu einem glatten Teig verkneten (Küchenmaschine, danach mit den Händen). 30 Minuten kalt stellen. Danach in eine <strong>Quiche-</strong> oder <strong>Springform</strong> (26 cm) legen.<br/><strong>200 g Erbsen</strong>, <strong>1/2 Bund Petersilie</strong> und <strong>250 ml Sahne</strong> pürieren. <strong>2 Eier</strong> unterrühren und mit <strong>Salz + Pfeffer</strong> würzen. Die Masse auf den Teigboden geben und zerbröselten <strong>Feta</strong> darüberstreuen.<br/>20 Minuten bei 200 Grad backen.',
		recipe_title: 'Tarte mit Erbsen',
	},
	{
		id: '406',
		recipe_content:
			'<strong>60 gr Pinienkerne</strong> rösten. 2/3 mit <strong>2 Hände Basilikum</strong>, <strong>1</strong> gehackte <strong>Knoblauchzehe</strong>, <strong>2 EL Parmesan</strong>, <strong>Salz</strong> und <strong>Pfeffer</strong> pürieren. <strong>Olivenöl</strong> dabei hinzugeben, bis die gewünschte Konsistenz erreicht ist. Die restlichen Pinienkerne grob hacken und unter das Pesto geben.',
		recipe_title: 'Pesto',
	},
	{
		id: '407',
		recipe_content:
			'<strong>200 gr Vollkornkekse</strong> zerkrümeln. <strong>100 g Butter</strong> in einem großen Topf zerlassen, mit den Kekskrümeln vermischen. Die Mischung auf dem Boden einer <strong>kleinen</strong> (20 cm Durchmesser) <strong>Springform</strong> gleichmäßig verteilen. Zum Erkalten in den Kühlschrank stellen.<br/><strong>200 g weiße Kuvertüre</strong> langsam schmelzen lassen, dabei gelegentlich umrühren. Etwas abkühlen lassen.<br/><br/><strong>175 gr Frischkäse</strong>, <strong>250 gr Mascarpone</strong> und <strong>300 gr Quark</strong> verrühren. Die Schokolade zugeben und zuletzt <strong>250 gr Blaubeeren</strong> unterheben.<br/><br/>Mischung gleichmäßig auf dem Keksboden verteilen. Abdecken und mindestens 2 bis 3 Stunden in den Kühlschrank stellen.',
		recipe_title: 'White Chocolate Cheesecake',
	},
	{
		id: '410',
		recipe_content:
			'Teig: <strong>20 g frische Hefe</strong> mit <strong>200 ml warmen Wasser</strong> verrühren. Gehen lassen, bis sich Blasen bilden. <strong>300 g Mehl</strong>, <strong>1 TL Salz</strong>, <strong>2 EL Olivenöl</strong> und die Hefe zu einer Kugel verkneten. 1 Stunde an einem warmen Ort gehen lassen.<br/><br/><strong>500 g grüner Spargel</strong> waschen und die holzigen Enden abschneiden. In kochendem Salzwasser 3 Minuten garen. <strong>2 Lauchzwiebeln</strong> und <strong>4 normale Zwiebeln</strong> in Ringe schneiden.<br/>Backofen auf 240 Grad vorheizen.<br/><br/>Den Teig auf einem Backblech ausrollen und mit <strong>200 g Schmand</strong> bestreichen, mit den großen Zwiebeln belegen. Spargel, <strong>7 Streifen Bacon</strong> und die Lauchzwiebeln darauf verteilen. Mit <strong>Salz &amp; Pfeffer</strong> würzen. Im Ofen 20 Minuten backen.',
		recipe_title: 'Spargelflammkuchen',
	},
	{
		id: '411',
		recipe_content:
			'<strong>Bulgur</strong> nach Packungsanleitung kochen. <strong>3 Zucchini</strong> und <strong>500 g Pilze</strong> anbraten. <strong>5 Tomaten</strong>, <strong>2 Paprika</strong> und <strong>2 Lauchzwiebeln</strong> kleinschneiden. <strong>250 g Feta</strong> zerbröckeln. Für das Dressing <strong>1 Joghurt</strong> mit <strong>Weißweinessig</strong>, <strong>Olivenöl</strong>, <strong>Salz</strong> und <strong>Pfeffer</strong> abschmecken. <strong>Petersilie</strong> hacken. Alle Zutaten mit dem Bulgur vermischen und einige Stunden ziehen lassen.',
		recipe_title: 'Bulgur-Salat',
	},
	{
		id: '370',
		recipe_content:
			'<strong>250 g Mehl</strong> mit <strong>1 1/2 TL Backpulver</strong>, <strong>1/2 TL Salz</strong> und <strong>1 EL Zucker</strong> mischen. <strong>30 g Butter</strong> und <strong>50 g Erdnussbutter</strong> in Stückchen zugeben und die Mehlmischung verkneten. <strong>50 g</strong> gehackte <strong>Schokolade</strong> und <strong>100 ml Milch</strong> hinzugeben. Teig 2 cm dick ausrollen und in Stücke schneiden. Diese auf dem Backblech bei 200 Grad 10 bis 15 Minuten backen.',
		recipe_title: 'Scones',
	},
	{
		id: '375',
		recipe_content:
			'<strong>100 g rote Linsen</strong> waschen und abtropfen. <strong>3 Schalotten</strong> und <strong>1 Knoblauchzehe</strong> würfeln und in <strong>Olivenöl</strong> anschwitzen. Linsen dazugeben, mit <strong>Weißwein</strong> ablöschen und einkochen lassen. <strong>800 g geschälte Tomaten</strong> (Dose) und <strong>200 ml Gemüsefon</strong>d dazugeben. Mit <strong>Salz</strong>, <strong>Pfeffer</strong> und <strong>Chili</strong> würzen. Bei geringer Hitze 30 Minuten köcheln lassen.<br/>Für die Garnitur <strong>100g türkischen Joghurt</strong> mit Zitronensaft von <strong>1 Zitrone</strong> und <strong>Salz</strong> mischen.<br/>Dazu passen Hackbällchen.',
		recipe_title: 'Rote Linsen Suppe',
	},
	{
		id: '380',
		recipe_content:
			'Eine <strong>Kastenform</strong> mit <strong>Frischhaltefolie</strong> glatt auslegen. <strong>80 g weiche Karamellbonbons</strong> und <strong>4 helle Cookies mit Schokostückchen</strong> getrennt hacken. <strong>50 g Sahne</strong> in einem Topf erwärmen. Bonbons darin unter Rühren schmelzen. Cookies unterheben.<br/><strong>1 Ei</strong> trennen. Eiweiß steif schlagen, dabei <strong>2 EL Puderzucker</strong> einrieseln lassen. <strong>350 g Sahne</strong> steif schlagen. Eigelb und <strong>25 g Puderzucker</strong> mit den Schneebesen des Handrührgeräts cremig rühren.<br/>Sahnekaramellmasse unterheben. Nacheinander erst Sahne, dann Eischnee unterheben.<br/>Parfaitmasse in die Form streichen. Mit Folie zudecken und mind. Über Nacht einfrieren.',
		recipe_title: 'Cookies-Parfait',
	},
	{
		id: '417',
		recipe_content:
			'Für eine <strong>kleine Springform</strong> (20 cm Durchmesser)<br/><strong>100 g weiche Butter</strong> cremig rühren. <strong>150 g Zucker</strong> und <strong>1 Päckchen Vanillezucker</strong> dazugeben und alles schaumig rühren. Nach und nach <strong>2 Eier</strong> unterrühren. <strong>125 g Mehl</strong>, <strong>1 TL Backpulver</strong> und <strong>3 EL Backkakao</strong> auf den Teig sieben (!!!!). Alles verrühren. Den Teig in die Form geben. <strong>3 Äpfel</strong> schälen und in Scheiben schneiden. Den Teig mit den Äpfeln belegen und mit <strong>Mandelstiften</strong> bestreuen. Bei 160 Grad Umluft eine halbe Stunde backen.',
		recipe_title: 'Schoko-Apfel-Traum',
	},
	{
		id: '420',
		recipe_content:
			'Für 8 Waffeln aus einem <strong>belgischen Waffeleisen</strong><br/><br/><strong>400 g Mehl</strong>, <strong>1/2 Tütchen Trockenhefe</strong>, <strong>1 Prise Salz</strong> und <strong>50 g Zucker</strong> in eine Schüssel geben und gut vermischen. Mit <strong>2 Eiern</strong>, <strong>100 g Butter</strong> und 5 Tropfen <strong>Vanillearoma</strong> ergänzen, dann <strong>160 ml lauwarme Milch</strong> unter ständigem Rühren hinzugeben bis ein geschmeidiger Teig entstanden ist. Den Teig 45 Minuten ruhen lassen, damit dieser aufgehen kann.<br/>Vor dem ausbacken wird <strong>150 g Hagelzucker</strong> unter den Teig geknetet. Waffeleisen vorheizen und dann kleine Teigportionen ca. 5-10 Minuten backen.<br/><br/>Source: belgien-tourismus.de',
		recipe_title: 'Lütticher Waffeln',
	},
	{
		id: '436',
		recipe_content:
			'<strong>1 Kopfsalat</strong> waschen und Blätter klein zupfen. <strong>500 g Erdbeeren</strong> ebenfalls waschen und in dicke Scheiben schneiden. Für die Salatsoße <strong>4 El Olivenöl</strong> mit <strong>2 El Weißweinessig</strong>, <strong>Salz &amp; Pfeffer</strong>, <strong>1/2 Tl Senf</strong>, <strong>1/2 Tl Erdbeermarmelade</strong> und <strong>1 Prise Zucker</strong> verrühren. Salat und Erdbeeren mit dem Dressing mischen. Mit <strong>Parmesan</strong> und <strong>Kernen</strong> garnieren.',
		recipe_title: 'Summer Salad',
	},
	{
		id: '458',
		recipe_content:
			'Für 2 Personen:<br/><strong>3 Stangen Rhabarber</strong> schälen und mit etwas Wasser weichkochen. Anschließend mit <strong>1 EL Zucker</strong> süßen. <strong>250 g Joghurt</strong> mit <strong>1 EL Honig</strong> verrühren. <strong>125 g Heidelbeeren</strong> waschen.<br/>Die Hälfte des Joghurts, dann Rhabarber und die Hälfte der Heidelbeeren in ein Glas schichten. Mit dem Rest des Joghurts bedecken und die übrigen Heidelbeeren darüber streuen.',
		recipe_title: 'Rhabarber Trifle',
	},
	{
		id: '461',
		recipe_content:
			'Ein Backblech fetten, mit Mehl ausstäuben. <strong>1,75 kg Rhabarber</strong> putzen, waschen, in dicke Scheiben schneiden und 1,5 kg abwiegen. Mit <strong>225 g Zucker</strong> und <strong>1 Päckchen Vanillinzucker</strong> in einem Topf mischen, ca. 30 Minuten ziehen lassen.<br/><strong>5 EL Milch</strong> und <strong>1 Päckchen Puddingpulver</strong> (zum Kochen) verrühren. <strong>400 ml Milch</strong> und <strong>40 g Zucker</strong> aufkochen. Angerührtes Puddingpulver einrühren und ca. 1 Minute unter Rühren köcheln. Auskühlen lassen, dabei öfter umrühren.<br/>Zitronenschale von <strong>1 Zitrone</strong> zum Rhabarber geben, aufkochen und ca. 5 Minuten köcheln. Dabei öfter umrühren. <strong>130 g Stärke</strong> und <strong>200 ml Wasser</strong> verrühren. In den Rhabarber rühren und 1-2 Minuten weiterköcheln. Auskühlen lassen, dabei öfter umrühren.<br/><strong>250 g weiche Butter, 200 g Zucker, 1 Päckchen Vanillinzucker</strong> und <strong>1 Prise Salz</strong> ca. 5 Minuten cremig rühren. <strong>5 Eier</strong> einzeln im Wechsel mit <strong>50 g Stärke</strong> unterrühren. <strong>250 g Mehl, 50 g Stärke</strong> und <strong>3 TL Backpulver</strong> mischen, portionsweise kurz unterrühren. Auf das Backblech streichen.<br/>Pudding mit dem Handrührgerät kurz verrühren. Auf den Rührteig streichen. Rhabarbergrütze daraufstreichen. Im Ofen bei 150°C Grad ca. 20 Minuten backen. <strong>150 g Mandelstifte</strong> und <strong>2 EL Zucker</strong> daraufstreuen und ca. 30 Minuten weiterbacken. Auskühlen lassen. Mit Puderzucker bestäuben.',
		recipe_title: 'Rhabarber Kuchen',
	},
	{
		id: '479',
		recipe_content:
			'Eine Kastenform fetten und mit Zucker ausstreuen. Den Backofen auf 175 °C/Umluft vorheizen. <strong>75 g Zartbitterschokolade</strong> grob hacken.<strong> 2 Eier, 100 g Zucker, 1 Pk Vanillezucker</strong> und <strong>75 ml Sonnenblumenöl </strong>mit den Schneebesen des Rührgeräts 4-5 Minuten verrühren.<br/><strong>3 Bananen schälen</strong>, in feine Scheiben schneiden und dabei sofort unter den Teig heben. <strong>1/2 Pk Backpulver, 250 g Mehl</strong> und <strong>1 Prise Salz</strong> mischen und mit <strong>150 ml Milch</strong> kurz unterrühren.<br/>Die Schokolade unterheben. Teig in die Form füllen, glatt streichen.<br/>Im heißen Ofen ca. 1 Stunde backen. Nach ca. 50 Minuten prüfen, ob der Kuchen durchgebacken ist. Bleibt noch feuchter Teig am Spieß kleben, den Kuchen 5-10 Minuten weiterbacken.',
		recipe_title: 'Soul Banana Bread',
	},
	{
		id: '542',
		recipe_content:
			'<strong>1/2 Würfel frische Hefe</strong> in 250 ml lauwarmes Wasser auflösen. <strong>1 EL Olivenöl</strong>, <strong>450 g Mehl</strong> und <strong>1/2 TL Salz</strong> dazugeben und zu einem glatten Teig verkneten. Den Teig 30 Minuten gehen lassen. <strong>6 Fleischtomaten</strong>, <strong>1 Zwiebel</strong> und <strong>2 Knoblauchzehen</strong> fein würfeln. Zwiebeln und Knoblauch in Olivenöl anbraten. <strong>1 -2 TL brauner Zucker</strong> dazugeben und leicht karamellisieren lassen. <strong>50 ml kräftige Gemüsebrühe</strong> angießen und <strong>50 g Tomatenmark </strong>unterrühren. Tomatenwürfel und <strong>1 TL Oregano</strong> hinzugeben. Die Soße bei schwacher Hitze 15 Minuten köcheln lassen, mit Salz und Pfeffer würzen. Den Backofen auf 250 Grad vorheizen. Den Hefeteig nochmals durchkneten und auf einem Backblech ausrollen. Den Teig mit der Tomatensoße bestreichen. Mit <strong>400 g halbierten Kirschtomaten</strong> und <strong>450 g Mozzarella </strong> belegen. Nochmals mit Salz und Pfeffer würzen und mit Olivenöl beträufeln. Die Pizza 15 Minuten im Backofen backen.',
		recipe_title: 'The pizza of your dreams',
	},
	{
		id: '546',
		recipe_content:
			'<strong>6 Möhren</strong> schälen und in Scheiben schneiden. In genügend <strong>Gemüsebrühe</strong> weichkochen. <strong>250 g Kirschtomaten</strong> vierteln und <strong>2 Orangen</strong> filetieren. <strong>3 Lauchzwiebeln</strong> waschen und in Ringe schneiden. Aus <strong>4 EL Olivenöl, 2 EL Weißweinessig, 1 EL Sesampaste, Salz</strong> und <strong>Pfeffer</strong> die Salatsoße herstellen. Die Moöhren abkühlen lassen, mit den anderen Zutaten und der Soße mischen. Mit <strong>Kernen</strong> garnieren.',
		recipe_title: 'Möhrensalat',
	},
	{
		id: '549',
		recipe_content:
			'<strong>200g Schafskäse</strong> mit gehackter frischer Petersilie (nach belieben) und <strong>200g Schmand</strong> vermischen. <strong>16 dreieckige Yufka-Blätter</strong> bereitlegen. Die Schafskäsemasse in einem dünnen Streifen am breiten Ende der Blätter auftragen. Die Ränder mit Wasser befeuchten und die Blätter anschließend von der breiten Seite aufrollen. Die Röllchen mit <strong>Olivenöl</strong> bepinseln und im heißen Ofen 15 Minuten backen (Temperatur steht auf der Verpackung der Blätter)',
		recipe_title: 'Turkish Food',
	},
	{
		id: '555',
		recipe_content:
			'1/4 l Wasser aufkochen.<br/><strong>500 g TK-Erbsen</strong> damit übergießen, ca. 2 Minuten ziehen lassen, dann mit einem Stabmixer sehr fein pürieren. <strong>1 Bund Lauchzwiebeln</strong> waschen und in feine Ringe schneiden.<br/><strong>2 TL Gemüsebrühe</strong> in 1/4 l kochendem Wasser auflösen. <strong>1 Knoblauchzehe</strong> und <strong>1 Zwiebel</strong> würfeln und in 1 EL Olivenöl andünsten. <strong>250 g Risottoreis</strong> zugeben, unter Rühren 1-2 Minuten glasig dünsten. Etwas heiße Brühe zugießen. Sobald der Reis die Brühe aufgesogen hat, wieder etwas nachgießen. Reis offen bei schwacher Hitze unter gelegentlichem Rühren ca. 20 Minuten köcheln.<br/><strong>100 g Sour Cream </strong>und <strong>50 g Ziegenfrischkäse</strong> verrühren. Erbsenpüree, Lauchzwiebeln und Frischkäsecreme unter den Risotto rühren und erhitzen. Mit <strong>Salz, Pfeffer, Zitronenschale</strong> und <strong>-saft </strong>abschmecken. Eventuell <strong>Ziegenfrischkäse</strong> darüberbröckeln.',
		recipe_title: 'Grünes Risotto',
	},
	{
		id: '624',
		recipe_content:
			'<strong>4 Schalotten</strong> und <strong>5 Paprika</strong> (orange oder rot) würfeln. <strong>2 EL Olivenöl</strong> in einem Suppentopf erhitzen, Schalotten und Paprika andünsten. <strong>250 g stückige Tomaten</strong> (Dose), <strong>600 ml Gemüsebrühe</strong> und <strong>1 Lorbeerblatt</strong> zu den Paprika geben. Mit Salz, Pfeffer und Zucker würzen. 10 Minuten köcheln lassen. Lorbeer herausnehmen und die Suppe pürieren. <strong>4 EL Creme Fraiche</strong> in die Suppe rühren. Mit <strong>Petersilie</strong> garnieren.<br/>Dazu passen: angebratene <strong>Pilze</strong>',
		recipe_title: 'Paprika Soup',
	},
	{
		id: '630',
		recipe_content:
			'Den Ofen auf 200°C vorheizen.<strong> 100 g dunkle Schokolade</strong> und <strong>30 g Butter</strong> zusammen schmelzen und mit <strong>250 g Mehl, 120 g Zucker, 2 Eiern, 1 EL Kakao, 1 EL Vanillezucker, 1 TL Backpulver</strong> und <strong>einer Prise Salz</strong> zu einem glatten Teig verkneten. Anschließend <strong>100 g gehackte Mandeln</strong> einarbeiten. Den Teig zu zwei Rollen formen.<br/>Teigrollen auf ein mit Backpapier ausgelegtes Blech legen. 15 Minuten backen. Nun den Teig schräg in Scheiben schneiden. Die Scheiben auf dem Blech verteilen und noch einmal für etwa 10 Minuten backen.',
		recipe_title: 'Chocolate Cantuccini',
	},
	{
		id: '632',
		recipe_content:
			'easy peasy: TK-Beerenmischung mit Leitungswasser (Menge nach gewünschter Konsistenz) pürieren.<br/>30 Sekunden - das macht doch gute Laune!',
		recipe_title: 'Gute Laune Smoothie',
	},
	{
		id: '637',
		recipe_content:
			'Den Ofen auf 175°C vorheizen. Für den Biskuitteig <strong>3 Eier</strong> trennen. Eiweiß steif schlagen. <strong>70 g Zucker</strong> einrieseln lassen und anschließend die Eigelbe hinzugeben. <strong>40 g Mehl, 40 g Stärke</strong> und <strong>1 TL Backpulver</strong> mischen und in die Eimasse sieben. Vorsichtig unterheben. In einer Größe von ca. 30 x 40 cm auf ein Backpapier streichen und für 10 Minuten backen. In der Zwischenzeit ein sauberes Geschirrtuch flach ausbreiten und mit ein paar Esslöffeln Zucker bestreuen. Den Teig direkt nach dem Backen darauf stürzen, das Backpapier abziehen und von der langen Seite her einrollen. So auskühlen lassen, dann behält die Rolle später ihre Form.<br/><br/>Für die Füllung <strong>500 g Magerquark</strong> mit <strong>250 g Jogurt</strong>, <strong>3 Pk Vanillezucker</strong> und dem Saft von <strong>1 Zitrone</strong> verrühren.<br/><strong>Johannisbeeren</strong> (beliebig viele) waschen.<br/><br/>Den ausgekühlten Biskuitteig mit der Hälfte der Creme füllen, die Hälfte der Johannisbeeren darauf geben. Das ganze mit dem Rest Creme und Johannisbeeren wiederholen.',
		recipe_title: "Summer's Dessert",
	},
	{
		id: '650',
		recipe_content:
			'Für vier.<br/><strong>1 Blumenkohl</strong> zerkleinern und waschen. In Salzwasser weich kochen.<br/>In der Zwischenzeit <strong>5 Tomaten</strong> in Spalten schneiden. <strong>400 g Hähnchenbrust</strong> waschen und mit einer Marinade aus <strong>Olivenöl, Paprikapulver, Salz</strong> und <strong>Pfeffer</strong> einreiben.<br/>Für die Salatsoße <strong>4 EL Olivenöl</strong> mit <strong>2 EL Weißweinessig, 1 Prise Zucker, 1 Messerspitze Marmelade, 1 Messerspitze Senf, Salz</strong> und <strong>Pfeffer</strong> verrühren.<br/>Die Hähnchenbrust scharf anbraten und danach in Streifen schneiden. Den Blumenkohl gut abtropfen lassen.<br/><br/>Blumekohl und Tomatenspalten auf einen Teller geben, mit dem Dressing übergießen. Hähnchenbruststreifen darauf geben und mit <strong>Basilikum</strong> garnieren.',
		recipe_title: 'Blumenkohl-Salat',
	},
	{
		id: '654',
		recipe_content:
			'Apfel-Walnuss-Kuchen<br/><br/><strong>Sirup:</strong> <strong>1/4 l Wasser</strong><strong> mit </strong><strong>250 g Zucker</strong> und <strong>3 TL Zimt</strong> aufkochen. Offen ca. 20 Minuten zu einem dickflüssigen Sirup einkochen. <strong>25 g Butter</strong> unterrühren. Ca. 20 Minuten abkühlen lassen und dabei mehrmals umrühren.<br/>Ein Backblech fetten und mit Mehl bestäuben. <strong>150 g Walnusskerne</strong> grob hacken. <strong>1,25 kg Äpfel</strong> schälen, vierteln, entkernen und klein würfeln. Sofort mit <strong>3 EL Zitronensaft</strong> mischen.<br/>Ofen auf 150 Grad (Umluft) vorheizen. <strong>250 g Butter, 200 g Zucker, 1 PK Vanillezucker</strong> und <strong>1 Prise Salz</strong> cremig rühren. <strong>5 Eier</strong> unterrühren. <strong>450 g Mehl</strong> und <strong>1 PK Backpulver</strong> mischen, mit <strong>100 ml Milch</strong> unterrühren.<br/>Teig auf dem Backblech verteilen. Ca. 1/3 Sirup daraufträufeln und mit einer Gabel leicht durch den Teig ziehen. Äpfel darauf verteilen und mit Nüssen bestreuen, den restlichen Sirup darüberträufeln.<br/>25-30 Minuten backen.<br/><br/>Mohnkuchen mit Streuseln<br/><br/><strong>120 g Butter</strong> mit <strong>120 g Zucker</strong> schaumig rühren, <strong>3 Eier</strong> einzeln einschlagen und unterrühren. <strong>1 PK Backmohn (250 g)</strong> mit <strong>200 g Mehl und 1 Prise Backpulver</strong> unter den Teig mischen, in eine mit Backpapier ausgelegte Form füllen. Für die Streusel <strong>70 g kalte Butter</strong> mit <strong>70 g Zucker</strong> und <strong>70 g Mehl</strong> verkneten und auf den Teig geben. Bei 180° ca 30min backen.',
		recipe_title: 'Cake for your weekend',
	},
	{
		id: '659',
		recipe_content:
			'Für 4.<br/><strong>500 g Farfalle kochen</strong>. <strong>750 g TK-Spinat</strong> auftauen. <strong>2 Zwiebeln</strong> und <strong>1 Knoblauchzehe</strong> fein würfeln und anbraten. Den Spinat dazugeben. <strong>2 Becher Creme Fraiche</strong> unterrühren und mit <strong>Salz</strong> und <strong>Pfeffer</strong> abschmecken. <strong>1 PK geräucherten Lachs</strong> zupfen und ebenfalls in die Soße geben.<br/>Farfalle abtropfen lassen und unter die Soße rühren.',
		recipe_title: 'Schnelles Vergnügen: Spinatnudeln',
	},
	{
		id: '668',
		recipe_content:
			'Für 2 Hungrige mit schnellem Bedarf nach Sättigung.<br/><strong>2 Pita-Taschen</strong> im Backofen aufwärmen. <strong>1/2 kleinen Rotkohl</strong> fein reiben (Küchenmaschine!!), mit <strong>3 EL Olivenöl, 1 EL Weißweinessig, Salz </strong>und <strong>Pfeffer</strong> mischen.<br/><strong>500 g Champignons</strong> vierteln und abraten.<br/><strong>2 Becher Naturjoghurt</strong> mit <strong>1 gepressten Knofizehe, Salz, etwas Petersilie</strong> und <strong>Pfeffer</strong> verrühren.<br/>Pita mit Rotkohlsalat, Pilzen und der Soße füllen.',
		recipe_title: 'Pita',
	},
	{
		id: '672',
		recipe_content:
			'Für 4.<br/><strong>1 grünen Salat</strong> waschen und etwas klein zupfen. <strong>250 g Coctailtomaten</strong> waschen und halbieren. <strong>3 Frühlingszwiebeln</strong> in Ringe schneiden. <strong>1 Pk Feta</strong> in Würfel schneiden. <strong>500 g Pilze</strong> in Scheiben schneiden und anbraten. <strong>1 Hokkaido Kürbis</strong> entkernen und in dünne Spalten schneiden. In einer Pfanne in <strong>Olivenöl</strong> anbraten, bis er weich ist (eventuell Wasser nachgießen).<br/>Für die Salatsoße <strong>1 TL Honig, 1 gehackte Knoblauchzehe, 4 EL Olivenöl, 2 EL Balsamico-Essig, Salz</strong> und <strong>Pfeffer</strong> verrühren.<br/><br/>Alle Bestandteile auf einem Teller drapieren, mit dem Dressing begießen und mit <strong>1 handvoll Walnüssen</strong> dekorieren.',
		recipe_title: 'Herbstsalat',
	},
	{
		id: '782',
		recipe_content:
			'<strong>1 Hokkaido Kürbis</strong> würfeln, mit einer Marinade aus <strong>Olivenöl, Knoblauch, Thymian, Salz</strong> und <strong>Pfeffer</strong> einpinseln und bei 220 Grad Umluft im Backofen 50 Minuten backen, bis er weich ist. 10 Minuten vor Ende der Garzeit <strong>8 Scheiben Pancetta</strong> auf den Kürbis legen, und zuende backen.<br/><strong>1 Liter Hühnerbrühe</strong> in einem Topf leicht köcheln lassen.<br/><strong>2 EL Olivenöl</strong> und <strong>70 g Butter</strong> in einem großen Topf erhitzen. <strong>1 fein gehackte Zwiebel</strong> hinzugeben und anbraten. <strong>300 g Risotto Reis</strong> hinzugeben und anschwitzen.<br/><strong>75 ml Weißwein</strong> angießen und einkochen lassen. Dann nach und nach die Brühe dazugeben und jedes mal warten, bis diese wieder eingekocht ist. Wenn der Reis weich ist, von der Herdplatte abziehen und mit <strong>150 g geriebenen Parmesan</strong> vermengen.<br/><br/>Risottoreis mit dem Kürbis und dem Pancetta auf einer Platte anrichten.',
		recipe_title: 'Kürbis Risotto',
	},
	{
		id: '786',
		recipe_content:
			'<strong>125 g Kartoffeln</strong> weich kochen und mit einer Gabel zu einem Brei zerdrücken. <strong>60 g Butter </strong>hinzufügen, solange die Kartoffeln noch warm sind. <strong>1 Ei, 125 ml Milch </strong>und <strong>125 ml Buttermilch</strong> hinzugeben. <strong>1 Pk Trockenhefe</strong> dazugeben und gut vermischen.<br/><strong>650 g Mehl, 35 g Zucker, 3/4 TL Salz</strong> und <strong>40 g Rosinen</strong> in einer Schüssel vermischen und zu dem Hefegemisch geben. Den Teig mit dem Knethaken gut vermengen. 1 Stunde gehen lassen.<br/>Ofen auf 190 Grad vorheizen.<br/><strong>2 EL Grafschafter Sirup </strong>und <strong>60 g Butter</strong> gemeinsam schmelzen. <strong>1 EL Zimt </strong>und <strong>4 EL Zucker</strong> mischen.<br/>Den Teig zu einem Rechteck ausrollen (35 x 30 cm). Mit dem Buttersirup einpinseln und mit Zimtzucker bestreuen.<br/>Dann den Teig von der langen Seite her aufrollen und in 3-4 cm dicke Scheiben schneiden.<br/>Eine <strong>kleine Springform</strong> fetten und die Scheiben nebeneinander aufrecht in die Form legen. Die Form sollte komplett ausgefüllt sein.<br/>Die Zimtschnecken 30 Minuten backen und dann 1o Minuten abkühlen lassen.',
		recipe_title: 'Zimtschnecken',
	},
	{
		id: '791',
		recipe_content:
			'für 4.<br/><strong>1,2 kg Tomaten</strong> waschen und vierteln. <strong>1 kg Kartoffeln</strong> gründlich waschen und halbieren/vierteln. <strong>500 g Pilze</strong> säubern und vierteln. <strong>3-4 Stängel Thymian</strong> waschen, trocken schütteln und die Blättchen abzupfen. <strong>Tomaten, Pilze, Kartoffeln, Thymian, Meersalz, Pfeffer</strong> und <strong>5 EL Öl</strong> gut mischen. In einer Form verteilen und im Ofen bei 180 Grad Umluft 1 - 1 1/2 h schmoren.<br/><strong>4 Hähnchenbrüste</strong> mit Salz und Pfeffer würzen und in einer Pfanne anbraten. Danach in Streifen schneiden und auf die fertige Tomaten-Kartoffel-Mischung geben.',
		recipe_title: 'Ofenkartoffeln mit Tomaten und Hähnchen',
	},
	{
		id: '796',
		recipe_content:
			'<strong>Zimtsterne. </strong><br/>Für den Teig in einer Schüssel <strong>250 g Zucker, 250 g gemahlene Haselnüsse</strong> und und <strong>1/4 TL Zimt</strong> mischen.<strong> 1 Ei</strong> trennen. <strong>1 weiteres Ei </strong>und das Eigelb gut verquirlen. Eimasse unter den Nussmix rühren. Zu einem glatten Teig verkneten. 1 Stunde kalt stellen.<br/>Ofen vorheizen auf 125 Grad Umluft. Teig ca. 1/2 cm dick ausrollen.<br/>Entweder zu Sternen ausstechen oder mit einem Messer in Streifen schneiden. Einfach so, wie ihr es am liebsten mögt.<br/>Im Ofen ca. 12 Minuten hell backen.',
		recipe_title: 'Zimtsterne',
	},
	{
		id: '799',
		recipe_content:
			'<strong>Auberginen mit Tomatensugo</strong><br/><strong>300 g Crème fraîche</strong> mit Salz und Pfeffer abschmecken.<br/>Für den Sugo <strong>1 Zwiebel</strong> und <strong>2 Knoblauchzehen</strong> schälen und fein würfeln. <strong>650 g Tomaten </strong>waschen, klein schneiden. <strong>2 EL Öl</strong> in einem Topf erhitzen. Zwiebel und Knoblauch darin andünsten. Tomaten zugeben. Mit Salz, Pfeffer und 1 Prise Zucker würzen. Sugo offen bei schwacher Hitze ca. 30 Minuten köcheln.<br/>Inzwischen <strong>3 Auberginen</strong> putzen, waschen und in Scheiben schneiden. Mit Olivenöl bestreichen und im Backofen eine halbe Stunde bei 200 Grad garen. <strong>500 g Pilze</strong> säubern und vierteln. In einer Pfanne scharf anbraten.<br/>Tomatensugo nochmals abschmecken. Etwa die Hälfte Crème fraîche auf einer Platte verstreichen. Einen Teil Auberginenscheiben, Pilze und Tomatensugo darauf verteilen. Abwechselnd übereinanderschichten.<br/><br/><strong>Polenta</strong><br/>1 l Wasser, <strong>50 g Butter</strong> und 1 TL Salz aufkochen. <strong>250 g Polenta</strong> mit dem Schneebesen einrühren. Unter Rühren aufkochen und bei schwacher Hitze ca. 15 Minuten köcheln, dabei ab und zu kräftig durchrühren. <strong>100 g Parmesan</strong> fein reiben, darunterrühren. Polenta in eine gefettete flache Form streichen. Auskühlen lassen.<br/>In Stücke schneiden und in einer Pfanne in 2 EL heißem Öl portionsweise goldbraun braten',
		recipe_title: 'Auberginen-Romaten Sugo mit Polenta',
	},
	{
		id: '804',
		recipe_content:
			'für 6 Stück:<br/><strong>1 Banane</strong> in einer kleinen Schüssel mit einer Gabel zermatschen. <strong>2 EL Milch</strong> hinzugeben. <strong>6 EL Schokomüsli</strong> (wahlweise 3 Schoko + 3 Haferflocken) hinzugeben und gut verrühren. Es sollte eine zähe Masse entstehen, also notfalls weitere/s Milch/Müsli hinzugeben.<br/>6 Häufchen (esslöffelgroß) auf ein Backblech setzten und 15 Minuten bei 200 Grad im Backofen backen.',
		recipe_title: 'Easy Cookies',
	},
	{
		id: '811',
		recipe_content:
			'für 4.<br/><strong> 8 Ciabatta Brötchen</strong> aufbacken. <strong>500 g Hack</strong> mit <strong>1</strong> in Wasser aufgeweichtem <strong>Brötchen</strong>, <strong>1 Ei, Salz, Pfeffer</strong> und <strong>Paprika</strong> vermengen und flache Frikadellen formen.<br/>In einer Pfanne mit etwas Öl gar braten.<br/>Für das Hummus <strong>1 Dose Kichererbsen</strong> mit Saft von <strong>1 Zitrone</strong>, Salz, Pfeffer und <strong>1 Knoblauchzehe</strong> pürieren.<br/><strong>2 Becher Naturjoghurt</strong> mit <strong>1</strong> geraspelten <strong>Gurke</strong>, Salz, Pfeffer und <strong>1 gepressten Knoblauchzehe</strong> vermischen.<br/><br/>Ciabattabrötchen mit Hummus bestreichen. Wahlweise mit einer oder zwei Frikadellen belegen, Tsatsiki darauf geben und zuklappen.',
		recipe_title: 'Burger mit Hummus',
	},
	{
		id: '815',
		recipe_content:
			'<strong>4 Zucchini</strong> waschen, vierteln und in dünne Scheiben schneiden. <strong>1 Zwiebel </strong>und <strong>1 Knoblauchzehe </strong>fein würfeln. In einer Pfanne mit <strong>Olivenöl</strong> erst Zwiebel und Knoblauch anbraten, dann die Zucchini hinzugeben, bis sie weich sind (unter Umständen etwas Brühe angießen). Zucchini mit den Zwiebeln dann in eine Auflaufform oder auf einen Teller geben.<br/><strong>1/2 Paket Feta </strong>würfeln und <strong>1 Handvoll getrocknete Tomaten</strong> in Streifen schneiden, auf die Zucchini geben. Ein paar <strong>Pinienkerne</strong> in einer Pfanne ohne Fett rösten und ebenfalls dazugeben.',
		recipe_title: 'Zucchini mit Feta und getrockneten Tomaten',
	},
	{
		id: '822',
		recipe_content:
			'für 3.<br/>Röschen von <strong>1 Blumenkohl</strong> trennen und in Salzwasser gar kochen.<br/><strong>1 Zwiebel</strong> und <strong>2 Knoblauchzehen</strong> schälen und fein würfeln bzw. hacken. Öl in einer großen Pfanne erhitzen. Zwiebel und Knoblauch zugeben und kurz mitbraten. <strong>2 EL Tomatenmark </strong>einrühren. <strong>Salz, Pfeffer, Paprika, 3 Tomaten </strong>in Stücke und <strong>1 Handvoll getrockneten Tomaten </strong>in Streifen geschnitten hinzugeben. Mit <strong>1 Dose Tomaten</strong> und 700 ml Wasser ablöschen, <strong>3 TL Brühe</strong> einrühren und aufkochen. <strong>100 ml Milch, 2 EL Crème fraîche </strong>und die <strong>250 g griechische Nudeln </strong>unterrühren.<br/>Alles zusammen mit dem abgetropften Blumenkohl in eine ofenfeste Form geben. <strong>200 g Feta</strong> darüberbröckeln. Im heißen Ofen bei 200 Grad ca. 30 Minuten backen.',
		recipe_title: 'Tomaten Auflauf mit griechischen Nudeln',
	},
	{
		id: '857',
		recipe_content:
			'<strong>4 reife Birnen</strong> schälen, halbieren und entkernen. Birnen in Spalten schneiden.<br/>Backofen auf 180 grad vorheizen.<br/>Backform mit Backpapier auslegen. <strong>200 g Nussnougat</strong> mit <strong>150 g Butter </strong>über einem Wasserbad schmelzen lassen. <strong>5 Eier, 100 g brauner Zucker, 100 g Mehl, 100 g gemahlene Haselnüsse </strong>und <strong>eine Prise Salz</strong> in einer Schüssel verrühren. Das Nussnougat hinzugeben und verrühren.<br/>Den Teig in die Form füllen und die Birnen daraufsetzen.<br/>Im Backofen 30 -35 Minuten backen.',
		recipe_title: 'Haselnuss Brownies',
	},
	{
		id: '862',
		recipe_content:
			'für ein Muffinblech + eine andere kleine Backform<br/><strong>50 g Marzipan</strong> mit der Küchenreibe grob raspeln. <strong>220 g Butter</strong> mit<strong> 80 g Zucker</strong> schaumig schlagen. <strong>3 Eier </strong>hinzufügen. Geriebenes Marzipan und das Mark einer <strong>halben Vanilleschote</strong> zugeben. <strong>220 g Mehl, 1 TL Backpulver, 50 g gemahlene Haselnüsse </strong>und <strong>1 TL Zimt </strong>mischen und in den Teig rühren. <strong>100 ml Milch</strong> zugeben. Ein Muffinblech mit Butter einfetten und Teig in die Mulden füllen. <strong>1 Apfel </strong>waschen und in dünne Spalten schneiden. Auf jeden Muffin 1 Apfelscheibe setzen und bei 180 Grad Ober-/Unterhitze ca. 25 Minuten backen.<br/><strong>200 ml Sahne </strong>steif schlagen und je einen Klecks auf einen Muffin setzten. Eine handvoll <strong>Haselnüsse</strong> grob hacken und auf die Sahne geben. Mit einem Tröpfchen <strong>Ahornsirup</strong> garnieren.',
		recipe_title: 'Apfel-Marzipan Muffins',
	},
	{
		id: '864',
		recipe_content:
			'Backofen auf 180 Grad vorheizen.<br/><strong>100 g Haferflocken</strong> mit <strong>200 g Joghurt </strong>verrühren. 1<strong>50 g Mehl, 4 EL Backpulver</strong> vermischen. <strong>2 Bananen</strong> mit der Gabel zerdrücken.<br/><strong>1 Ei </strong>verquirlen. <strong>60 g Honig, 80 ml Öl,</strong> Haferflocken-Joghurt und die Mehlmasse dazugeben und verrühren.<br/>Teig in Muffinförmchen füllen und 20 - 25 Minuten backen.',
		recipe_title: 'Frühstücksmuffins',
	},
	{
		id: '869',
		recipe_content:
			'Für 2.<br/>Die äußeren Blätter von <strong>500 g Rosenkohl</strong> entfernen, den Strunk abschneiden und die Röschen danach kreuzweise einschneiden. In Salzwasser mit 1 Prise Zucker 20 Minuten weichkochen lassen.<br/>In der Zwischenzeit<strong> 500 g Pilze </strong>säubern und vierteln. <strong>2 Zwiebeln</strong> in Ringe schneiden.<br/>Zwiebeln in einer Pfanne anbraten, die Pilze hinzugeben, bis diese braun sind. <strong>150 ml Brühe</strong> angießen. <strong>1 Tasse Bulgur </strong>hinzugeben und mit der Brühe aufkochen lassen. Dann <strong>150 ml Sahne </strong>dazugeben. Mit Salz und Pfeffer abschmecken.<br/>Zum Schluss den Rosenkohl unterheben.',
		recipe_title: 'Winter Soulfood',
	},
	{
		id: '873',
		recipe_content:
			'<strong>200 g Butter</strong> cremig rühren.<strong> 300 g Zucker, 2 PK Vanillezucker</strong> und<strong> 4 Eier</strong> hinzugeben. <strong>250 g Mehl, 2 TL Backpulver</strong> und <strong>6 EL Kakao</strong> auf den Teig sieben und verrühren.<br/>Mit je einer Handvoll gehackten <strong>Walnüsse, Haselnüsse</strong> und <strong>Mandeln</strong> belegen.<br/>Bei 180 Grad 30 Minuten backen.<br/>Mit <strong>weisser Schokolade</strong> (und mit Hilfe eines Spritzbeutels) verziehren.',
		recipe_title: 'Kerniger Schokokuchen',
	},
	{
		id: '881',
		recipe_content:
			'Für 4<br/><strong>2 Zwiebeln</strong> in Spalten schneiden. <strong>500 g Putenbrust</strong> waschen und in Würfel schneiden. <strong>2 EL Öl</strong> erhitzen und Fleisch darin 5 Minuten scharf anbraten. <strong>500 g Champignons</strong> vierteln und <strong>1 Stange Porree</strong> in feine Ringe schneiden. <strong>300 g Möhren</strong> schälen und in Scheiben schneiden. Möhren, Pilze, Zwiebeln und Porree zu dem Fleisch geben und mitbraten.<br/>Alles mit <strong>2 EL Mehl</strong> bestäuben und hell anschwitzen. <strong>½ L Milch</strong> und <strong>200g Schlagsahne </strong>angießen, <strong>2 TL Hühnerbrühe</strong> einrühren. Zugedeckt 15 Minuten schmoren lassen.<br/>Mit <strong>Salz</strong> und <strong>Pfeffer</strong> abschmecken.',
		recipe_title: 'Hähnchen Topf für kalte Tage',
	},
	{
		id: '885',
		recipe_content:
			'Backofen auf 180 Grad vorheizen. <strong>200 g Haferflocken, 150 g gehackte Haselnüsse, 100 g Mohn, 50 g Kokosraspel</strong> und <strong>2 TL Zimt</strong> auf einem Blech verteilen. Mit <strong>5 EL Honig</strong> und <strong>5 EL Olivenöl</strong> beträufeln und vermischen. Blech für 25 - 30 Minuten backen. Alle 5 Minuten umrühren. Wenn alles abgekühlt ist in ein Glas füllen.',
		recipe_title: 'Absolutes Weltbestes Müsli',
	},
	{
		id: '891',
		recipe_content:
			'Für 2.<br/>Backofen auf 180 Grad vorheizen. 4 Roggen-Toastbrötchen mit Knoblauchfrischkäse bestreichen. 1 Glas getrocknete Tomaten und 12 halbierte Mini-Mozarella auf den Hälften verteilen. 10 Minuten im Ofen rösten. In der Zwischenzeit 1 Salat (nach Belieben) waschen. Salatsoße aus 4 EL Olivenöl, 2 EL Weißweinessig, 1 TL grobkörnigen Senf, 1 Prise Zucker, Salz und Pfeffer herstellen. Mit dem Salat mischen.<br/>Brötchchen aus dem Ofen holen und mit dem Salat anrichten.',
		recipe_title: 'Italienischer Snack',
	},
	{
		id: '896',
		recipe_content:
			'Den Backofen auf 200 °C (180° C) vorheizen. <strong>500 g Mehl, 1 PK Backpulver, 1 TL Salz, 250 g Quark, 100 ml Milch, 100 ml Pflanzenöl</strong> und <strong>150 g gehackte Walnüsse </strong>zu einem glatten Teig verarbeiten. 15 Minuten ziehen lassen, dann mit gut bemehlten Händen (der Teig ist klebrig) 12 - 16 Brötchen formen und auf ein mit Backpapier ausgelegtes Blech setzen. Für ca. 20 Minuten backen und auskühlen lassen, bzw. lauwarm genießen.<br/>Süße Variante: Salz durch <strong>50 g Zucker, 1 PK Vanillezucker </strong>und <strong>2 EL Honig</strong> ersetzen.',
		recipe_title: 'Walnuss-Brötchen',
	},
	{
		id: '938',
		recipe_content:
			'<strong>Haselnuss-Busserl </strong><br/><br/>Für den Mürbeteig <strong>100 g Butter</strong> in kleine Stücke schneiden. Butter, <strong>50 g Zucker, 1 Prise Salz</strong> und <strong>1 Eigelb</strong> verkneten. <strong>150 g Mehl</strong> und <strong>1 TL Zimt</strong> dazugeben und mit den Händen schnell zu einem Teig verkneten. Den Teig ca. 1 Stunde kalt stellen.<br/>Danach den Mürbeteig kurz durchkneten und auf einer bemehlten Arbeitsfläche 3 mm dünn ausrollen. Kreise ausstechen und im vorgeheizten Backofen bei 190 Grad 8 Minuten backen.<br/>Für die Makronenmasse <strong>3 Eiweiße</strong> und <strong>1 Prise Salz </strong>steif schlagen. Nach und nach <strong>120 g Zucker</strong> einrieseln lassen. <strong>180 g gemahlenen Haselnüsse </strong> mit einem Teigschaber unter die Eiweißmasse heben. Die Makronenmasse in einen Spritzbeutel mit mittelgroßer Lochtülle füllen. Auf jeden Mürbeteigkeks einen dicken tupfen Makronenmasse spritzen. Auf jede Makrone <strong>gemahlene Haselnüsse</strong> setzen.<br/>Im Ofen etwa 8 Minuten weiterbacken. Haselnuss-Busserl vollständig auskühlen lassen.<br/><br/><strong>Schwarz-Weiss Gebäck </strong><br/><br/><strong>300 g Mehl</strong> in eine große Schüssel sieben, in die Mitte eine Mulde drücken. Am Rand <strong>180 g Butter</strong> in kleinen Flöckchen und <strong>120 g Zucker </strong>verteilen. <strong>3 Eigelbe, 1 Prise Salz</strong> und <strong>5 Tropfen Mandelaroma</strong> in die Mulde geben. Alles mit den Händen zu einem glatten Teig kneten.<br/>Teig halbieren und in eine Hälfte <strong>25 g Kakaopulver</strong> und <strong>2 EL Sahne</strong> unterkneten.<br/>Beide Teige in Frischhaltefolie wickeln und für 1 Std. kalt stellen.<br/>Dunklen und hellen Teig jeweils zu einem 2mm dicken Rechteck ausrollen und in Stücke von ca. 9 x 20cm schneiden. Abwechselnd eine Schicht hellen und dunklen Teig übereinanderlegen, dabei <strong>120 g gehackte Haselnüsse</strong> dazwischen streuen. Nachdem eine Höhe von ca. 4cm erreicht ist, vorsichtig mit einem Nudelholz darüberrollen, damit eine glatte Oberfläche entsteht.<br/>Den Teig in Folie wickeln und für 1 Std. ins Tiefkühlgerät legen.<br/>Den Backofen auf 180° vorheizen. Den angefrorenen Teig portionsweise in Längsstreifen, dann die einzelnen Streifen mit einem scharfen Messer in 1cm dicke Scheiben schneiden.<br/>Im Ofen 12 Min. backen.<br/><br/>Rezepte: foodboard.de',
		recipe_title: 'Weihnachtsbäckerei',
	},
	{
		id: '948',
		recipe_content:
			'Für 2 Schnecken (je 1 Backblecht - eigentlich genug für eine ganze Woche)<br/><strong>500 ml Milch</strong> erwärmen und <strong>1 Würfel Hefe</strong> hineinbröseln.<br/><strong>100 g Zucker, 20 g Salz, Saft von ½ Zitrone </strong>und <strong>Bittermandelöl</strong> hinzugeben. Mit dem Schneebesen verrühren.<br/><strong>150 g weiche Butter, 1 Ei </strong>und <strong>1 Eiweiß </strong>hinzugeben und gut unterrühren. <strong>1 kg Mehl</strong> in die Schüssel sieben und verkneten.<br/>Den Teig 2 Stunden gehen lassen.<br/>Teig halbieren und je auf die Größe eines Backbleches ausrollen. Je <strong>1 PK Mohnback (2 PK) </strong> auf einer Teighälfte verstreichen und diese dann eng aufrollen.<br/>Mit einer Mischung aus <strong>1 Eigelb </strong>und <strong>100 ml Milch </strong>bestreichen und im Ofen bei 180 Grad 40 Minuten backen. Ab und zu mal in den Ofen schauen und eventuell abdecken.<br/><br/>Rezept: Lafer - Backen',
		recipe_title: 'Mohnschnecke',
	},
	{
		id: '952',
		recipe_content:
			'für 2 Hungrige.<br/><br/><strong>2 Tassen Bulgur</strong> in <strong>4 Tassen Wasser</strong> mit <strong>1 TL Gemüsebrühe</strong> aufkochen und 10 Minuten bei mittlerer Hitze garen lassen.<br/>In der Zwischezeit <strong>1 Zucchini</strong> waschen und in Scheiben schneiden. <strong>3 Spitzpaprika, 1 Zwiebel</strong> und <strong>2 Tomaten</strong> in Scheiben/Stücke schneiden. Prinzipell könnt ihr jedes von euch geliebte Gemüse hinzufügen.<br/><strong>1 Knoblauchzehe</strong> pressen.<br/>Bulgur mit dem Gemüse, <strong>Salz, Pfeffer, Rosmarin</strong> und <strong>4 EL Olivenöl</strong> mischen.<br/>Mit <strong>geriebenem Gouda</strong> bestreuen.<br/>Im Backofen bei 180 Grad 30 Minuten backen.',
		recipe_title: 'Bulgur Auflauf',
	},
	{
		id: '955',
		recipe_content:
			'<strong>1 Würfel Hefe</strong> in <strong>200 ml lauwarmer Milch</strong> auflösen und 5 min stehen lassen.<br/><strong>50 g Zucker, 50 g Butter, 1 Ei</strong> und <strong>1 Prise Salz</strong> dazugeben und auflösen. Das ganze mit <strong>500 g Mehl</strong> vermengen, bis ein glatter Teig entsteht. Ca. 1h gehen lassen.<br/>In der Zwischenzeit <strong>200 g Marzipanrohmasse </strong>zwischen 2 Lagen Frischhaltefolie sehr dünn zu einem Rechteck ausrollen [20x30]. Hefeteig auf einer bemehlten Fläche auf die doppelte Größe des Marzipans ausrollen.<br/>Marzipan auf eine Seit des Teigs legen und die andere Seite darüberschlagen. Den gesamten Teig noch einmal zu einem Rechteck ausrollen.<br/>Mit <strong>50 g füssiger Butter</strong> bestreichen und mit einem <strong>Zucker &amp; Zimt-Gemisch</strong> gleichmäßig berieseln.<br/>Nun von der langen Seite zu einer Rolle formen und diese in ca. 4-5cm breite Stücke<br/>schneiden. Die einzelnen Stücke mit einem runden Stiel in der Mitte platt drücken.<br/><strong>3 EL Milch </strong>und <strong>1 Eigelb</strong> mischen und die Brötchen damit einpinseln, dann 20min gehen lassen.<br/>Währenddessen den Ofen auf 190°C vorheizen und die Schnecken 15min backen.',
		recipe_title: 'Zimtschnecken II',
	},
	{
		id: '962',
		recipe_content:
			'Für 1 kleine Auflaufform.<br/>Sättigt einen Studenten für mehrere Tage.<br/><br/><strong>500 g Blattspinat</strong> auftauen lassen. <strong>1 Zwiebel</strong> und <strong>1 Knoblauchzehe</strong> hacken und anschwitzen, Spinat sowie <strong>Salz</strong> und <strong>Pfeffer</strong> zufügen.<br/><strong>1/2 PK Feta</strong> zerkleinern und unter den Spinat mischen.<br/><strong>50 ml Milch, 60 g Joghurt </strong>und <strong>1 Ei </strong>verrühren und mit Salz und Pfeffer würzen.<br/>Form fetten.<br/>Von <strong>1 PK Yufka Blätter</strong> das erste Blatt so hineinlegen, dass die Ränder überliegen. Gut mit der Joghurtmischung einpinseln. Ein zweites Yufkablatt heinlegen. Wieder bepinseln.<br/>Mit der Hälfte der Spinatmischung bedecken. Ein weiteres Yufkablatt daruf legen, einpinseln. Die restliche Spinatmischung darauf verteilen und nun die überhängenden Ränder des ersten Yufkablattes darüberschlagen. Mit der Joghurtmasse bestreichen und das letzte Teigblatt darauf legen.<br/>Das oberste Blatt ebenfalls ebenfalls bestreichen und mit <strong>1 handvoll Mohn</strong> bestreuen.<br/>Im Ofen bei 180°C Umluft ca. 30 Minuten backen.',
		recipe_title: 'Börek',
	},
	{
		id: '966',
		recipe_content:
			'Kuchenboden: <strong>200 g Butterkekse </strong>in einen Gefrierbeutel füllen und zerkleinern. Springform mit Backpapier auslegen und die Kekse hineinfüllen. <strong>100 g Butter </strong>in einem Topf schmelzen und über die Keksbrösel gießen. Im vorgeheizten Backofen bei 160 Grad ca. 8 Minuten vorbacken.<br/><strong>4 Äpfel</strong> in kleine Würfel schneiden. <strong>50 g Butter</strong> in einer Pfanne schmelzen, Äpfel darin bei mittlerer Hitze ca. 8 Minuten schwenken. <strong>2 EL Zimt</strong> dazugeben. Die Äpfel danach abkühlen lassen.<br/><strong>250 g Butter</strong> und <strong>180 g Zucker</strong> mit dem Mixer cremig schlagen. Separat <strong>6 Eier, 1 EL Mehl, 1 TL Backpulver </strong>und <strong>2 PK Vanillepudding-Pulver </strong>mit einem Schneebesen vermengen. Zu der Butter-Zucker-Masse geben und gut miteinander vermengen. Danach <strong>1 kg Mager-Quark</strong> unterheben.<br/>Ein Drittel der Käsekuchen-Masse in die Springform füllen. Darauf zwei Drittel der Äpfel geben. Danach den Rest der Masse hineinfüllen. Auf den Käsekuchen die restlichen Äpfel und <strong>gehackte Mandeln</strong> verteilen. Im Backofen bei 160 Grad ca. 60 Minuten backen. Nach dem Backen für weitere 30 Minuten im Ofen stehen lassen.',
		recipe_title: 'Winter Käsekuchen',
	},
	{
		id: '970',
		recipe_content:
			'Lachs-Paprika-Flammkuchen<br/><br/><strong>1 PK Fertig-Flammkuchenteig</strong> ausrollen und mit <strong>1 Becher Creme Fraiche</strong> bestreichen.<br/><strong>200 g Lachs</strong> zerpflücken und auf dem Teig verteilen. <strong>2 gelbe Paprikaschoten</strong> waschen und in Streifen und <strong>3 Frühlingszwiebeln</strong> in Ringe schneiden, beides ebenfalls auf den Teig geben. Mit <strong>Pfeffer</strong> und wenig <strong>Salz</strong> (Lachs ist ja schon salzig) würzen. Im Backofen 25 Minuten backen (Angabe auf dem Flammkuchenteig beachten).',
		recipe_title: 'Lachs Flammkuchen',
	},
	{
		id: '1013',
		recipe_content:
			'für 2.<br/><strong>1/2 Packung TK-Spinat</strong> auftauen lassen, gut ausdrücken.<br/><strong>1 Dose Kichererbsen</strong> in ein Sieb abgießen, kalt abbrausen und abtropfen lassen.<br/><strong>1/2 Spitzkohl</strong> in feine Streifen schneiden.<br/><strong>1 Zwiebel, 1 Knoblauchzehe</strong> und <strong>1 Stück Ingwer</strong> schälen, fein hacken und in einem Topf mit Öl 2 Min. bei mittlerer Hitze anbraten. Kichererbsen und <strong>2 EL Currypulver</strong> hinzufügen und 1 Min. unter Rühren mitbraten. Spitzkohl hinzugeben. Mit <strong>100 ml Gemüsebrühe</strong> ablöschen und 5 Min. zugedeckt schmoren.<br/><strong>100 g Sahne </strong>angießen. Den Spinat zerpflücken und untermischen und das Curry weitere 5 Min. bei mittlerer Hitze zugedeckt köcheln lassen.<br/>Mit <strong>Salz</strong> und <strong>Pfeffer</strong> abschmecken. Dazu schmeckt <strong>Joghurt</strong>.',
		recipe_title: 'Kichererbsen Curry',
	},
	{
		id: '1025',
		recipe_content:
			'für 24 Stücke<br/>4 große Äpfel in Spalten schneiden. Ein Backblech mit Backpapier auslegen. Backofen vorheizen (175°C/Umluft)<br/>350 g Butter, 350 g Zucker, 2 PK Vanillezucker und 1 Prise Salz cremig rühren. 6 Eier einzeln unterrühren. 500 g Mehl und 1 PK Backpulver mischen und mit 250 g Joghurt unterrühren.<br/>Teig auf dem Blech glatt verstreichen. Äpfel auf den Teig geben.<br/>Im heißen Backofen 4-55 Minuten backen.',
		recipe_title: 'Apfel-Joghurt-Kuchen',
	},
	{
		id: '1029',
		recipe_content:
			'für 20 Mini-Pizzen<br/><strong>1/2 Würfel frische Hefe</strong> in 250 ml lauwarmes Wasser auflösen. <strong>1 EL Olivenöl</strong>, <strong>450 g Mehl</strong> und <strong>1/2 TL Salz</strong> dazugeben und zu einem glatten Teig verkneten. Den Teig 30 Minuten gehen lassen.<br/><br/><strong>6 Fleischtomaten</strong>, <strong>1 Zwiebel</strong> und <strong>2 Knoblauchzehen</strong> fein würfeln. Zwiebeln und Knoblauch in Olivenöl anbraten. <strong>1 -2 TL brauner Zucker</strong> dazugeben und leicht karamellisieren lassen. <strong>50 ml kräftige Gemüsebrühe</strong> angießen und <strong>50 g Tomatenmark</strong> unterrühren. Tomatenwürfel und <strong>1 TL Oregano </strong>hinzugeben. Die Soße bei schwacher Hitze 15 Minuten köcheln lassen, mit Salz und Pfeffer würzen.<br/>Den Backofen auf 250 Grad vorheizen. Den Hefeteig nochmals durchkneten und auf einem Backblech ausrollen und mit einem Glas Kreise ausstechen. Den Teig mit der Tomatensoße bestreichen.<br/>Als Belag haben wir <strong>Seranoschinken</strong> und <strong>Pilze</strong> mit <strong>Parmesan</strong> gewählt. Die Pizzen 8 Minuten im Backofen backen.',
		recipe_title: 'Mini Pizza',
	},
	{
		id: '1036',
		recipe_content:
			'Guacamole:<br/><strong>1 Avocado</strong> mit einer Gabel zerdrücken. <strong>1 Knoblauchzehe</strong> fein würfeln. Mit dem Saft von <strong>1/2 Zitrone, Salz</strong> und <strong>Pfeffer</strong> unterrühren.<br/><br/>Hummus:<br/><strong>1 kleine Dose Kichererbsen</strong> mit <strong>2 EL Tahini-Paste</strong> (Sesampaste) pürieren. <strong>2 EL Olivenöl, Salz</strong> und <strong>Pfeffer</strong> unterheben. Mit Paprikapulver garnieren.<br/><br/>Kräuterbutter:<br/><strong>1 PK Butter</strong> weich werden lassen. Mit <strong>1 gepressten Knoblauchzehe, Salz, Pfeffer</strong> und <strong>2 Handvoll gehackter Petersilie</strong> vermengen.',
		recipe_title: 'Aufstrich',
	},
	{
		id: '1043',
		recipe_content:
			'für 4 Hungrige:<br/><strong>500 g Champignons</strong> mit der Küchenmaschine oder mit dem Messer grob hacken. <strong>2 Möhren, 2 Zwiebeln</strong> und <strong>1/2 Knollensellerie</strong> schälen und in feine Würfel schneiden. <strong>1 Knoblauchzehe</strong> hacken und mit den Pilzen in <strong>Olivenöl</strong> anbraten. Das restliche Gemüse hinzugeben und 5 Minuten mitbraten. <strong>2 EL Tomatenmark</strong> unterrühren. Mit <strong>100 ml Weißwein</strong> ablöschen und aufkochen lassen. <strong>2 Dosen gehackte Tomaten </strong>und 1/2 Dose Wasser hinzugeben.<strong> 1 TL Thymian, 1 TL Oregano, 2 Lorbeerblätter</strong> und <strong>1 TL Paprikapulver </strong>unterrühren. Mit Zucker, Salz und Pfeffer würzen. 25 Minuten kochen lassen.<br/><strong>500 g Pasta</strong> (falls ihr so hungrig seid wie wir) kochen und unter die fertige Soße mischen. ',
		recipe_title: 'Pasta mit Tomatenragout',
	},
	{
		id: '1048',
		recipe_content:
			'für 4.<br/>Für die Würzmischung <strong>1 TL Chilipulver, 1 TL Salz, 1/2 TL Oregano, 1/2 TL Knoblauchgranulat, 1/2 TL Zwiebelgranulat</strong> und <strong>1/2 TL Pfeffer</strong> in einer kleinen vermengen. <strong>4 Stücke Hähnchenfleisch</strong> und mit der Würzmischung einreiben. <strong>3 Zucchini</strong> in Würfel schneiden. Fleisch und Zucchini in einer Pfanne in Olivenöl scharf anbraten. Danach das Hähnchenfleisch ebenfalls in Würfel schneiden. Zucchini und <strong>1 große Dose Mais</strong> mit <strong>2 TL Oregano, 1 TL Knoblauch </strong>und<strong> 1 EL Limettensaft</strong> vermengen, mit Salz und Pfeffer abschmecken. Das Fleisch unter das Gemüse heben.<br/>Den Backofen aus 180 Grad vorheizen. <strong>10 Tortillas</strong> gleichmäßig mit der Fleisch-Gemüse-Mischung und <strong>400 g Käse </strong>(hier geraspelter Gouda) auf jeweils einer Fladenhälfte belegen. Die freie Hälfte über die Füllung klappen und fest zusammendrücken.<br/>Quesadillas für 10 Minuten in den Backofen geben, bis der Käse geschmolzen ist (eventuell wenden).',
		recipe_title: 'Quesadillas',
	},
	{
		id: '1054',
		recipe_content:
			'Für 6 Mini-Gugel<br/><br/>Backofen auf etwa 180°C vorheizen.<br/><strong>100 g Mehl</strong> mit <strong>1/2 TL Backpulver</strong> in eine Rührschüssel sieben. <strong>50 g Zucker, 1 PK Vanillezucker, 50 g weiche Butter</strong> und <strong>2 Eier</strong> hinzufügen und alles mit einem Mixer zu einem glatten Teig verarbeiten. Die Hälfte des Teiges mit Hilfe von zwei Teelöffeln in die Formen füllen. Übrigen Teig mit <strong>1 EL Kakao</strong> verrühren. Dunklen Teig mit Hilfe von zwei Teelöffeln auf dem hellen Teig verteilen.<br/>Backzeit: etwa 20 Min.',
		recipe_title: 'Mini Gugel',
	},
	{
		id: '1059',
		recipe_content:
			'Hier kommt unser Vorschlag für etwas Abwechslung auf eurem Brot oder für den nächsten Brunch.<br/>Ihr braucht:<br/><strong>200 g körnigen Frischkäse, 2 EL Kürbiskernöl</strong> und <strong>eine Handvoll Kürbiskerne.</strong><br/>Die Kürbiskerne grob hacken und in einer Pfanne rösten. Dann mit dem Frischkäse und Öl mischen.',
		recipe_title: 'Kürbiskern Aufstrich',
	},
	{
		id: '1066',
		recipe_content:
			'für 2 Kränze<br/><strong>500 ml Milch</strong> erwärmen und <strong>1 Würfel Hefe</strong> hineinbröseln.<br/><strong>100 g Zucker, 20 g Salz, ½ Zitrone</strong> und <strong>Bittermandelöl</strong> hinzugeben.<br/>Mit dem Schneebesen verrühren.<br/><strong>150 g weiche Butter, 1 Ei</strong> und <strong>1 Eiweiß</strong> hinzugeben und gut unterrühren.<br/><strong>1 kg Mehl</strong> in die Schüssel sieben und verkneten.<br/>2 Stunden gehen lassen.<br/><br/>Den Teig teilen und 2 Rechtecke ausrollen.<br/><strong>6 EL Butter</strong> schmelzen und jedes Rechteck damit bestreichen. Mit einer Mischung aus <strong>3 EL Zimt</strong> und <strong>6 EL Zucker</strong> bestreuen. Den Teig aufrollen. Die Teigrolle mit einem scharfen Messer (am besten mit Butter bestreichen) halbieren und die bedienen entstandenen Stränge ineinander verdrehen und zu einem Kranz legen. Mit der zweiten Teigrolle genauso verfahren.<br/>Im Ofen bei 150 Grad Umluft 40 Minuten backen. Achtung: Die Kränze gehen ziemlich auf.',
		recipe_title: 'Hefekranz mit Zimt',
	},
	{
		id: '1073',
		recipe_content:
			'<strong>200 g Butter</strong> cremig rühren. <strong>300 g Zucker, 2 PK Vanillezucker </strong>und <strong>4 Eier</strong> hinzugeben.<strong> 250 g Mehl, 2 TL Backpulver</strong> und <strong>6 EL Kakao</strong> auf den Teig sieben und verrühren.<br/>Bei 180 Grad 30 Minuten backen. <br/><br/><strong>2 Becher Sahne</strong> mit <strong>1 PK Vanillezucker</strong> steif schlagen. <strong>20 Oreo Kekse</strong> in einem Gefrierbeutel mit einem Nudelholz zerkleinern. Je nach Geschmack könnt ihr sie ganz fein mahlen oder ein paar Stücke übrig lassen. Die Oreo Kekse unter die geschlagene Sahne mischen.<br/><br/>Den Kuchen waagerecht halbieren, die untere Hälfte mit der Oreo-Sahne bestreichen und das obere Teil gut darauf festdrücken.<br/><br/><strong>100 g dunkle Kuvertüre</strong> schmelzen und den Kuchen damit bestreichen.',
		recipe_title: 'Oreo Torte',
	},
	{
		id: '1113',
		recipe_content:
			'Krautsalat für 4 Personen für 2 Mahlzeiten:<br/><strong>1 Weißkohl</strong> mit der Küchenmaschine fein zerkleinern. <strong>4 Äpfel</strong> vierteln und entkernen, ebenfalls in der Küchenmaschine verkleinern. Weißkohl mit Äpfeln, Saft von <strong>1/2 Zitrone, 1 Handvoll Petersilie, 1 Handvoll gehackten Nüssen</strong> und <strong>4 Frühlingszwiebeln</strong> in Ringen mischen. Das Dressing aus <strong>10 EL Olivenöl, 5 EL Essig, 1 TL grobkörnigen Senf, 1 TL Erdbeermarmelade, Salz, Pfeffer</strong> und <strong>Zucker</strong> zu einer kräftigen Salatsoße verrühren. Den Salat damit vermsichen und 2 Studen durchziehen lassen.<br/>Eventuell den Salat danach noch einmal abschmecken.<br/><br/>Backofenkartoffeln:<br/><strong>Kartoffeln</strong> mit Schale waschen und in feine Scheiben schneiden. In einer großen Schüssel mit <strong>Olivenöl, Salz</strong> und <strong>Pfeffer</strong> mischen und auf 2 Backblechen verteilen. Im Ofen bei 180 Grad Umluft 30 - 40 Minuten backen. Eventuell zwischendurch wenden.<br/><br/>Dazu passt ein gutes Stück Fleisch mit Pilzen.',
		recipe_title: 'Mittagessen',
	},
	{
		id: '1120',
		recipe_content:
			'<strong>300 g Mehl, 1 TL Salz</strong> und <strong>1 TL Zucker</strong> in eine große Schüssel geben. <strong>225 g Butter </strong>in kleine Würfel schneiden und hinzufügen, verrühren. <strong>60 ml Wasser</strong> dazugeben und verkneten. Den Teig 60 Minuten in den Kühlschrank stellen.<br/>In der Zwischenzeit <strong>6 Äpfel</strong> in kleine Würfel schneiden und in einen Topf geben. <strong>1 EL Zitronensaft, 2 TL Vanilleextrakt, 100 g brauner Zucker, 1 TL Zimt, etwas Muskatnuss, 1 Prise Salz, 3 EL Rum</strong> und <strong>250 ml Wasser</strong> zu den Äpfeln geben.<br/>Den Teig ausrollen. Mit einem Glas Kreise ausstechen und auf die Hälfte dieser etwas Apfelmasse geben. Mit einem anderen Kreis belegen und mit einer Gabel am Rand zusammendrücken. In der Mitte ein Kreuz einschneiden. Für weitere 15 Minuten ins Tiefkühlfach stellen. Den Ofen auf 180°C Umluft vorheizen.<br/><strong>1 Eigelb</strong> mit etwas <strong>Sahne</strong> verquirlen und mit einem Pinsel auf die Handpies streichen. 40 Minuten backen.',
		recipe_title: 'Handpie',
	},
	{
		id: '1126',
		recipe_content:
			'für 2 Kastenformen<br/>Backofen auf 80 Grad vorheizen.<br/>4 TL Honig in 500 ml kochend heißem Wasser auflösen. 500 ml kaltes Wasser dazugeben und 2 Pakete Trockenhefe einstreuen. 10 Minuten ruhen lassen.<br/>Hefemischung mit dem Schneebesen aufschlagen, 415 g Mehl (Typ 550), 415 g Vollkornmehl, 3 TL Salz und 250 g Sonnenblumenkerne dazugeben und vermischen. Den Teig auf die beiden Kastenformen verteilen, mit je 2 EL Kürbiskerne bestreuen. Die Oberfläche mehrmals einschneiden.<br/>Brote bei 80 Grad für 20 Minuten backen. Dann die Temperatur auf 210 Grad erhöhen und 30 - 40 Minuten weiterbacken.',
		recipe_title: 'Selbstgemachtes Brot',
	},
	{
		id: '1138',
		recipe_content:
			'<strong>200 g Mehl</strong> und <strong>50 g Weichweizengrieß</strong> mischen. <strong>2 Eigelb, 1 ganzes Ei, 2 - 3 EL Wasser, 2 EL Olivenöl</strong> und <strong>1 Prise Salz</strong> verkneten. Im Kühlschrank kaltstellen.<br/><strong>1 Wirsing</strong> in Streifen schneiden, mit Salz würzen, bei mittlerer Hitze in einem Topf 12 Minuten schmoren. <strong>2 TL Thymian</strong> und <strong>1 EL Mehl</strong> unterrühren. Mit <strong>400 ml Gemüsebrühe</strong> und <strong>400 g Sahne </strong>auffüllen. 2 -3 Minuten einkochen lassen. Saft von <strong>1/2 Zitrone</strong>, Salz, Pfeffer und 1 Prise Zucker hinzugeben. 45 Minuten auskühlen lassen.<br/>Nudelteig sehr dünn ausrollen. Die Wirsingmasse darauf verteilen. Den Rand mit <strong>1 Eigelb </strong>bestreichen und zu einer Rolle zusammenrollen.<br/>Die Rolle in 4 - 5 cm breite Stücke schneiden und in eine Auflaufform mit der Schnittfläche nach oben nebeneinander setzten.<br/><strong>300 ml heiße Gemüsebrühe</strong> angießen.<br/><br/>Im Backofen bei 200 Grad 40 Minuten backen.<br/><br/>Rote Beete Salat:<br/><strong>1 Paket Rote Beete</strong> (vakuumiert) in Scheiben schneiden. <strong>2 Äpfel</strong> vierteln und auch in Scheiben schneiden. <strong>1 Handvoll Walnüsse</strong> zerhacken. <strong>4 Möhren</strong> fein raspeln. <br/><strong>1 EL Honig, 1 EL grobkörniger Senf, 3 EL Weißweinessig, 6 EL Olivenöl, Salz, Pfeffer</strong> und <strong>1 Prise Zucker</strong> zu einer Soße vermischen. Zutaten mit der Soße vermengen. Mit <strong>Petersilie</strong> garnieren.<br/><br/>Dazu passt auch Ziegenkäse und Kürbiskernöl.',
		recipe_title: 'Wirsing-Nudel-Strudel mit Rote Beete Salat',
	},
	{
		id: '1146',
		recipe_content:
			'Zutaten für eine runde Auflaufform<br/><br/>Den Ofen auf 200°C vorheizen. <strong>3 Eier</strong> trennen und die Eiweiße steif schlagen. Die Eigelbe mit <strong>100 g Mehl, 175 ml Milch, 30 g Zucker, 250 g Quark</strong> und <strong>1 EL Vanillezucker</strong> verquirlen und anschließend das Eiweiß unterheben.<br/><br/><strong>500 g TK Beeren</strong>(hier Himbeeren) in einem Topf mit 1 Tasse Wasser und dem <strong>Mark von 1 Vanilleschote</strong> aufkochen und dann mit etwas <strong>Mondamin</strong> sehr dick andicken.<br/><br/>Die Form mit <strong>Butter</strong> einfetten und die Beeren hineingeben. Den Teig darüber gießen und für etwa 20 Minuten backen, bis die Oberfläche fest ist. Mit <strong>Puderzucker</strong> bestreuen.',
		recipe_title: 'Auarkauflauf mit Beeren',
	},
	{
		id: '1156',
		recipe_content:
			'für 4<br/><strong>Auberginen aus dem Ofen </strong><br/><br/><strong>4 Auberginen</strong> halbieren und aushöhlen. Das Fruchtfleisch und die Hälften salzen und 30 Minuten ziehen lassen.<br/><strong>3 Zwiebeln</strong> und <strong>2 Knoblauchzehen</strong> in Würfel schneiden. <strong>8 Tomaten</strong> ebenfalls in Stücke schneiden. Etwas <strong>Thymian</strong> kleinzupfen.<br/><strong>2 El Olivenöl</strong> in erhitzen. Zwiebel und Knoblauch andünsten. Das Fruchfleisch der Aubergine ausdrücken, in Würfel schneiden und ebenfalls dazugeben. <strong>1 EL Tomatenmark</strong> und <strong>1 TL Paprikapulver</strong> zum Gemüse geben. Tomaten, <strong>1 Dose gehackte Tomaten</strong> und Thymian dazugeben und noch 3 Minuten mitdünsten. <strong>1 PK Feta</strong> in Würfel schneiden und unterheben.<br/>Füllung mit Salz, Pfeffer und <strong>Zitronensaft</strong> (alternativ Essig) abschmecken.<br/>Backofen auf 200 Grad vorheizen.<br/><strong>100 ml Gemüsebrühe</strong> in eine Auflaufform gießen. Die Auberginenhälften in die Form setzten und mit der Masse füllen.<br/>30 Minuten im Ofen garen.<br/><br/><strong>Hirse Schnitten </strong><br/><br/><strong>1 Zitrone</strong> auspressen, mit <strong>1 fein gehackter Knoblauchzehe</strong> und <strong>1 Bund Petersilie</strong> vermischen und ziehen lassen.<br/><strong>200 g Hirse</strong> in <strong>1 l Gemüsebrühe</strong> 20 Minuten zugedeckt köcheln, dabei mehrmals umrühren.<br/><strong>2 EL Butter</strong> und <strong>50 g Parmesan</strong> untermischen. Die Kräutermischung ebenfalls unterrühren. 1 cm dick auf ein mit Backpapier belegtem Blech streichen. Bei 180 Grad 15 Minuten im Backofen backen.',
		recipe_title: 'Auberginen mit Hirse',
	},
	{
		id: '1165',
		recipe_content:
			'<strong>220 g Mehl, 1/2 TL Backpulver, 75 g Zucker, 150 g Butter, 1 Prise Salz</strong> und <strong>1 Eigelb </strong>mit den Knethaken des Handrührers zu einem glatten Teig verarbeiten. Auf einem gefetteten Blech (30x40 cm) bis in die Ecken ausrollen und 30 Minuten kalt stellen.<br/><strong>4 El Wasser, 2 EL Honig, 100 g Zucker, 100 g Butter</strong> und <strong>1 Prise Salz</strong> in einem Topf aufkochen. <strong>200 g Haselnüsse</strong> und <strong>200 g Mandeln</strong> untermischen und die Masse abkühlen lassen.<br/>Den Teig mehrmals mit einer Gabel einstechen. Die Nussmasse gleichmäßig auf dem Teig verteilen und leicht andrücken. Im vorgeheizten Ofen bei 200 Grad (Umluft 180 Grad) auf der 2. Schiene von unten 15-20 Minuten backen.<br/>Die Teigplatte etwas abkühlen lassen. Lauwarm schneiden. Vollständig abkühlen lassen und erst dann am besten mit einer Palette vom Blech nehmen.',
		recipe_title: 'Nussecken',
	},
	{
		id: '1172',
		recipe_content:
			'<strong>Pita Brote</strong><br/><br/>8 Stück<br/><strong>360 g Mehl</strong> sieben und mit <strong>1 Paket Trockenhefe, 1 TL Salz</strong> und <strong>1 TL Zucker</strong> vermischen. <strong>175 ml warmes Wasser</strong> und <strong>2 EL Olivenöl</strong> dazugeben und gut verkneten. Abgedeckt 30-40 Minuten gehen lassen. Anschließend den Teig in sechs gleich große Stücke teilen und jedes davon auf einer leicht bemehlten Arbeitsfläche etwas handgroß und nicht zu dünn ausrollen. Nochmal fünf Minuten ruhen lassen. Die Oberseite mit einer Gabel gleichmäßig einstechen und die Brote nacheinander in einer leicht geölten, heißen Pfanne beidseite goldbraun braten.<br/><br/>Rezept nach <a href="http://www.frl-moonstruck-kocht.de" target="_blank">frl moonstruck kocht</a><br/><br/><strong>Kohlrabi-Fenchel Gemüse</strong><br/><br/><strong>4 Kohlrabi</strong> mit der Küchenmaschine in feine Scheiben schneiden. <strong>2 Fenchelknollen</strong> und <strong>2 Äpfel</strong> (geschält) in feine Spalten schneiden. <strong>200 g Speckwürfel</strong> knusprig anbraten. Das Gemüse dazugeben, mitdünsten und mit <strong>2 EL Weißweinessig</strong> ablöschen. Einkochen lassen. <strong>200 ml Gemüsebrühe</strong> angießen. Das ganze weich kochen lassen, das dauert ungefähr 15 Minuten. Danach den Sud abgießen und das Gemüse zu den Pitas servieren.<br/><br/>Dazu passt ein <strong>Ziegenkäse Dip:</strong><br/><br/><strong>150 g Ziegenkäse-Mousse</strong> (gibt es bei REWE) mit <strong>150 g Naturjoghurt</strong> und <strong>150 g Quark</strong> vermischen. Mit Salz und Pfeffer würzen.',
		recipe_title: 'Pita mit Kohlrabi und Fenchel',
	},
	{
		id: '1215',
		recipe_content:
			'Teig<br/><br/><strong>250 g Mehl</strong> mit <strong>1 Prise Salz </strong>vermischen. <strong>100 g weiche Butter</strong>, <strong>100 g Frischkäse</strong> und <strong>1 Eigelb</strong> mit dem Mehl zu einem Teig verkneten. 1 h im Kühlschrank ruhen lassen.<br/><br/>Den Backofen auf 160 Grad Umluft vorheizen. Eine Quiche-Form fetten und mit Mehl bestäuben.<br/>Teig auf die Größe der Form ausrollen und hineinlegen. Mit einer Gabel mehrmals einstechen.<br/>Im Ofen 10 Minuten backen.<br/><br/>Füllung<br/><br/><strong>100 ml Milch, 125 g Creme Fraiche, 50 g geriebener Parmesan</strong> und<strong> 4 Eier</strong> verquirlen. Mit Salz und Pfeffer abschmecken. Nach Belieben mit Petersilie würzen. Guss in die Form gießen.<br/><strong>20 Coctailtomaten</strong> halbieren und auf dem Guss verteilen.<br/><br/>Im Ofen bei 140 Grad Umluft nochmals 30 Minuten backen.',
		recipe_title: 'Tomaten-Quiche',
	},
	{
		id: '1221',
		recipe_content:
			'für eine kleine Springform:<br/>Für den Teig <strong>50 g Quark, 2 TL Milch, 2 TL Öl, 1 Prise Salz, 20 g Zucker</strong> mit <strong>100 g Mehl </strong>und <strong>1/2 TL Backpulver</strong> verkneten. 30 Minuten im Kühlschrank ruhen lassen.<br/>Für die Füllung <strong>225 ml Milch</strong> mit der <strong>3 TL Butter</strong> erwärmen. <strong>30 g Hartweizengrieß, 5 EL Zucker</strong> und <strong>Mark von 1 Vanilleschote</strong> einrühren und aufkochen lassen. 5 Minuten quellen lassen.<br/>Dann <strong>150 g Mohn</strong> untermischen.<br/>Den Teig ausrollen und die gefettete Springform damit auskleiden.<br/><strong>2 Eier</strong> unter die Mohnmasse rühren und die Füllung auf dem Teig verteilen.<br/>Im Ofen bei 180°C Umluft ca. 25 Minuten backen.<br/>',
		recipe_title: 'Mohnkuchen II ',
	},
	{
		id: '1224',
		recipe_content:
			'für 4 Personen - naja oder eher 6..<br/><br/><strong>500 g kleine Nudeln</strong> in Salzwasser nach Packungsanleitung kochen.<br/><br/>Für die Tomatensoße <strong>2 Zwiebeln</strong> und <strong>1 Knoblauchzehe</strong> fein hacken und in Olivenöl anbraten. Mit <strong>1 TL braunem Zucker</strong> bestreuen und karamellisieren lassen. <strong>2 TL Tomatenmark</strong> hinzugeben und rösten. Mit <strong>200 ml Gemüsebrühe</strong> ablöschen und etwas einkochen lassen. <strong>1 Dose stückige Tomaten, 1 Dose passierte Tomaten</strong> und<strong> 1 Becher Sahne</strong> hinzugeben und 15 Minuten köcheln lassen. Mit Salz und Pfeffer kräftig würzen.<br/><br/>Für die Hackbällchen <strong>1 Zwiebel</strong> und <strong>1 Knoblauchzehe</strong> fein würfeln. <strong>500 g Hack</strong> mit den Zwiebeln, Knoblauch, <strong>1 Ei </strong>und <strong>3 EL Semmelbrösel</strong> verkneten. Mit Salz, Pfeffer und Paprika würzen.<br/>Kleine Bällchen formen und diese in heißem Olivenöl rundherum anbraten.<br/><br/><strong>4 Zucchini</strong> waschen, halbieren und in feine Scheiben schneiden. In heißem Olivenöl anbraten.<br/><br/>Gemüse, Nudeln, Tomatensoße und Hackbällchen in einer großen Auflaufform mischen.<br/><strong>1 Kugel Mozarella</strong> in Scheiben schneiden und den Auflauf damit belegen.<br/>30 Minuten bei 180 Grad Umluft backen.',
		recipe_title: 'Nudelauflauf',
	},
	{
		id: '1229',
		recipe_content:
			'<strong>600 g Kartoffeln</strong> schälen. 200 g davon grob würfeln und in Salzwasser 20 Minuten garen. Anschließend fein zerdrücken. Die übrigen Kartoffeln und <strong>200 g Möhren</strong> grob reiben. Mit <strong>125 ml Milch, 125 g Sauerrahm, 3 Eiern, 100 g geriebenem Parmesan</strong> und dem Kartoffel-Mus vermengen. Mit Salz und Pfeffer würzen. Backofen auf 200 Grad vorheizen.<br/>Eine Quicheform mit Backpapier auslegen und mit der Masse bestreichen. Im Ofen 30 Minuten backen.<br/><br/>Passt zu einem leckeren Blattsalat und <a href="http://www.chefkoch.de/rezepte/2273271362839624/Marinierter-Lachs-mit-Sesamkruste.html" target="_blank">Seelachs mit Sesamkruste</a>',
		recipe_title: 'Möhren Rösti',
	},
	{
		id: '1236',
		recipe_content:
			'<strong>300 g Couscous</strong> mit kochendem Wasser bedecken. <strong>3 EL Tomatenmark, 1 Tl Brühe</strong> und <strong>1 TL Paprikapulver</strong> unterrühren. Mit <strong>1 gepressten Knoblauchzehe</strong> vermengen. Ziehen lassen.<br/><br/><strong>300 g Möhren</strong> längs in Streifen hobeln (mit einem Schälmesser). <strong>4 Zucchini</strong> in Scheiben schneiden. <strong>2 Auberginen</strong> würfeln. Das Gemüse mit <strong>4 EL Öl</strong> mischen und auf einem Backblech für 30 Minuten bei 200 Grad backen. In der Zwischenzeit <strong>3 Frühlingszwiebeln</strong> und <strong>1 Bund Petersilie</strong> in Streifen schneiden und unter den Couscous mischen. 1 Zitrone auspressen und ebenfalls unterrühren. <strong>100 g Feta</strong> in Würfel schneiden und mit dem Ofengemüse unter den Couscous mischen.<br/>Mit Salz und Pfeffer abschmecken.',
		recipe_title: 'Couscous Salat',
	},
	{
		id: '1285',
		recipe_content:
			"Den Ofen unterdessen auf 220°C Ober- und Unterhitze vorheizen.<br/>Für den Teig <strong>200 g Mehl, 1 Prise Salz</strong> und <strong>1 TL Zucker</strong> mischen. <strong>100 g kalte Butter</strong> hinzufügen und alles mit den Händen verkneten. Dann <strong>80 ml Wasser</strong> hinzugeben und zu einem glatten Teig verkneten. Diesen dann zu einem flachen Ziegel formen und in Frischhaltefolie gebettet 45 Minuten in den Kühlschrank geben.<br/>Währenddessen für die Füllung <strong>500 g Quark (</strong>am besten schmeckt's mit Sahnequark, 40 oder 20 % geht aber auch) mit <strong>2 PK Vanillezucker,</strong> dem <strong>Mark von 1 Vanilleschote,</strong> dem <strong>Saft von 1/2 Zitrone</strong> und <strong>2 PK Vanillepuddingpulver</strong> vermengen. <strong>500 g Erdbeeren</strong> waschen und in feine Scheiben schneiden.<br/>Eine Springform mit Backpapier auslegen und den Boden mit dem Teig bedecken. Einen Rand an den Seiten der Springform hochziehen (wird später über die Tarte geklappt). Nun mit der Quarkmasse bestreichen und mit den Erdbeeren belegen. Mit <strong>2 EL braunem Zucker</strong> bestreuen. Den Rand mit verquirltem <strong>1 Eigelb</strong> mit Milch bestreichen. Die Tarte für 20 - 30 Minuten in den Ofen geben. Die Quarkmasse sollte fest werden.",
		recipe_title: 'Erdbeer Tarte',
	},
	{
		id: '1310',
		recipe_content:
			'Den Backofen auf 175 Grad vorheizen.<br/><strong>250 g Butter</strong> und <strong>200 g Zucker </strong>schaumig rühren, <strong>6 Eier</strong> unterrühren. <strong>400 g Mehl</strong> und <strong>1 PK Backpulver</strong> auf den Teig sieben und vermengen. <strong>100 ml Milch</strong> hinzugeben. In einer Kastenform ca.60 Minuten backen.<br/>(In einer flachen Form oder auf das Backblech gestrichen ca. 45 Min.)',
		recipe_title: 'Klassischer Sandkuchen',
	},
	{
		id: '1321',
		recipe_content:
			'Den Ofen auf 170°C Ober- und Unterhitze vorheizen und eine Gugelform fetten und mit Mehl bestäuben. <strong>200 g Mehl, 1/4 TL Backpulver, 1 TL Backpulver, 1 Prise Salz</strong> und<strong> 1/2 TL Zimt</strong> mischen und sieben.<strong>120 ml Öl, 100 g brauner Zucker</strong> und <strong>2 Eier</strong> mit einem Handrührgerät gut durchmixen. <strong>3 reife Bananen</strong> zu Mus zerdrücken und dazu geben. Dann die Mehlmischung und so lange rühren, bis das Mehl eingearbeitet ist. In den Ofen geben und ca. 50-60 Minuten lang backen.',
		recipe_title: 'Bananen Gugelhupf',
	},
	{
		id: '1339',
		recipe_content:
			'Bestandteile:<br/><strong>Zucchini, Feta, Coctailtomaten, rote Zwiebeln, Auberginen, Möhren, Knoblauchzehen</strong><br/><br/>Zunächst bereitet ihr das Gemüse zu. Die Auberginen quer in Scheiben schneiden und nebeneinander ausgebreitet mit Salz bestreut. 15 Minuten ziehen lassen.Den Backofen auf 180 Grad vorheizen und ein großes Backblech mit Backpapier auslegen. In der Zwischenzeit könnt ihr euch an das restliche Gemüse begeben.<br/>Zucchini und Möhren längs in 1 cm dicke Scheiben schneiden. Die Cocktailtomaten halbieren. Die roten Zwiebeln häuten und ebenfalls halbieren. Knoblauchzehen (2) fein würfeln. Das Gemüse in eine Schüssel geben und mit reichlich Olivenöl vermengen. Mit Salz und Pfeffer würzen. Nebeneinander auf dem Backblech verteilen.<br/>Nun die Auberginen mit einem Küchentuch abtupfen und ebenfalls auf das Blech legen. Mit Olivenöl bestreichen.<br/>Das Gemüse für 40 Minuten in den Ofen geben. Es sollte schön weich garen, unter Umständen dauert das auch etwas länger. Am Besten im Blick behalten und das Gemüse einmal wenden.<br/><br/>Für den Hummus:<br/><strong>1 Dose Kichererbsen</strong> im Sieb abbrausen. <strong>2 Knoblauchzehen</strong> würfeln. Dann die Kichererbsen mit Knoblauch, <strong>3 EL Olivenöl, 3 EL Zitronensaft</strong> und <strong>2-3 EL Wasser</strong> zu einer Paste pürieren. Mit Salz und etwas Pfeffer abschmecken.<br/><br/>Zu guter Letzt wird der Feta noch in Scheiben geschnitten und mit dem Gemüse auf einem Teller angerichtet. Den Humus in eine kleine Schüssel geben und mit Sonnenblumenkernen bestreuen.',
		recipe_title: 'Orientalischer Vorspeisenteller',
	},
	{
		id: '1345',
		recipe_content:
			'für 4 Personen<br/><strong>200 g Magerquark</strong> mit <strong>200 g Joghurt</strong> mischen und mit <strong>Agavendicksaft</strong> oder <strong>Honig</strong> nach Geschmack süßen.<br/>Den Quark auf zwei Schüsseln verteilen.<br/><strong>500 g Erdbeeren</strong> waschen und<strong> 1 Dose Pfirsiche</strong> abspülen. Die Hälfte der Erdbeeren und der Pfirsiche in feine Würfel schneiden und vermengen.<br/>Die restlichen Erdbeeren mit einer Hälfte des Quarks pürieren, die Pfirsiche mit der anderen Hälfte.<br/>Zuerst den Pfirsich-Quark auf Gläschen verteilen. Dann die Hälfte des Obstes darauf geben.<br/>Darauf wiederum den Erdbeer-Quark verteilen und mit dem restlichen Obst belegen.',
		recipe_title: 'Erdbeer-Pfirsich-Quark',
	},
	{
		id: '1352',
		recipe_content:
			'Zuerst <strong>1 Aubergine</strong> halbieren. Ein Backblech mit <strong>Olivenöl</strong> bestreichen und leicht salzen und pfeffern. Die Haut der Auberginen mit einer Gabel mehrmals einstechen und mit der Fläche nach unten auf das Backblech legen. Im Ofen bei 200 Grad 20 - 30 Minuten weich garen.<br/><br/>In der Zwischenzeit <strong>ein großes (!!) Stück Lachs</strong> in eine geölte Auflaufform legen. Mit etwas Olivenöl einreiben, salzen und mit <strong>1 - 2 TL braunem Zucker</strong> bestreuen. <strong>200 g Kirschtomaten</strong> halbieren, mit <strong>Olivenöl</strong> und <strong>1 TL braunem Zucker</strong> bestreuen. <strong>1 Knoblauchzehe</strong> in feine Scheiben schneiden und mit den Tomaten zu dem Lachs in die Auflaufform geben.<br/><br/><strong>250 g Pasta</strong> in Salzwasser kochen, abtropfen lassen.<br/><br/>Wenn die Auberginen weich gegart sind, diese mit einem Löffel aushöhlen, sodass ein Rand stehen bleibt. Für die Füllung das Fruchtfleisch, <strong>300 g Kirschtomaten, 1 rote Zwiebel, 1 Knoblauchzehe</strong> und <strong>200 g Feta</strong> fein würfeln. <strong>1/2 Bund Petersilie</strong> fein hacken und unter die Mischung geben. Vorsichtig mit Salz, Pfeffer und <strong>2 EL Zitronensaft</strong> würzen.<br/><strong>2 EL Sonnenblumenkerne</strong> untermengen. Die Füllung auf die Auberginenhälften verteilen und diese ebenfalls in eine Auflaufform setzen.<br/><br/>Zusammen mit dem Lachs für 20 Minuten in den Ofen geben.<br/><br/><strong>1/2 Bund Petersilie</strong> fein hacken. <strong>2 EL Butter</strong> in einer Pfanne erhitzen und die Nudeln und Petersilie hinzugeben, leicht salzen und gut vermengen.<br/><br/>Alles auf zwei Tellern anrichten',
		recipe_title: 'Lachs mit gefüllter Aubergine',
	},
	{
		id: '1358',
		recipe_content:
			'<strong>130 g Mehl</strong> mit <strong>1/2 TL Backpulver</strong> mischen. <strong>90 g kalte Butter</strong> in Stücken dazu geben. <strong>50 g Zucker, 1 PK Vanillezucker, 1 Prise Salz</strong> und <strong>1 Ei </strong>dazugeben und schnell zu einem Teig verkneten. 30 Minuten im Kühlschrank kaltstellen.<br/><br/>Für die Marzipancreme <strong>1 PK Puddingpulver (Vanille)</strong> mit <strong>4 EL Milch</strong> glattrühren. <strong>500 ml Milch</strong> mit <strong>100 - 200 g Marzipan </strong>erwärmen, bis das Marzipan aufgelöst ist. Milch aufkochen lassen, Puddingpulver und <strong>40 g Zucker </strong>einrühren und noch mal kurz aufkochen lassen. Unter Rühren aufkochen lassen.<br/><br/>Ofen auf 180 Grad vorheizen.<br/>Teig ausrollen und in eine Springform legen. 25 Minuten backen. Boden auskühlen lassen.<br/><br/><strong>200 g Sahne</strong> steif schlagen und vorsichtig unter den Pudding rühren. Die Creme auf den Boden geben und die Torte über Nacht im Kühlschrank fest werden lassen.<br/>Mit <strong>Himbeeren</strong> und <strong>gehackten Mandeln</strong> garnieren.',
		recipe_title: 'Marzipan Torte',
	},
	{
		id: '1375',
		recipe_content:
			'<strong>3 EL  Speisestärke</strong> mit <strong>200 ml Milch</strong> verrühren. <strong>100 ml Sahne</strong> mit <strong>200 ml Milch</strong> und dem <strong>Mark einer Vanilleschote</strong> aufkochen. <strong>100 g weiße Schokolade</strong> klein hacken, zugeben und unter Rühren schmelzen. <strong>3 Eigelbe</strong> miteinander verquirlen und einrühren. Die Masse von der Herdplatte nehmen und die Milch mit der Speisestärke zugeben. Den Topf dann zurück auf den Herd schieben, wieder aufkochen lassen und dann in kleine Schälchen (hier Creme-Brule-Formen) füllen. Es sollte etwas sein, woraus der Pudding wieder gestürzt werden kann. 3 Stunden kaltstellen.<br/>Für die Erdbeersoße <strong>250 g TK Erdbeeren</strong> in einem Topf mit 3 EL Wasser aufkochen und nach Geschmack mit braunem Zucker süßen.<br/>Wenn der Pudding fest geworden ist, diesen vorsichtig aus den Formen lösen und stürzen.<br/>Nun die Erdbeersoße auf 4 kleine Unterteller verteilen, sodass ein Spiegel entsteht.<br/>Den Pudding vorsichtig darauf setzen  und mit etwas gehackter <strong>dunkler Schokolade</strong> bestreuen oder vielleicht mit einem Klecks <strong>Schokoladensoße</strong> servieren?',
		recipe_title: 'Vanille-Schokoladen-Pudding auf Erdbeerspiegel',
	},
	{
		id: '1379',
		recipe_content:
			'<ol><br/><li>Vorbereitung<br/>8 frische Tomaten <em>in Stücke schneiden</em><br/>5 getrocknete Tomaten in Öl <em>in Streifen schneiden</em><br/>3 rote Zwiebeln <em>fein hacken </em><br/>2 Knoblauchzehen <em>fein hacken</em><br/>300 g Rindergehacktes<br/>500 ml passierte Tomaten<br/>Pinienkerne<br/>Basilikum<br/>2 EL brauner Zucker<br/>1 TL Paprikapulver<br/></li><br/>\t<li>Zwiebeln und Knoblauch in Olivenöl glasig dünsten</li><br/>\t<li>Mit braunem Zucker und Paprikapulver bestreuen und karamellisieren lassen.</li><br/>\t<li>Getrocknete und frische Tomaten hinzugeben und 5 Minuten einkochen lassen.</li><br/>\t<li>Mit den passierten Tomaten und 250 ml Gemüsebrühe auffüllen. Köcheln lassen. Unter Umstaänden noch etwas Flüssigkeit nachgießen.</li><br/>\t<li>In der Zwischenzeit das Hackfleisch in einer zweiten Pfanne in Olivenöl knusprig anbraten. Mit Salz und Pfeffer kräftig würzen.</li><br/>\t<li>Hackfleisch zu der Tomatensoße geben und mindestens (!!) eine halbe Stunde köcheln lassen. Hier gilt - umso länger, desto besser der Geschmack.</li><br/>\t<li>Die Bolognese mit Salz und Pfeffer abschmecken. Mit Pinienkernen und Basilikum garnieren.</li><br/></ol>',
		recipe_title: 'Glücks-Bolognese',
	},
	{
		id: '1390',
		recipe_content:
			'Biskuit<br/>Den Backofen auf 200 °C vorheizen. <strong>2 Eier</strong> mit <strong>75 g Puderzucker</strong> und <strong>1 Prise Salz</strong> ca. 5 Minuten lang mit dem Handrührgerät dickschaumig aufschlagen. <strong>80 g Mehl</strong> mit <strong>15 g Stärke</strong> mischen, über den Eischaum sieben und mit <strong>30 g fein gehackten Walnüssen</strong> behutsam unterheben.<br/>Biskuitmasse ca. 1 cm dick auf ein mit Backpapier belegtes Backblech streichen und im Ofen etwa 10 Minuten backen. Den Biskuit herausnehmen und sofort auf ein mit <strong>Puderzucker</strong> bestäubtes Tuch stürzen, sodass das Backpapier oben ist. Das Papier abziehen und den Teig mit dem Handtuch aufrollen.<br/><br/><strong>200 g Sahne</strong> steif schlagen und <strong>2 EL erkaltetem Espresso</strong> unterheben. Den Biskuit vorsichtig entrollen. Mit etwas angerührtem <strong>Trinkkakao</strong> beträufeln, vorsichtig nicht tränken! Dann die Sahne auf dem Biskuit verstreichen und das Ganze vorsichtig aufrollen.<br/>Mit Kakao bestäuben.',
		recipe_title: 'Mokka-Nuss-Rolle',
	},
	{
		id: '1396',
		recipe_content:
			'für 2<br/><strong>150 g rote Linsen</strong> nach Packungsanleitung zubereiten. Den Backofen auf 200 Grad Ober- und Unterhitze vorheizen. <strong>1 rote Zwiebel</strong> und <strong>1 Knoblauchzehen</strong> fein würfeln und in Olivenöl anbraten. <strong>1/2 Bund Petersilie </strong>grob hacken. <strong>1 EL Tomatenpaste, 4 EL Semmelbrösel, </strong>etwas <strong>orientalisches Gewürz</strong> (Couscous-Gewürz), <strong>1/2 TL geräuchtertes Paprikapulver, 1 Ei, Salz</strong> und <strong>Pfeffer</strong> zu den abgetropften Linsen geben. Mit Zwiebel und Knoblauch pürieren. Die Masse soll gut gemischt, aber noch fest sein. Eventuell müssen noch ein paar Semmelbrösel dazugegeben werden. Die Masse zu flachen Bällchen formen. 30 Minuten im Ofen backen. Nach 15 Minuten einmal wenden.<br/>',
		recipe_title: 'Linsen Bällchen',
	},
	{
		id: '1403',
		recipe_content:
			'Den <strong>Backofen auf 180 Grad Umluft vorheizen</strong>. Eine quadratische Backform (ca 24 cm x 24 cm) einfetten und mit Backpapier auskleiden.<br/><strong>150g Zartbitterschokolade</strong> und <strong>225g Butter</strong> in eine hitzebeständige Schüssel geben und im Wasserbad unter gelegentlichem Rühren schmelzen. Etwas abkühlen lassen.<br/><strong>225g Weizenmehl gemischt mit 2 TL Backpulver</strong> in eine zweite Schüssel sieben und <strong>125g Zucker</strong> untermischen.<br/><strong>4 Eier</strong> in die geschmolzene Schokolade rühren. Dann die Masse in die Mehl-Zucker-Mischung gießen und alles zu einem glatten Teig verrühren.<br/><strong>75g gehackte Pistazien</strong>und <strong>100g grob gehackte weiße Schokolade</strong> unterheben.<br/>Den Teig in die vorbereitete Form füllen und die Oberfläche mit einem Palettmesser glatt streichen.<br/>Im vorgeheizten Ofen <strong>30-35 Minuten backen</strong>, bis der Kuchen am Rand fest ist. Etwa 20 Minuten abkühlen lassen, dann aus der Form lösen und auf ein Kuchengitter setzen.<br/>Den Kuchen vor dem Servieren in ca. 12 Stücke schneiden.<br/><br/>By the way: Pistazien und weiße Schokolade können natürlich je nach Bedarf auch in einer größeren Menge hinzugefügt werden!',
		recipe_title: 'Schoko-Brownies mit Pistazien & weißer Schokolade',
	},
	{
		id: '1414',
		recipe_content:
			'Den <strong>Backofen auf 180 Grad Umluft vorheizen</strong>. Zwei runde Backformen (20 cm Durchmesser) einfetten und mit Backpapier auskleiden.<br/>Für die Glasur <strong>225g Zartbitterschokolade in Stücke gebrochen</strong>, <strong>50g Zucker</strong>, <strong>225g gewürfelte Butter</strong>, <strong>5 EL Kondensmilch</strong> und <strong>1/2 TL Vanillearoma</strong> in einen schweren Topf geben und unter Rühren sanft erhitzen, bis die Schokolade geschmolzen und die Masse glatt ist. In eine Schüssel füllen und abkühlen lassen. Abgedeckt etwa 1 Stunde in den Kühlschrank stellen, bis die Masse streichfähig ist.<br/>Für den Teig <strong>175g weiche Butter</strong> und <strong>175g Zucker</strong> in eine große Schüssel geben und cremig rühren. Nach und nach <strong>3 Eier</strong> sorgfältig einarbeiten. <strong>3 EL hellen Zuckerrübensirup</strong> und <strong>40g abgezogene, gemahlene Mandeln</strong> unterrühren.<br/><strong>175g Weizenmehl gemischt mit 2 TL Backpulver</strong>, <strong>1 Prise Salz</strong> und <strong>40g Kakao</strong> in eine zweite Schüssel sieben, dann unter die Buttermasse ziehen. Falls nötig, noch etwas Wasser einarbeiten, sodass der Teig dickflüssig von Löffel fällt.<br/>Den Teig zu gleichen Teilen in die vorbereiteten Formen füllen und im vorgeheizten Ofen <strong>30-35 Minuten backen</strong>, bis der Kuchen auf Fingerdruck elastisch nachgibt und ein in die Mitte gestochener Holzspieß trocken und sauber bleibt.<br/>Die Kuchen 5 Minuten abkühlen lassen, dann aus den Formen lösen und auf einem Kuchengitter vollständig erkalten lassen.<br/>Die Teigböden mit der Hälfte der Glasur zusammensetzen und mit der restlichen Glasur dekorativ überziehen.',
		recipe_title: 'Schokoladenkuchen',
	},
	{
		id: '1422',
		recipe_content:
			'Den <strong>Backofen auf 180 Grad vorheizen</strong>. Eine rechteckige Backform (28 cm x 18 cm) einfetten und mit Backpapier auskleiden. <strong>2 Tafeläpfel geschält und gewürfelt</strong> mit <strong>2 EL Zitronensaft</strong> beträufeln.<br/><strong>125g weiche Butter</strong>, <strong>125g Zucker</strong> und <strong>1 TL Vanillearoma</strong> cremig rühren, dann <strong>2 Eier</strong> nach und nach sorgfältig unterrühren.<br/><strong>150g Weizenmehl gemischt mit 1 1/2 TL Backpulver</strong> darübersieben und unter die Buttermasse heben, dann die Äpfel unterziehen. Den Teig in die vorbereitete Form füllen und die Oberfläche glatt streichen.<br/><br/>Für den Belag - die geliebten Streusel - <strong>40g abgezogene fein gehackte Mandeln</strong>, <strong>40g Weizenmehl</strong>, <strong>40g Zucker</strong>, <strong>1/2 TL Zimt</strong> und <strong>30g zerlassene Butter</strong> zu Streuseln verreiben und gleichmäßig auf dem Teig verteilen. Kleiner <strong>Tipp</strong>: An Streuseln kann man nicht genug haben, also ggf. doppelte Menge!<br/>Im vorgeheizten Ofen <strong>45-55 Minuten backen</strong>, bis der Kuchen fest und goldbraun ist.<br/>In Riegel schneiden und nach Belieben warm oder kalt verzehren (:',
		recipe_title: 'Apfel-Streusel-Riegel',
	},
	{
		id: '1428',
		recipe_content:
			'Den <strong>Backofen auf 180 Grad vorheizen</strong>. Zwei runde Backformen (20 cm Durchmesser) einfetten und mit Backpapier auskleiden.<br/><strong>175g Weizenmehl</strong> und <strong>2 1/2 TL Backpulver</strong> in eine große Schüssel sieben. <strong>175g weiche Butter</strong>, <strong>175g Zucker</strong> und <strong>3 Eier</strong> zufügen und alles zu einem glatten Teig verrühren. Den Teig zu gleichen Teilen in die vorbereitete Formen füllen und die Oberflächen glatt streichen.<br/>Im vorgeheizten Ofen <strong>25-30 Minuten backen</strong>, bis die Teigböden schön aufgegangen und goldbraun sind. Die Böden 5 Minuten abkühlen lassen, dann aus den Formen lösen und auf einem Kuchengitter vollständig erkalten lassen.<br/>Die Teigböden mit <strong>3 EL Erdbeerkonfitüre</strong>, <strong>300g steif geschlagene Schlagsahne</strong> und <strong>16 halbierte große Erdbeeren</strong> zusammensetzen. Nach Belieben auch mit weiteren Erdbeeren und Sahne verzieren und vielleicht was zerlassen Schokolade oben drüber?!',
		recipe_title: 'Erdbeertorte',
	},
	{
		id: '1437',
		recipe_content:
			'Für eine große Portion, von der mindestens 4 Personen satt werden.<br/><strong>200 g Couscous</strong> und <strong>200 g Ebly-Körner (Weizenkörner)</strong> nach Packungsanleitung kochen. In ein Sieb geben und mit einer Gabel auflockern. <strong>500 g Kirschtomaten</strong> halbieren, <strong>1 großes Bund Petersilie</strong> fein hacken und <strong>1 Bund Frühlingszwiebeln</strong> in feine Ringe schneiden.<br/>Für das Dressing <strong>8 EL Olivenöl </strong>mit dem Saft von <strong>1/2 Zitrone</strong>, reichlich Salz, 1 Prise Zucker und Pfeffer verrühren.<br/>Alle Bestandteile gründlich vermengen und am Besten mehrere Stunden durchziehen lassen. Falls der Salat danach einen zu trockenen Eindruck macht, noch einmal das Dressing herstellen und mit der Masse mischen.',
		recipe_title: 'Couscous Salat II',
	},
	{
		id: '2430',
		recipe_content:
			'<strong>100 g Zartbiterschokolade</strong> über einem heißen Wasserbad langsam schmelzen lassen. Den Backofen auf 170°C Ober- und Unterhitze vorheizen und eine kleine Gugelform fetten.<br/><strong>120 ml Öl, 200 g brauner Zucker</strong> und <strong>2 Eier </strong>verrühren. <strong>3 Bananen </strong>zu Mus zerdrücken und zu der Eier-Mischung geben. Dann <strong>200 g Mehl, 1 1/4 TL Backpulver, 1 Prise Salz </strong>und <strong>1/2 TL Zimt </strong>auf den Teig sieben und vorsichtig verrühren. Den Teig nun in zwei Hälften teilen. Schokolade zur einen Hälfte geben und die beiden Teig nun abwechselnd in die Form geben. Die Teige vorsichtig mit einer Gabel etwas verrühren. Im Ofen 50 - 60 Minuten backen.',
		recipe_title: 'Bananen Schokoladen Gugl',
	},
	{
		id: '2433',
		recipe_content:
			'Für ein Brownie-Backblech<br/>Für den Teig <strong>200 g Mehl, 100 g Grieß </strong>und <strong>1/2 PK Backpulver</strong> mischen. <strong>110 g Butter</strong> und<strong> 110 g Rohrzucker </strong>schaumig rühren. <strong>2 Eier</strong> unterrühren. Mehl-Mischung und <strong>150 ml Milch </strong>abwechselnd unterrühren.<br/><strong>250 g Quark </strong>mit <strong>100 g Creme Fraiche </strong>verrühren. <strong>3 EL Agavendicksaft, 1 PK Vanillezucker</strong> und <strong>1 PK Vanillepudding </strong>mit einem Schneebesen unter die Quarkmasse rühren.<br/>Für die Streusel <strong>150 g Nüsse </strong>(Haselnüsse, Walnüsse, Mandeln..) grob hacken.<strong> 100 g Butter</strong> in Stücken mit <strong>100 g Mehl, 60 g Rohrzucker</strong> und den Nüssen zu Streuseln verkneten. Ein Backblech einfetten und mit Mehl ausstreuen. Ofen auf 200° C vorheizen.<br/>Teig auf das Backblech geben und mit der Quarkmasse bestreichen. Mit 400 g TK oder frischen Himbeeren belegen. Streusel darüber verteilen. Im heißen Ofen für circa 40 Minten backen.',
		recipe_title: 'Sommerlicher Streuselkuchen',
	},
	{
		id: '2435',
		recipe_content:
			'Für 2 Personen.<br/><strong>1/2 Tasse Bulgur </strong>(hier von <a href="http://www.reishunger.de" target="_blank">Reishunger</a>) mit der <strong>1,5 fachen Menge Salzwasser</strong> 20 Minuten lang kochen. In der Zwischenzeit <strong>1 Bund großblättrige Petersilie</strong> (türkischer Lebensmittelladen/Markt) sehr fein hacken. <strong>500 g Coctailtomaten</strong> waschen und halbieren.<br/>Den Bulgur abtropfen und etwas auskühlen lassen. Mit den Tomaten und der Petersilie vermengen. Saft von <strong>1/2 Zitrone, 4 EL gutes Olivenöl, Salz</strong> und <strong>Pfeffer</strong> unterrühren.',
		recipe_title: 'Petersiliensalat',
	},
	{
		id: '2438',
		recipe_content:
			'Zwei Springformen (26 cm) mit Backpapier auslegen. Backofen auf 150 Grad Umluft vorheizen.<br/><strong>140 g Mehl</strong> und <strong>1 TL Backpulver </strong>vermischen. <strong>130 g weiche Butter </strong>und <strong>100 g Zucker</strong> schaumig schlagen (das dauert..).<br/><strong>4 Eier </strong>trennen. Die <strong>Eigelbe</strong> hinzugeben. Die Mehl-Mischung über den Teig sieben und unterrühren. Teig auf beide Formen verteilen.<br/><strong>Eiweiß</strong> steif schlagen, dabei <strong>120 g Zucker</strong> einrieseln lassen, bis fester Eischnee entsteht. Diesen auf dem Teig verteilen und mit <strong>100 g Mandelblättern</strong> bestreuen. 35 Minuten backen. Die Böden danach gut auskühlen lassen.<br/><br/>Für die Füllung <strong>100 g Erdbeeren</strong> pürieren.<strong> 250 g Quark</strong> mit <strong>250 g Mascarpone</strong> vermengen und mit <strong>Zucker</strong> süßen. Erdbeerpüree unter die Quark-Masse rühren (vorsichtig: aufpassen, dass wie Mischung nicht zu flüssig wird! Lieber etwas weniger nehmen! Mit dem Rest könnt ihr noch den Boden bestreichen.<br/>Weitere <strong>250 g Erdbeeren</strong> in feine Scheiben schneiden.<br/><br/>Die Sahne-Mischung auf einem Boden verteilen und mit den Erdbeerscheiben belegen. Den zweiten Boden darauf setzten und vorsichtig fest drücken.',
		recipe_title: 'Erdbeer Baiser Torte',
	},
	{
		id: '2447',
		recipe_content:
			'Für 2 Personen.<br/><strong>2 gelbe Paprika </strong>halbieren, waschen und in feine Streifen schneiden.<strong> 2 rote Zwiebeln</strong> ebenfalls in Streifen schneiden. <strong>1 PK Pimientos de Padron</strong> (gibt es im Supermarkt meistens in einer Tüte abgepackt) mit Wasser abbrausen. <strong>Olivenöl</strong> in einem hohen Topf erhitzen, sodass der Boden bedeckt ist. Wenn das Öl heiß ist, die Pimientos dazugeben. Jetzt wird es laut, zwischt und spritzt. Unter Rühren anbraten. Die Pimientos werden dabei weich und bekommen dunkle Stellen. Danach den Topf vom Herd nehmen.<br/>Nun <strong>Olivenöl</strong> in einer Pfanne erhitzen, gelbe Paprika und Ziebeln darin anbraten. Die Piementos hinzugeben und alles salzen und pfeffern.<br/>Bei uns gab es ein Stück Lummer dazu. Einfach salzen und pfeffern und in der Pfanne anbraten. Zusammen mit den Paprika servieren. Schmeckt wunderbar mit einem Stück Ciabatta!',
		recipe_title: 'Schnelles Mittagessen: Paprikapfanne',
	},
	{
		id: '2449',
		recipe_content:
			'<strong>250 g TK-Heidelbeeren</strong> kurz antauen lassen und dann pürieren. <strong>500 g Joghurt </strong>und <strong>250 g Quark </strong>in einer Schüssel vermischen und die Heidelbeeren unterheben. Mit <strong>2 TL Zitronensaft</strong> und <strong>Puderzucker</strong> oder <strong>Agavendicksaft</strong> süßen. In einer kleinen Kastenform im Tiefkühlfach 3 Stunden fest werden lassen. Alle 30 Minuten einmal umrühren!',
		recipe_title: 'Selbstgemachtes Eis',
	},
	{
		id: '2451',
		recipe_content:
			'Eine Browniebackform mit Backpapier auslegen. Den Ofen auf 175°C vorheizen. <strong>75 g Zartbitterschokolade</strong> zusammen mit <strong>120 g Butter</strong> schmelzen und verrühren. In einer Schüssel<strong> 150 g Mehl, 50 g Kakao, 1 TL Backpulver</strong> und <strong>1/4 TL Salz</strong> mischen und beiseite stellen. In einer zweiten Schüssel<strong> 2 Eier </strong>mit der <strong>150 ml Buttermilch, 150 g braunem Zucker, 75 g Zucker</strong> und <strong>1 PK Vanillezucker </strong>verrühren. Dann geschmolzene Schokolade und Butter hinzufügen. Die Mehlmischung darüber sieben. Ca. 1/5 des Brownieteigs aufheben, den Rest in die Auflaufform füllen. In einer Schüssel <strong>500 g Philadelphia </strong>zusammen mit <strong>100 g Zucker</strong> cremig aufschlagen.<strong> 2 Eier</strong> hinzufügen und alles verschlagen bis es gut vermengt ist. Die Füllung auf dem Brownieteig verteilen. Den restlichen Teig in Klecksen auf der Frischkäsefüllung verteilt werden. Mit einem Löffelstiel zieht ihr die Kleckse durch den Frischkäse, um einen marmorierten Effekt zu bekommen. 45 Minuten backen.',
		recipe_title: 'Cheesecake Brownies ',
	},
	{
		id: '2454',
		recipe_content:
			'Für 1 Ciabatta<br/><strong>Ciabatta</strong> halbieren und mit<strong> 1/2 Glas rotem Pesto</strong> bestreichen. <strong>2 Kugeln Mozzarella</strong> und <strong>3 große Tomaten</strong> in Scheiben schneiden und das Pesto damit belegen. Mit <strong>Salz und Pfeffer</strong> würzen. <strong>2 Handvoll Rucola</strong> waschen und trocken schleudern. Den Rucola auf dem Ciabatta verteilen und zuklappen. Mit einem Messer vorsichtig in Stücke schneiden.',
		recipe_title: 'Party Ciabatta',
	},
	{
		id: '2456',
		recipe_content:
			'Den Backofen auf 180 Grad Umluft vorheizen.<br/><strong>200 g weiße Schokolade</strong> grob hacken und mit <strong>150 g Butter</strong> über einem Wasserbad schmelzen und abkühlen lassen. <strong>2 Eier, 150 g Zucker </strong>und <strong>1 Prise Salz</strong> schaumig schlagen. Die Eiermasse mit der Schokolade verrühren. <strong>200 g Mehl</strong> abwiegen, über den Teig sieben und unterheben. Zwei Handvoll <strong>Hasel-/Macadamia-/Walnüsse </strong>dazugeben. Eine Tarteform fetten und den Teig hineingeben.<br/>25 - 30 Minuten backen.',
		recipe_title: 'Blondies',
	},
	{
		id: '2458',
		recipe_content:
			'Für 1/2 Blech<br/>Backofen auf 170 Grad Ober- und Unterhitze vorheizen.<br/><strong>280 g Mehl, 1/2 PK Backpulver, 140 g kalte Butter, 80 g Puderzucker, 1 PK Vanillezucker</strong> und <strong>4 EL Milch</strong> zu einem Teig verkneten und 30 Minuten kühlen.<br/>In der Zwischenzeit <strong>Aprikosen</strong> waschen und halbieren. In einer Schüssel mit <strong>3 EL Zucker vermengen</strong>.<br/><strong>250 g Quark (20 %)</strong> mit <strong>2 PK Vanillezucker, 1 PK Puddingpulver</strong> und <strong>4 EL Wasser </strong>verrühren. Es soll eine schön geschmeidige Masse entstehen, eventuell muss noch etwas mehr Wasser und für die Süße Zucker hinzu gegeben werden.<br/>1/2 des Teiges zur Seite legen. Backblech mit Backpapier belegen. Die Hälfte des Teiges ausrollen und auf das Backblech legen. Mit der Quarkmasse bestreichen und die Aprikosenhälften darauf auslegen.<br/>Die andere Hälfte des Teiges ebenfalls zu einem Rechteck ausrollen und mit einem Messer Streifen schneiden. Diese in einem Muster auf die Aprikosen legen.<br/>Den Kuchen für ca. 35 Minuten backen.',
		recipe_title: 'Aprikosen Kuchen',
	},
	{
		id: '2460',
		recipe_content:
			'<strong>Blaubeer-Muffins </strong><br/><br/>Den Backofen auf 200 Grad Ober-/Unterhitze vorheizen.<br/><strong>190 g Mehl, 150 g Zucker</strong> und <strong>12 g Backpulver</strong> mischen.<br/><strong>80 ml Öl, 1 Ei </strong>und<strong> 80 ml Milch</strong> in einer Schüssel schaumig rühren. Die trockenen Zutaten unterrühren. <strong>150 g Blaubeeren </strong>vorsichtig unterheben.<br/>Ein Muffinblech fetten und mit Mehl ausstäuben. Den Teig auf die Mulden verteilen.<br/>Aus <strong>50 g Mehl, 35 g Zucker, 1/2 TL Zimt </strong>und<strong> 40 g kalter Butter</strong> Streusel kneten. Diese auf den Muffins verteilen. 20 Minuten backen.<br/><br/><strong>Double Chocolate Cheesecake Muffins</strong><br/><br/>Den Backofen auf 180 Grad vorheizen.<br/><strong>200 g Mehl, 2 TL Backpulver, 100 g Zucker, 1 PK Vanillezucker</strong> und <strong>4 TL Kakao </strong>miteinander vermengen. <strong>30 g Butter schmelzen</strong>, mit <strong>200 ml Milch</strong> und <strong>2 Eiern </strong>verrühren. Die Mehlmischung dazugeben und alles zu einem homogenen Teig vermengen.<strong> 80 g Zartbitterschokolade</strong> über dem Wasserbad schmelzen und ebenfalls unterrühren. Ein Muffinblech fetten und mit Mehl ausstäuben. Den Teig auf die Muffinförmchen verteilen.<br/>Für die Käsecreme <strong>100 g Quark</strong> und <strong>100 g Philadelphia</strong> mit <strong>20 g Zucker, 1 Ei</strong> und <strong>1 Prise Salz</strong> glatt rühren. Je 2 TL auf jeden Muffin geben.<br/>20 Minuten backen und danach gut auskühlen lassen. <br/> ',
		recipe_title: 'Blaubeer & Double Chocolate Cheesecake Muffins',
	},
	{
		id: '2465',
		recipe_content:
			'Zutaten:<br/>Salatmix, Gurken, braune Pilze, Tomaten, Möhren (mit Curry 20 Minuten im Backofen geröstet), gekochte Eier, Sonnenblumenkerne, rote Spitzpaprika, Frühlingszwiebeln, Feta<br/><br/>Salatsoße: 4 EL Olivenöl mit 2 EL Weißweinessig, 1 EL körnigem Senf, 1 Prise Zucker, 1 Msp. Erdbeermarmelade verquirlen. Mit Salz und Pfeffer abschmecken.',
		recipe_title: 'Schneller Sommersalat',
	},
	{
		id: '2467',
		recipe_content:
			'für 8 Brötchen<br/><strong>150 g Sonnenblumenkerne </strong>und <strong>50 g Leinsamen</strong> in einer Pfanne rösten. <strong>550 g Roggenvollkornmehl, 230 g Weizenmehl, 540 g Wasser, 4 g frische Hefe, 40 g Agavendicksaft </strong>und <strong>16 g Salz </strong>mit der Hand zu einem glatten Teig verarbeiten. Die Kerne und Leinsamen unterkneten. Den Teig abgedeckt<strong> über Nacht</strong> im Kühlschrank stehen lassen.<br/>Am nächsten Morgen Teig zu einem länglichen Strang formen und abgedeckt eine halbe Stunde stehen lassen. Den Backofen auf 230°C vorheizen. Insgesamt acht Stücke schneiden und auf ein mit Backpapier ausgelegtes Backblech geben. Die Oberseite zweimal einschneiden. 20 Minuten backen.<br/><br/>nach: <a href="www.vegetarian-diaries.com" title="www.vegetarian-diaries.com" target="_blank">www.vegetarian-diaries.com</a>',
		recipe_title: 'Körnerbrötchen',
	},
	{
		id: '2962',
		recipe_content:
			'Backofen auf 180 Grad vorheizen.<br/><strong>400 g Zartbitterschokolade</strong> in Stücke hacken. Die Hälfte der Schokolade mit der <strong>250 g Butter</strong> über dem heißen Wasserbad schmelzen lassen.<br/><strong>6 Eier, 300 g brauner Zucker, 125 g Mehl, 20 g Kakaopulver, 1 Prise Salz</strong> und <strong>Mark von 1 Vanilleschote</strong> in eine große Schüssel geben. <br/>Alles mit den Quirlen des Rührgeräts verrühren. Die flüssige Schokobutter hinzufügen. Gut verrühren. Die restliche Schokolade unterheben. Den Teig in eine Form füllen.<br/>Im Ofen 30 - 40 Minuten backen, je nachdem wie weich ihr die Brownies haben wollt.<br/>Für die Vanillecreme <strong>1 PK Puddingpulver </strong>nach Packungsanweisung kochen, jedoch nur mit <strong>350 ml Milch</strong>. Den Pudding in eine Schüssel umfüllen und mit Frischhaltefolie abdecken, damit sich keine Haut bildet. Den Pudding abkühlen lassen und danach mit <strong>100 g Quark (40 %)</strong> glatt rühren. Creme auf den Brownies verstreichen.',
		recipe_title: 'Super schokoladige Brownies mit Vanille-Creme',
	},
	{
		id: '2974',
		recipe_content:
			'für 4. <br/><strong>2 Zwiebeln</strong> und <strong>1 Knoblauchzehe</strong> würfeln und in <strong>Olivenöl</strong> glasig dünsten.<br/><strong>500 g Rinderhackfleisch </strong>dazugeben und anbraten. Mit <strong>Salz, Pfeffer, Zimt</strong> und <strong>Paprikapulver</strong> würzen.<br/><strong>200 g Feta</strong> in Würfel schneiden. Das Hackfleisch eine Schale umfüllen und mit dem Feta, <strong>1/2 Bund Petersilie</strong>, <strong>75 g Schmand</strong> und <strong>1 Ei </strong>vermengen.<br/>Ofen auf 180 Grad vorheizen.<br/><strong>4 Tomaten</strong> in Stücke schneiden. <strong>1 weitere Zwiebel</strong> und <strong>1 Knoblauchzehe</strong> würfeln und in <strong>Olivenöl</strong> anbraten. Die Tomaten, <strong>1 Dose stückige Tomaten</strong> hinzugeben und mit <strong>100 ml Brühe</strong> aufkochen. Die Tomatensoße mit <strong>Salz, Pfeffer </strong>und <strong>Zucker</strong> abschmecken und köcheln lassen. Die Soße danach in eine Auflaufform füllen<br/><strong>8 Spitzpaprika</strong> waschen und längs aufschneiden. Die Hackmischung einfüllen und die Paprikas auf die Tomatensoße setzen. Im Ofen 20 Minuten backen.',
		recipe_title: 'Gefüllte Paprika',
	},
	{
		id: '2982',
		recipe_content:
			'Für 4 Personen<br/><strong>1 Butternut Kürbis</strong> halbieren, schälen und die Kerne herausholen. In 1 cm dicke Spalten schneiden und in einer Schüssel mit <strong>6 EL Olivenöl, Salz </strong>und <strong>Pfeffer</strong> vermengen. Auf einem Backblech verteilen und bei 180 Grad 30 Minuten backen.<br/>Dazu schmeck ein <strong>Joghurt Dip</strong>: <strong>1 Knoblauchzehe </strong>fein würfeln. <strong>300 g griechischer Joghurt</strong> mit<strong> Salz, Pfeffer</strong> und dem Knoblauch vermengen. Mit <strong>Petersilie</strong> garnieren.',
		recipe_title: 'Butternut Kürbis',
	},
	{
		id: '2989',
		recipe_content:
			'für eine 28 cm Springform.<br/><strong>Teig:</strong> In einer Schüssel <strong>200 g Mehl, 25 g Kakao</strong> und <strong>50 g Zucker</strong> vermengen. Nun <strong>125 g kalte Butter</strong> und <strong>1 Espresso</strong> einkneten. Den Teig zu einer Kugel formen und in Klarsichtfolie eingewickelt für 30 Min. in den Kühlschrank legen. Den Backofen auf 190°C vorheizen.<br/>Eine Springform gut einfetten. Den Teig ausrollen und in die Form legen. Der Rand sollte ca. 3 cm hoch sein. Mit einer Gabel einige Löcher in den Boden stechen. Den Teig nun 25 Minuten blindbacken.<br/><strong>Füllung: 150 g weiche Butter</strong> mit <strong>300 g braunen Zucker</strong> verrühren.<strong> 4 Eier</strong> hinzufügen. <strong>300 g Sahne</strong> und <strong>2 TL Agavendicksaft</strong> unterrühren. <strong>150 g Zartbitterschokolade</strong> schmelzen und in die Buttermasse gießen. <strong>40 g gesiebten Kakao </strong>einrieseln lassen. Die Füllung nochmals gut vermengen und auf den vorgebackenen Teig geben. Bei 160°C weitere 45 Min. backen.<br/>Für die Deko <strong>400 g Sahne </strong>mit<strong> 2 PK Sahnesteif </strong>und <strong>1 PK Vanillezucker</strong> steifschlagen und auf den ausgekühlten Kuchen streichen.',
		recipe_title: 'Mississippi Mud Pie',
	},
	{
		id: '3004',
		recipe_content:
			'Für 4.<br/><strong>2 Zwiebeln</strong> und <strong>2 kleine Knoblauchzehen </strong>fein würfeln. In <strong>4 EL Olivenöl</strong> glasig dünsten. <strong>200 g Risotto Reis </strong>dazu geben und kurz andünsten. Mit <strong>100 ml Weißwein</strong> ablöschen. Wenn der Weißwein verkocht ist nach und nach <strong>1 l Gemüsebrühe</strong> angießen. Dabei immer abwarten, bis wieder ein Teil verkocht ist. Nach 20 Minuten ist der Reis meistens fertig, er sollte noch einen festen Kern haben. <strong>100 g Parmesan </strong>fein reiben und unter das Risotto rühren.<br/><strong>250 g Pfifferlinge, 250 g braune Champignons</strong> und <strong>250 g weiße Champignons </strong>in einer Pfanne mit etwas Olivenöl anbraten, bis die Pilze weich werden. <strong>125 g Speck </strong>fein würfeln. Ebenfalls anbraten und mit den Pilzen unter das Risotto rühren.<br/><br/>Für den Salat <strong>1 PK Rucola</strong> und <strong>1 PK Salatmix</strong> waschen. <strong>250 g vakuumierte rote Beete</strong> und <strong>2 Äpfel</strong> würfeln.<strong> 1 Zwiebel </strong>fein würfeln.<strong> 6 Aprikosen </strong>in feine Spalten schneiden. Alle Zutaten mit einer Salatsoße aus<strong> 4 EL Olivenöl, 2 EL Weißweinessig, 1 TL körnigem Senf, 1/2 TL Aprikosenmarmelade, Salz</strong> und <strong>Pfeffer</strong> vermengen. Mit <strong>Sonnenblumenkernen</strong> garnieren.',
		recipe_title: 'Risotto mit Pilzen und Herbstsalat',
	},
	{
		id: '3016',
		recipe_content:
			'für 4.<br/>Den Backofen auf 200 Grad vorheizen. <strong>1 Zwiebel</strong> und <strong>1 Knoblauchzehe</strong> fein würfeln. <strong>1 EL Olivenöl</strong> in einer Pfanne erhitzen. Zwiebeln, Knoblauch und <strong>100 g gewürfelten Speck</strong> darin anbraten. <strong>2 Handvoll frischen Blattspinat</strong> dazugeben und zusammenfallen lassen. <strong>1 Becher Sahne</strong> angießen und aufkochen. <strong>1 El Mehl </strong>mit etwas Wasser glattrühren und zu der Sahne geben. Mit der Sahne aufkochen lassen, bis es andickt. <strong>1 Hokkaido-Kürbis</strong> in Würfel schneiden.<strong> 4 Tomaten</strong> und<strong> 4 rote Paprika</strong> ebenfalls würfeln. Das Gemüse mit der Soße vermengen und in eine Auflaufform geben.<strong> 100 g Fetakäse</strong> krümeln und über den Auflauf streuen. Im heißen Ofen 30 Minuten backen, bis der Kürbis weich wird.',
		recipe_title: 'Kürbis-Gemüse-Auflauf mit Fetakäse',
	},
	{
		id: '3023',
		recipe_content:
			'Für 4.<br/>Den Backofen auf 180 Grad Umluft vorheizen.<br/><strong>1 große Birne, 4 Pflaumen</strong> und <strong>2 Nektarinen </strong>fein würfeln. <strong>2 El Zucker</strong> mit dem Mark von <strong>1 Vanilleschote</strong> verrühren und das Obst damit vermengen. Falls ihr gerne Rosinen mögt, könnt ihr noch <strong>1 Handvoll Rosinen</strong> zum Obst geben. Die Mischung in <strong>4 kleine ofenfeste Förmchen</strong> füllen (alternativ alles in eine passende Auflaufform geben).<br/>Für die Streusel <strong>30 g kalte Butter</strong> und <strong>30 g Marzipan</strong> in Würfel schneiden. Mit <strong>30 g Mehl, 25 g Haferflocken, 50 g gemahlenen Mandeln</strong> und <strong>30 g Zucker</strong> mit den Händen zu Streuseln verkneten. Die Streusel auf dem Obst verteilen. Im heißen Ofen 20 Minuten backen.<br/>Und jetzt mit einem Schlag Sahne genießen!',
		recipe_title: 'Vanille Marzipan Crumble mit Birnen und Nektarinen',
	},
	{
		id: '3029',
		recipe_content:
			'Den Backofen auf 180 Grad vorheizen. Eine Springform (Ø 26 cm) einfetten und mit Mehl ausstäuben.<br/><strong>2 Eier, 2 Eiweiss, 1 TL Vanillezucker</strong> und <strong>250 g Zucker</strong> schaumig schlagen. <strong>250 ml Milch</strong> und <strong>250 ml Öl </strong>untermischen.<br/><strong>300 g Mehl</strong> und <strong>1 TL Backpulver </strong>mischen, auf den Teig sieben und unterrühren. Den Teig in zwei gleich große Portionen teilen.<br/>Zu einer der Portionen <strong>3 EL Kakao</strong> hinzufügen und vermengen.<br/>3 Esslöffel der hellen Masse in die Mitte der Form geben. Die Springform um 90 Grad drehen und 3 Esslöffel der dunklen Masse genau in die Mitte der weißen Masse geben. Die Springform wieder drehen und so fortfahren bis der Teig aufgebraucht ist.<br/>Den Kuchen im Backofen 40 Minuten backen. ',
		recipe_title: 'Zebrakuchen',
	},
	{
		id: '3033',
		recipe_content:
			'Für 4.<br/>Den Backofen auf 200 Grad Umluft vorheizen.<br/><strong>500 g Möhren</strong> schälen und in Stifte schneiden. Mit <strong>250 g Coctailtomaten</strong> in eine Auflaufform geben und mit <strong>Salz, Pfeffer, Curry</strong> und <strong>6 EL Olivenöl </strong>vermengen. Im heißen Backofen 30 Minuten garen.<br/>Für den Teig<strong> 30 g Butter </strong>schmelzen. Mit <strong>275 ml Milch</strong> und <strong>2 Eiern </strong>vermengen. <strong>60 g Weizen-Vollkornmehl, 60 g normales Mehl</strong> und <strong>1 Prise Salz</strong> mit einem Schneebesen unterrühren. 20 Minuten stehen lassen.<br/>In der Zwischenzeit <strong>1 Zwiebel </strong>und <strong>1 Knoblauchzehe</strong> würfeln. In <strong>Olivenöl</strong> andünsten und <strong>500 g TK Blattspinat (angetaut)</strong> hinzugeben, bis der Spinat komplett aufgetaut ist. Spinat in eine Schüssel geben und mit <strong>250 g Quark </strong>vermengen. Mit<strong> Salz, Pfeffer</strong> und <strong>Muskat</strong> abschmecken. <strong>200 g Feta</strong> sehr fein würfeln und mit dem Spinat vermengen.<br/>Mit Hilfe eines Crepe-Eisen oder einer Pfanne die Crepes ausbacken. Die fertigen Crepes mit der Spinat-Quark Mischung füllen und mit den Möhren anrichten. ',
		recipe_title: 'Crêpe mit Spinat und gerösteten Möhren',
	},
	{
		id: '3039',
		recipe_content:
			'Für 4.<br/>Den Backofen auf 180 Grad Umluft vorheizen. <strong>3 große Süßkartoffeln</strong> waschen und in gleichmäßig kleine Würfel schneiden.  Die Würfel in einer großen Schüssel mit reichlich <strong>Olivenöl, Salz </strong>und <strong>1 TL Paprikapulver</strong> vermengen. Ein Backblech mit Backpapier belegen und die Kartoffeln darauf nebeneinander verteilen. Im Ofen 30 Minuten backen, bis die Kartoffeln weich sind. Danach gut auskühlen lassen.<br/>In der Zwischenzeit <strong>1 PK Rucola</strong> waschen. <strong>3 Frühlingszwiebeln</strong> in Ringe schneiden. <strong>200 g Feta </strong>und <strong>1 Avocado</strong> würfeln. Für die Soße <strong>6 EL Olivenöl</strong> mit<strong> 2 EL Zitronensaft, 1 Prise Zucker, Salz</strong> und <strong>Pfeffer</strong> verrühren.<br/>Die Kartoffeln mit den Salatzutaten und der Soße vermengen.<br/>Dazu passt ein leckeres Stück Lachs aus dem Ofen. Dazu einfach <strong>4 Stücke Lachs</strong> waschen und abtupfen. In eine kleine Auflaufform setzen. Mit <strong>Salz, Pfeffer </strong>und <strong>1 TL braunem Zucker</strong> bestreuen. Im Ofen bei 180 Grad 20 Minuten garen.',
		recipe_title: 'Süßkartoffelsalat mit Feta und Avocado',
	},
	{
		id: '3049',
		recipe_content:
			'Für 4.<br/>Den Backofen auf 180 Grad Umluft vorheizen. <strong>2 Zucchini</strong> und <strong>2 Auberginen </strong>waschen und in 1 cm dicke Scheiben schneiden.<strong> 4 Paprikaschoten</strong> ebenfalls waschen und grob klein schneiden. Das Gemüse in einer Schüssel mit <strong>6 EL Olivenöl, Salz</strong> und <strong>Pfeffer</strong> vermengen. 2 Backbleche mit Backpapier belegen und das Gemüse darauf verteilen. 30 Minuten im Ofen backen.<br/><strong>300 g Rindergehacktes </strong>mit <strong>1 Ei, 4 EL Semmelbrösel, Salz, Pfeffer</strong> und <strong>Paprikapulver</strong> zu einer homogenen Masse verarbeiten. Aus der Mischung flache Frikadellen formen. Diese von beiden Seiten in heißem Olivenöl anbraten.<br/>Für den Humus<strong> 500 g Kichererbsen</strong> (Dose) abgießen und mit Wasser abbrausen.<br/><strong>2 Knoblauchzehen </strong>würfeln und mit Kichererbsen, <strong>1 TL Paprikapulver, 5 EL Olivenöl, 1 Prise Salz, 3 EL Sesampaste</strong> und <strong>2 EL Zitronensaft</strong> fein pürieren. <strong>200 g Feta</strong> in Scheiben schneiden.<br/><strong>8 Vollkorn Toastbrötchen</strong> nach Packungsanweisung toasten. Je mit 2 EL Humus bestreichen und mit dem Gemüse, Fetakäse und der Frikadelle belegen.',
		recipe_title: 'Burgerglück am Montag',
	},
	{
		id: '3055',
		recipe_content:
			'für 4.<br/>Wasser in einem großen Topf zum Kochen bringen. <strong>2 Köpfe Brokkoli</strong> in Röschen zerteilen. <strong>300 g Möhren</strong> schälen und in feine Schnitze schneiden. Das Wasser salzen und das Gemüse darin 7 Minuten weich garen. Danach abtropfen lassen.<strong> 250 g Wok-Nudeln </strong>nach Packungsanleitung kochen und ebenfalls abtropfen lassen. <strong>4 EL Sesam</strong> in einer Pfanne ohne Fett hellbraun rösten und beiseite stellen.<strong> 2 Hähnchenbrüste</strong> in Streifen schneiden und in etwas <strong>Mehl</strong> wenden. In einer Pfanne in <strong>neutralem Öl</strong> anbraten, dabei salzen und pfeffern. Für die Soße <strong>4 EL Sojasoße, 2 TL Weißweinessig, 2 TL Honig, Salz</strong> und <strong>Pfeffer</strong> verquirlen. Die Nudeln mit dem Gemüse, Fleisch und Sesam mit der Soße vermengen. Einfach oder? ',
		recipe_title: 'Nudelpfanne Asiatisch',
	},
	{
		id: '3063',
		recipe_content:
			'Für 4<br/>Humus: <strong>1 Dose Kichererbsen</strong> mit <strong>1 Knoblauchzehe, Salz, Pfeffer, 6 EL Olivenöl</strong> und <strong>2 TL Zitronensaft</strong> pürieren. Eventuell etwas mehr Flüssigkeit hinzugeben.<br/><strong>1 Zwiebel</strong> in Ringe schneiden. Die Blätter von <strong>1 Kopfsalat</strong> pflücken und waschen. <strong>4 Tomaten</strong> in Spalten schneiden. <strong>1 Dose Mais </strong>und <strong>1 Dose Thunfisch</strong> abtropfen. <strong>200 g Naturjoghurt</strong> mit<strong> Salz, Pfeffer </strong>und <strong>Zitrone</strong> abschmecken. <br/><strong>8 Tortilla Wraps </strong>in einer Pfanne nacheinander erwärmen.<br/>Mit der Kichererbsenpaste bestreichen und mit den Zutaten belgen und mit einem Klecks Joghurt versehen. Zurollen und genießen.',
		recipe_title: 'Wraps',
	},
	{
		id: '3069',
		recipe_content:
			'Für 12 Stück in der Mini-Gugel-Form.<br/>Den Backofen auf 180 Grad Ober-/Unterhitze vorheizen. Die Formen mit etwas Butter fetten und mit Mehl aussaäuben. <strong>200 g Mehl</strong> mit <strong>1 TL Backpulver</strong> in einer Rührschüssel mischen. <strong>100 g Zucker, 2 PK Vanillezucker, 100 g weiche Butter </strong>und <strong>4 Eier</strong> hinzufügen. Mit einem Mixer (Rührstäbe) kurz auf niedrigster, dann auf höchster Stufe 2 Min. zu einem glatten Teig verarbeiten. Den Teig mit Hilfe von zwei Teelöffeln in die Formen füllen. Im heißen Ofen ca. 20 Minuten backen. Nach der Backzeit herausnehmen und kurz abkühlen lassen. Dann auf ein Kuchengitter stürzen. <strong>Weiße Schokolade</strong> vorsichtig in der Mikrowelle oder im Wasserbad erhitzen. Die abgekühlten Küchlein mit Hilfe eines Pinsels mit der Schokolade bestreichen und mit <strong>gehackten Mandeln </strong>verzieren.',
		recipe_title: 'Mini Gugel II',
	},
	{
		id: '3079',
		recipe_content:
			'Für 4.<br/>Dan Backofen auf 200 Grad Umluft vorheizen.<br/><strong>800 g helle und braune Champignons</strong> mit einem Küchentuch abreiben und halbieren.<strong> 3 Zwiebeln</strong> in Ringe schneiden. <strong>200 ml Sahne</strong> mit Salz, Pfeffer und einer Prise Muskat würzen. Etwas <strong>Petersilie</strong> in Streifen schneiden. In einer großen Schüssel die Pilze, Petersilie und Zwiebeln mit der Sahne vermengen und das Ganze in eine große Auflaufform füllen. Diese kann ruhig hoch gefüllt sein, die Pilze schrumpfen beträchtlich zusammen. Im heißen Ofen 30 (bis 40) Minuten schmoren. ',
		recipe_title: 'Pilzpfanne aus dem Ofen',
	},
	{
		id: '3092',
		recipe_content:
			'für 2<br/><br/><strong>6 EL Haferflocken</strong> in <strong>400 ml Wasser</strong> 4 Minuten unter Rühren aufkochen bis die Masse eindickt. Den Porridge etwas abkühlen lassen. Danach <strong>200 g Natur- oder Vanillejoghurt</strong> (je nach dem wie süß ihr es mögt) und <strong>2 EL Agavendicksaft</strong> unterrühren.<br/>Für das Mangopüree <strong>1/2 sehr reife Mango</strong> und <strong>1 Apfel</strong> in grobe Stücke schneiden. Beides mit dem Saft von <strong>1/2 Zitrone</strong> fein pürieren.<br/>Das Porridge auf 2 Gläser verteilen und mit dem Mangopüree bedecken. Mit ein paar <strong>Weintrauben</strong> und <strong>Walnüssen</strong> garnieren. ',
		recipe_title: 'Mango Porridge',
	},
	{
		id: '3097',
		recipe_content:
			'Den Backofen auf 180 Grad vorheizen. <strong>2 Köpfe Brokkoli</strong> in Röschen zerteilen und waschen. Auf einem Backblech mit <strong>4 EL Olivenöl</strong> vermengen und nebeneinander verteilen. Mit <strong>Salz</strong> und <strong>Pfeffer</strong> würzen und für 15 Minuten backen.<br/>In der Zwischenzeit<strong> 1 PK Feldsalat</strong> waschen. <strong>1 Handvoll Cranberries</strong> grob hacken. <strong>2 Frühlingszwiebeln</strong> in feine Ringe schneiden. Für die Soße <strong>6 EL Olivenöl</strong> mit <strong>2 - 3 EL Zitronensaft, Salz, Pfeffer </strong>und <strong>1 TL Agavendicksaft </strong>(oder Honig) verquirlen. <strong>200 g Ziegenkäse oder Feta</strong> mit den Händen zerpflücken.<br/>Den Brokkoli aus dem Backofen nehmen und abkühlen lassen (sonst fällt der Salat ein).<br/>Dann den Feldsalat mit dem Brokkoli, Käse, den Zwiebeln und Cranberries vermengen. Die Soße unterheben. Zum Schluss <strong>1 Handvoll Cashew-Kerne</strong> in einer Pfanne ohne Fett rösten und über den Salat streuen.',
		recipe_title: 'Brokkoli Feldsalat',
	},
	{
		id: '3160',
		recipe_content:
			'Zutaten für 4 große Pancakes.<br/><br/><strong>1 Hokkaido Kürbis</strong> waschen und in Schnitze schneiden. Mit <strong>2 TL Zimt </strong>und <strong>1/2 TL Kardamon</strong> in Alufolie einwickeln und im Backofen bei 200 Grad 45 Minuten weich schmoren. Danach den Kürbis ohne das entstandene Wasser fein pürieren. Abkühlen lassen.<br/><br/>Pancake Teig:<br/><strong>2 Eier</strong> trennen und das Eiweiß mit <strong>1 EL Zucker </strong>steif schlagen. <strong>300 ml Buttermilch, 2 EL Zucker, 1 TL Vanillezucker, 1 TL Zimt</strong> und <strong>200 g Kürbispüree </strong>zu den Eigelben geben und verrühren. <strong>230 g Mehl</strong> und <strong>2 TL Backpulver</strong> auf den Teig sieben. Die Zutaten mit dem Mixer verrühren. Den Eischnee vorsichtig unterheben. Eine Pfanne heiß werden lassen. Je einen Pancake in etwas <strong>Butter</strong> von beiden Seiten braten. Im Backofen warmhalten bis alle Pancakes fertig sind.<br/><br/>Fruchtmus:<br/><strong>2 Äpfel </strong>schälen. Die Äpfel und <strong>2 Pflaumen</strong> würfeln. In einem Topf mit <strong>1 TL Zimt</strong>, <strong>2 TL Vanillezucker</strong> und <strong>2 - 4 EL Wasser</strong> weich schmoren. Das dauert ungefähr 10 Minuten. Eventuell etwas Wasser nachgießen.<br/><br/><strong>Pekannüsse</strong> in einer Pfanne ohne Fett leicht rösten.<br/>Die Pancakes mit einem Klecks <strong>Joghurt</strong>, dem Fruchtmus, den Nüssen und etwas <strong>Honig</strong> servieren.',
		recipe_title: 'Kürbis Pancakes',
	},
	{
		id: '3167',
		recipe_content:
			'Spinatquiche für 4.<br/>Für den Teig: <strong>250 g Mehl</strong> mit <strong>125 g kalter Butter</strong> in Stücken, <strong>1 Prise Salz, 1 Ei </strong>und <strong>2 - 3 EL kaltem Wasser</strong> zu einem Teig verkneten und für 30 Minuten in den Kühlschrank legen. Eine Springform (26) mit Backpapier auslegen und die Ränder einfetten.<br/>Den Backofen auf 200 Grad vorheizen.<br/>Für den Belag <strong>750 g TK Blattspinat</strong> in einem Topf auftauen. <strong>1 Zwiebel</strong> und <strong>1 Knoblauchzehe</strong> fein würfeln und in <strong>Olivenöl</strong> andünsten. Den Spinat in einer Schüssel mit Zwiebeln und Knoblauch vermengen. <strong>1 Ei</strong> und <strong>200 g Creme Fraiche </strong>unterrühren. <strong>150 g Feta</strong> fein würfeln und ebenfalls unterheben. Den Spinat mit <strong>Salz</strong> und <strong>Pfeffer</strong> abschmecken.<br/>Den Teig aus dem Kühlschrank nehmen und kreisförmig ausrollen. Die Springform damit auslegen, sodass ein Rand entsteht. Die Füllung auf dem Teig verteilen. <strong>1 Handvoll Cocktailtomaten</strong> halbieren und auf dem Spinat verteilen. Die Quiche im heißen Ofen 30 Minuten backen.',
		recipe_title: 'Spinat Quiche',
	},
	{
		id: '3178',
		recipe_content:
			'Für 2.<br/><strong>1 Zwiebel, 1 Knoblauchzehe, 1 kleines Stück Ingwer </strong>würfeln. Ingwer gibt dem Ganzen Zitrone schärfe, deswegen vorsichtig nach Geschmack bemessen. Wir nehmen von der Größe her vergleichbar mit einer Halben Knoblauchzehe. <strong>1/2 Hokkaido Kürbis </strong>in mundgerechte Stücke schneiden. <strong>1 Gelbe Paprika </strong>und <strong>3 Möhren</strong> würfeln.<br/>Zwiebel, Knoblauch und Ingwer in Olivenöl glasig dünsten. Mit <strong>1/2 TL Paprikapulver</strong> bestäuben und <strong>1 TL Tomatenmark</strong> hinzugeben. Anrösten. Dann den Kürbis, Möhren und die Paprika dazugeben. Alles rundherum anbraten und mit <strong>100 ml Weißwein </strong>ablöschen. Wenn der Wein verkocht ist, <strong>400 ml Brühe </strong>angießen. Das ganze 20 Minuten köcheln lassen. Eventuell etwas Wasser oder Brühe nachgießen. Dann <strong>100 ml Cremafina, Sahne </strong>oder <strong>Kokosmilch</strong> hinzugeben und nochmal aufkochen lassen, bis die Soße eindickt. Mit Salz und Pfeffer würzen. Mit<strong> 100 g Fetakäse, Cashewkernen </strong>und <strong>Petersilie</strong> garnieren.',
		recipe_title: 'Kübris Curry',
	},
	{
		id: '3184',
		recipe_content:
			'Für 6 große Muffins.<br/><strong>1 Hokkaido Kürbis</strong> waschen und zerteilen. Mit <strong>2 TL Zimt</strong> in Alufolie einwickeln und im Backofen bei 200 Grad 40 Minuten weich schmoren. Danach den Kürbis ohne das entstandene Wasser fein pürieren. Abkühlen lassen.<br/>Den Backofen auf 180 Grad Umluft vorheizen. <strong>170 g brauner Zucker, 300 g Kürbis Püree, 75 g weiche Butter, 2 Eier</strong> und <strong>1 TL Zimt </strong>zu einem glatten Teig verrühren. <strong>250 g Mehl</strong> und <strong>1 TL Backpulver</strong> darauf sieben. Den Teig auf die Formen verteilen, mit <strong>gehackten Mandeln</strong> bestreuen und im Ofen 25 Minuten backen.',
		recipe_title: 'Kürbis Muffins',
	},
	{
		id: '3198',
		recipe_content:
			'Für 3 - 4.<br/><strong>1/2 Hokkaido Kürbis</strong> waschen und in Schnitze schneiden. <strong>1 Knoblauchzehe</strong> und<strong> 1 Zwiebel</strong> würfeln. In einer Schüssel das Gemüse mit <strong>Olivenöl, Salz, Pfeffer, 1 TL Honig </strong>und etwas <strong>Paprikapulver</strong> vermengen. Den Backofen auf 200 Grad vorheizen und das Gemüse in einer Auflaufform 40 Minuten backen, bis das Gemüse weich ist.<br/><br/><strong>300 g Rinderhackfleisch</strong> mit <strong>1 Ei, 2 EL Paniermehl, 1 gewürfelten Zwiebel, Salz, Pfeffer </strong>und etwas <strong>Paprikapulver</strong> vermengen und 6 Buletten formen. Diese auf ein mit Backpapier belegtes Blech legen und ebenfalls für 30 Minuten in den Ofen geben.<br/><br/><strong>1/2 Wirsing</strong> in feine Streifen schneiden und<strong> 250 g Coctailtomaten</strong> halbieren. In einer Wokpfanne etwas <strong>Olivenöl</strong> erhitzen und den Wirsing darin 4 Minuten anbraten. Die Tomaten hinzugeben. <strong>100 ml Sahne </strong>angießen und kurz aufkochen lassen. Den Wirsing mit Salz und Pfeffer würzen.<br/><br/>Den weichen Kürbis mit Zwiebeln und Knoblauch fein pürieren. Etwas Milch unterrühren damit der Püree geschmeidig wird und mit Salz und Pfeffer abschmecken.<br/>Püree mit dem Wirsing und den Frikadellen anrichten. ',
		recipe_title: 'Wintergemüse mit Kürbispüree und Frikadellen',
	},
	{
		id: '3207',
		recipe_content:
			'<strong>Möhren Zimt Gugel </strong><br/>Die Mini-Gugelhupfformen einfetten und mit Mehl bestäuben.<br/>Den Backofen auf 210° C Ober-/Unterhitze vorheizen.<strong>70 g Mehl</strong> mit <strong>2 TL Zimt</strong> sieben und mit <strong>140 g gemahlenen Haselnüssen</strong> vermischen. <strong>4 Eier </strong>trennen. Das Eiweiß zu Schnee schlagen. Die beiden Eigelbe mit <strong>2 EL Rum, 260 g Puderzucker</strong> und <strong>1 PK Vanillezucker</strong> schaumig schlagen. <strong>140 g geriebene Möhren</strong> mit dem Mehl, den Haselnüssen und den Eigelben vermengen. Zuletzt den Eischnee unterheben. Den Teig in die Gugelhupfformen füllen und im vorgeheizten Backofen im unteren Drittel ca. 12 Minuten backen. Mit Puderzucker bestreuen.<br/><br/><strong>Schokoladen Gugel </strong><br/>Backofen auf 180 Grad vorheizen. <strong>200 g Butter </strong>cremig rühren. <strong>300 g Zucker, 2 PK Vanillezucker </strong>und <strong>4 Eier</strong> hinzugeben. <strong>250 g Mehl, 2 TL Backpulver</strong> und<strong> 6 EL Kakao</strong> auf den Teig sieben und verrühren. Teig auf gefettete Gugelhupfformen verteilen und 15 Minuten backen.',
		recipe_title: 'Mini Gugel Variation',
	},
	{
		id: '3213',
		recipe_content:
			'Den Backofen auf 160 Grad Umluft vorheizen. <strong>450 g Möhren</strong> fein reiben. <strong>1 Zitrone</strong> auspressen und unter die Möhren rühren. <strong>5 Eier</strong> mit <strong>150 g Zucker </strong>5 Minuten schaumig schlagen. <strong>100 g gemahlene Mandeln</strong> mit der Eier-Zucker-Masse vermengen. <strong>175 g Mehl</strong> und<strong> 1 TL Backpulver</strong> vermengen und auf den Teig sieben. Die Möhren hinzugeben und alles gut vermischen. Den Teig in eine Springform (24 cm) geben und im heißen Backofen 30 Minuten backen.<br/>Für das Topping <strong>200 g Sahne</strong> steif schlagen. <strong>150 g Quark</strong> mit <strong>1 PK Vanillezucker</strong> glattrühren und die Sahne vorsichtig unterheben. Die Masse auf dem ausgekühlten Kuchen verteilen und mit <strong>Haselnüssen</strong> dekorieren.',
		recipe_title: 'Karottenkuchen',
	},
	{
		id: '3218',
		recipe_content:
			'<strong>500 g Mehl</strong> und <strong>1 TL Salz</strong> in einer Schüssel mischen und eine Mulde in die Mitte drücken. <strong>20 g frische Hefe</strong> mit <strong>1 Prise Zucker</strong> in <strong>300 ml warmem Wasser </strong>auflösen. Das Hefewasser in die Mulde gießen und mit dem Mehl zu einem Teig verkneten (8 - 10 Minuten). Den Teig in der Schüssel mit einem Küchentuch abgedeckt 1 Stunde an einem warmen Ort gehen lassen. Den Backofen auf 250 Grad Ober-Unterhitze vorheizen. Den Teig halbieren und je auf einem Backblech sehr dünn ausrollen. Die Fladen nach Belieben mit etwas <strong>Serano Schinken</strong> belegen und nacheinander im heißen Ofen 8 - 10 Minuten backen. Zum Anrichten mit <strong>Olivenöl</strong> beträufeln.',
		recipe_title: 'Knusprige Focaccia',
	},
	{
		id: '3224',
		recipe_content:
			'Den Backofen auf 180 Grad vorheizen. <strong>150 g Mehl </strong>mit<strong> 1/2 TL Backpulver</strong> und <strong>1/2 TL Natron</strong> vermengen und zur Seite stellen. <strong>250 g Zucker</strong> mit <strong>1 PK Vanillezucker</strong> vermischen. Mit<strong> 2 Eiern </strong>und <strong>150 g Butter</strong> schaumig rühren.<br/><strong>2 Bananen</strong> zerstampfen und hinzugeben.<br/><strong>50 ml Buttermilch</strong> und die Mehlmischung zum Teig geben und verrühren. Teig in die Muffin Förmchen füllen und 18 Minuten lang backen. Mit <strong>Zartbitterkouvertüre</strong> bestreichen. Marzipanrohmasse dünn ausrollen und Herzen ausstechen. Noch auf die flüssige Kouvertüre platzieren.',
		recipe_title: 'Bananen Muffins',
	},
	{
		id: '3246',
		recipe_content:
			'Für 4.<br/>Als Erstes werden die Brownies gebacken. Den Backofen auf 180 Grad vorheizen. <strong>100 g Butter</strong> cremig rühren. <strong>150 g brauner Zucker, 1 PK Vanillezucker</strong> und <strong>2 Eier </strong>hinzugeben. <strong>125 g Mehl, 1 TL Backpulver</strong> und <strong>3 EL Kakao</strong> auf den Teig sieben und verrühren. In einer kleinen Form (Springform oder Muffin-Blech) 15 - 20 Minuten backen.  Auskühlen lassen.<br/>In der Zwischenzeit <strong>1 PK Puddingpulver</strong> nach Packungsanleitung (500 ml Milch) kochen und mit Frischhaltefolie abdecken, damit keine Haut entsteht. Auskühlen lassen.<br/><br/><strong>300 g TK Himbeeren</strong> (alternativ Erdbeeren) in einen kleinen Topf geben und mit etwas Wasser erhitzen und auftauen.<br/>Nachdem der Pudding abgekühlt ist, <strong>200 g Sahnequark</strong> mit einem Schneebesen unterrühren. Abschmecken und bei Bedarf mit etwas <strong>Zucker</strong> nachsüßen.<br/><br/>Den Brownie zerkleinern und auf 4 Gläser verteilen. Die Himbeeren mit der entstandenen Soße darauf geben. Die Kuchenmasse sollte etwas getränkt werden. Danach die Vanille-Creme auf die Gläser verteilen und mit ein paar <strong>Pistazien</strong> dekorieren.',
		recipe_title: 'Himbeer-Brownie Trifle mit Vanillecreme',
	},
	{
		id: '3254',
		recipe_content:
			'Ergibt 2 große Kringel<br/>Für den Hefeteig <strong>500 ml Milch </strong>erwärmen und <strong>1 Würfel Hefe </strong>hineinbröseln.<br/><strong>100 g Zucker, 20 g Salz, ½ Zitrone</strong> und <strong>Bittermandelöl</strong> hinzugeben.<br/>Mit dem Schneebesen verrühren.<br/><strong>150 g weiche Butter, 1 Ei </strong>und <strong>1 Eiweiß</strong> hinzugeben und gut unterrühren.<br/><strong>1 kg Mehl</strong> in die Schüssel sieben und verkneten.<br/>Den Teig 2 Stunden gehen lassen.<br/><br/>In der Zwischenzeit <strong>2 PK Marzipanrohmasse</strong> je dünn ausrollen.<strong> 50 g Butter </strong>schmelzen und bereit stellen. <strong>4 El Zucker </strong>mit<strong> 2 TL Zimt</strong> vermischen.<br/><br/>Den Teig nach der Gehzeit halbieren. Folgende Schritte für jede Hälfte durchführen. Den Teig dünn zu einem Rechteck ausrollen. Mit der Butter bestreichen und den Zimtzucker und gehackten Haselnüssen bestreuen. Eine Marzipan-Platte darauf andrücken. Jetzt den Teig von der langen Seite her aufrollen. Die Teigrolle mit einem scharfen Messer halbieren und die beiden Stränge ineinander verdrehen.<br/><br/>Wie das funktioniert seht ihr am besten <a href="http://4.bp.blogspot.com/-r2MKX6NOrKE/UNcp-H2gk2I/AAAAAAAAAzY/qArenynMM8U/s1600/Estonian%20Kringel%202[12].jpg ">hier</a>.<br/><br/>Die Kringel je auf ein Backblech geben und im Ofen bei 150 Grad Umluft 40 Minuten backen.',
		recipe_title: 'Hefekringel mit Marzipan und Zimt-Zucker',
	},
	{
		id: '3262',
		recipe_content:
			'<strong>Bratäpfel mit Mohn und Mandeln </strong><br/><br/>Den Backofen auf 200 Grad vorheizen. Von<strong> 2 Äpfeln</strong> den Deckel abschneiden. Das Kerngehäuse mit einem Löffel herausholen und die Äpfel vorsichtig rund aushöhlen. In einer Pfanne ohne Fett <strong>3 EL gemahlene Mandeln</strong> und <strong>2 EL Mohn</strong> rösten, bis die Mischung anfängt zu duften. <strong>100 g Marzipanrohmasse </strong>in eine Schüssel würfeln. Mit der Mohn-Mandel-Mischung und <strong>1 TL Zimt </strong>mit den Händen vermengen. Die Mischung in die Äpfel drücken. Den Deckel wieder auf die Äpfel setzen. Die Äpfel in eine Auflaufform setzen. Je eine <strong>Butterflocke</strong> auf jeden Apfel geben und 25 Minuten backen. Mit einem Klecks <strong>Vanillejoghurt</strong> servieren.',
		recipe_title: 'Bratäpfel',
	},
	{
		id: '3270',
		recipe_content:
			'Für 6 als Vorspeise.<br/><strong>2 PK Feldsalat </strong>verlesen und waschen. <strong>200 g vakuumierte rote Beete</strong> und<strong> 1 großen Apfel</strong> vierteln und in feine Scheiben scheiden. In einer Pfanne<strong> 100 g Speck</strong> knusprig braten und etwas abkühlen lassen.<strong> 2 Handvoll Walnüsse</strong> in eine Pfanne ohne Fett geben. <strong>2 TL Honig </strong>dazugeben und die Walnüsse karamellisieren lassen. Mit einer Prise Salz bestreuen.<br/>Für die Salatsoße <strong>4 El Olivenöl</strong> mit <strong>2 El Weißweinessig, 1 Prise Zucker, Salz, Pfeffer</strong> und<strong> 1 TL Senf </strong>verrühren.<br/>Salat, Äpfel und rote Beete mit der Salatsoße vermengen. Mit dem Speck und den Walnüssen garnieren. Etwas <strong>Camembert</strong> in Stücke scheiden und auf dem Salat verteilen.',
		recipe_title: 'Winterlicher Feldsalat',
	},
	{
		id: '3275',
		recipe_content:
			'für 6 - 8 Personen.<br/><strong>400 g TK Erdbeeren</strong> auftauen lassen.<strong> 250 g Mascarpone mit 1 EL Zitronensaft, 85 g Puderzucker, 1 Pk Vanillezucker</strong> und <strong>500 g Quark</strong> vermengen, sodass eine glatte Creme entsteht. <strong>350 g Sahne </strong>steif schlafen und unterheben.<br/>Die Erdbeeren mit<strong> 30 g Zucker</strong> pürieren. Die Creme in eine Auflaufform füllen und die Erdbeersoße darüber verteilen. <strong>1 Tafel weisse Schokolade</strong> raspeln und darauf verteilen.',
		recipe_title: 'Spaghetti Eis Nachtisch',
	},
	{
		id: '3280',
		recipe_content:
			'<strong>1 Liter Milch</strong> mit <strong>1 Prise Salz </strong>aufkochen. <strong>3 PK Puddingpulver</strong> und <strong>3 EL Zucker</strong> einrühren und kurz aufkochen lassen, bis die Milch eindickt. Etwas kalt rühren, dann mit Frischhaltefolie bedecken und komplett abkühlen lassen.<br/>In der Zwischenzeit<strong> 200 g Zartbitterschokolade</strong> grob hacken und<strong> 1 Glas Kirschen </strong>abtropfen.<br/><strong>1 Becher Sahne </strong>steif schlagen.<br/>Den Pudding mit dem Handrührgerät auf niedrigster Stufe glatt aufschlagen. Vorsichtig die Sahne, Schokolade und die Kirschen unterheben.<br/>Auf kleine Gläschen verteilen. ',
		recipe_title: 'Herrencreme Deluxe',
	},
	{
		id: '3286',
		recipe_content:
			'Für das Maronenpüree <strong>200 g vakuumierte Maronen</strong> mit <strong>100 ml Milch, 1/2 TL Zimt </strong>und <strong>1-2 EL Ahornsirup</strong> 5 Minuten köcheln lassen, bis die Maronen weich werden. Abkühlen lassen und dann pürieren.<br/><br/>Den Backofen auf 160 Grad vorheizen.<br/>Das Püree mit <strong>75 g Puderzucker</strong> schaumig schlagen. <strong>2 Eier</strong> trennen und die <strong>Eigelbe</strong> zu dem Maronen-Püree geben. Gut unterrühren. <strong>1 Apfel</strong> vierteln, entkernen und in kleine Würfel schneiden. Mit <strong>100 g gemahlene Haselnüsse</strong> und<strong> 1 TL Backpulver </strong>untermengen.<br/>Das <strong>Eiweiß</strong> mit<strong> 1 Prise Salz</strong> steif schlagen und vorsichtig unterheben. Eine kleine Kastenform gut ausfetten und mit Mehl bestäuben. Den Teig einfüllen und glatt streichen.<br/>Im Backofen 35-40 Minuten backen.',
		recipe_title: 'Winterlicher Maronenkuchen',
	},
	{
		id: '3293',
		recipe_content:
			'Für 4.<br/><strong>400 g Mehl</strong> in eine Schüssel sieben. <strong>1 TL Salz, 1 Ei </strong>und<strong> 1/8 l Wasser</strong> mit dem Mehl zu einem Teig verkneten. 30 Minuten ruhen lassen.<br/><strong>1 Zwiebel </strong>schälen, fein würfeln. <strong>1 EL Butter</strong> erhitzen, Zwiebel darin glasig dünsten. <strong>250 g vakuumierte Rote Bete</strong> auf einer Küchenreibe fein reiben. <strong>1 Ei</strong> trennen. <strong>Zwiebel, Rote Bete, 1 Handvoll Parmesan, Eigelb</strong> und <strong>50 g Frischkäse </strong>verrühren. Mit Salz und Pfeffer würzen.<br/>Nudelteig dünn ausrollen und in lange Bahnen scheiden. Auf den Streifen die Füllung in kleinen Mengen setzen. Mit einem anderen Streifen bedecken. Rund um die Füllung die Seiten zusammendrücken, sodass kleine Rechtecke entstehen.<br/>In einem weiten Topf 3-4 l Salzwasser (ca. 1 TL Salz pro Liter) aufkochen. Hälfte Ravioli darin bei leicht köchelndem Wasser ca. 5 Minuten garen. Die fertigen Ravioli mit einer Schaumkelle herausheben und gut abtropfen lassen. Übrige Ravioli ebenso garen und abtropfen lassen.<br/>Inzwischen für die Nussbutter<strong> 100 g Walnüsse </strong>grob hacken.<strong> 4 EL Butter</strong> in einer großen Pfanne erhitzen. Nüsse darin unter Wenden anrösten. Butter mit Salz würzen. Ravioli portionsweise in der Walnussbutter schwenken.<br/><br/>gerösteter Rosenkohl<br/>Den Stiel und die äußeren Blätter von <strong>1 kg Rosenkohl</strong> entfernen. Den Rosenkohl halbieren. In einer Schüssel mit <strong>4 EL Olivenöl </strong>und <strong>2 EL Zitronensaft</strong> vermengen. Mit Salz und Pfeffer würzen. Im heißen Ofen bei 200 Grad 20 - 30 Minuten rösten.',
		recipe_title: 'Rote Beete Ravioli mit geröstetem Rosenkohl',
	},
	{
		id: '3305',
		recipe_content:
			'Für 6 Personen.<br/><strong>250 g rote  Linsen</strong> in <strong>750 ml ungesalzenem Wasser</strong> einmal aufkochen und 10 Minuten bei leichter Hitze köcheln. <strong>150 g Bulgur</strong> dazu geben und weitere 5 Minuten köcheln. Vom Herd nehmen und weiter ziehen lassen.<br/><br/><strong>2 Paprikaschoten, 4 Tomaten</strong> und <strong>2 rote Zwiebel </strong>würfeln. <strong>2 Knoblauchzehen</strong> fein hacken. <strong>1 Bund Petersilie</strong> waschen und ebenfalls fein hacken.<br/><strong>50 ml Olivenöl</strong> mit <strong>5 EL Tomatenmark, 1 Tl Paprikapulver, 1 EL Kreuzkümmel, 1 EL Salz</strong> und <strong>3 EL Zitronensaft </strong>verrühren. Das Dressing, die Petersilie und das Gemüse unter die noch warme Linsen-Bulgur-Masse geben und mindestens 1 Stunde ziehen lassen.<br/>Danach nochmals mit Salz abschmecken.',
		recipe_title: 'Orientalisches Buffet für Silvester',
	},
	{
		id: '3320',
		recipe_content:
			'Für den Mürbeteig <strong>300 g Mehl</strong> in eine große Schüssel sieben.<strong> 75 g Puderzucker </strong>dazusieben. Zusammen mit dem Mark von <strong>1 Vanilleschote, 1 Prise Salz, 1 Eigelb, 2 - 3 EL kaltem Wasser</strong> und <strong>150 g gewürfelter kalter (!!) Butter</strong> mit den Händen zu einem glatten Teig verkneten. Den Teig mindestens 1 Stunde in den Kühlschrank legen.<br/>In der Zwischenzeit<strong> 1 kg Äpfel</strong> schälen, vierteln, entkernen und in feine Scheiben schneiden. In einen Topf geben und mit <strong>25 g Zucker</strong> und <strong>1 TL Zimt</strong> kurz (7 Minuten) andünsten.<br/><br/>Den Backofen auf 200 Grad vorheizen.<br/>Eine Springform mit Backpapier auslegen und den Rand mit Butter einfetten. 2/3 des Teiges in der Form zu einem Boden und Rad ausrollen, eventuell mit den Fingern in der Form verteilen. Dann die Apfelmasse einfüllen. Den restlichen Teig ausrollen und als Deckel auf die Apfelmasse legen. Mit dem Rand verbinden. Mit einer Gabel einige Löcher in den Deckel stechen.<br/>Im Ofen ca. 50 Minuten backen.',
		recipe_title: 'Appeltaart',
	},
	{
		id: '3325',
		recipe_content:
			'Für 3 Personen.<br/><strong>120 g  Bulgur</strong> mit 1/4 l kochendem Wasser übergießen und 15 Minuten quellen lassen. In der Zwischenzeit <strong>1 Zwiebel</strong> und <strong>1 Knoblauchzehe </strong>schälen und fein würfeln. Beides in <strong>1 EL Olivenöl</strong> andünsten.<br/>Den Backofen auf 200 Grad vorheizen.<br/>Den Bulgur mit <strong>2 Eiern</strong>, <strong>1 Handvoll Petersilie</strong>, der Zwiebel-Knoblauch-Mischung und <strong>5 EL Semmelbröseln</strong> verkneten, mit<strong> Salz </strong>und <strong>Pfeffer</strong> würzen.<strong> 1 Kugel Mozzarella</strong> in Würfel scheiden. Aus der Bulgur-Mischung mit feuchten Händen flache Taler formen. Falls der Teig noch nicht fest genug zum Formen sein sollte, noch ein paar Semmelbrösel untermischen. Dann einen Mozzarella-Würfel in die Mitte legen und mit dem Teig zu einer Frikadelle verschließen. Ein Backblech mit Backpapier auslegen und die Bratlinge darauf 30 Minuten im heißen Ofen backen, bis so golden sind.',
		recipe_title: 'Bulgur Bratlinge',
	},
	{
		id: '3330',
		recipe_content:
			'Für 4.<br/><strong>2 Auberginen</strong> in 2 cm große Würfel schneiden. In einer Schüssel mit <strong>1 TL Salz</strong> vermengen und eine halbe Stunde ziehen lassen. Dann mit einem Küchenkrepp trocken tupfen. In einer großen Pfanne <strong>2 El Olivenöl</strong> heiß werden lassen und die Würfel darin etwa 5 Minuten anbraten. Aus der Pfanne herausnehmen. <strong>2 Knoblauchzehen </strong>fein würfeln. Ebenfalls in <strong>2 El Olivenöl</strong> rösten und mit<strong> 1 TL Paprikapulver, 1 TL Raz el Harnout, 1/2 TL Kurkuma </strong>und <strong>1/2 TL gemahlenem Koriander</strong> (oder eurer eigenen orientalischen Mischung) bestäuben. Dann <strong>2 Dosen stückige Tomaten</strong> angießen. Die Auberginen wieder in die Pfanne geben und das ganze einmal aufkochen lassen. Dann bei mittlerer Hitze 20 Minuten köcheln lassen. <strong>2 Dosen Kichererbsen </strong>abtropfen lassen. Das Curry abziehen, die Kichererbsen und <strong>4 EL Naturjoghurt</strong> unterrühren. Mit <strong>Salz</strong> abschmecken und mit <strong>Feta</strong> garnieren.',
		recipe_title: 'Kichererbsen Curry mit Aubergine',
	},
	{
		id: '3337',
		recipe_content:
			'Für eine Kastenform.<br/><strong>10 g Hefe </strong>mit <strong>1/2 EL Honig </strong>in <strong>300 ml lauwarmen Wasser</strong> auflösen und kurz stehen lassen, bis sich Bläschen bilden. <strong>200 g  Möhren</strong> fein reiben. <strong>500 g Weizenvollkornmehl </strong>mit der Hefe, den Möhren,<strong> 1/2 EL Salz</strong> zu einem Teig verkneten. <strong>100 g Walnüsse </strong>grob hacken und ebenfalls unter den Teig kneten. Den Teig <strong>1 Stunde </strong>an einem warmen Ort gehen lassen.<br/>Den Teig in eine Kastenform geben und noch einmal<strong> 1 Stunde</strong> gehen lassen. Den Ofen auf 200 Grad vorheizen. Mit einem Messer einen Schnitt in die Oberfläche machen. Eine ofenfeste Schale mit Wasser in den Ofen stellen. Das Brot 1 1/2 Stunden backen, eventuell mit Backpapier abdecken.<br/><br/>Dazu passt ein selbstgemachte Rote Beete Aufstrich. Dazu  <strong>250 g Frischkäse</strong> mit<strong> 2 TL Meerrettich </strong>glattrühren.<strong> 3 Knollen vakuumierte rote Beete </strong>pürieren und unter den Frischkäse rühren. Mit <strong>Salz und Pfeffer</strong> abschmecken. ',
		recipe_title: 'Karottenbrot mit Walnüssen',
	},
	{
		id: '3343',
		recipe_content:
			'<strong>250 g TK Mango </strong>auftauen lassen. <strong>2 Orangen </strong>auspressen. Die Mango mit der <strong>Hälfte des Orangensaftes</strong> und <strong>2 EL Agavendicksaft</strong> (Honig oder Zucker als Ersatz) pürieren. In einer kleinen Auflaufform den Boden mit <strong>Löffelbisquits</strong> belegen. Mit dem restlichen Orangensaft beträufeln. Für die Creme <strong>250 g Sahnequark </strong>mit <strong>250 g Naturjoghurt, 1 PK Vanillezucker</strong> und <strong>Zucker</strong> nach Belieben glatt rühren. Die Creme auf den Löffelbisquit glattstreichen. Darauf das Mango-Orangen-Püree geben. Im Kühlschrank mindestens 2 Stunden durchziehen lassen. Für das Topping <strong>1 Handvoll ganze Mandeln</strong> grob hacken. <strong>3 El Haferflocken</strong> und  die Mandeln in einer Pfanne ohne Fett rösten. <strong>2 El Honig</strong> hinzugeben und die Mischung karamellisieren lassen. Dann auf ein Backpapier geben und abkühlen lassen. Das Tiramisu damit bestreuen. ',
		recipe_title: 'Mango Tiramisu',
	},
	{
		id: '3350',
		recipe_content:
			'Für 2 hungrige Personen<br/><strong>250 g Spaghetti</strong> nach Packungsanweisung kochen. <strong>3 Zucchini </strong>waschen, halbieren und in Scheiben schneiden.<strong> 2 Zwiebeln </strong>und <strong>1 Knoblauchzehe</strong> fein würfeln. In einer Pfanne etwas <strong>Olivenöl</strong> erhitzen und Zwiebeln und Knoblauch darin anbraten. Die Zucchini hinzugeben und anbraten. Mit einem Schuss <strong>Weißwein</strong> ablöschen. Wenn der Wein verkocht ist, <strong>150 ml Gemüsebrühe</strong> angießen. 10 - 15 Minuten weich dünsten. Dann die Zucchini in einen hohen Becher geben und fein pürieren.<strong> 100 g Creme Fraiche</strong> unterrühren. Etwas <strong>Parmesan</strong> reiben und ebenfalls unterrühren. Nudeln auf Tellern anrichten und die Zucchini Creme darauf verteilen. Mit <strong>Petersilie</strong> und <strong>Parmesan</strong> garnieren.',
		recipe_title: 'Pasta mit Zucchini Creme',
	},
	{
		id: '3356',
		recipe_content:
			'Für den <strong>Teig 500 g Mehl,1 Tütchen Trockenhefe</strong> und<strong> 10 g Meersalz</strong> in eine Schüssel sieben. <strong>30 ml Olivenöl</strong> und <strong>280 ml lauwarmes Wasser</strong> hinzugeben. Zu einem geschmeidigem Teig verkneten. Den Teig an einem warmen Ort 1 Stunde gehen lassen.<br/><br/>In der Zwischenzeit für die Füllung <strong>1 Knoblauchzehe</strong> würfeln und <strong>1 Frühlingszwiebel</strong> in feine Ringe schneiden. <strong>2 Handvoll getrocknete Tomaten</strong> mit Knoblauch, Zwiebeln,<strong> Salz, Pfeffer </strong>und<strong> 1 TL Oregano</strong> fein pürieren. Für die Cremigkeit etwas Öl von den Tomaten untermischen.<br/><strong>Parmesan</strong> fein reiben. Den Backofen auf 180 Grad vorheizen.<br/>Den Teig zu einem länglichen Rechteck ausrollen. Ca. 7 cm breite Streifen schneiden. Die Streifen mit der Füllung bestreichen und mit dem Käse bestreuen. Dann jeden Streifen hälftig übereinander klappen. Mit einer Bahn anfangen und in die Mitte der Springform der setzten (mit der Schnittfläche nach oben) und die Streifen hintereinander zu einer Spirale aufrollen. Dann den Teig noch mal 1/2 Stunde gehen lassen.<br/>Nach der Gehzeit 30 Minuten im heißen Ofen backen.',
		recipe_title: 'Pesto-Parmesan-Schnecke',
	},
	{
		id: '3365',
		recipe_content:
			'für eine kleine Brownie-From<br/>Den Backofen auf 175 Grad vorheizen. Die Form fetten und mit Mehl ausstäuben. <strong>90 g weiche Butter, 150 g Zucker, 1 TL Vanillezucker</strong> und <strong>100 g Erdnussbutter </strong>verrühren. <strong>165 g Mehl</strong> und<strong> 1 TL Backpulver</strong> in einer separaten Schüssel vermengen und auf den Teig sieben. <strong>2 Eier</strong> und <strong>80 g Buttermilch</strong> unterrühren, bis ein glatter Teig entsteht. Den Teig in die Form füllen.<strong> 4 EL Nutella</strong> in Klecksen auf den Teig setzen und mit einer Gabel in „Swirls“ verteilen. Im Ofen 40 - 50 Minuten backen .',
		recipe_title: 'Peanut Butter Cake mit Nutella Swirls',
	},
	{
		id: '3372',
		recipe_content:
			'Als erstes den Teig für die Tortillas herstellen. Dazu <strong>250 g Mehl, 3 EL Polenta, 1 TL Salz</strong> und <strong>1/2 TL Backpulver</strong> in eine Schüssel geben. <strong>110 ml Wasser</strong> und <strong>70 ml Öl </strong>hinzugeben und mit einer Gabel verrühren. Dann mit den Händen zu einem geschmeidigem Teig verkneten. 1 Stunde ruhen lassen.<br/><br/>In der Zwischenzeit für die Füllung <strong>500 g Möhren</strong> schälen und vierteln (in gleichmäßige Stifte). In eine Schüssel geben und mit <strong>3 EL Olivenöl, Salz</strong> und <strong>Pfeffer</strong> vermengen. Dann auf einem Backblech verteilen und im heißen Ofen bei 200 Grad 30 Minuten knusprig backen.<br/>Währenddessen <strong>250 g Naturjoghurt</strong> mit <strong>Salz, Pfeffer </strong>und etwas <strong>Zitronensaft</strong> glattrühren. <strong>100 g Feta</strong> würfeln. <strong>300 g Hähnchenbrust </strong>von beiden Seiten salzen und pfeffern. In Olivenöl anbraten. Aus der Pfanne nehmen und in mundgerechte Stücke schneiden und warmhalten.<br/>Die Tortillas ausrollen und tellergroße Kreise zurechtschneiden. In einer beschichteten Pfanne ohne Fett von beiden Seiten 1 Minute backen. Mit einem feuchten Tuch bedecken, damit die Tortillas nicht hart werden und beim belegen brechen.<br/>Auf die Fladen einen Klecks Joghurt geben und dann mit Möhren, Feta und Hähnchen belegen. Mit viel <strong>Petersilie</strong> garnieren.',
		recipe_title: 'Tacos mit Ofen-Möhren, Feta und Hähnchen',
	},
	{
		id: '3377',
		recipe_content:
			'Die <strong>Datteln</strong> sind sehr einfach zuzubereiten. Wichtig ist, dass sie bereits entsteint sind. Dann einfach mit <strong>Speck</strong> umwickeln und auf ein mit Backpapier belegtes Backblech setzten.<br/>Im heißen Ofen bei 180 Grad 15 - 20 Minuten knusprig backen.<br/><br/><strong>16 Spanische Bratpaprika</strong> abwaschen und mit einem Messer längst einen Schlitz einschneiden. Insgesamt wird <strong>300 g Emmentaler</strong> benötigt. Aus einem Teil <strong>16 Stifte </strong>schneiden und damit die Bratpaprika füllen. Den Rest des Käses raspeln. <strong>3 Eier</strong> trennen. Das Eiweiß steif schlagen und danach das Eigelb unterziehen. Die Bratpaprika in die Eiermasse tunken und danach auf einem Teller in <strong>Mehl</strong> wenden. In einem breiten Topf <strong>Olivenöl</strong> fingerbreit erhitzen. Die Paprikas darin (nacheinander - die Paprika sollten nebeneinander und nicht aufeinander liegen) braten, bis sie eine goldene Farbe bekommen. Dann herausnehmen und in eine Auflaufform setzen. Die Chillies mit dem Emmentaler bestreuen. Im heißen Ofen bei 180 g ebenfalls 15 - 20 Minuten backen.',
		recipe_title: 'Tapas: Datteln & Chillies Rellenos',
	},
	{
		id: '3384',
		recipe_content:
			'Für die Auberginenröllchen haben wir<strong> 2 große Auberginen</strong> (längliche Form eignet sich besonders gut) längst in dünne Scheiben geschnitten. Diese dann auf einer Ablage verteilen und mit <strong>Salz</strong> bestreuen. 15 Minuten ziehen lassen. In der Zwischenzeit die Füllung zubereiten. Dazu <strong>200 g Frischkäse, 1 gehackte Knoblauchzehe</strong> und<strong> 100 g Feta</strong> pürieren und mit <strong>Salz</strong> und <strong>Pfeffer</strong> abschmecken. Falls ihr mögt, könnt ihr auch noch getrocknete Tomaten mit pürieren.<br/>Die Auberginen mit einem Küchenpapier das ausgetretene Wasser abtupfen. Mit <strong>Olivenöl</strong> einpinseln und auf 2 mit Backpapier belegte Backbleche verteilen. Die Auberginen sollten nebeneinander liegen! Dann im Backofen  bei 200 Grad 15 Minuten backen. Die Auberginen dürfen nicht zu knusprig werden, dann könnt ihr sie nicht mehr aufrollen. Etwas abkühlen lassen. Mit einem Klecks Füllung bestreichen und aufrollen.',
		recipe_title: 'Tapas: Auberginen Röllchen und Linsensalat',
	},
	{
		id: '3389',
		recipe_content:
			'<strong>1 Zwiebel </strong>und <strong>1 Knoblauchzehe </strong>fein würfeln. <strong>50 g Brot </strong>ohne Rinde in Wasser einweichen. <strong>500 g Hackfleisch </strong>mit <strong>Zwiebeln, Knoblauch, 2 El frisch gehackte Petersilie, das augedrückte Brot, 1 Ei, Salz</strong> und <strong>Pfeffer</strong> verquirlen. Aus der Masse gleich große Bällchen formen. In einer großen Pfanne <strong>2 El Olivenöl</strong> erhitzen. Die Fleischbällchen darin rundum durchbraten. Dann aus der Pfanne nehmen.<br/><strong>2 weitere Knoblauchzehen </strong>fein hacken. In der gleichen Pfanne<strong> 15 g zerrupftes Brot</strong> und <strong>120 g abgezogene Mandeln</strong> mit dem Knoblauch bei mittlerer Hitze rösten. Dann mit <strong>150 ml Weißwein </strong>ablöschen und einkochen lassen. Die Mandel-Mischung zusammen mit <strong>400 ml Gemüsebrühe </strong>fein pürieren. Mit Salz und Pfeffer abschmecken. Die Soße noch einmal in die Pfanne geben und aufkochen lassen. Die Hackbällchen unterheben. Mit <strong>Petersilie</strong> garnieren. ',
		recipe_title: 'Tapas: Hackbällchen in Mandelsauce',
	},
	{
		id: '3395',
		recipe_content:
			'Den Backofen auf 180 Grad vorheizen.<strong> 125 g Zucker, 180 g Butter, 2 Eigelb </strong>und<strong> 250 g Weizenmehl</strong> mit den Händen zu einem glatten Teig verkneten. Den Teig in Frischhaltefolie einwickeln und etwa 10 Minuten ruhen lassen.<br/>In der Zwischenzeit für die Füllung <strong>125 g Zartbitterschokolade</strong> im Wasserbad schmelzen.<br/><strong>250 g Ricotta, 40 g Puderzucker</strong> und die geschmolzene Schokolade verrühren. Den Boden einer Springform mit Backpapier bedecken. 2/3 des Teiges kreisrund ausrollen und die Form damit auskleiden. Auch einen Rand andrücken. Dann die Schokoladenmasse einfüllen. Den Restlichen Teig ausrollen, in Streifen schneiden und als Gitter auf die Füllung legen. Im Ofen 35 - 40 Minuten backen.',
		recipe_title: 'Ricottakuchen mit Schokolade',
	},
	{
		id: '3403',
		recipe_content:
			"Zubereitung:<br/><strong>1 1/2 TL Trockenhefe</strong> mit dem <strong>1 EL lauwarmen Wasser</strong> verrühren und. 2-3 Minuten stehen lassen. Dann <strong>220 ml lauwarme Milch </strong>dazugeben und gut umrühren. <strong>60 g Zucker </strong>und <strong>1 Ei</strong> unterrühren. Nun<strong> 360 g Mehl</strong> und<strong> 1 Prise Salz</strong> mit dem Teig verkneten. <strong>80 g flüssige Butter</strong> unterarbeiten. Den Teig großzügig in Frischhaltefolie einpacken (er wird ziemlich aufgehen) und in einem Gefrierbeutel verpacken (gut verschließen!).<br/>Über Nacht im Kühlschrank ruhen lassen.<br/>Am nächsten Tag den Teig auf einer sehr gut bemehlten Arbeitsfläche rund ausrollen. Wir hatten ein wenig Schwierigkeiten damit, weil der Teig sehr klebrig ist, aber mit viel Mehl klappt's. Wie eine Pizza in 12 Dreiecke schneiden. Wir haben bei ein paar Hörnchen noch einen<strong> Klecks Nutella </strong>auf die Längsseite gesetzt. Von der breiten Seite her aufrollen und die Hörnchen auf ein Backblech setzen. Bei 200 Grad 15 Minuten backen.",
		recipe_title: 'Frühstückshörnchen',
	},
	{
		id: '3409',
		recipe_content:
			'Für die Mohnfüllung <strong>125 ml Milch </strong>aufkochen. Vom Herd abziehen und <strong>125 g gemahlenen Mohn, 100 g Zucker, 1 PK Vanillezucker </strong>und <strong>2 Tropfen Bittermandel-Aroma </strong>unter die Milch rühren. Etwas ziehen lassen. Den Backofen auf 160 Grad Umluft vorheizen.<br/>In der Zwischenzeit <strong>250 g Butter</strong> mit <strong>250 g Zucker</strong> schaumig schlagen. <strong>4 Eier </strong>nach und nach dazugeben. In einer separaten Schüssel <strong>450 g Mehl, 1 PK Vanillepudding-Pulver, 1 PK Backpulver</strong> und<strong> 1 Prise Sa</strong><strong>lz </strong>vermengen. Über den Teig sieben. Zusammen mit 125 ml Milch, 4 Tropfen Buttervanille-Aroma und<strong> 1 EL Rum</strong> unterrühren. Eine Gugelhupfform einfetten und mit Mehl ausstreuen. 3/4 des Teigs in die Form füllen. Übrigen Teig mit der Mohnfüllung mischen, auf den hellen Teig streichen und mit einer Gabel spiralenförmig unterziehen.<br/>Im heißen Ofen 60 Minuten backen.',
		recipe_title: 'Vanille Mohn Gugelhupf',
	},
	{
		id: '3419',
		recipe_content:
			'für 4.<br/><strong>3 große Süßkartoffeln</strong> in Alufolie verpacken und 1 Stunde im Ofen bei 200 Grad weich garen. Danach offen auskühlen lassen. Das Fruchtfleisch ausschaben und mit einem Kartoffelstampfer zu einem Püree verarbeiten. Mit <strong>Salz</strong> und <strong>2 EL Olivenöl</strong> vermengen.<br/>Danach den Ofen auf 180 Grad vorheizen. In einer Pfanne etwas <strong>Olivenöl</strong> erhitzen. <strong>500 g Rindergehacktes</strong> darin anbraten. Danach wieder aus der Pfanne nehmen. <strong>1 Zwiebel </strong>und<strong> 1 Knoblauchzehe</strong> fein würfeln und in der Pfanne anbraten. <strong>1 EL Tomatenmark</strong> unterrühren und 2 Minuten anrösten. Das Ganze mit <strong>1 El Mehl </strong>bestäuben und 2 Minuten anschwitzen. Dann das Fleisch wieder in die Pfanne geben. <strong>300 ml Brühe </strong>angießen, einmal aufkochen lassen und dann bei mittlerer Hitze 10 - 15 Minuten einkochen lassen, bis eine sämige Soße entsteht. Eventuell noch etwas Brühe nachgießen. Mit <strong>Salz</strong> und <strong>Pfeffer</strong> abschmecken. Das Fleisch mit der Soße in eine Auflaufform geben, mit dem Süßkartoffel-Püree bedecken. Im Ofen noch einmal mit 10 - 15 Minuten bei 200 Grad backen.',
		recipe_title: "Sweet Potatoe Shepherd's Pie",
	},
	{
		id: '3424',
		recipe_content:
			'Für 4.<br/>Den Backofen auf 200 Grad vorheizen. <strong>500 g Möhren </strong>schälen, halbieren und in Scheiben schneiden. In einer Schüssel mit <strong>1 TL Curry, Salz</strong> und <strong>2 EL Olivenöl </strong>vermengen. Auf einem Backblech verteilen und im heißen Ofen 30 Minuten garen. Danach abkühlen lassen.<br/><strong>4 Stücke Lachs</strong> mit <strong>Olivenöl</strong> bestreichen. Salzen und Pfeffern. Je mit <strong>einer Prise braunem Zucker</strong> bestreuen. Den Lachs in eine Auflaufform setzen und im Ofen 20 Minuten garen. Für die Linsen<strong> 1 Knoblauchzehe</strong> und <strong>1 Zwiebel</strong> fein würfeln. In einem großen Topf <strong>Olivenöl</strong> heiß werden lassen. Zwiebel und Knoblauch darin anbraten. <strong>250 g rote Linsen</strong> hinzugeben und kurz mit anbraten. Dann <strong>300 ml Brühe</strong> angießen. Bei mittlerer Hitze 15 - 20 Minuten garen.<strong> 1 Blumenkohl</strong> in feine Röschen zerteilen. In kochendem Wasser weich garen. Blumenkohl und Möhren nochmals in einer Pfanne anbraten. Dann <strong>200 g Creme Fraiche</strong> unterrühren. Mit Salz und Pfeffer abschmecken. Lachs mit den Linsen und dem Gemüse servieren.',
		recipe_title: 'Lachs mit Linsen und Blumenkohl Curry',
	},
	{
		id: '3430',
		recipe_content:
			'Den Backofen auf 180°C Ober-Unterhitze (160°C Umluft) vorheizen und eine Brownieform mit Backpapier auslegen.<br/>Für den Mürbeteig <strong>80 g Butter, 30 g Puderzucker, 1 TL Zimt</strong> und <strong>150 g Mehl</strong> zu einem glatten Teig verkneten. Den Teig in die Form geben und glatt streichen.<br/><strong> 4 Äpfel</strong> schälen, vierteln, das Kerngehäuse entfernen. Die Oberseite mehrmals mit einem Messer fein einschneiden.<br/>Für die Sandmasse <strong>2 Eier</strong> trennen.<strong> 150 g Butter</strong> mit <strong>150 g Zucker </strong>schaumig schlagen, dann die Eigelbe nacheinander unterrühren. Das Eiweiß mit einer Prise Salz aufschlagen. <strong>150 g Mehl</strong> und <strong>1 TL Backpulver</strong> vermengen und auf die Masse sieben, unterrühren. Nun ein Drittel des Eischnees per Hand unterrühren, den Rest vorsichtig unterheben. Die Sandmasse auf dem Mürbeteigboden verteilen.<br/>Die Äpfel nun gleichmässig auf der Sandmasse verteilen, leicht andrücken. Etwas Butter für den Belag zerlassen und die Äpfel damit bepinseln.<br/>Den Kuchen im Ofen für etwa 45 min. backen, bis er goldbraun ist.',
		recipe_title: 'Apfelkuchen',
	},
	{
		id: '3436',
		recipe_content:
			'Für die Pfannkuchen <strong>250 g Weizen-Vollkornmehl</strong> mit <strong>700 ml Milch, 6 Eiern, 1 Prise Salz</strong> und <strong>3 EL Öl</strong> verquirlen. Einige Zeit quellen lassen.<br/>Den Backofen auf 200 Grad vorheizen. <strong>500 g Möhren</strong> schälen und halbieren. In Stifte schneiden und in einer Schüssel mit<strong> 1 TL Curry, Salz</strong> und <strong>3 EL Olivenöl </strong>vermengen. Auf einem Backblech verteilen. <strong>500 g Pilze</strong> putzen und vierteln. Ebenfalls auf einem Backblech verteilen. Mit den Möhren zusammen im Backofen 30 Minuten backen.<br/>In der Zwischenzeit <strong>300 g Stangenbohnen</strong> waschen und in 4 cm breite Streifen schneiden. In kochendem Wasser ungefähr 20 Minuten kochen.<br/><strong>200 g Erbsen</strong> mit kochendem Wasser begießen und 5 Minuten auftauen lassen. Erbsen mit <strong>2 El Petersilie, 200 g Creme Fraiche</strong> und <strong>200 g Quark </strong>pürieren. Mit <strong>Salz, Pfeffer</strong> und <strong>Zitrone</strong> abschmecken.<br/>Wenn das Gemüse gar ist eine beschichtete Pfanne mit etwas Öl erhitzen. Die Pfannkuchen darin nacheinander ausbacken. Zusammen mit dem Gemüse servieren und mit etwas <strong>Feta</strong> bestreuen.',
		recipe_title: 'Vollkornpfannkuchen mit Gemüse',
	},
	{
		id: '3442',
		recipe_content:
			'<strong>100 ml Orangensaft</strong> in einen Topf geben und auf die Hälfte einkochen lassen. In einer Schüssel mit <strong>Salz, Pfeffer, 3 EL Olivenöl, 1 gepressten Knoblauchzehe</strong> und <strong>1/2 TL Honig</strong> zu einer Vinaigrette verrühren.<br/><strong>1 Packung kleine Mozzarellakugeln</strong> halbieren. <strong>1 Mango</strong> schälen und würfeln. <strong>1 Bund Rucola</strong> gründlich waschen und trocken schleudern. <strong>2 Frühlingszwiebeln</strong> in feine Ringe schneiden. <strong>2 kleine Avocados</strong> halbieren und ebenfalls in Würfel schneiden. Mit dem Saft von <strong>1 Limette</strong> verrühren. <strong>1 Handvoll Cashewkerne</strong> in einer Pfanne rösten. <strong>1 TL Honig </strong>dazugeben und karamellisieren lassen. Großzügig salzen.<br/>Den Rucola mit Mango, Mozarella, Frühlingszwiebeln, Avocado, Cashews und der Soße anrichten.',
		recipe_title: 'Avocado Mango Mozzarella Salat',
	},
	{
		id: '3447',
		recipe_content:
			'<strong>700 g Mehl</strong> mit <strong>4 TL  Backpulver, 1 Prise Salz </strong>und <strong>4 EL Zucker</strong> vermischen. <strong>190 g Butter</strong> mit <strong>300 g Joghurt</strong> und <strong>4 EL  Milch </strong>ca. 1 Minute in der Mirkowelle erwärmen. Dann rasch mit den trockenen Zutaten zu einem Teig vermengen. Den Teig nun zu einem Recheck ausrollen.<br/>Großzügig mit <strong>Nutella</strong> oder <strong>Marmelade</strong> bestreichen. Nun an der langen Seite entlang zu einer Rolle aufrollen. Etwas andrücken. Dann in Dreiecke schneiden und diese auf einem Backblech verteilen. Bei 180° etwa 20 Minuten goldgelb backen!',
		recipe_title: 'Nutella Scones',
	},
	{
		id: '3452',
		recipe_content:
			'Für die Gnocchi<strong> 1 kg Kartoffeln </strong>schälen und gar kochen.<br/>In der Zwischenzeit<strong> 40 g Pinienkerne</strong> in einer beschichteten Pfanne rösten und abkühlen lassen.<br/><strong>2 Bund Bärlauch</strong> waschen und zusammen mit den<strong> Pinienkernen, 50 ml Olivenöl </strong>und <strong>4 El geriebenem Parmesan</strong> in ein hohes Gefäß geben. Mithilfe eines Stabmixers pürieren. Weiteres <strong>Olivenöl</strong> zugeben bis die richtige Konsistenz erreicht ist. Mit <strong>Salz</strong> und <strong>Pfeffer</strong> abschmecken.<br/><br/>Die Kartoffeln mit einer Kartoffelpresse zerkleinern.<strong> 500g Mehl, 1 Ei</strong> und <strong>Salz</strong> unterrühren. Den Teig zu einer Rolle formen und mit einem Messer in gleich große Stücke zerteilen. Diese mit den Händen zu Gnocchi formen.<br/>Salzwasser zum Kochen bringen und die Gnocchi darin kochen bis sie oben schwimmen.<br/>Mit dem Pesto vermengen. Zusammen mit <strong>Parmesan</strong> und halbierten <strong>Kirschtomaten</strong> servieren.',
		recipe_title: 'Gnocchi mit Bärlauch-Pesto',
	},
	{
		id: '3460',
		recipe_content:
			'Für 4.<br/><strong>250 g rote Linsen</strong> in 5<strong>00 ml ungesalzenem Wasser</strong> einmal aufkochen und 10 Minuten bei leichter Hitze köcheln. In ein Sieb geben und abtropfen lassen.<br/><strong>2 Paprikaschoten, 4 Tomaten </strong>und <strong>2 rote Zwiebel</strong> würfeln.<br/><strong>50 ml Olivenöl</strong> mit <strong>5 EL Tomatenmark, 1 Tl Paprikapulver, 1 EL Kreuzkümmel, 1 EL Salz</strong> und<strong> 3 EL Zitronensaft </strong>verrühren. Das Dressing und das Gemüse unter die noch warme Linsen geben und mindestens 1 Stunde ziehen lassen.<br/><br/>Für das Spinatgemüse<strong> 1 kg TK Spinat</strong> bei langsamen Erhitzen auftauen lassen. Mit <strong>Salz</strong> und <strong>Pfeffer</strong> abschmecken. Mit <strong>300 g Naturjoghurt </strong>vermengen.<strong> 1 Handvoll Rosinen</strong> halbieren und <strong>2 Handvoll Mandeln</strong> hacken. Beides unter den Spinat mischen.<br/><strong>400 g Hähnchenfilet</strong> längst in Streifen schneiden. <strong>Holzspieße</strong> der Länge nach im Zickzack durch die Fleischstreifen stechen, sodass ein leichtes Wellenmuster entsteht. <strong>2 EL Öl </strong>in einer Pfanne erhitzen. Die Spieße darin von beiden Seiten jeweils 5 - 8 Minuten braten. Mit <strong>Salz</strong> und <strong>Pfeffer</strong> würzen und bei 50 Grad im Ofen warmhalten.',
		recipe_title: 'Linsensalat mit Spinatgemüse und Hähnchen',
	},
	{
		id: '3467',
		recipe_content:
			'Für 4<br/><strong>2 Zwiebeln </strong>und <strong>1 Knoblauchzehe</strong> fein würfeln. In <strong>Olivenöl</strong> glasig dünsten. <strong>250 g getrockneten Tomaten </strong>ebenfalls klein schneiden.<strong> 500 g braune Pilze </strong>würfeln. Zusammen mit den Tomaten zu den anderen Zutaten geben. Nach ein paar Minuten <strong>500 g Kritharaki (griechische Reisnudeln, auch unter Orzo zu finden, meist bei den ausländischen Spezialitäten)</strong>hinzugeben und mit <strong>200 ml Weißwein</strong> ablöschen. Bei mittlerer Hitze einkochen lassen. Dann<strong> 800 ml heiße Brühe</strong> in mehreren Schritten dazugeben und jeweils einkochen lassen.',
		recipe_title: 'Pastasotto mit getrockneten Tomaten',
	},
	{
		id: '3471',
		recipe_content:
			'Für den Teig <strong>530 g Mehl, 100 g Zucker, 1/3 TL Salz</strong> in eine Schüssel geben. <strong>20 g Hefe</strong> zerbröckeln und mit <strong>3 Eiern</strong> und <strong>120 ml lauwarmen Wasser</strong> zu der Mehlmischung geben. Zu einem Teig verkneten. Dann <strong>150 g zimmerwarme Butter </strong>in Würfeln zugeben und nochmals kneten.<br/>Den Teig abdecken und an einem warmen Ort <strong>1 Stunde</strong> gehen lassen.<br/>In der Zwischenzeit die Füllung zubereiten, indem <strong>30 g Kakaopulver, 130 g geschmolzene Zartbitter-Schokolade</strong> und <strong>50 g Butter</strong> glatt gerührt werden.<br/><br/>Den Teig zu einem großen Rechteck ausrollen. Darauf die Füllung verstreichen. Von der langen Seite her aufrollen. Die Rolle mit einem Messer der Länge nach teilen und die 2 Stränge, die dadurch entstehen, eng umeinander wickeln. Eine große Kastenform mit Backpapier auslegen und den Strang dort hineinlegen (sodass der Strang geknickt wird und übereinander liegt. Nochmal<strong> 1 Stunde </strong>gehen lassen.<br/>Den Ofen auf 190°C vorheizen und die Babkas ungefähr 30-40 Minuten auf der mittleren Schiene backen. Liebe noch mit Albfolie abdecken und etwas im Ofen lassen, damit der Zopf innen durch gebacken ist.<br/>Quelle: <a href="http://www.penneimtopf.com/2014/10/schokoladen-babka.html">Penne im Topf </a>',
		recipe_title: 'Schokoladen Babka',
	},
	{
		id: '3477',
		recipe_content:
			'<strong>4 Auberginen </strong>waschen, halbieren und in gleich große sehr breite Streifen schneiden. In einer großen Schüssel mit <strong>4 El Olivenöl, Salz </strong>und <strong>Pfeffer</strong> vermengen. Auf einem großen Backblech nebeneinander verteilen und im Ofen bei 200 Grad 40 Minuten backen.<br/><br/>In einem Topf Wasser zum Kochen bringen. Dann das Wasser salzen. <strong>400 g Pearl Couscous </strong>10 Minuten darin kochen. Dann in einem feinen Sieb abtropfen und auskühlen lassen. In der Zwischenzeit <strong>250 g Cocktailtomaten </strong>vierteln und<strong> 200 g getrocknete Tomaten</strong> in feine Streifen schneiden. <strong>1 Bund Petersilie</strong> fein hacken. Für die Soße <strong>6 EL Olivenöl</strong> mit <strong>3 El Zitronensaft, 1 gepressten Knoblauchzehe, Salz, Pfeffer </strong>und <strong>1 Prise braunem Zucker</strong> verquirlen. Couscous mit den Tomaten, der Petersilie und der Soße vermengen. Gut durchziehen lassen. <strong>1 Handvoll Pinienkerne</strong> in einer Pfanne rösten. Kurz vor dem Servieren <strong> 100 g Fetakäse</strong> zerkrümeln und unter den Salat rühren. Eventuell nochmals mit Salz und Zitrone abschmecken.',
		recipe_title: 'Couscous-Salat mit Auberginen',
	},
	{
		id: '3488',
		recipe_content:
			'Für 6 Stück<br/>Den Backofen auf 160 Grad vorheizen. Für den Teig zunächst <strong>3 Eier</strong> trennen. Das <strong>Eiweiß</strong> mit <strong>1 Prise Salz</strong> steif schlagen. Nach und nach <strong>160 g Zucker</strong> und <strong>1 PK Vanillezucker</strong> hinzugeben.<br/>In einer zweiten Schüssel <strong>160 g Butter </strong>mit dem <strong>Eigelb</strong> cremig rühren. <strong>120 g Mehl</strong> und <strong>30 g Backkakao</strong> darauf sieben. <strong>1/2 Tl Backpulver </strong>hinzugeben. Zusammen mit<strong> 70 ml Milch</strong> zu einem glatten Teig verrühren. Zum Schluss den Zuckerschnee vorsichtig unterheben.  <br/>Den Teig auf 12 Muffinförmchen verteilen. Im heißen Ofen für 30 Minuten backen.<br/>Für das Frosting <strong>50 g Butter</strong> (zimmerwarm) mit dem Mixer aufschlagen, bis sie weiß ist (mit etwas Geduld..). <strong>30 g gesiebten Puderzucker</strong> und <strong>200 g Frischkäse </strong>hinzugeben und gut verrühren.<br/>Das Frosting auf den abgekühlten Muffins verstreichen. <strong>6 Oreo-Kekse</strong> mit einem scharfen Messer halbieren. Je eine Hälfte in einen Muffin stecken.',
		recipe_title: 'Oreo Cupcakes',
	},
	{
		id: '3492',
		recipe_content:
			'Für 6 Personen oder ein Buffet<br/><strong>1 Kopf Rotkohl</strong> mit der Küchenmaschine zerkleinern. Für die Soße <strong>300 g Naturjoghurt</strong> mit <strong>4 El Olivenöl, 1 fein gewürfelte Knoblauchzehe, Saft von 1 Zitrone, 1 EL Honigsenf, Salz, Pfeffer </strong>und <strong>1 Prise braunem Zucker</strong> verquirlen. <strong>3 Organgen</strong> schälen, in Spalten und dann in Stücke schneiden. In einer Pfanne ohne Fett <strong>2 Handvoll Walnüsse</strong> rösten. <strong>1 El Honig</strong> dazugeben und karamellisieren lassen. Auf einer Platte auskühlen.<br/>Den Rotkohl mit der Soße und den Organgen vermengen und mindestens 30 Minuten ziehen lassen. Kurz von dem Anrichten noch einmal abschmecken und mit den Nüssen bestreuen. ',
		recipe_title: 'Frischer Rotkohlsalat mit Orangen',
	},
	{
		id: '3498',
		recipe_content:
			'<strong>100 g Glasnudeln</strong> mit kochendem Wasser übergießen und 10 Minuten ziehen lassen. Dann in ein Sieb geben und abtropfen lassen. Währenddessen <strong>3 Möhren</strong> und <strong>2 Zucchini</strong> schälen, längst halbieren und in feine Würfel schneiden. <strong>2 Frühlingszwiebeln</strong> mit dem Grün in feine Ringe schneiden. <strong>1/2 Bund Petersilie</strong> waschen und hacken. Für die Soße <strong>1 Knoblauchzehe</strong> fein würfeln. <strong>3 EL Sojasoße</strong> mit <strong>3 El Olivenöl, Salz, 1 TL Agavendicksaft,</strong> dem Saft von <strong>1/2 Zitrone </strong>und dem Knoblauch verquirlen. Die Nudeln mit dem Gemüse und der Soße vermengen und am Besten einige Stunden durchziehen lassen.',
		recipe_title: 'Glasnudelsalat',
	},
	{
		id: '3504',
		recipe_content:
			'Für 4.<br/><strong>3 Blatt Gelantine</strong> in kaltem Wasser 10 Minuten einweichen. <strong>1/2 Limette </strong>auspressen und den Saft auffangen. Mit <strong>200 g Buttermilch, 70 g Puderzucker</strong> und <strong>1 PK Vanillezucker</strong> verrühren. Ein Drittel der Buttermilch in einen kleinen Topf geben und vorsichtig erwärmen. Die Gelatine gut ausdrücken und in der warmen Buttermilch auflösen. Die Gelatine-Mischung zur restlichen Buttermilch geben und gut vermischen. Wenn die Mischung anfängt zu Gelieren, <strong>200 g Sahne</strong> steif schlagen und vorsichtig unterheben. In kleine Schalen füllen und für mindestens 4 Stunden kalt stellen.<br/><strong>200 g Erdbeeren </strong>waschen, halbieren und in Scheiben schneiden. Mit <strong>1 El Zucker </strong>vermengen und etwas durchziehen lassen.<br/>Zum Servieren die Schälchen fünf bis zehn Sekunden in sehr heißes Wasser tauchen und auf Teller stürzen. Die Erdbeeren darum verteilen und jeden Teller mit <strong>1 EL Kokosraspeln</strong> bestreuen.',
		recipe_title: 'Buttermilch Mousse mit Erdbeeren',
	},
	{
		id: '3515',
		recipe_content:
			'Für 2 als Hauptspeise.<br/><strong>1 Tasse Couscous </strong>mit <strong>1,5 Tassen kochendem Wasser</strong> übergießen und 10 Minuten quellen lassen. In der Zwischenzeit <strong>250 g grünen Spargel</strong> waschen und die Enden etwas abschneiden. Auf einem Backblech verteilen. Mit <strong>Olivenöl</strong> beträufeln und salzen.<br/>Im Backofen bei 200 Grad 15 Minuten garen. Herausnehmen un abkühlen lassen.<br/><strong>250 g Pilze </strong>säubern und in viertel schneiden. In einer Pfanne in etwas <strong>Olivenöl</strong> erhitzen und die Pilze anbraten, bis sie schön gebräunt sind. Ebenfalls abkühlen lassen. <strong>1 Frühlingszwiebel</strong> in feine Ringe schneiden. Für die Soße<strong> 4 El Olivenöl, 2 El Naturjoghurt, 2 El Weißweinessig, 1 TL körnigen Senf, 1 Prise Zucker, Salz</strong> und <strong>Pfeffer</strong> verquirlen. Den Spargel in ca. 4 cm breite Stücke schneiden. Couscous mit Spargel, Pilzen, Frühlingszwiebeln und der Soße vermengen.',
		recipe_title: 'Couscous Salat mit Spargel',
	},
	{
		id: '3521',
		recipe_content:
			'<strong>6 Tortilla-Wraps</strong> mit <strong>1 Glas grünem Pesto</strong> bestreichen. <strong>4 Tomaten</strong> und <strong>2 Kugeln Mozzarella</strong> würfeln. Tomaten und den Käse vermischen und mit <strong>Salz</strong> und <strong>Pfeffer</strong> würzen. <strong>1 PK Rucola</strong> abbrausen und trocken schleudern. Auf jeden Wrap ein Bett aus Rucola geben und mit der Tomaten-Mozzarella-Mischung belegen. Am besten in der Mitte des Fladens in Form eines Streifens - so wie <a href="http://www.schule-und-familie.de/assets/images/Rezepte/stafette/wraps-falten.jpg">hier</a>. Etwas <strong>Balsamico-Creme</strong> darauf geben. Dann den Wrap zusammenschlagen. Mit einem scharfen Messer 4 cm breite Stücke schneiden. Mit Hilfe eines Zahnstochers halten die Wraps besser zusammen.<br/><br/>',
		recipe_title: 'Italienische Wraps',
	},
	{
		id: '3528',
		recipe_content:
			'Für 2<br/><strong>1 kleine Dose Kichererbsen</strong> mit Wasser abbrausen und abtropfen lassen.<strong> 1 Salatgurke</strong> längst halbieren und die Kernen mit einem kleinen Löffel herausschaben. Dann in kleine Würfel schneiden. <strong>1 Bund Petersilie</strong> fein hacken.<strong> 200 g guten Feta Käse</strong> mit den Händen zerkrümeln. Für die Soße <strong>4 El Olivenöl</strong> mit <strong>2 El Zitronensaft, Salz, Pfeffer</strong> und<strong> 1 Prise Zucker </strong>vermengen. Gut abschmecken, die Soße sollte ein kräftiges Aroma haben. Dann alle Zutaten vermischen und eine Stunde durchziehen lassen. ',
		recipe_title: 'Kichererbsen Salat mit Gurke und Feta',
	},
	{
		id: '3536',
		recipe_content:
			'<strong>250 g TK Zuckerschoten</strong> auftauen lassen.<strong> 2 Knoblauchzehe</strong> abziehen und <strong>1 haselnussgroßes Stück Ingwer </strong>schälen. Beides sehr fein würfeln. In einem mittelgroßen Topf etwas Öl erhitzen. Die Knoblauch- und Ingwerwürfel hinzugeben. Mit<strong> 1 EL Currypulver </strong>bestäuben (oder<strong> 2 EL Currypaste</strong> benutzen). 2-3 Minuten kräftig anrösten. Mit <strong>750 ml Gemüsebrühe</strong> und <strong>500 ml Kokosmilch</strong> ablöschen und einmal kräftig aufkochen lassen.<strong> 125 g Reisnudeln</strong> in die kochende Suppe geben und 10 Minuten mitkochen lassen, bis die Nudeln gar sind. Währenddessen<strong> 3 rote Paprikaschoten </strong>in Streifen schneiden. Zusammen mit den Zuckerschoten zu den Nudeln geben. Mit Salz und Curry abschmecken. ',
		recipe_title: 'Reisnudel-Curry mit Zuckerschoten',
	},
	{
		id: '3542',
		recipe_content:
			'Für eine kleine Kastenform<br/>Den Backofen auf 160 Grad vorheizen. <strong>100 g weiche Butter</strong> mit <strong>200 g Zucker </strong>schaumig schlagen. Nach und nach <strong>2 Eier</strong> mit <strong>100 ml Buttermilch</strong> unterrühren. Dann<strong> 200 g Mehl, 1 Prise Salz</strong> und<strong> 1 TL Backpulver</strong> in einer separaten Schüssel vermischen und auf den Teig sieben.  <strong>180 g Kirschen</strong> in einem Sieb abtropfen lassen. <strong>50 g Zartbitterschokolade</strong> grob hacken. Schokolade und Kirschen unter den Teig rühren. Eine kleine Kastenform mit Backpapier auslegen und den Teig einfüllen. Im heißen Backofen für 50 - 60 Minuten backen. Danach gut auskühlen lassen. ',
		recipe_title: 'Buttermilch-Kirsch-Kuchen mit Schokolade',
	},
	{
		id: '3547',
		recipe_content:
			'Für 2 Personen<br/>Den Backofen auf 200 Grad vorheizen. Für die Bulgur-Taler <strong>125 g Bulgur</strong> nach Packungsanleitung kochen und auskühlen lassen. Danach <strong>1 Ei, Salz, Pfeffer </strong>und etwas <strong>orientalisches Gewürz </strong>unterrühren. Ein Muffinblech mit <strong>6 Papierförmchen</strong> auslegen. Den Bulgur darauf verteilen und leicht andrücken. <br/><strong>250 g Cocktailtomaten </strong>halbieren und auf einem Backblech nebeneinander auslegen. Mit <strong>Olivenöl</strong> besprenkeln und mit <strong>Salz & Pfeffer</strong> würzen. <strong>200 g guten Feta </strong>Käse in 2 cm breite Streifen schneiden. In eine kleine Auflaufform setzen und mit <strong>Olivenöl</strong> beträufeln. Tomtaten, Bulgur und Feta 20 Minuten im Ofen rösten. In der Zwischenzeit<strong> 500 g frischen Spinat </strong>verlesen und waschen. <strong>1 Zwiebel</strong> und <strong>1 Knoblauchzehe</strong> fein hacken. In einer großen (!) Pfanne Olivenöl erhitzen. Zwiebeln und Knoblauch darin andünsten. Dann den Spinat dazugeben und zusammenfallen lassen. Einen Schuss <strong>Cremafina</strong> hinzugeben und mit<strong> Salz & Pfeffer</strong> abschmecken. Die geschmorten Tomaten unterrühren.<br/>Spinat  mit Bulgur-Talern und Käse auf zwei Tellern anrichten.',
		recipe_title: 'Frischer Spinat mit gebackenem Feta und Bulgur-Talern',
	},
	{
		id: '3555',
		recipe_content:
			"<strong>Bunter Wurstsalat</strong><br/><strong>1 gelbe Paprikaschote, 1 Gurke</strong> und<strong> 1 Bund Radieschen</strong> waschen und putzen. Paprika vierteln und in feine Streifen schneiden. Gurke der Länge nach vierteln, quer in Scheiben schneiden. Radieschen in feine Scheiben schneiden. <strong>1 Zwiebel</strong> schälen, vierteln und in feine Streifen schneiden.<br/><strong>400 g Fleischwurst</strong> in dünne Scheiben schneiden. <strong>1 Bund Schnittlauch</strong> waschen, trocken schütteln und in Röllchen schneiden. Für die Soße<strong> 2 TL Senf</strong> und mit<strong> 3 EL Weißwein-Essig, Salz </strong>und <strong>Pfeffer</strong> verrühren,<strong> 4 El Rapsöl</strong> unterschlagen. Alle Zutaten mit der Sauce mischen und abschmecken.<br/><br/><strong>Forellencreme </strong><br/><strong>200 g Räucherforellenfilet</strong> (gibt's im Kühlregal) mit <strong>200 g Frischkäse, Salz, Pfeffer</strong> und<strong> 1 - 2 TL Zitronensaft</strong> pürieren. Wer mag schmeckt den Aufstrich mit Meerrettich ab.<br/><br/><strong>Spargel in Schinken</strong><br/>Spargel vom Vortag oder aus dem Glas in gekochtem Schinken einrollen.<br/><br/>Dazu gibt es noch körnigen Frischkäse mit Schnittlauch, Camenbert & Emmentaler am Stück und Laugenstangen und -brezeln (zum selber aufbacken).  ",
		recipe_title: 'Brotzeit',
	},
	{
		id: '3568',
		recipe_content:
			'Den Backofen auf 180 Grad vorheizen. <strong>3 sehr reife Bananen</strong> zerquetschen. Mit <strong>1 Ei, 4 EL Öl, 2 EL Agavendicksaft, 150 g Naturjoghurt </strong>und <strong>1 Prise Salz </strong>mit dem Mixer aufschlagen. In einer weiteren Schüssel<strong> 100 g Weizenvollkorn-Mehl</strong> und<strong> 200 g Weizenmehl</strong> (alternativ nur Weizenmehl) mit<strong> 1 PK Backpulver </strong>vermischen. Auf die Bananen-Ei-Mischung sieben und mit dem Mixer zu einem glatten Teig verrühren. Ihr könnt den Teig noch mit eine paar gehackten <strong>Trockenfrüchten</strong> oder <strong>Nüssen</strong> verfeinern.<br/>Eine kleine Kastenform mit Backpapier auslegen. Den Teig einfüllen und im heißen Ofen 45 Minuten backen.',
		recipe_title: 'Gesundes Bananenbrot',
	},
	{
		id: '3576',
		recipe_content:
			'Für 4 als Vorspeise.<br/><strong>100 g Räucherlachs</strong> würfeln.<strong> 1 Avocado</strong> entkernen und ebenfalls in Würfel schneiden. Sofort mit etwas <strong>Zitronensaft</strong> beträufeln, damit sie nicht braun wird. <strong>1 Frühlingszwiebel</strong> in feine Ringe schneiden. Aus <strong>2 El Olivenöl, 1 El Zitronensaft, Salz</strong> und <strong>Pfeffer</strong> eine Soße herstellen. Avocado, Frühlingszwiebeln und Lachs vorsichtig mit der Soße vermengen.<strong> 8 Blätter von Salatherzen</strong> waschen und den Avocado-Lachs Salat darauf anrichten. Mit <strong>Sonnenblumenkernen</strong> bestreuen.',
		recipe_title: 'Kleine Vorspeise: Lachs-Avocado-Salat',
	},
	{
		id: '3582',
		recipe_content:
			'Für 2.<br/><strong>2 vakuumierte Maiskolben </strong>abwaschen. In eine kleine Auflaufform setzen und mit <strong>Salz</strong> und <strong>Pfeffer</strong> würzen. Im Backofen bei 200 Grad 10 - 15 Minuten knusprig werden lassen. Zwischendurch einmal wenden.<br/><strong>500 g frischen Spinat</strong> waschen und verlesen. Gut abtropfen lassen. <strong>1 Zwiebel </strong>und<strong> 1 Knoblauchzehe</strong> fein würfeln und in etwas <strong>Olivenöl</strong> anbraten. Dann den Spinat dazugeben und einfallen lassen, das dauert ein paar Minuten. Den Spinat mit <strong>Salz</strong> und <strong>Pfeffer</strong> würzen. In ein Sieb geben, damit die überschüssige Flüssigkeit entweichen kann. Nun werden<strong> 4 - 6 Tortillafladen</strong> mit dem Spinat und <strong>200 g geriebenem Gouda</strong> belegt.<br/>Dazu die Hälfte eines Tortilla-Fladens mit geriebenem Gouda belegen. Dann je 2-3 EL Spinat darauf verteilen und die andere Hälfte des Fladens darüber klappen, fest andrücken. Diese dann nacheinander in einer heißen Pfanne ohne Öl von beiden Seiten schön braun werden lassen, sodass der Käse verläuft.<br/>Die Quesadillas zusammen mit den Maiskolben servieren.',
		recipe_title: 'Quesadillas mit Spinat und Maiskolben',
	},
	{
		id: '3589',
		recipe_content:
			'Für 4.<br/><strong>2 krause Salatköpfe</strong> (hier ein grüner und ein violetter) zupfen, waschen und schleudern. <strong>2 Äpfel</strong> vierteln und in Stücke schneiden. Mit etwas <strong>Zitronensaft</strong> vermischen, damit sie nicht braun werden. <strong>250 g rote Trauben </strong>waschen und vierteln. <strong>3 Stangen Staudensellerie</strong> in feine Scheiben schneiden. <strong>200 g Feta-Käse </strong>zerkrümeln. Für die Soße <strong>4 El Olivenöl</strong> mit<strong> 2 EL Weißweinessig, 2 EL Joghurt, 1 TL süßem Senf, 1/2 TL Honig, Salz</strong> und <strong>Pfeffer</strong> verquirlen.<br/>Die Salatblätter mit den anderen Zutaten und der Soße vermengen. Eine Pfanne heiß werden lassen. <strong>2 Handvoll Walnusskerne</strong> darin rösten. <strong>1 TL Honig </strong>hinzugeben und die Nüsse darin karamellisieren. Die abgekühlten Nüsse auf dem Salat verteilen.',
		recipe_title: 'Waldorf Salat',
	},
	{
		id: '3594',
		recipe_content:
			'für 2 Personen<br/><strong>250 g Farfalle </strong>nach Packungsanleitung kochen. Das Kochwasser abgießen und <strong>1 EL Olivenöl </strong>unter die Nudeln rühren. Auskühlen lassen.<br/>In der Zwischenzeit <strong>500 g Stangenbohnen</strong> in 4 cm breite Stücke schneiden. Wasser zum kochen bringen und die Bohnen darin für 15 Minuten gar kochen. Danach in ein Sieb schütten und abtropfen lassen. <strong>4 Tomaten</strong> waschen und würfeln. Für die Soße <strong>6 EL Olivenöl</strong> mit <strong>3 El Balsamico Essig, Salz, Pfeffer</strong> und <strong>1 TL Honig</strong> verquirlen. <strong>1 Knoblauchzehe</strong> pressen und unterrühren. Tomaten, Bohnen, Pasta und Soße vermengen. <strong>200 g Feta </strong>mit den Händen zerkrümeln und unter den Salat mischen. Im  Kühlschrank mindestens 2 Stunden durchziehen lassen und dann eventuell noch nachwürzen.',
		recipe_title: 'Nudelsalat mit Bohnen und Feta',
	},
	{
		id: '3606',
		recipe_content:
			'Den Backofen auf 175 Grad vorheizen. Die 125 g weiche Butter zusammen mit 100 g weißem und 75 g braunem Zucker aufschlagen. Dann etwas Vanille-Aroma und 1 Ei hinzugeben und alles vermengen. 200 g Mehl und 1 TL Backpulver untermischen. Aus je 1 El Cookie-Teig 10 Teigbällchen auf ein Backblech setzen und je 3 - 4 M&Ms darauf verteilen. Genügend Platz zwischen den Cookies lassen, sie gehen ziemlich auf.<br/>Gebacken werden die Cookies für 10 - 12 Minuten. Auf jeden Fall im Blick behalten und lieber etwas kürzer backen. Die Ränder sollten auf jeden Fall noch nicht braun sein. Direkt nach dem Backen sollten die Cookies noch weich und hell sein sein. Mit einem Pfannenwender auf ein Rost zum vollständigen Auskühlen setzen.',
		recipe_title: 'Cookies',
	},
	{
		id: '3612',
		recipe_content:
			'Den Backofen auf 200 Grad vorheizen. <strong>500 g Möhren </strong>schälen, halbieren und in 4 cm lange Stücke schneiden. <strong>3 rote Spitzpaprika</strong> ebenfalls waschen und in breite Streifen schneiden. In einer Schüssel mit<strong> 6 EL Olivenöl, Salz</strong> und <strong>Pfeffer</strong> vermengen. Das Gemüse auf einem Blech (nebeneinander!) verteilen und im Backofen 40 Minuten garen.<br/>In der Zwischenzeit <strong>1 kleine Dose Kichererbsen</strong> abtropfen lassen und mit <strong>2 EL Tahini-Paste (Sesampaste)</strong> pürieren. <strong>2 EL Olivenöl, ein Spritzer Zitronensaft, Salz</strong> und <strong>Pfeffer</strong> unterheben.<br/>Kurz vor Ende <strong>2 Stücke Halloumi </strong> in etwas <strong>Olivenöl</strong> in der Pfanne von beiden Seiten goldbraun anbraten.<br/>Das Gemüse mit etwas <strong>Brot</strong> und dem Hummus servieren. Dazu passt außerdem noch ein Joghurt-Dip aus <strong>griechischem Joghurt</strong>, abgeschmeckt mit etwas <strong>Salz</strong> und <strong>Zitrone</strong>.',
		recipe_title: 'Röstgemüse mit Halloumi',
	},
	{
		id: '3632',
		recipe_content:
			'Für 4.<br/>Den Backofen auf 200 Grad vorheizen. <strong>500 g Coctailtomaten</strong> waschen und halbieren. In einer Schüssel mit <strong>Olivenöl, Salz, Pfeffer</strong> und <strong>1 EL braunem Zucker</strong> vermsichen. Auf einem Blech verteilen. <strong>250 g Scampis </strong>abbrausen, trocknen und in eine Auflaufform setzten. Mit <strong>Olivenöl</strong> beträufeln. <strong>1 Knoblauchzehe</strong> in Scheiben schneiden und darüber verteilen. Mit <strong>Salz</strong> und <strong>Pfeffer</strong> würzen. Tomaten und Scampis im Ofen 20 Minuten garen. In der Zwischenzeit <strong>500 g Spaghetti </strong>kochen.<br/><strong>4 Stiele Petersilie </strong>abzupfen und grob zerschneiden.<strong> 1 Knoblauchzehe</strong> grob hacken. <strong>2 reife Avocados</strong> aushöhlen und das Fruchtfleisch mit der Petersilie, dem Knoblauch und <strong>2 EL Olivenöl</strong> prürieren.<strong> 1 EL Zitronensaft </strong>und <strong>4 - 5 EL Nudelwasser</strong> unterrühren.<br/>Heiße Pasta unter die Avocado-Soße rühren und sofort mit Scampis, Tomaten und etwas Parmesan servieren!',
		recipe_title: 'Avocado Pasta mit Scampi und gerösteten Tomaten',
	},
	{
		id: '3653',
		recipe_content:
			'<strong>150 g Langkornreis</strong> nach Packungsanleitung kochen.<br/>In einer großen Schüssel den Saft von <strong>3 Limetten, 125 ml Olivenöl, 2 gepresste Knoblauchzehen, je ½ TL Salz und Pfeffer </strong>verrühren.<br/><strong>3 Maiskolben</strong> mit Öl einpinseln. Mit <strong>Paprikapulver, Salz und Pfeffer</strong> würzen. Über direkter mittlerer Hitze bei geschlossenem Deckel 12-15 Min. grillen. Alternativ kann man die Maiskolben auch im Backofengrill zubereiten. In der Zwischenzeit <strong>250 g Kirschtomaten</strong> halbieren. Etwas <strong>Olivenöl</strong> in einer Pfanne heiß werden lassen. Die Tomaten kurz darin anbraten, sodass sie weich werden. Kräftig mit <strong>Salz und Pfeffer</strong> würzen.<br/>Die Maiskörner von den Kolben schneiden und mit den Tomaten zum Dressing geben. geben. <strong>200 g Frühlingszwiebeln</strong> komplett in Ringe schneiden. <strong>1 Avocado</strong> würfeln. <strong>100 g Feta-Käse </strong>zerkrümeln und mit dem gegarten Reis untermischen. <strong>1/2 Bund Petersilie</strong> waschen, fein hacken und unter den Salat rühren.',
		recipe_title: 'Mexikanischer Reissalat',
	},
	{
		id: '3668',
		recipe_content:
			'Für eine kleine Kastenform.<br/>Den Backofen auf 180 Grad vorheizen. <strong>2 Zitronen</strong> auspressen. In einer kleinen Schüssel <strong>3 Eier, Zitronensaft, 100 ml Rapsöl </strong>und <strong>30 g weiche Butter</strong> verquirlen. In einer zweiten Schüssel <strong>180 g Mehl, 1 TL Backpulver, 1 Prise Salz </strong>und <strong>170 g Zucker</strong> verrühren. Die nassen zu den trockenen Zutaten geben und rühren, bis ein flüssiger Teig ohne Klümpchen entstanden ist. Den Teig in eine mit Backpapier ausgelegte Form geben und im heißen Ofen 45 Minuten backen. Für noch mehr amerikanisches Lebensgefühl noch  mit Puderzucker glasieren. Dazu<br/><strong>100 g Puderzucker </strong>und mit 2 TL Milch mit einem Schneebesen glatt rühren und über dem Kuchen verteilen.',
		recipe_title: 'Starbucks-Zitronenkuchen',
	},
	{
		id: '3685',
		recipe_content:
			'für 2.<br/><strong>1/4 Wassermelone </strong>erst in 2 cm dicke Scheiben schneiden und dann gleichmäßig würfeln. <strong>100 g Feta</strong> mit den Händen zerkrümeln. <strong>1 Handvoll Basilikum</strong> in feine Streifen schneiden. Für das Dressing<strong> 2 El Olivenöl</strong> mit dem Saft von 1/2 Zitrone, 1 Schuss Agavendicksaft, Salz und Pfeffer vermengen. Alle Zutaten vermischen und direkt servieren! ',
		recipe_title: 'Wassermelonen-Salat',
	},
	{
		id: '3691',
		recipe_content:
			'Den Backofen auf 180C vorheizen. <strong>140 g weiche Butter </strong>mit <strong>2 Eiern</strong> und <strong>140 g Zucker</strong> schaumig schlagen.<strong> 140 g Mehl, 140 g gemahlene Mandeln </strong>und <strong>1 TL Backpulver </strong>unterrühren. <strong>2 TL Amaretto</strong> und <strong>1 PK Vanillezucker</strong> hinzugeben. Den Teig in einer Springform verstreichen. <strong>250 g Heidelbeeren</strong> waschen und mit Küchenpapier trocken tupfen. Auf dem Teig verstreichen.<strong> 100 g Mandelblättchen</strong> auf den Beeren verteilen. Im Ofen 45 Minuten backen.',
		recipe_title: 'Mandelkuchen mit Blaubeeren',
	},
	{
		id: '3696',
		recipe_content:
			'<strong>King Louie</strong> (Banane-Kakao-Milch)<br/><strong>1 reife Banane</strong> grob in Stücke schneiden. Mit <strong>70 ml Mandelmilch </strong>(oder normaler Milch) und <strong>1 TL rohem Kakaopulver </strong>pürieren. Als Frühstücksersatz kann man auch noch <strong>3 EL Haferflocken</strong> hinzugeben. An besonders heißen Tagen <strong>4 Eiswürfel</strong> mit mixen.<br/><br/><strong>Melonen-Pfirsich-Smoothie </strong><br/><strong>1 Pfirsich</strong> halbieren und den Kern entfernen, grob zerkleinern. Mit <strong>1 Spalte Melone (Cantaloupe)</strong>, dem Saft von <strong>1/2 Orange</strong> und <strong>1/2 Zitrone</strong> pürieren. Je nach Konsistenz etwas Wasser hinzugeben.',
		recipe_title: 'Lieblingssmoothies',
	},
	{
		id: '3726',
		recipe_content:
			'für 1 große Kastenform<br/>Backofen auf 175°C (Ober- und Unterhitze) vorheizen. <strong>150 g Butter, 200 g Zucker, 1 Pck. Vanillezucker</strong> und <strong>1 Prise Salz</strong> schaumig rühren. <strong>3 Eier</strong> unterrühren. <strong>150 g Naturjoghurt</strong> ebenfalls dazugeben. <strong>300 g Mehl</strong> mit <strong>1 Pck. Backpulver</strong> vermischen und auf den Teig sieben. Den Teig in eine mit Backpapier ausgelegte Kastenform füllen. <strong>2 Äpfel </strong>schälen, in Spalten schneiden und in den Teig stecken. Zucker und Zimt vermischen und die Apfelspalten damit bestreuen. 1 Stunde im heißen Ofen backen. Eventuell mit Alufolie abdecken. Den Kuchen ca. 30 Minuten in der Form auskühlen lassen und erst dann herauslösen.<br/><br/>Quelle: <a href="http://experimenteausmeinerkueche.blogspot.de">Experimente aus meiner Küche</a>',
		recipe_title: 'Apfelkuchen II',
	},
	{
		id: '3733',
		recipe_content:
			'für 4.<br/><strong>1 Zwiebel</strong> und <strong>1 Knoblauchzehe</strong> fein hacken. In <strong>Olivenöl</strong> anschwitzen.<strong> 1 Dose stückige Tomaten</strong> angießen und einmal aufkochen lassen. Dann runterschauten und bei niedriger Hitze 20 Minuten köcheln lassen.<br/><strong>500 g Hackfleisch</strong> in einer weiteren Pfanne knusprig anbraten. Mit <strong>Salz, Pfeffer</strong> und etwas <strong>Paprikapulver</strong> abschmecken.<br/>Den Backofen auf 200 Grad vorheizen. <strong>8 libanesische Fladenbrote</strong> (alternativ könnt ihr auch Tortilla-Wraps verwenden) im Backofen kurz aufwärmen.<br/><strong>200 g Feta</strong> mit den Händen zerkrümeln. Die Tomatensoße mit Salz und Pfeffer abschmecken.<br/>Je ein Fladen mit der Tomatensoße bestreichen. 2 EL Hackfleisch und 1 EL Feta darüber verteilen. Mit etwas Petersilie garnieren.',
		recipe_title: 'Schnelle türkische Pizza',
	},
	{
		id: '3738',
		recipe_content:
			'für 2 sehr Hungrige.<br/><strong>250 g Spaghetti</strong> nach Packungsanweisung bissfest kochen, abgiessen und abschrecken.<strong> 2 rote Paprika, 1 rote Zwiebel </strong>und <strong>1 Gurke</strong> in kleine Würfel schneiden. Mit den Spaghetti in einer großen Schüssel mischen.<br/><strong>3 cm frischen Ingwer</strong> und <strong>2 Knoblauchzehen </strong>fein hacken. <strong>1 EL neutrales Öl</strong> in einem kleinen Topf erhizten und Ingwer mit Knoblauch darin anschwitzen. Mit <strong>200 ml Gemüsebrühe</strong> ablöschen und 3 Minuten köcheln lassen. Vom Herd nehmen und mit einem <strong>Schuss Sojasoße, Pfeffer</strong> und dem <strong>Saft von 1 Limette</strong> würzen. <strong>2 EL Erdnussbutter</strong> unterrühren.<br/>Dressing mit den Nudeln vermischen. <strong>2 Frühlingszwiebeln</strong> mit Grün in Ringe schneiden und etwas <strong>glatte Petersilie</strong> hacken. Unter den Salat heben. Den Salat mit <strong>3 EL Erdnüsse</strong> bestreuen.',
		recipe_title: 'Asiatischer Spaghettisalat',
	},
	{
		id: '3746',
		recipe_content:
			'Reissalat<br/><strong>400 g schwarzen Reis</strong> mit der 2,5-fachen Menge Wasser sowie etwas Salz aufkochen. Die Hitze reduzieren und bei geschlossenem Deckel für etwa 40 Minuten garen lassen. Einen weiteren Topf mit gesalzenem Wasser aufsetzen und <strong>100 g rote Linsen</strong> darin für etwa zehn Minuten kochen. Nach der Garzeit mit mit kaltem Wasser abschrecken. Den Backofen auf 180 Grad vorheizen. <strong>1 EL Honig</strong> mit <strong>1 EL Olivenöl</strong> und etwas <strong>Salz</strong> verquirlen. Die Mischung über <strong>150 g Cashewkerne</strong> gießen und gut vermengen. Auf einem mit Backpapier ausgelegten Blech verteilen und für etwa zehn Minuten backen bis sie knusprig sind.<br/>In der Zwischenzeit für das Dressing <strong>3 EL Weißweinessig, 5 - 6 EL Walnussöl</strong> (alternativ schmeckt auch Olivenöl) und <strong>1 EL Honig</strong> mit <strong>Salz</strong> und <strong>Pfeffer</strong> vermischen.<br/><strong>1 Bund Frühlingszwiebeln</strong> in feine Ringe schneiden. Den Reis nach der Garzeit etwa zehn Minuten abkühlen lassen. Dann den Reis mit den Frühlingszwiebeln, den Cashews und dem Dressing vermischen.<br/><br/>Summer-Rolls<br/><strong>1 Gurke</strong> und<strong> 2 Paprika </strong>in feine Streifen schneiden. <strong>3 Frühlingszwiebeln</strong> in Ringe und<strong> 1 Avocado</strong> in dünne Spalten scheiden. Die Blätter von <strong>1/2 Kopfsalat </strong>waschen und trocken tupfen. <strong>Reispapierblätter</strong> unter warmen Wasser abbrausen und auf einem feuchten Küchenhandtuch auslegen. 1 Minute ruhen lassen, damit sie weich werden. Dann jedes Reispapier mittig mit 1 Salatblatt, je einem Streifen Gurke, Paprika und Avocado belegen. Ein paar Ringe der Frühlingszwiebeln darüber streuen. Dann das Reispapier links und rechts an den Rändern überklappen und von unten aufrollen. Zu den Reispapier Rollen haben wir eine <strong>Erdnuss-Soße</strong> serviert. Dazu<strong> 4 EL feine Erdnussbutter</strong> mit <strong>1 EL Sojasoße, 1/2 TL Honig </strong>und<strong> 2 EL Wasser</strong> verquirlen.<br/><br/>Den Lachs zum Schluss zubereiten. Dazu den Backofen auf 180 Grad vorheizen.<strong> 4 Stücke Lachs </strong>abbrausen und trocken tupfen. Nebeneinander in eine Auflaufform setzen und mit Salz und Pfeffer würzen. Im Backofen ca 15 Minuten garen (abhängig von der Dicke der Stücke)',
		recipe_title: 'Lachs mit schwarzem Reissalat und Summer Rolls',
	},
	{
		id: '3752',
		recipe_content:
			'Simit<br/><strong>1 kg Mehl</strong> in eine große Schüssel geben. <strong>10 g frische Hefe, 1 TL Salz, 1 EL Zucker</strong> und <strong>750 ml lauwarmes Wasser</strong> dazugeben und gut verkneten. Den Teig mit einem Tuch bedecken und gehen lassen, bis der Teig sichtbar vergrößert.<br/><strong>200 g Goldsaft Sirup</strong> und <strong>200 ml Wasser</strong> gut verrühren.<br/>Den Teig noch einmal kneten. Aus dem Teig Handballen-große Kugeln formen und 10 Minuten ruhen lassen. Die Kugeln auf die Arbeitsplatte wie eine Stange lang und dünn formen, leicht um sich drehen, die Spitzen zusammen binden, die Ringe auf dem Arbeitsplatte noch einmal ca. 30 Minuten ruhen lassen. Den Backofen auf 200 Grad vorheizen.<br/>Die Ringe zuerst in die Sirup-Wassermischung tunken, dann in 400 g Sesam wälzen und auf Backbleche legen. 15 Minuten goldgelb backen.<br/><br/>Salat<br/><strong>1/2 Kopfsalat</strong> waschen und zupfen. <strong>2 Tomaten, 1/2 Avocado</strong> und <strong>1/2 Gurke</strong> würfeln. Für das Dressing<strong> 2 EL Naturjoghurt</strong> mit <strong>2 EL Olivenöl</strong>, Saft von <strong>1/2 Zitrone, Salz</strong> und <strong>Pfeffer</strong> verquirlen. Auf einer Platte anrichten.<br/><br/>gebackener Feta<br/><strong>1 großes Stück Feta</strong> in eine kleine Auflaufform legen.<strong> 2 Zwiebeln </strong>halbieren und in Ringe schneiden.<strong> 2 Knoblauchzehen </strong>in feine Scheiben schneiden. Zwiebeln und Knoblauch auf und um den Feta herum verteilen. Mit etwas <strong>Olivenöl</strong> beträufeln und bei 200 Grad für 25 - 30 Minuten backen. ',
		recipe_title: 'Gebackener Feta mit Simit und Salat',
	},
	{
		id: '3759',
		recipe_content:
			'Den Backofen auf 200 Grad vorheizen. <strong>500 g Nudeln</strong> bissfest kochen. <strong>200 g gekochten Schinken </strong>in Würfel schneiden. Fur die Béchamel Soße <strong>60 g Butter</strong> in einem Topf schmelzen. <strong>60 g Mehl</strong> darin anschwitzen. Dann mit <strong>500 ml Milch</strong> unter ständigem Rühren ablöschen. Mit Salz, Pfeffer und Muskatnuss abschmecken und unter Rühren kurz köcheln und eindicken lassen. Nudel mit Schinken und der Soße vermengen. Mit<strong> 100 g geriebenem Mozzarella</strong> bestreuen. Im heißen Ofen 20 - 30 Minuten backen.',
		recipe_title: 'Klassischer Nudelauflauf',
	},
	{
		id: '3762',
		recipe_content:
			'Ein einfacherer Gugelhupf, der wunderbar samtig weich ist, da sich im Teig Apfelmus und Vanillejoghurt versteckt!<br/><br/><strong>180 g weiche Butter</strong> mit <strong>160 g braunem</strong> und <strong>160 g weißem Zucker</strong> cremig rühren.<strong> 3 Eier </strong>nacheinander einzeln hinzufügen und jeweils gut verschlagen. <strong>340 g Apfelmus</strong> und <strong>185 g Vanillejoghurt </strong>hinzufügen. Den Ofen auf 180° Ober-/Unterhitze vorheizen und eine Gugelform fetten und mehlen. In einer weiteren Schüssel <strong>340 g Mehl, 50 g gemahlene Mandeln, 3 TL Backpulver, 1 Prise Salz</strong> und <strong>1/2 TL Zimt</strong> mischen.<br/>Die Mehlmischung zum Teig geben und zu einem glatten Teig verrühren. Diesen dann in die Form füllen und 50 - 60 Minuten backen (Stäbchenprobe). Den Kuchen erst in der Form komplett abkühlen lassen und anschließend stürzen.<br/><br/>Quelle: <a href="http://schokohimmel.com">Schokohimmel</a>',
		recipe_title: 'Apfelmus Vanillejoghurt Gugelhupf',
	},
];

export default RECIPES;
