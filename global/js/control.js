import { bio, projects, skills, education } from './data';
import {view} from './view';

export let control = {
  init: () => {
    view.init();
  },
  getBio: () => bio,
  getProjects: () => projects
};