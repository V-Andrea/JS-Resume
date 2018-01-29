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
    // TODO: add complete render functionality

    view.addResumeElement('hero', createHero);
    view.addResumeElement('projects', addProjects);
    view.addResumeElement('pro-skills', addProSkills);
    view.addResumeElement('studies', addStudies);
    view.addResumeElement('soft-skills', addSoftSkills);
    view.addResumeElement('pro-statement', addStatement);
    view.addResumeElement('contact', addContacts);


  },
  fillTemplate : pageTemplate => {

    let myBio = control.getBio();
    let myProjects = control.getProjects();
    let mySkills = control.getSkills();
    let myStudies = control.getStudies();

    let templateMap = new Map();
    templateMap.set(createHero, myBio);
    templateMap.set(addProjects, myProjects);
    templateMap.set(addProSkills, mySkills);
    templateMap.set(addStudies, myStudies);
    templateMap.set(addSoftSkills, mySkills);
    templateMap.set(addStatement, myBio);
    templateMap.set(addContacts, myBio);

    let filledTemplate = pageTemplate(templateMap.get(pageTemplate));
    return filledTemplate;

  },
  addResumeElement : (parentElement, pageTemplate) => {
    let parentDiv = document.getElementById(parentElement);
    let filledTemplate = view.fillTemplate(pageTemplate);
    parentDiv.innerHTML = filledTemplate;
  }
}