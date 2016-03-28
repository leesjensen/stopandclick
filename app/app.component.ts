import {Component} from 'angular2/core';

export class Environment {
	public title;
	public image;
  public audio;
}

var ENVIRONS: Environment[] = [ 
	{'title':'rain', 'image':'img/rain.jpg', 'audio':'audio/night.mp3'}, 
	{'title':'ocean', 'image':'img/ocean.jpg', 'audio':'audio/night.mp3'}, 
  {'title':'desert', 'image':'img/desert.jpg', 'audio':'audio/night.mp3'}, 
  {'title':'night', 'image':'img/night.jpg', 'audio':'audio/night.mp3'}, 
	{'title':'forest', 'image':'img/forest.jpg', 'audio':'audio/forest.wav'}
];


@Component({
    selector: 'my-app',
  template:`
    <div class="environmentContainer">
      <span *ngFor="#environment of environments" (click)="onPlay(environment)" (mouseenter)="onSelect(environment)">
        <img class="environment" [class.selected]="environment === selectedEnvironment" [class.notSelected]="environment != selectedEnvironment" src="{{environment.image}}" />
      </span>
    </div>
    <div *ngIf="selectedEnvironment">
      <div class="moodText">In the mood for {{selectedEnvironment.title}}</div>
      <audio id="audioPlayer" autoplay="autoplay" controls="controls">  
       <source src="{{selectedEnvironment.audio}}" />  
      </audio> 
    </div>
  `})

export class AppComponent { 
	environments = ENVIRONS;
	selectedEnvironment: Environment = ENVIRONS[2];

	onSelect(environment: Environment) { this.selectedEnvironment = environment; }
  onPlay(enviornment:Environment) {
        var audio = document.getElementById('audioPlayer');

        var source = document.getElementById('oggSource');
        source.src = this.selectedEnvironment.audio;

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
  }
}
