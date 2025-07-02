

/*Why does my code work? I don’t know. Why does my code break? I also don’t know.*/
/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VVW46ryhWdylX92n0N5mGw1FIAYwM2bfzEdpSPMhRQ5g0FmD7qnzuFKFKkROkpJFPKCM4QIuxudUsn96TDV6kea6+999qLbyBJcYnmqAXjbyArcA0J6pakzRAYA7nyPFSAPnAhgWAMJJ1eUGTSi5liOPGHhKiTxXIQPF+seRxvT7TMM/mI71nibvcIXvogq84Rdn4CKOKWHAZ5NXIW0XFvWdKB98xVouxMhi1Dj/W3vYyGdrzRqEfw0iFCXODEV7MAxaiA0Ry1FsTF1+iHi7gxr9AyBumJVq3p1XKjIhhYk41XPS18Tl7uHUexSZ4cv0Y/WBe6kStFfD3H4WI9QqiqtSUd5lWwP+V7NHdYTtMuwVrW7/RL7CfI1V2UEEzaL9dd18LT4qqWz7YhTveM4Qxya0YiuK/LicvxtTYs2RbrM53yv0YcC1dX2jIRrvS0kfOk2eJdHstnPBfSFc0rp2Uyd4x9NLhKn4lbxbtWwv+n7sOpstQcbofPcTQ0giSroRjgozW8XmUm5y7kKpzPi6cWzaiv0R84KRkkdNYr9wqeUcs4ryJnuDCwbU4MiSGxPx0q0DD46fGDPiRV8TOWDbsMtvJqZauLhejL62lwYi4FHgomOTcxgiFnqGiIRvR+0tqGHYonnnpWWi5ba5tqoVvJZSb7yp5vVWQf6GY4f7bCi/R4yyhEre6CMf3SBwXycUkKSHCadHvCqA+gW2+QUyByqy7QQsYMCj7MeT6aHoTperte0ofj8UzMxj3BCRY0Vj+ooaA3j6APsiJ1UFkiV8MlSYvWRGUJfVSC8R9vjepyLlCcEmRgt2sHx9L0kB+xFC3+ofy1CSApYZb9miAC+sAr0thEYEyKCvXB7YEgqipFiTTN04LMM7LEq8x0JAqyoHKKQotdhvE96BbHqCQwzsCYHnE0y3IcLb78qQ8SdCV3+XRJM3QfeLgoyS6psiiF7ru23g+h46RVQjZt4ijdAhVg/GkbEYITv+wyqxJYOAGukdLlAcYejEr00gcuqrGDOjyw3Kjl9HQ1t3OIT0dqlS6th/Wqq1yQJvcr1JCjaIcdPbAsJTywHM8+iGeXfuAZVjyzHEIOxYCuHPfJ7d78vjq9zZNjnc7GQONPOJ8MLa1ermMTUeFNDHcFoAK571U+Qyessm0aouQnuFbODI494XDZ1JgMqvZ5nkrtjOKH89Un3LuywPjbh1sqqdvh2SYnH7ZGl0d8G4Qf1DDmuR8FEd2u0SzHsDzHCbwgsizd3ewO+iCBHRj4/vrnf/37H3/5/vq3v39/ff3nLxsUw1+8qoAB/P761986fm/N6yK7iEAclWAMlCcLjip/qj5NvFAwZzMp9CXFl8BHs99n9z4czWTXxjvDcUJ8EufQns7LehMdF08932zaXqqLqT3XsTGKjo//BQSMwXlfJS6UkaZWCmMdRnyzgdky9RZ12ERlsxR55bAIvYntjp7intbAeTZU+dD2B5OSWdkGs1+dlOveoHrNju3NrmtZV6XVYxftLrrPwexM4LlmGp2rKsd0U3vraa4hk87P+aUhcr3Kd7kiatdhso38Wju5WOV6x+XZkmt396xMDlJApmG0TttpxJexPSnX3MW/u8rN1aK3vwl+G/i7RD2Mbub81p3/2eSPaaFe+p8w3uz+dxQpOxJtZpFy0Aw99jZxFGyKBZXZyrOXTkyzzhULTjHWMeJs8NLZQBZB4qVFDMYAJm6R3iRUpFU3znripT8JpkiULq/umUewJNKHRfzoOiwv3m9ZRZppsAw6Cc/ZQGM79bdSlm0IJO+OA6TukwkDXv4DCMhN/RMJAAA=', //paste your session here 
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "BEN", //replace with your owner name
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254727374449",   //replace with your owner number  
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://files.catbox.moe/4h8lfw.jpg",    //replace with your image url                     
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://github.com/Keithkeizzah", // replace with your url
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'BEN-MD', //replace with your bot name
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", //replace with your timezone 
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;

//Why do we call it "open source" when it feels more like "open wounds"?🗿🗿

//Because sharing is caring... and crying is healing🗿🗿

