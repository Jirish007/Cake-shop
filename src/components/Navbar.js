import Navbarlink from "./Navbarlink";


 





function Navbar(){
    return(
      <>
        <nav className='intro'>
          <div className="intro_style">
        <section>
            <h1>Easy Bake</h1>
          </section>
          <section>
        <Navbarlink/>
          </section>
        </div>
        <div className='first'>
          <section>
          <h2>Carrot Cake</h2>
          <br></br>
          <p>The resonance of cream and orange</p>
          <br></br>
          </section>
        </div>
        </nav>
        </>
    )
}
export default Navbar;