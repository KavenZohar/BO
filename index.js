import dotenv from 'dotenv';
dotenv.config();
import { Client, GatewayIntentBits } from "discord.js";
import express from 'express';
import { A } from "./words/9h15.js";
import { B } from "./words/12h.js";
import { C } from "./words/20h45.js";
import { D } from "./words/21h30.js";
import { E } from "./words/22h.js";
import { F } from "./words/23h30.js";

const app = express();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const TOKEN = process.env.DISCORD_TOKEN;
const channelId = "1249765182071373878";
const userTag = "<@792563964067708959>";

const a = A;
const b = B;
const c = C;
const d = D;
const e = E;
const f = F;

app.get('/', (req, res) => {
    res.send('Kaven is online!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Project is running on port ${PORT}!`);
});

client.on("ready", () => {
    console.log(`${client.user.tag} is ready!`);

    const channel = client.channels.cache.get(channelId);

    setInterval(() => {
        const date = new Date();
        const options = {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Asia/Ho_Chi_Minh",
        };
        const formatter = new Intl.DateTimeFormat("vi-VN", options);
        const [formattedHours, formattedMinutes] = formatter.format(date).split(":");

        const Hours = parseInt(formattedHours, 10);
        const Minutes = parseInt(formattedMinutes, 10);

        if (Hours === 9 && Minutes === 15) {
            if (channel) {
                channel.send(a[0] + userTag).catch(console.error);
            }
        } else if (Hours === 12 && Minutes === 0) {
            if (channel) {
                channel.send(b[0] + userTag).catch(console.error);
            }
        } else if (Hours === 20 && Minutes === 45) {
            if (channel) {
                channel.send(c[0] + userTag).catch(console.error);
            }
        } else if (Hours === 21 && Minutes === 30) {
            if (channel) {
                channel.send(d[0] + userTag).catch(console.error);
            }
        } else if (Hours === 22 && Minutes === 0) {
            if (channel) {
                channel.send(e[0] + userTag).catch(console.error);
            }
        } else if (Hours === 23 && Minutes === 30) {
            if (channel) {
                channel.send(f[0] + userTag).catch(console.error);
            }
        }
    }, 60000);
});

client.login(TOKEN);
