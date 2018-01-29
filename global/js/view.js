import { bio, projects, skills, education } from './data';
import {control} from './control';
import {createHero} from './templates/hero';
import {addProjects} from './templates/projects';
import {addProSkills} from './templates/proSkills';
import {addStudies} from './templates/studies';
import {addSoftSkills} from './templates/softSkills';
import {addStatement} from './templates/statement';
import {addContacts} from './templates/contact';

export let view = {
  init: () => {
    view.render();
  },
  render: () => {
    // getting the Resumé data
    let myBio = control.getBio();
    let myProjects = control.getProjects();
    let mySkills = control.getSkills();
    let myStudies = control.getStudies();

    /*
    Mapping each template string (generating function) to its corresponding data objects and
    the parent DOM element where it needs to be appended
    */
    let templateMap = new Map();
    templateMap.set(createHero, {dataOrigin: myBio, parentElement: 'hero'});
    templateMap.set(addProjects, {dataOrigin: myProjects, parentElement: 'projects'});
    templateMap.set(addProSkills, {dataOrigin: mySkills, parentElement: 'pro-skills'});
    templateMap.set(addStudies, {dataOrigin: myStudies, parentElement: 'studies'});
    templateMap.set(addSoftSkills, {dataOrigin: mySkills, parentElement: 'soft-skills'});
    templateMap.set(addStatement, {dataOrigin: myBio, parentElement: 'pro-statement'});
    templateMap.set(addContacts, {dataOrigin: myBio, parentElement: 'contact'});

    // generating a filled in template and appending the resulting html to the page
    templateMap.forEach((value, key, map) => {
      let parentDiv = document.getElementById(value.parentElement);
      let filledTemplate = key(value.dataOrigin);
      parentDiv.innerHTML = filledTemplate;
    });

  }
}