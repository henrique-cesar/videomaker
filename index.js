const bots = {
    input: require("./bots/input"),
    text: require("./bots/text"),
    state: require("./bots/state"),
    image: require("./bots/image")
};

async function start() {
    bots.input();
    await bots.text();
    await bots.image();

    //const content = bots.state.load();
    //console.dir(content, { depth: null });
}

start();
