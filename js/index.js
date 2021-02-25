let counter = null;
document.body.classList.remove("light")
if(localStorage.getItem("theme")){
    if(localStorage.getItem("theme") == "light"){
        document.body.classList.add("light");
    }
}
function getCounter(){
    return document.getElementById("counter");
}
if (localStorage.getItem("counter") && getCounter()){
    counter = getCounter();
    counter.innerHTML = localStorage.getItem("counter");
}
function incrementCounter(){
    counter = getCounter();
    if(counter){
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
        localStorage.setItem("counter",parseInt(counter.innerHTML));
    }
}
function resetCounter(){
    
    counter = getCounter();
    if(counter){
        counter.innerHTML = 0;
        localStorage.setItem("counter",parseInt(counter.innerHTML));
    }
}
function toggleTheme(){
    document.body.classList.toggle("light");
    if (document.body.classList == "light"){
        localStorage.setItem("theme","light");
    }
    else{
        localStorage.setItem("theme","dark");
    }
}

