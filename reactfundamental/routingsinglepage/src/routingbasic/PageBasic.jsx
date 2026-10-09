import React from 'react';

function HomePage() {
    return <p>Ini home page</p>
}

function AboutPage() {
    return <p>Ini about page</p>
}

function ContactPage() {
    return <p>Ini contact page</p>
}

function Link({target, navigate, children}) {
    return (
        <a href={target} onClick={(event) => {
            event.preventDefault();
            navigate(target);
        }}>
            {children}
        </a>
    );

}

export { HomePage, AboutPage, ContactPage, Link };