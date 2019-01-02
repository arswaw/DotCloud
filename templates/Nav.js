const NavTemplate = 
`<div>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="../">
                    <img src="logo.png" style="max-height: 3.75rem;" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item is-active">
                        Home
                    </a>
                    <a class="navbar-item">
                            Examples
                    </a>
                    <a class="navbar-item">
                        Features
                    </a>
                    <a class="navbar-item">
                        Team
                    </a>
                    <a class="navbar-item">
                        Messages
                    </a>
                    <a class="navbar-item">
                        Notifications
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                                Account
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Dashboard
                            </a>
                            <a class="navbar-item">
                                Profile
                            </a>
                            <a class="navbar-item">
                                Settings
                            </a>
                            <hr class="navbar-divider">
                            <div class="navbar-item">
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>`

export { NavTemplate }