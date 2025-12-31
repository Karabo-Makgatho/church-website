// ====================================
// 1. NAVIGATION MENU TOGGLE
// ====================================
    var navLink = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.right = "0";
    }
     function hideMenu(){
        navLinks.style.right = "-200px";
    }


      document.addEventListener('DOMContentLoaded', () => {
            // --- Mobile Navigation Toggle Logic (Sliding Menu) ---
            const menuPanel = document.getElementById('mobile-menu-panel');
            const overlay = document.getElementById('menu-overlay');
            const menuLinks = menuPanel.querySelectorAll('a');

            if (menuPanel) {
                overlay.addEventListener('click', toggleMenu); 
                
                // Close menu when a link is clicked
                menuLinks.forEach(link => {
                    link.addEventListener('click', toggleMenu);
                });
            }
        });
