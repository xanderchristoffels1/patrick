// Use Enter button
document.getElementById('input').addEventListener("keypress", function(event){
	if(event.key === 'Enter'){
		ask();
	}
});

// Chatfunction
function ask(){
	x = document.getElementById("input");
	var txt = x.value;
	document.getElementById("ques").innerHTML = x.value;
	document.getElementById("ques").style.animation = 'asks 0.6s linear forwards';
	// Animation & pause after question
	setTimeout(function() {document.getElementById("ques").style.animation = 'none';}, 2000);

	// Make inputfield empty
	document.getElementById("input").value = "";
	
	setTimeout(function() {
		// To lowercase
		txt = txt.toLowerCase();
		
		if(txt.includes("mijn naam is") || txt.includes("ik ben") || txt.includes("aangenaam")){
			if(txt.includes("mijn naam")){
				var name = txt.substring(txt.indexOf("is") + 3);
				name = name.toUpperCase();
				document.getElementById("ans").innerHTML = `Dag ${name}, mijn naam is Patrick &#128522;`;
			}
			else if(txt.includes("ik") && txt.includes("ben")){
				var name1 = txt.substring(txt.indexOf("ben") + 4);
				name1 = name1.toUpperCase();
				document.getElementById("ans").innerHTML = `Hello ${name}, mijn naam is Patrick &#128522;`;
			}
			else if(txt.includes("aangenaam")){
				document.getElementById("ans").innerHTML = 'Aangenaam kennismaking, mijn naam is Patrick';;
			}
		}
	
		else if(txt.includes("zeilen") || txt.includes("surfen") || txt.includes("zeil")){
			document.getElementById("ans").innerHTML = 'Lijkt mij heel nattig &#127754;';
		}
	
		else if(txt.includes("hallo")){
			document.getElementById("ans").innerHTML = 'Hallo daar &#128075;';
		}
	
		else if(txt.includes("hoe gaat het") || txt.includes("alles ok?")){
			document.getElementById("ans").innerHTML = "Alles prima &#128077";
		}
		else if(txt.includes("ook") && txt.includes("goed")){
			document.getElementById("ans").innerHTML = "Fijn om te horen &#128077";
		}
 
		else if((txt.includes("wat") && txt.includes("ben")) && (txt.includes("je") || txt.includes("aan")) && txt.includes("doen") || txt.includes("wat") && txt.includes("doe") && txt.includes("je")){
			document.getElementById("ans").innerHTML = "Niets speciaals, gewoon wat aan het chillen &#128541;";
		}
		else if((txt.includes("wat") && txt.includes("kun")) && (txt.includes("je")) || txt.includes("wat") && txt.includes("kan") && txt.includes("je")){
			document.getElementById("ans").innerHTML = "Ik kan met jou chatten &#128536";
		}

		else if(txt.includes("goede morgen")){
			document.getElementById("ans").innerHTML = "Goede morgen &#128513;";
		}
		else if(txt.includes("goede avond")){
			document.getElementById("ans").innerHTML = "Goede avond &#128537;";
		}
		else if(txt.includes("goede middag")){
			document.getElementById("ans").innerHTML = "Goede middag &#128537;";
		}
		else if(txt.includes("goedemorgen")){
			document.getElementById("ans").innerHTML = "Goedemorgen &#128513;";
		}
		else if(txt.includes("goedeavond")){
			document.getElementById("ans").innerHTML = "Goedeavond &#128537;";
		}
		else if(txt.includes("goedemiddag")){
			document.getElementById("ans").innerHTML = "Goedemiddag &#128537;";
		}
		else if(txt.includes("slaapwel")){
			document.getElementById("ans").innerHTML = "Slaapwel! &#128564;";
		}
		else if(txt.includes("wc") || txt.includes("toilet")){
			document.getElementById("ans").innerHTML = "&#128701";
		}
		else if(txt.includes("geit")){
			document.getElementById("ans").innerHTML = "Ik hou van geiten! &#128016	";
		}
		else if(txt.includes("geiten")){
			document.getElementById("ans").innerHTML = "Ik hou van geiten! &#128016	";
		}
		else if(txt.includes("jij") && txt.includes("cool")){
			document.getElementById("ans").innerHTML = "thx &#128522";
		}
		else if(txt.includes("wie") && txt.includes("ben") && txt.includes("jij") || txt.includes("wie") && txt.includes("ben") && txt.includes("je")){
			document.getElementById("ans").innerHTML = "Ik ben Patrick de chatbot";
		}
		else if(txt.includes("mijn") && txt.includes("naam")){
			document.getElementById("ans").innerHTML = "Ik weet niet hoe jij heet... &#128557";
		}
		else if(txt.includes("jouw") && txt.includes("naam")){
			document.getElementById("ans").innerHTML = "Mijn naam is Patrick";
		}
		else if(txt.includes("heet") && txt.includes("jij")){
			document.getElementById("ans").innerHTML = "Mijn naam is Patrick";
		}
		else if(txt.includes("ok")){
			document.getElementById("ans").innerHTML = "ok...";
		}
		else if(txt.includes("lol")){
			document.getElementById("ans").innerHTML = "hahaha &#129315";
		}
		else if(txt.includes("haha")){
			document.getElementById("ans").innerHTML = "&#129315&#129315&#129315";
		}
		else if(txt.includes("grappig")){
			document.getElementById("ans").innerHTML = "Hilarisch &#129315&#129315&#129315";
		}
		else if(txt.includes("hilarisch")){
			document.getElementById("ans").innerHTML = "&#129315&#129315&#129315";
		}
		else if(txt.includes("-_-")){
			document.getElementById("ans").innerHTML = "ok";
		}
		else if(txt.includes("wuk") || txt.includes("stuutje") || txt.includes("stuutn") || txt.includes("keun")){
			document.getElementById("ans").innerHTML = "Wuk?";
		}
		else if(txt.includes("maar allé") || txt.includes("ma allé") || txt.includes("ma alleu") || txt.includes("maar alleu") || txt.includes("moa allé") || txt.includes("moa allé")){
			document.getElementById("ans").innerHTML = "Hoe kan da nu?";
		}
		else if(txt.includes("hoe kan da nu?") || txt.includes("hoe kan dat nu")){
			document.getElementById("ans").innerHTML = "Ma allé";
		}
		else if(txt.includes("mo how zeh") || txt.includes("ma how zeh") || txt.includes("maar how zeh") || txt.includes("mo how zeg") || txt.includes("ma how zeg") || txt.includes("maar how zeg")){
			document.getElementById("ans").innerHTML = "Wuk?";
		}
		else if(txt.includes("ma stobuh") || txt.includes("ma stobeh") || txt.includes("ma stobeeh") || txt.includes("ma stobuuh") || txt.includes("ma stobuuuh") || txt.includes("ma stobeeeh") || txt.includes("ma stobuuuuh") || txt.includes("ma stobeeeeh") || txt.includes("ma stobuuuuuh") || txt.includes("ma stobeeeeeh")){
			document.getElementById("ans").innerHTML = "Astenblievuuuh";
		}
        else if(txt.includes("nieuwjaar")){
			window.open("https://nieuwjaarcountdown.vercel.app/", target="_blank");
		}
        else if(txt.includes("yo")){
			document.getElementById("ans").innerHTML = "Yo!";
		}
        else if(txt.includes("verveel")){
			document.getElementById("ans").innerHTML = "Zing een liedje...";
		}

		// Date
		else if(txt.includes("datum") || txt.includes("vandaag")){
			var bla = new Date();
			var d = bla.getDate();
			var m = bla.getMonth();
			var y = bla.getFullYear();
			document.getElementById("ans").innerHTML = `Het is 0${d}/0${m+1}/${y}`;
		}

		// Time
		else if(txt.includes("tijd") || txt.includes("laat")  || txt.includes("hoelaat") || txt.includes("uur")){
			var today = new Date();
			var hours = today.getHours()
			var minutes = today.getMinutes()
			var seconds = today.getSeconds

			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

			document.getElementById("ans").innerHTML = `Het is ${time}`;
		}

		// Bad words ;-)
		else if(txt.includes("kak") || txt.includes("fack") || txt.includes("fuck") || txt.includes("kut") || txt.includes("verdomme") || txt.includes("shit") || txt.includes("verrekt") || txt.includes("stom") || txt.includes("dom")){
			document.getElementById("ans").innerHTML = "Excuseer??&#129320;&#128544;";
		}

		// namen
		else if(txt.includes("xander")){
			document.getElementById("ans").innerHTML = "Xander is cool! &#128526";
		}
		else if(txt.includes("laurens")){
			document.getElementById("ans").innerHTML = 'Hij moet nog wat groeien...';
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
				document.getElementById("ans").innerHTML = 'en hij is verslaafd aan zijn telefoon...';
				document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
			}, 2000);
			}


		// Rickroll
		else if(txt.includes("rick") && txt.includes("astley") || txt.includes("gerickrolled") || txt.includes("rickroll") || txt.includes("never") && txt.includes("gonna") && txt.includes("gonna") && txt.includes("give") && txt.includes("gonna") && txt.includes("you") && txt.includes("up")){
			document.getElementById("ans").innerHTML = "Sound On! &#128266"
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
			document.getElementById("ans").innerHTML = window.open('https://www.youtube.com/watch?v=a3Z7zEc7AXQ','_blank');
			document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
			document.getElementById("ans").innerHTML = "Je bent gerickrolled" }, 1500);
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
				document.getElementById("ans").innerHTML = "Je bent gerickrolled";
				document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
				document.getElementById("ans").innerHTML = "Je bent gerickrolled!!! Bahahahaha &#128514&#128514&#128514"
			}, 1500);
	}
		else if(txt.includes("youtube.com/watch?v=dqw4w9wgxcq") || txt.includes("https://www.youtube.com/watch?v=dqw4w9wgxcq") || txt.includes("www.youtube.com/watch?v=dqw4w9wgxcq") || txt.includes("youtu.be/dqw4w9wgxcq") || txt.includes("https://www.youtube.com/watch?v=a3z7zec7axq")){
			document.getElementById("ans").innerHTML = "Sound On! &#128266"
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
			document.getElementById("ans").innerHTML = window.open('https://www.youtube.com/watch?v=a3Z7zEc7AXQ','_blank');
			document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
			document.getElementById("ans").innerHTML = "Je bent gerickrolled" }, 1500);
			setTimeout(function() {document.getElementById("ans").style.animation = 'none';}, 1000);
			setTimeout(function() {
				document.getElementById("ans").innerHTML = "Je bent gerickrolled";
				document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
				document.getElementById("ans").innerHTML = "Je bent gerickrolled!!! Bahahahaha &#128514&#128514&#128514"
			}, 1500);
	}


		// Don't understeand
		else{
				document.getElementById("ans").innerHTML = 'lol';
			};
		
		document.getElementById("ans").style.animation = 'reply 0.6s linear forwards';
	}, 2000);
	document.getElementById("ans").style.animation = 'none';
}