import './App.css';
import './Resume.css';
import Resume2022 from './components/pics/resume.png';

function Resume() {

    return (
        <>
            <main className='container'>

                <img src={Resume2022} className='resume-img' alt="My Resume" />

            </main>
        </>
    );
}

export default Resume;