import Link from 'next/link';

function Home1(){
    return (<div>
        <h1>Home</h1>

        <Link href="/tempo">
            <a>Acessar página Tempo</a>
        </Link>    
    </div>)
}

export default Home1