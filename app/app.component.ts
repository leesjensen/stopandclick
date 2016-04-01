import {Component} from 'angular2/core';

export class Environment {
	public title;
	public image;
  public audio;
}

var ENVIRONS: Environment[] = [ 
	{'title':'rain', 'image':'img/rain.jpg', 'audio':'https://dl.dropbox.com/s/62d3k6qufcimq60/rainandthunder.mp3'}, 
	{'title':'ocean', 'image':'img/ocean.jpg', 'audio':'https://dl.dropbox.com/s/ayt0ete6wiiqoto/ocean.mp3'}, 
  {'title':'desert', 'image':'img/desert.jpg', 'audio':'https://dl.dropbox.com/s/up8uhf7swo8pywo/desert.mp3'}, 
  {'title':'night', 'image':'img/night.jpg', 'audio':'https://dl.dropbox.com/s/dvhzv1qf7fs8dny/birds.mp3'}, 
	{'title':'forest', 'image':'img/forest.jpg', 'audio':'https://dl.dropbox.com/s/716e05pn3klgsxl/forest.mp3'}
];


@Component({
    selector: 'my-app',
  template:`
    <div class="environmentContainer">
      <span *ngFor="#environment of environments" (click)="onPlay(environment)" (mouseenter)="onSelect(environment)">
        <img class="environment" [class.selected]="environment === selectedEnvironment" [class.notSelected]="environment != selectedEnvironment" src="{{environment.image}}" />
      </span>
    </div>
    <div>
      <div class="moodText">In the mood for {{selectedEnvironment.title}}</div>
      <audio id="audioPlayer" autoplay loop>  
       <source src=""  type="audio/mpeg"/>  
      </audio> 
    </div>
  `})

export class AppComponent { 
	environments = ENVIRONS;
	selectedEnvironment: Environment = ENVIRONS[2];
  playingAudio = false;

	onSelect(environment: Environment) { 
    this.selectedEnvironment = environment; 
  }

  onPlay(enviornment:Environment) {
    var audioPlayer = <HTMLAudioElement> document.getElementById('audioPlayer');
    audioPlayer.src = this.selectedEnvironment.audio;

    audioPlayer.play(); //call this to play the song right away
    this.playingAudio = true;
  }
}
