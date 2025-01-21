function checkLoginStatusAndRedirect() {
    const storedUser = localStorage.getItem("user");
    const sessionUser = sessionStorage.getItem("user");

    if (!storedUser && !sessionUser) {
        window.location.href = "../index.html";
        return false;
    }
    return true;
}