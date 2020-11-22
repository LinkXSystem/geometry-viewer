class Element {
  constructor(label) {
    this.label = label || 'div';

    this.element = document.createElement(label);
  }

  setText(text) {
    return this;
  }

  setClassNames() {
    return this;
  }

  setStyleSheet(sheet) {
    const { element } = this;
    Object.entries(sheet).forEach(([key, value]) => {
      element.style[key] = value;
    });

    return this;
  }

  setChild(child) {
    this.element.appendChild(child);
  }

  render(container) {
    // TODO: 是否为优雅的实现
    (document.body || container).appendChild(this.element)

    return this;
  }
}
