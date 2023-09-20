export default function Footer() {
    return (
        <footer style={{ "backgroundColor": "Blue", "color": "White", "padding": "60px" }}>
            <div style={{ "maxWidth": "800px", "margin": "auto", "textAlign": "center" }}>
                <h3 style={{ "fontSize": "1.6em", "marginBottom": "15px" }}>Scriptjet Prime</h3>

                <nav style={{ "marginTop": "20px" }}>
                    <a href="#home" style={{ "color": "White", "marginRight": "20px" }}>Home</a>
                    <a href="#services" style={{ "color": "White", "marginRight": "20px" }}>Services</a>
                    <a href="#about" style={{ "color": "White", "marginRight": "20px" }}>About</a>
                    <a href="#contact" style={{ "color": "White", "marginRight": "20px" }}>Contact</a>
                    <a href="#privacy-policy" style={{ "color": "White", "marginRight": "20px" }}>Privacy Policy</a>
                    <a href="#terms-of-service" style={{ "color": "White" }}>Terms of Service</a>
                </nav>

                <div style={{ "marginTop": "20px" }}>
                    <a href="https://www.facebook.com/ScriptjetPrime" style={{ "color": "White", "marginRight": "20px" }}>Facebook</a>
                    <a href="https://www.twitter.com/ScriptjetPrime" style={{ "color": "White", "marginRight": "20px" }}>Twitter</a>
                    <a href="https://www.scriptjetprime.works" style={{ "color": "White", "marginRight": "20px" }}>Website</a>
                    <a href="mailto:info@scriptjetprime.works" style={{ "color": "White", "marginRight": "20px" }}>Email</a>
                    <a href="https://www.scriptjetprime.works/chat" style={{ "color": "White", "marginRight": "20px" }}>Chat</a>
                    <a href="sms:+1234567890" style={{ "color": "White" }}>Text</a>
                </div>

                <p style={{ "marginTop": "20px", "fontSize": "0.9em" }}>&copy; 2023 Scriptjet Prime. All Rights Reserved.</p>
            </div>
        </footer>

    );
}
