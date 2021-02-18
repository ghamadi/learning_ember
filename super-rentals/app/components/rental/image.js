import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  // constructor(...args) {
  //   super(...args);
  //   this.isLarge = false;
  // }

  // isLarge = false; // note that this line achieves the same as the commented out part above

  @tracked isLarge = false; //this allows ember to track the state of isLarge

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
