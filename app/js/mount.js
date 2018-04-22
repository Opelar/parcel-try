const mount = (component, wrapper) => {
  wrapper.appendChild(component._renderDOM());
  component.onStateChange = (oldEl, newEl) => {
    wrapper.insertBefore(newEl, oldEl);
    wrapper.removeChild(oldEl);
  };
};

export default mount;
