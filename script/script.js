function changeCSS() {

    var oldlink = document.getElementsByTagName("link").item(0);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    if (oldlink.getAttribute("href") == "css/style.css"){
        newlink.setAttribute("href", "css/style2.css");
        document.getElementById("stylesheet-button").textContent="Standard font mode";
    } else {
        newlink.setAttribute("href", "css/style.css");
        document.getElementById("stylesheet-button").textContent="Larger font mode";
    }
    

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}