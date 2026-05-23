document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/login.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    const user = localStorage.getItem("username");
    if (user) {
        document.getElementById("userInfoo").innerText =user;
    if (user) {
        document.getElementById("userInfo").innerText = "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
            <button onclick="logout()" class="logout-btn">
                   <svg viewBox="0 0 24 24" fill="transparent" stroke="currentColor" stroke-width="2">
                        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                        <polyline points="16 17 21 12 16 7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                Logout
            </button>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
