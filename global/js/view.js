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
    // appending hero
    let heroElement = document.querySelector('.hero');
    let myBio = control.getBio();
    let myHero = createHero(myBio);
    heroElement.innerHTML = myHero;

    // appending projects
    let projectsDiv = document.querySelector('#projects');
    let myProjects = control.getProjects();
    let myProjectList = addProjects(myProjects);
    projectsDiv.innerHTML = myProjectList;

    // appending pro-skills
    let proSkillsDiv = document.querySelector('#pro-skills');
    let myProSkills = control.getSkills();
    let myProSkillList = addProSkills(myProSkills);
    proSkillsDiv.innerHTML = myProSkillList;

    // appending studies
    let studiesDiv = document.querySelector('#studies');
    let myStudies = control.getStudies();
    let myStudyList = addStudies(myStudies);
    studiesDiv.innerHTML = myStudyList;

  }
}