const darkTheme = document.querySelector("#dark");

const storeTheme = function(theme) {
    localStorage.setItem("theme", theme);
}

const setTheme = function() {
    const activeTheme = localStorage.getItem("theme");

    if (activeTheme === darkTheme.id) {
        darkTheme.checked = true;
    }
    document.documentElement.className = theme;
}

darkTheme.addEventListener("change", function() {
    if (darkTheme.checked != true) {
        storeTheme('light')
    } else {
        storeTheme(darkTheme.id)
    }
})

document.onload = setTheme()
