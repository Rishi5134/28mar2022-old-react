import React from 'react'

const CategoriesDropdown = () => {
    function dropDown() {
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById('main').style.overflowY = 'scroll';
    }
    window.onClick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    document.getElementById('main').style.overflowY = 'scroll';
                    
                }
            }
        }
    }
  return (
      <>
      <div className="dropdown">
                        <h5>
                            <button onClick={() => {dropDown()}} className="dropbtn text-dark dropdown-toggle">CATEGORIES</button>
                        </h5>
                        <div id="myDropdown" className="dropdown-content">
                            <a href="/#home">Startup Pyramids</a>
                            <a href="/#about">Advance Pyramid</a>
                            <a href="/#contact">Latest Inventions</a>
                            <a href="/#contact">Vastu Pyramids</a>
                            <a href="/#contact">Reiki Pyramid</a>
                            <a href="/#contact">Protection Pyramids</a>
                            <a href="/#contact">Personal Pyramids</a>
                            <a href="/#contact">Fortune Pyramids</a>
                            <a href="/#contact">Swastik Pyramids</a>
                            <a href="/#contact">Meditation Pyramids</a>
                            <a href="/#contact">Pyramid Fortune Cards</a>
                            <a href="/#contact">Health Pyramids</a>
                            <a href="/#contact">Feng-shui Pyramids</a>
                            <a href="/#contact">Professional Pyramids</a>
                            <a href="/#contact">Bulk Packs Of Pyramids</a>
                            <a href="/#contact">Books On Pyramidvastu</a>
                            <a href="/#contact">For Pain Relief</a>
                            <a href="/#contact">Fire Pyramids</a>
                            <a href="/#contact">New Attractions</a>
                            <a href="/#contact">Dugnostics Tools</a>
                        </div>
                    </div>
      </>
  )
}

export default CategoriesDropdown