	var link = document.querySelector(".search-hotel");
	var popup = document.querySelector(".search-container");
	
	var form = popup.querySelector("form");
	var date_arrival = popup.querySelector("[name=date-arrival]");
	var date_departure = popup.querySelector("[name=date-departure]");
	var number_adults = popup.querySelector("[name=number-adults]");
	var number_kids = popup.querySelector("[name=number-kids]");
	var storage_adults = "";
	var storage_kids = "";
	
	var isStorageSupport = true;

	link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("search-container_show");
	popup.classList.remove("search-container_error");
	date_arrival.focus();
	try {
		storage_adults = localStorage.getItem("number-adults");
		storage_kids = localStorage.getItem("number-kids");
	} catch (err) {
		isStorageSupport = false;
	}
	
	
	if (storage_adults) {
		numbe_adults.value = storage_adults;
	}
	if (storage_kids) {
		number_kids.value = storage_kids;
	}
	});
	
	form.addEventListener("submit", function (evt) {
		if (!date_arrival.value || !date_departure.value || !number_adults.value || !number_kids.value) {
			evt.preventDefault();
			popup.classList.add("search-container_error");
		} else {
			if (isStorageSupport) {
			localStorage.setItem("number_adults", number_adults.value);
			localStorage.setItem("number_kids", number_kids.value);
			}
		}
	});

