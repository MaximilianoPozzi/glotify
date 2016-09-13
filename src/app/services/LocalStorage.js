export function LocalStorageService(){

	function setItem(key, value){
		window.localStorage.setItem(key, value);
	}

	function getItem(key){
		return window.localStorage.getItem(key);
	}

	function removeItem(key){
		window.localStorage.removeItem(key);
	}

	this.setItem = setItem;
	this.getItem = getItem;
	this.removeItem = removeItem;
};