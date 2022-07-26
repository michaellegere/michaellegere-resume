import './BreadCrumb.css';

const BreadCrumb = props => {
    return (
        <nav className='breadcrumb'>
            <ul>

                <li><a href='/'>education</a></li>
                <li><a href="/">tech</a></li>
                <li><a href="/">teaching</a></li>
                <li><a href="/">research</a></li>

            </ul>
        </nav>
    );
}

export default BreadCrumb;