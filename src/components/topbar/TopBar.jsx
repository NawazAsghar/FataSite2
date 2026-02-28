import './topBar.css';
function TopBar() {
    return (
        <nav id='topBar'>
            <ul id='topBarUl'>
                <li>CMS portal</li>
                <li>Spring 2026 spring admission</li>
                <li>Facebook</li>
                <li>info@fu.edu.pk</li>
                <li>📞 0915885507</li>
                <li>رَّبِّ زِدْنِي عِلْمًا</li>
            </ul>

            <ul id="responsiveTopBarUl">
                <div className="responsiveTopBarUlLeft">
                    <li>📞 091-5885507 </li>
                    <li>info@fu.edu.pk</li>
                </div>
                <div className="responsiveTopBarUlRight">
                    <li>CMS Portal</li>
                    <li> Facebook</li>
                </div>
            </ul> 
            <ul id="responsiveTopBarUl300">
                <div className="responsiveTopBarUlLeft">
                    <li>📞 091-5885507 </li>
                    {/* <li>info@fu.edu.pk</li> */}
                </div>
                <div className="responsiveTopBarUlRight">
                    <li>CMS Portal</li>
                    {/* <li> Facebook</li> */}
                </div>
            </ul> 

        </nav>
    )
}

export default TopBar
