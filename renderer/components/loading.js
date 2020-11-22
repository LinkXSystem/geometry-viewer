import Element from './common/element';

let instance;

export default class Loading {
  static init(icon) {
    instance = new Loading(icon);
  }

  static show() {
    if (!instance) {
      instance = new Loading();
    }

    instance.render();
  }

  static hide() {
    if (!instance) {
      instance = new Loading();
    }

    instance.render();
  }


  constructor(icon) {
    this.element = new Element();

    this.element.setStyleSheet({
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    });

    if (icon) {
      this.element.setChild(icon);
    }
  }

  render() {
    this.element.render();
  }
}
