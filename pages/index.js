import React from 'react';

function Header() {
    return (
        <div className="header">
            <img src="url-logo-github" alt="Logo do GitHub"/>
            <nav>
                <a href="#">Features</a>
                <a href="#">Business</a>
                <a href="#">Explore</a>
                <a href="#">Marketplace</a>
                <a href="#">Pricing</a>
            </nav>
            <div>
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        </div>
    )
}

function Main() {
    return (
        <div className="main">
            <h1>Built for developers</h1>
            <p>GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside millions of other developers.</p>
            <button>Sign up for GitHub</button>
        </div>
    )
}

function Home() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

export default Home;
