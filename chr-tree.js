const ChristmasTree = (function () {
    /**
     * 
     * @param {string} source  - char sequence to build tree
     */
    function build(source, outputMethod = console.log) {
        const levelLength = source.length;
        const treeParts = [];

        for (let i = 0; i < levelLength; i++) {
            treeParts.push(buildLevel(i + 1, levelLength, source));
        }
        treeParts.push(buildStalk(levelLength));
        const tree = treeParts.join('');
        outputMethod(tree);
    }

    /**
     * 
     * @param {number} depth of level that will be builded
     * @param {number} length of level
     * @param {string} source char sequence
     */
    function buildLevel(depth, length, source) {
        const spaceCount = length - depth;
        const spaces = Array(spaceCount).fill(' ').join('');
        let symbols = '';

        for (let i = 0; i < length - spaceCount; i++) {
            symbols += getCurrentSymbol(source, depth - 1 + i);
        }
        symbols += '\n';

        return spaces + symbols;
    }

    /**
     * 
     * @param {string} source char sequence
     * @param {number} index of symbol it can be bigger that char length
     */
    function getCurrentSymbol(source, index) {
        return source[index % source.length];
    }

    function buildStalk(treeDepth) {
        const spaces = Array(Math.floor(treeDepth / 2)).fill(' ').join('');
        const stalkLength = Math.ceil(treeDepth / 3);
        return (Array(stalkLength).fill(spaces + '|').join('\n'));
    }

    return {
        build
    }
})();
