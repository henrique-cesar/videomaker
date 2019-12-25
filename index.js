const readline = require('readline-sync');
const bots = {
    text: require('./bots/text')
}

async function start() {
    const content = {};
    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    await bots.text(content);

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ');
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of'];
        const selectedPrefixIndex = readline.keyInSelect(prefixes);
        const selectedPrefix = prefixes[selectedPrefixIndex];
        return selectedPrefix;
    }

    console.log(content);
}

start();