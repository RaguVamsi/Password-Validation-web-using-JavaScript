const passwordinput = document.querySelector(".wrapper input");
const eyeIcon = document.querySelector(".passfield i");
const requirementList = document.querySelectorAll(".content .requirement-list li");
const requirement = [
    {regex: /.{8,}/, index:0},
    {regex: /[0-9]/, index:1},
    {regex: /[a-z]/, index:2},
    {regex: /[^A-Za-z0-9]/, index:3},
    {regex: /[A-Z]/, index:4},
]

passwordinput.addEventListener("keyup", (e)=> {
    requirement.forEach(item => {
        const isvalid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];
        if(isvalid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check"
            requirementItem.classList.add("valid");
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle"
            requirementItem.classList.remove("valid");
        }
    });
});

eyeIcon.addEventListener("click", ()=> {
    passwordinput.type = passwordinput.type === "password" ? "text": "password";
    eyeIcon.className = `fa-solid fa-eye${passwordinput.type === "password" ? "" : "-slash"}`;
});