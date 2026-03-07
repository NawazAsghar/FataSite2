import './topBar.css';
function TopBar() {
    return (
        <nav id='topBar'>
            <ul id='topBarUl'>
                <li>CMS portal</li>
                <li>Spring 2026 spring admission</li>
                <li><a href="https://www.facebook.com/FataUniversityOfficial/">Facebook</a></li>
                <li><a href="mailto:info@fu.edu.pk">Info@fu.edu.pk</a></li>
                <li><a href="tel:0915885507">📞 091-5885507</a></li>
                <li>رَّبِّ زِدْنِي عِلْمًا</li>
            </ul>

            <ul id="responsiveTopBarUl">
                <div className="responsiveTopBarUlLeft">
                    <li><a href="tel:0915885507">📞 091-5885507</a></li>
                    <li><a href="mailto:info@fu.edu.pk">Info@fu.edu.pk</a></li>
                </div>
                <div className="responsiveTopBarUlRight">
                    <li>CMS Portal</li>
                    <li> <a href="https://www.facebook.com/FataUniversityOfficial/">Facebook</a></li>
                </div>
            </ul> 
            <ul id="responsiveTopBarUl300">
                <div className="responsiveTopBarUlLeft">
                    <li><a href="tel:0915885507">📞 091-5885507</a></li>
                </div>
                <div className="responsiveTopBarUlRight">
                    <li>CMS Portal</li>
                </div>
            </ul> 

        </nav>
    )
}

export default TopBar
