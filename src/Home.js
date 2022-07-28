import './Home.css';

import Hero from './components/Hero';
import Frame from './components/Frame';

function Home() {
    return (
        <main className = 'container'>
            <Hero />

            <Frame
                title='My name is Michael.'
                roleOne=''
                datesOne=''
                descriptionOne='I&apos;m currently a 2nd year MA Student in Philosophy 
                                looking for full-time work in IT + Web Development.'

                descriptionTwo='On this website you can find my previous work experience.
                                For a more in depth look at my coding experience, check out my
                                portfolio website.'
            />

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
                descriptionOne='Monitor group email and phone for incoming support requests; 
                                provide direct and efficient technical support to Humanities Departments; 
                                Maintain raport with 300+ clients and conduct regular maintenance checks;'
                descriptionTwo='Image new hardware; install, update, and maintain software across new and old devices; 
                                Work with Hardware Repair, Techcycle/BCCR Computer Replacement, and other IT Departments, Maintained my own documentation.'
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
        </main >
    );
}

export default Home;
