const Instafeed = require("instafeed.js");

export const instagramFeed = (options) => {
    const userFeed = new Instafeed(options);
    userFeed.run();  
};
