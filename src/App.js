import React from 'react';
import './App.css';




function App() {
  return (
    <div className="App">
   
    <div className='NavBar'> 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">ZW Industry</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Accueil <span class="sr-only"></span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">A propos<span class="sr-only"></span> </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Nos Expertises
                </a>
              </li>
            </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btnn " type="submit">Contact</button>
          </form>
          </div>
      </nav>
  </div>
  <div className="formulaire">

    <div className="formulairePDroite">
       
        <div class="form-group">
          <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
            </div>
             <div class="col">
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Numéro de Téléphone"/>
        </div>
        <div class="form-group">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Objet"></textarea>
        </div>
        <div class="form-group">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Envoyer</button>
     
    </div>
    <div className='formulairePGauche'> 
        <img  src="https://st2.depositphotos.com/5943796/11458/v/950/depositphotos_114588448-stock-illustration-initial-letter-zw-blue-swoosh.jpg" 
        alt="exemple de texte alternatif" classeName='imagezw' />
        <h6> Adresse</h6>
        <p>Sfax-Tunisie</p>
        <h6> Numéro de téléphne</h6>
        <p> +216 78 901 234</p>
    
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.5685821767197!2d10.75473575813614!3d34.74126739688091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d2d5ab0b3281%3A0x185fa079b7c6db3f!2sAvenue%20de%20Carthage%2C%20Sfax%203027%2C%20Tunisie!5e0!3m2!1sfr!2sfr!4v1612133653655!5m2!1sfr!2sfr" 
        ></iframe>
    

    </div>


  </div>
      
  </div>
  );
}

export default App;
