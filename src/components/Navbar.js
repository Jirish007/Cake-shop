import Navbarlink from "./Navbarlink";

function Navbar(){
    return(
        <div className='cover_img'>
        <nav className='intro'>
        <section>
            <h1>Easy Bake</h1>
          </section>
          <section>
        <Navbarlink/>
          </section>
        </nav>
        <div className='first'>
          <section>
          <h2>Orange Cup Cake</h2>
          <br></br>
          <p>The resonance of cream and orange</p>
          <br></br>
          </section>
        
        </div>
        </div>
    )
}
export default Navbar;