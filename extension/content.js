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
    const regex = /.*[0-9].*/;
    return arr.filter((el) => el.textNode.match(regex));
  }

  numberTextNodes(getTextNodes()).forEach((el) => {
    const t = document.createTextNode('hi');
    const n = document.createElement('h1');
    n.appendChild(t);
    const ourNode = n;

    el.grandParent.replaceChild(ourNode, el.parentNode);
  });

  console.log('>>>>', getTextNodes());
});
