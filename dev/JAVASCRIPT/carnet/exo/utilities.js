function saveDataToDomStorage(key, value)
{
    var jsonData = JSON.stringify(value);
    
    window.localStorage.setItem(key, jsonData);
}


function loadDataFromDomStorage(key)
{
	var jsonData = window.localStorage.getItem(key);
    
    return JSON.parse(jsonData);

}