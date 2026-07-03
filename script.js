var about = document.getElementById("a");
var skill = document.getElementById("b");
var project = document.getElementById("c");
var contact = document.getElementById("d");
var resume = document.getElementById("e");

var content = document.getElementById("content");
var skil = document.getElementById("skil");
var proj = document.getElementById("pro");
var cont = document.getElementById("co");

about.onclick = function () {
    about.style.backgroundColor = "rgb(9, 9, 250)";
    skill.style.backgroundColor = "rgba(9, 9, 250, 0)";
    project.style.backgroundColor = "rgba(9, 9, 250, 0)";
    contact.style.backgroundColor = "rgba(9, 9, 250, 0)";
    if (window.innerWidth > 747) {
        resume.style.backgroundColor = "rgba(9, 9, 250,0)";
    }
    content.style.visibility = "visible";
    proj.style.visibility = "hidden";
    cont.style.visibility = "hidden";
    skil.style.visibility = "hidden";

}
skill.onclick = function () {
    about.style.backgroundColor = "rgba(9, 9, 250,0)";
    skill.style.backgroundColor = "rgb(9, 9, 250)";
    project.style.backgroundColor = "rgba(9, 9, 250, 0)";
    contact.style.backgroundColor = "rgba(9, 9, 250, 0)";
    if (window.innerWidth > 747) {
        resume.style.backgroundColor = "rgba(9, 9, 250,0)";
    }
    content.style.visibility = "hidden";
    proj.style.visibility = "hidden";
    cont.style.visibility = "hidden";
    skil.style.visibility = "visible";
}
project.onclick = function () {
    about.style.backgroundColor = "rgba(9, 9, 250,0)";
    skill.style.backgroundColor = "rgba(9, 9, 250, 0)";
    project.style.backgroundColor = "rgb(9, 9, 250)";
    contact.style.backgroundColor = "rgba(9, 9, 250,0)";
    if (window.innerWidth > 747) {
        resume.style.backgroundColor = "rgba(9, 9, 250,0)";
    }
    content.style.visibility = "hidden";
    proj.style.visibility = "visible";
    cont.style.visibility = "hidden";
    skil.style.visibility = "hidden";
}
contact.onclick = function () {
    about.style.backgroundColor = "rgba(9, 9, 250,0)";
    skill.style.backgroundColor = "rgba(9, 9, 250, 0)";
    project.style.backgroundColor = "rgba(9, 9, 250, 0)";
    contact.style.backgroundColor = "rgb(9, 9, 250)";
    if (window.innerWidth > 747) {
        resume.style.backgroundColor = "rgba(9, 9, 250,0)";
    }
    content.style.visibility = "hidden";
    proj.style.visibility = "hidden";
    cont.style.visibility = "visible";
    skil.style.visibility = "hidden";
}
