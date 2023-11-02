import './Rewards.css';


function Rewards(){
    return (
    <>
    <p className="punctaj"> Ai acumulat 1000 de puncte!</p>
    
    <div class="rewards">
        <div class="reward1">
                <h1 class="reward-title">Lapte de vacă 3,5% grăsime</h1>
                <img class="img-produs" src="./images/lapte.jpg" alt="Lapte"></img>
                <button class="buton-produs"> 500 puncte</button>
        </div>
        <div class="reward2">
                <h1 class="reward-title">Ouă de găină Categoria A</h1>
                <img class="img-produs" src="./images/oua.jpg" alt="Oua"></img>
                <button class="buton-produs"> 800 puncte</button>

        </div>

        <div class="reward3">
                <h1 class="reward-title">Napolact Unt 65% grăsime</h1>
                <img class="img-produs" src="./images/unt.jpg" alt="Unt"></img>
                <button class="buton-produs"> 700 puncte</button>
        </div>

    </div>

    </>
    )
}

export default Rewards;