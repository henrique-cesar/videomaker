const bots = {
    input: require('./bots/input'),
    text: require('./bots/text'),
    state: require('./bots/state')
}

async function start() {
    bots.input()
    await bots.text();

    const content = bots.state.load();
    console.dir(content, { depth: null });
}

start();
