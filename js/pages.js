const paginationel = document.getElementById("pagination");
const pgPage = document.getElementById("pagination-page");
const FIRST_PAGE = 1;
const LAST_PAGE = 10;
const pages = [
    `<center><h1>Learn HTML</h1>
    <p>Beginner's Tutorial to the markup language, HTML!</p>
    </center>
    <div class="codebox">
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Hello World!&lt;/h1&gt;  
&lt;/body&gt;
&lt;/html&gt;
    </pre>
    </div>
    `,
    `<center><h1>Page 2</h1>
    <p>To be made soon!</p>
    </center>`,
    `<center><h1>Page 3</h1>
    <p>To be made soon!</p>
    </center>`,
    `<center><h1>Page 4</h1>
    <div>
			<p id="counter">0</p>
			<button class="round btn" onclick="incrementCounter();">Increment</button>
			<button class="round btn" onclick="resetCounter();">Reset</button>
		</div>
    </center>`,
    `<center><h1>Page 5</h1>
    <img src="media/img.jpg" width="500" >
    </center>`,
    `<center><h1>Page 6</h1>
    <p>To be made soon!</p>
    </center>`,
    `<center><h1>Page 7</h1>
    <p>To be made soon!</p>
    </center>`,
    `<center><h1>Page 8</h1>
    <p>To be made soon!</p>
    </center>`,
    `<center><h1>Page 9</h1>
    <p>To be made soon!</p>
    </center>`,
    `<center><h1>Page 10</h1>
    <p>To be made soon!</p>
    </center>`
]
pagination(1);
function updateActivePage(){
    var els = document.querySelectorAll("#pagination a");
    var i = 0;    
    els.forEach(element => {
        if (i == currentpage){
            element.classList.add("active-page");
        }
        else{
            element.classList.remove("active-page");
        }    
        i++;
    });
}
function pagination(page){
    currentpage = page;
    pgPage.innerHTML = pages[page-1];
    updateActivePage();
}
function prevPage(){
    if (currentpage > FIRST_PAGE){
        currentpage -= 1;
        pgPage.innerHTML = pages[currentpage-1];
        updateActivePage();
    }
}
function nextPage(){
    if (currentpage < LAST_PAGE){
        currentpage += 1;
        pgPage.innerHTML = pages[currentpage-1];
        updateActivePage();
    }
}