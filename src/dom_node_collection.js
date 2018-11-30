class DomNodeCollection {
  
  constructor(arr) {
    this.arr = arr;
  }
  
  html(string) {
    if (string) {
      let newArr = this.arr.forEach((el) => el.innerHTML = string);
    } else {
      return this.arr[0].innerHTML;
    }
  }

  
  empty() {
    let newArr = this.arr.forEach((el) => el.innerHTML = '');
    return newArr;
  }
  
  append(content) {
    if (content instanceof DomNodeCollection) {
      this.arr.concat(content.arr);
    } else if (content instanceof HTMLElement) {
      this.arr.forEach((el) => el.appendChild(content));
    } else if (typeof content === 'string') {
      this.arr.forEach((el) => el.innerHTML += content);
    } else {
      console.error("TYPE NOT VALID");
    }
  }
  
  attr(name, val) {
    if (!val) {
      this.arr[0].getAttributes(name);
    } else {
      this.arr.forEach((el) => el.setAttribute(name, val));
    }
  }
  
  addClass(arg) {
    this.arr.forEach((el) => el.classList.add(arg));
  }
  
  removeClass(arg) {
    this.arr.forEach((el) => el.classList.remove(arg));
  }
  
  children() {
    const childArr = [];
    this.arr.forEach((el) => {
      let nodeChildArr = Array.from(el.children);
      nodeChildArr.forEach((nodeChild) => {
        childArr.push(nodeChild);
      });
    });
    return new DomNodeCollection(childArr);
  }
  
  parents() {
    const parentArr = [];
    this.arr.forEach((el) => parentArr.push(el.parentNode));
    return new DomNodeCollection(parentArr);
  }
}

module.exports = DomNodeCollection;