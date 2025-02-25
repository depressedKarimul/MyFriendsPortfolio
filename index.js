
        document.getElementById('menu-btn').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('active');
        });
  

        document.addEventListener("DOMContentLoaded", function () {
            const filterButtons = document.querySelectorAll(".filter-btn");
            const portfolioItems = document.querySelectorAll(".portfolio-item");
        
            filterButtons.forEach(button => {
                button.addEventListener("click", function () {
                    // Remove "active" class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    this.classList.add("active");
        
                    const filterValue = this.getAttribute("data-filter");
        
                    portfolioItems.forEach(item => {
                        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                            item.classList.remove("hidden");
                        } else {
                            item.classList.add("hidden");
                        }
                    });
                });
            });
        });
        