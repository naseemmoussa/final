
function ready () {
    everytingdisplay('none');
    makeonclicks();
    all.onclick = function(){
        everytingdisplay('inline-table'); // I learned that 'inline-table' allows a display to be in a grid rather than a ugly style. 
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
    nun.onclick = function() {
        everytingdisplay('none');
    }
    let totalcalories = 0;


    function makeonclicks () {
        let foods = document.getElementsByClassName('foodbutton'); // allowed me to pull a list of only the food buttons, and then sort through it after
        console.log(foods)
        for (let food of foods) {  // separates the list of foods into individual foods
            food.onclick = function() {
                console.log(this.value)
                totalcalories += parseInt(this.value); //
                console.log(totalcalories)
                calorie.innerHTML = `Total Calories: ${totalcalories}` // used the backticks to use javascript string format, lets me display the calories with ease and with any changes
              if (totalcalories >= 2700) {
                    checker.innerHTML = 'Over Normal Calorie average';
                    document.body.style.backgroundColor = 'crimson';
                }else if (totalcalories <= 2700 && totalcalories >= 1800) {
                    checker.innerHTML = 'Normal Calorie Intake Reached';
                    document.body.style.backgroundColor = 'darkviolet';
                }
}
            }

            }
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
function totalcalories() {
    
}
function dailycaloriechecker() {
     if (totalcalories >= 2700) {
                    checker.innerHTML = 'Over Normal Calorie average';
                    document.body.style.backgroundColor = 'crimson';
                }else if (totalcalories <= 2700 && totalcalories >= 1800) {
                    checker.innerHTML = 'Normal Calorie Intake Reached';
                    document.body.style.backgroundColor = 'darkviolet';
                }
}
                                      
document.addEventListener('DOMContentLoaded', ready); //I did not come up with this on my own, it was recommended by my teacher
