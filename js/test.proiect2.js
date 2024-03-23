document.addEventListener("DOMContentLoaded", () => {
const buton_login = document.getElementById("buton_login");
buton_login.addEventListener("click",e=>{
    e.preventDefault();
    const currentPath = window.location.pathname;
    const newPagePath = currentPath.replace("test.proiect2.html","login.html" );
    window.location.pathname = newPagePath;
} )
});