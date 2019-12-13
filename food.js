function ready () {
everytingdisplay('none');
    all.onclick = function(){
        everytingdisplay('inline-table');
    }
    brfast.onclick = function() {
        breakfastdisplay('inline-table');
    }
    entrees.onclick = function() {
        entreesdisplay('inline-table');
    }
    other.onclick = function() {
        otherdisplay('inline-table');
    }
    fruits.onclick = function() {
        fruitsdisplay('inline-table');
    }
    drinks.onclick = function() {
        drinksdisplay('inline-table');
    }
    sidesed.onclick = function() {
        sidesdisplay('inline-table');
    }
}
function everytingdisplay(n) {
    breakfastdisplay(n) ;
    sidesdisplay(n);
    entreesdisplay(n);
    fruitsdisplay(n);
    drinksdisplay(n);
    otherdisplay(n);
}

function breakfastdisplay(n) {
    let bekfasts = document.getElementsByClassName('breakfast')
    for (let bek of bekfasts) {
        bek.style.display = n;
    }
    console.log("bf");

}
function sidesdisplay(n) {
    let sides = document.getElementsByClassName('side')
    for (let sid of sides){
        sid.style.display = n;
    }

    console.log("s");
}
function entreesdisplay(n) {
    let entree = document.getElementsByClassName('Entree')
    for (let ent of entree){
        ent.style.display = n;
    }


}
function fruitsdisplay(n) {
    let fruity = document.getElementsByClassName('fruits')
    for (let fut of fruity){
        fut.style.display = n;
    }
}
function drinksdisplay(n) {
    let drinks = document.getElementsByClassName('drinks')
    for (let dink of drinks){
        dink.style.display = n;
    }
}
function otherdisplay(n) {
    let others = document.getElementsByClassName('other')
    for (let oth of others) {
        oth.style.display = n
    }
}
                                      
document.addEventListener('DOMContentLoaded', ready);