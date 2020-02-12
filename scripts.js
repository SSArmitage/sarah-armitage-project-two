
const nameSpace = {};

nameSpace.hamburgerIcon = document.getElementById('hamburgerIcon');

// function that contains all the events to listen for
nameSpace.events = function() {
    
    // pressing ENTER on the hamburger menu icon
    nameSpace.hamburgerIcon.addEventListener('keypress', function(event) {
        console.log(`I focused on the hamburger icon`);
        console.log(event);

        // input[type = "checkbox"]: checked
        
        // while on the icon, if you press enter, the hamburger manu will open and the first menu item will be focused
        if (event.keyCode === 13) {
            console.log("I pressed enter");
            const checkboxInput = document.getElementById('toggle');
            let att = checkboxInput.getAttribute('checked');
            // console.log(att);
            console.log(checkboxInput);

            if (att === null) {
                console.log("I was not checked");
                checkboxInput.checked = true;
            } else if (checkboxInput.checked === true){
                console.log(`I was checked`);
                checkboxInput.checked = false;
            }

            // checkboxInput.toggleAttribute('checked')
            // console.log(checkboxInput.checked === true);
            
            // console.log(checkboxInput);

            // document.getElementById('homeItem').focus();
            
            
        }
    })

    
}

// INIT FXN
// contains fxns ready to be initialized at runtime
nameSpace.init = function () {
    nameSpace.events();
}

// ON PAGE LOAD
window.addEventListener('load', (event) => {
    console.log('Page loaded');
    nameSpace.init();
})