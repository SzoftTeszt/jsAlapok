// alert("hello!")
const filmek =[
    {cim:"Trópusi vihar", leiras:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", kep:"1.jpg"},
    {cim:"Borat", leiras:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", kep:"2.jpg"},
    {cim:"Avatar", leiras:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", kep:"1.jpg"},
    {cim:"Alien", leiras:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", kep:"2.jpg"},
    {cim:"Terminator", leiras:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", kep:"1.jpg"},
]
szamlalo=0


function init(){
    const filmekDiv = document.getElementById("filmek")

    filmek.forEach(element => {
                // console.log("ciklus")
             filmekDiv.innerHTML+=`    
                <div class="col">
                        <div class="card h-100">
                            <img src="./${element.kep}" class="card-img-top" alt="kep">
                            <div class="card-body">
                                <h5 class="card-title">${element.cim}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <button onclick="filmetValaszt('${element.cim}')" class="btn btn-secondary" >Kiválaszt</button>
                            </div>
                        </div>
                    </div>
                    `
    });

    const modernFilmek= document.getElementById("modernFilmek")
    modernFilmek.className="row"

    for(const e of filmek){
         const film = document.createElement("div")
        film.className="col"
        film.innerHTML=e.cim
        modernFilmek.appendChild(film)
    }


    const torol = document.getElementsByClassName("btn-danger")[0]
    console.log(torol)
    torol.onclick=torles

   
}

function torles(){
        document.getElementById("kivalasztott").innerHTML="Még nem választottál filmet!"
        document.getElementById("szamlalo").innerHTML="0"
        szamlalo=0
    }

function filmetValaszt(filmNev){
    console.log("Választás: "+filmNev)

    const elem = document.getElementById("kivalasztott")
    console.log(elem)
    elem.innerHTML="Választás: "+filmNev

    document.getElementById("szamlalo").innerHTML=++szamlalo

}

init()