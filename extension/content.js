window.addEventListener('click', () => {
  const getTextNodes = () => {
    let textNode;
    const arr = [];
    const walk = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    while(textNode = walk.nextNode()) {
      arr.push({
        parentNode: textNode.parentElement,
        textNode: textNode.nodeValue,
        node: textNode.parentElement.outerHTML,
        grandParent: textNode.parentElement.parentElement,
      });
    }

    return arr;
  }

  const numberTextNodes = (arr) => {
    const regex = /\+?(\d+\W{0,3}\d+\W{0,3}\d+\W{0,3}\d+\W{0,3}\d+)/
    return arr.filter((el) => {
      const strings = el.textNode.match(regex);
      if (strings) {
        const str = strings[1].split('').filter((c) => !isNaN(c) && c.trim()).join('');
        return str.length > 10 && str.length < 15;
      }
    });
  }

  numberTextNodes(getTextNodes()).forEach((string) => {
    const t = document.createTextNode('hi');
    const n = document.createElement('h1');
    n.appendChild(t);
    const ourNode = n;

    string.grandParent.replaceChild(ourNode, string.parentNode);
  });
});
