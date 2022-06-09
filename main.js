
document.addEventListener('click', function (e) {
    if (e.target.tagName == "A" && e.target.parentElement.parentElement.classList.contains("links")) 
    {
        if (e.target.classList.contains("active") == false) 
        {
            const Alla = document.querySelectorAll('nav .links a');

            for (let i = 0; i < Alla.length; i++) 
                Alla[i].classList.remove("active");
            
            e.target.classList.add("active");
        }
    }
})

function myFunction() {
    const link = document.querySelectorAll("head link");
    
    if (link[link.length - 1].getAttribute("href") == null)
        link[link.length - 1].href = "nightmode.css";
    else
        link[link.length - 1].removeAttribute("href");
}
