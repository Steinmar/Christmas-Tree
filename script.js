const smallTree = '123';
const bigTree = '123456789';
const treeSeparator = '-'.repeat(30);

console.log('You can bind to every output method that you want!');

ChristmasTree.build(smallTree);
ChristmasTree.build(bigTree);

const form = document.getElementById('tree-sourse__form');
const sourceIntput = document.getElementById('tree-sourse__input');
const sourceOutput = document.getElementById('tree-sourse__output');
const exampleInput = document.getElementById('tree-sourse__input--example');
const sourceOutputExample = document.getElementById('tree-sourse__output--example');

exampleInput.innerHTML = bigTree;

ChristmasTree.build(bigTree, (tree) => {
    sourceOutputExample.innerHTML = tree;
});

form.onsubmit = (e) => {
    e.preventDefault();
    buildTree(sourceIntput.value);
};

function buildTree(source) {
    ChristmasTree.build(source, (tree) => {
        sourceOutput.innerHTML = `${tree}\n${treeSeparator}\n\n\n${sourceOutput.innerHTML}`;
        console.group('Your new tree!');
        console.log(tree);
        console.groupEnd();
    });
}
