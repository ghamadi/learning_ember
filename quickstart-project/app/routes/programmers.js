import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Dennis Ritchie', 'Ken Thompson', 'Linus Torvalds'];
  }
}
