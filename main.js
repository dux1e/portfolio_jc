const nav = document.getElementById('slidenav')
const main = document.getElementById('main')



// function openNav() {
//     nav.style.width = "250px";
//     main.style.marginLeft = "250px";
// }

function closeNav() {
    nav.style.width = "0";
    main.style.marginLeft = "0";
}


//Toggle button for burger menu that pushes the screen
function toggle() {
    if(nav.style.width == '250px' && main.style.marginLeft == '250px') {
        nav.style.width = '0';
        main.style.marginLeft = '0';
    } else {
        nav.style.width = '250px';
        main.style.marginLeft = '250px';
    }
}

//button for burger menu that dont pucs the screen 
function sidenavOverlay() {
    if(nav.style.width == '250px') {
        nav.style.width = '0';
    } else {
        nav.style.width = '250px;';
    }
}

//Open the sidenav over content
function navOpen() {
    nav.style.width = '250px';
}
//Close the sidenav over content
function navClose() {
    nav.style.width = '0';
}

//Click the body to close the manu in condition
function contentClose() {
    if(nav.style.width == '250px' && main.style.marginLeft == '250px') {
        nav.style.width = '0';
        main.style.marginLeft = '0';
    }
}


//Button redirect to new tab
function projects() {
    window.open('projects.html', '_blank');
}

function about() {
    window.open('about.html', '_blank');
}

function curicilum() {
    window.open('curicilum.html', '_blank');
}

