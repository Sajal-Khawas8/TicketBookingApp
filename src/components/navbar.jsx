import './navbar.css'
export default function Navbar() {
    return (
        <><header>
            <div class="head">Booknow<span>.com</span></div>
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <nav class="nav_text">
                <ul>
                    <li> <a href="#" class="active"> Home</a></li>
                    <li> <a href="#"> About</a></li>
                    <li> <a href="#"> Services</a></li>
                    <li> <a href="#"> Contact Us</a></li>
                </ul>
            </nav>
        </header>
            {/* <script>
                hamburger = document.querySelector(".hamburger");
                hamburger.onclick=function()
                {
                    navbar = document.querySelector(".nav_text");
                navbar.classList.toggle("active");
                }
            </script> */}
        </>)
}