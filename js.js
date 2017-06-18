		(function () {
			var educ = document.getElementById("educ");
			educ.addEventListener("click", function () {
				document.getElementById("weather").style.display = "block";
				document.getElementById("news").style.display = "none";
				document.getElementById("main").style.display = "none";
				document.getElementById("horoscope").style.display = "none";
				document.getElementById("portr").style.display = "none";
				document.getElementById("experience").style.display = "none";
				document.getElementById("skillslang").style.display = "none";
				document.getElementById("education").style.display = "inline-block";
				document.getElementById("quote").style.display = "none";
				document.getElementById("exp").style.border = "deeppink solid 3px";
				document.getElementById("educ").style.border = "none";
				document.getElementById("personal").style.border = "deeppink solid 3px";
				document.getElementById("skills").style.border = "deeppink solid 3px";
				document.getElementById("personal").style.border = "deeppink solid 3px";
			});

			var exp = document.getElementById("exp");
			exp.addEventListener("click", function () {
				document.getElementById("news").style.display = "block";
				document.getElementById("quote").style.display = "none";
				document.getElementById("weather").style.display = "none";
				document.getElementById("main").style.display = "none";
				document.getElementById("portr").style.display = "none";
				document.getElementById("skillslang").style.display = "none";
				document.getElementById("education").style.display = "none";
				document.getElementById("experience").style.display = "inline-block";
				document.getElementById("exp").style.border = "none";
				document.getElementById("educ").style.border = "deeppink solid 3px";
				document.getElementById("horoscope").style.display = "none";
				document.getElementById("skills").style.border = "deeppink solid 3px";
				document.getElementById("personal").style.border = "deeppink solid 3px";

			});
			var skills = document.getElementById("skills");
			skills.addEventListener("click", function () {
				document.getElementById("news").style.display = "none";
				document.getElementById("quote").style.display = "block";
				document.getElementById("weather").style.display = "none";
				document.getElementById("main").style.display = "none";
				document.getElementById("portr").style.display = "none";
				document.getElementById("skillslang").style.display = "inline-block";
				document.getElementById("education").style.display = "none";
				document.getElementById("experience").style.display = "none";
				document.getElementById("skills").style.border = "none";
				document.getElementById("exp").style.border = "deeppink solid 3px";
				document.getElementById("educ").style.border = "deeppink solid 3px";
				document.getElementById("personal").style.border = "deeppink solid 3px";
				document.getElementById("horoscope").style.display = "none";

			});
			var personal = document.getElementById("personal");
			personal.addEventListener("click", function () {
				document.getElementById("main").style.display = "inline-block";
				document.getElementById("portr").style.display = "inline-block";
				document.getElementById("news").style.display = "none";
				document.getElementById("skillslang").style.display = "none";
				document.getElementById("education").style.display = "none";
				document.getElementById("experience").style.display = "none";
				document.getElementById("personal").style.border = "none";
				document.getElementById("skills").style.border = "deeppink solid 3px";
				document.getElementById("horoscope").style.display = "inline-block";
				document.getElementById("exp").style.border = "deeppink solid 3px";
				document.getElementById("weather").style.display = "none";
				document.getElementById("educ").style.border = "deeppink solid 3px";
				document.getElementById("quote").style.display = "none";

			});


			//		function getQuote() {
			//			$('#qbutton').on('click', function (e) {
			//				e.preventDefault();
			//				$.ajax({
			//					url: "http://quotes.rest/qod",
			//					success: function (data) {
			//						var post = data.contents.quotes[0].quote;
			//						$('#qtxt').text(post);
			//						$("#author").text(data.contents.quotes[0].author);
			//						document.getElementById("qtxt").style.border = "deeppink solid 3px";
			//						document.getElementById("author").style.border = "deeppink solid 3px";
			//						document.getElementById("qtxt").style.borderBottom = "none";
			//						document.getElementById("author").style.borderTop = "none";
			//
			//					}
			//				});
			//			});
			//		}
			//		getQuote();

			function getHorText(option, callback) {
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function () {
					if (this.status === 200 && this.statusText === "OK" && this.readyState === 4)
						callback(xhr.response);
				}
				xhr.open(option.method, option.url, true);
				xhr.send(option.data || null);
			};
			var icons = document.getElementsByClassName("hor_icon");
			for (var i = 0; i < icons.length; i++) {
				icons[i].addEventListener("click", function (e) {
					e.preventDefault();
					var sign = this.alt;

					var adress = {
						method: "GET",
						url: "http://sandipbgt.com/theastrologer/api/horoscope/" + sign + "/today/"
					};
					getHorText(adress, getHorosc);

				});
			};

			function getHorosc(data) {
				data = JSON.parse(data);
				document.getElementById("hor_name").textContent = data.sunsign.toUpperCase();
				txt = document.getElementById("hor_txt");
				txt.textContent = data.horoscope.replace("(c) Kelli Fox, The Astrologer, http://new.theastrologer.com", "");

			};
			window.onload = function () {
				var adress = {
					method: "GET",
					url: "http://sandipbgt.com/theastrologer/api/horoscope/aries/today/"
				};
				getHorText(adress, getHorosc);
			};

			var adressWeather = {
				method: "GET",
				url: "http://api.openweathermap.org/data/2.5/forecast?q=odessa&units=metric&APPID=720b7bdfee9a784266ec02a661c23954"
			};

			function getWeather(data) {
				data = JSON.parse(data);
				var temp = document.getElementById("temp");
				var hum = document.getElementById("humidity");
				var wind = document.getElementById("wind");
				temp.textContent = "Temperature - " + data.list[0].main.temp_max + "°;";
				hum.textContent = "Clouds - " + data.list[0].clouds.all + "%;";
				wind.textContent = "Wind speed - " + data.list[0].wind.speed + "m/s;";

			};
			educ.addEventListener("click", getHorText(adressWeather, getWeather));




			var adressNews = {
				method: "GET",
				url: "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=7743197eb9114e3fa20d6b9dddd41eff"
			};

			function getNews(data) {
				data = JSON.parse(data);
				console.log(data);
				var news = document.getElementById("news");
				var arr = data.articles;
				var title = "";
				var description = "";
				var url="";
				for (var i = 0; i < 4; i++) {
					title = arr[i].title + "<br>";
					image = arr[i].urlToImage;
					description = arr[i].description;
					url=arr[i].url;
					news.innerHTML += ("<img src='" + image + "' width='90' height='90' align='left' vspace='5' hspace='10'>" + "<br>");
					news.innerHTML += ("<a href='"+url+"' <b>" + title + "</b></a>");
					news.innerHTML += (description);
					news.innerHTML += ("<br>");
					news.innerHTML += ("<br>");


				};
				
				




			};
exp.addEventListener("click", getHorText(adressNews, getNews));
		})();



		var i = 0;

		function getPics() {

			var arrPics = ["https://zabytki.in.ua/images/374.jpg", "http://ivan-da-maria.org/wp-content/uploads/2012/09/anons_odessa_13.jpg", "https://media.pogliad.ua/news/article/2014/04/14/170952/88ce09231d10e422-large.g.jpg","http://www.odessastag.com/sites/default/files/imagecache/Image-prev/photo-galleries-images/odessa-sightseeing.jpg","http://go2odessa.net/images/pics-2.jpg","https://nettoplast.ru/upload/iblock/52d/52dc6bd28108e017af8a0098aa0cff11.jpg","http://www.odessa-guide.com/i/monuments/05.jpg"];
			if (i < arrPics.length) {
				var pic=document.getElementById("weather_pic");
				pic.setAttribute("src", arrPics[i]);
			} else {
				i = 0;
			}
			return i++;
		}
		setInterval(getPics, 5000);
