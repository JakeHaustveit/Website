import Link from 'next/link';

const Navbar = () => {
    return (
        
        <nav>
            
            <Link href="/"> 
                <a>Home</a>
            </Link>

            <Link href='/about-me'>
                <a>About Me</a>
            </Link>

            <Link href='/portfolio'>
                <a>Portfolio</a>
            </Link>

            <Link href='/contact-me'>
                <a>Contact Me</a>
            </Link>

        </nav>
        
    );
}
 
export default Navbar;<div>
<nav></nav></div>