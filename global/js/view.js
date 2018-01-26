import { bio, projects, skills, education } from './data';
import {control} from './control';
import {createHero} from './templates/hero';
import {addProjects} from './templates/projects';
import {addProSkills} from './templates/proSkills';
import {addStudies} from './templates/studies';
import {addSoftSkills} from './templates/softSkills';

export let view = {
  init: () => {
    view.render();
  },
  render: () => {
    // TODO: add complete render functionality
    let myBio = control.getBio();
    let myHero = createHero(myBio);
    let heroElement = document.querySelector('.hero');
    heroElement.innerHTML = myHero;
  }
}