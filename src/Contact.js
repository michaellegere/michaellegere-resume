import './App.css';
import './Contact.css';


function Contact() {
    return (
        <>
            <main className='container'>

                <div className="frame">

                    <h3>You can reach me best at {<a href='mailto:mlegere18@gmail.com'>mlegere18@gmail.com</a>} or my BC email at {<a href='mailto:legerem@bc.edu'>legerem@bc.edu</a>}.</h3>
                    <h5>Feel free to reach out via {<a href="https://www.linkedin.com/in/michael-legere/">Linkedin</a>} as well!</h5>

                    <br />
                    <h3>Waiting to hear back? Enjoy some music in the meantime!</h3>
                    <br />

                    <div className="spotify">
                        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0DJSWk?utm_source=generator" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>

                    <div className="spotify">
                        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO12MI7u?utm_source=generator" width="100%" height="380" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>

                    <div className="spotify">
                        <iframe src="https://open.spotify.com/embed/playlist/31FWVQBp3WQydWLNhO0ACi?utm_source=generator" width="100%" height="380" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>

                </div>

            </main>
        </>
    );
}

export default Contact;