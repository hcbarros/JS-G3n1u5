
import * as Tone from 'tone';
import audioClick from './sound-files/click2.mp3';


export default class Sounds {

    
    static dtmfSound = (n) => {

        const hz = [[697, 1209],[697, 1336],[697, 1477],
                    [770, 1209],[770, 1336],[770, 1477],
                    [852, 1209],[852, 1336],[852, 1477]];
        new Tone.Oscillator(hz[n-1][0]).toDestination().start().stop("+0.15");
        new Tone.Oscillator(hz[n-1][1]).toDestination().start().stop("+0.15");
    }  

    static clickSound() {

        const player = new Tone.Player(audioClick).toDestination();
        Tone.loaded().then(() => {
            player.start();
        });    
    }
}