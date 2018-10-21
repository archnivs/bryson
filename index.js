const aside = document.getElementById("h-aside")
const toggleSidebar = document.getElementById("toggle-sidebar")


toggleSidebar.addEventListener(
    "click",
    (e) => aside
        .setAttribute(
            'data-state', 
            aside.getAttribute('data-state') === 'open' ? 'closed' : 'open'
        )
)
