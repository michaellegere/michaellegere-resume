import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Frame from './components/Frame';
import Card from './components/Card';
import PrimaryButton from './components/buttons/PrimaryButton';
import SecondaryButton from './components/buttons/SecondaryButton';
import UpButton from './components/buttons/UpButton';
import DownButton from './components/buttons/DownButton';


function App() {

    function darkMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    return (
       <>
        <NavBar />
        <main className='container'>
            <Hero func={darkMode} />
            <Frame
                title='&#128218; education'
                roleOne='Boston College'
                datesOne='May 2023, M.A. Philosophy'
                descriptionOne='Activities: Co-Chair M.A. Council.'

                roleTwo='Emmanuel College'
                datesTwo='May 2020, B.A. Philosophy'
                descriptionTwo='Activities: Vice President Philosophy Club, Commuter Representative to Student Government.'
                />

                <Frame
                    title='&#128187; Tech'
                    roleOne='BC Information Technology'
                    datesOne='Jan 2022 - Present'
                    descriptionOne='Monitor group email and phone for incoming support requests; provide direct and efficient technical support to Humanities Departments; Maintain repertoire with 300+ clients and conduct regular maintenance checks; Image new hardware; install, update, and maintain software across new and old devices; Work with Hardware Repair, Techcycle/BCCR Computer Replacement, and other IT Departments, Maintained my own documentation.'
                />

                <Frame
                    title='&#128214; Teaching'
                    roleOne='BC Psychology Department'
                    datesOne='Aug 2021 - May 2022: Graduate Teaching Assistant'

                    roleTwo='Shoemaker Elementary School, Lynn'
                    datesTwo='Apr 2021 - Aug 2021: Paraprofessional'

                    roleThree='Museum of Science, Boston'
                    datesThree='Mar 2015 - Apr 2020: Program Presenter, Program Assistant, Intern, Volunteer'
                />

                <Frame
                    title='&#128300; Researcher'
                    roleOne='BU Social Development and Learning Lab, Boston'
                    datesOne='Sept 2019 - March 2020: Research Assistant'
                    descriptionOne=''

                    roleTwo='Harvard Laboratory for Developmental Studies, Cambridge'
                    datesTwo='Jan 2019 - May 2019: Research Assistant'
                    descriptionTwo=''
                />



        </main>
        <PrimaryButton text='howdy' />
        <SecondaryButton text='hello, world!' />
        <UpButton text='up' />
        <DownButton text='down' />
      </>
  );
}

export default App;
