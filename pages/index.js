import Link from 'next/link';
import "../sass/main.scss";


const Header = () => (
    <header>
        <div className="wrapper">
            <h1>Instaclone</h1>
        </div>
    </header>
);

const UserBio = () =>(
    <div >
        <div className="wrapper"> 
           {/* Flexbox Container */}
           <div className="pContent">
               {/* Profile Image */}
                <div className='pImage'>
                    
                </div>
                {/* Profile Bio */}
                <div>
                    <h3>Username</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate quam eget magna consectetur, eu facilisis sed.</p>
                </div>
           </div>
        </div>
    </div>
)



const Index = () => (
    <div className="content">
        <Header />
        <UserBio />
    </div>
);

export default Index;