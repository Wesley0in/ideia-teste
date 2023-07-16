import Link from 'next/link';

function Home2(){
    return (<div>
        <h1>Home</h1>

        <Link href="/index">
            <a>Acessar página Inicial</a>
        </Link>    
    </div>)
}

export default Home2