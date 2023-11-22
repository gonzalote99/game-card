var scores, count, activePlayer, gamePlaying, prev, cardcount;

init();

f=['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
s=['hearts','spades','diamonds','clubs'];

document.querySelector('.btn-pick').addEventListener('click', function() {
    if(gamePlaying) {
        var face = f[Math.floor(Math.random() * 12) + 1];
        var suit = s[Math.floor(Math.random() * 3)+ 1];
        console.log(face);
        var cardDOM = document.querySelector('.card');
        cardDOM.style.display = 'block';
        cardDOM.src = 'https://raw.githubusercontent.com/dishaShah01/Card-Game/master/' + face + '_of_' + suit + '.png';
        count+=1;
        cardcount+= 1;
        if(prev === face) {
         scores[activePlayer]+= count;
         count = 0;
         document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
         document.getElementById('count').textContent=count;
        }
        else if (cardcount === 52) {
        if(scores[0]>scores[1]) {
            document.querySelector('#name-0').textContent = 'winner';
            document.querySelector('.card').style.display = 'none';
            document.querySelector('.player-0-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;

        } else if(scores[0] < scores[1]) {
            document.querySelector('#name-1').textContent = 'winner';
            document.querySelector('.card').style.display = 'none';
            document.querySelector('.player-1-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            document.getElementById('count').textContent = 'match drawn';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }
        }
        else {
            nextplayer();
        }

        prev=face;

    }
});

function nextplayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('count').textContent = count;
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores=[0,0];
    count = 0;
    prev = '';
    activePlayer = 0;
    cardcount = 0;
    
    gamePlaying = true;
    document.querySelector('.card').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('count').textContent = count;
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    }