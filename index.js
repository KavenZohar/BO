import dotenv from 'dotenv';
dotenv.config();
import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";
import express from 'express';
import axios from 'axios';

import { A } from "./words/9h15.js";
import { B } from "./words/12h.js";
import { C } from "./words/20h45.js";
import { D } from "./words/21h30.js";
import { E } from "./words/22h.js";
import { F } from "./words/23h30.js";
import { KPI } from "./words/kpi.js";

const app = express();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const TOKEN = process.env.DISCORD_TOKEN;
const channelId = "1259522254619017278";
const userTag = "<@810103122159730738>";

const a = A;
const b = B;
const c = C;
const d = D;
const e = E;
const f = F;
const kpi = KPI;

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

        try {
            if (Hours === 9 && Minutes === 15) {
                let i = Math.floor(Math.random() * a.length);
                if (channel) {
                    channel.send(a[i] + userTag);
                }
            } else if (Hours === 12 && Minutes === 0) {
                let i = Math.floor(Math.random() * b.length);
                if (channel) {
                    channel.send(b[i] + userTag);
                }
            } else if (Hours === 20 && Minutes === 45) {
                let i = Math.floor(Math.random() * c.length);
                if (channel) {
                    channel.send(c[i] + userTag);
                }
            } else if (Hours === 21 && Minutes === 30) {
                let i = Math.floor(Math.random() * d.length);
                if (channel) {
                    channel.send(d[i] + userTag);
                }
            } else if (Hours === 22 && Minutes === 0) {
                let i = Math.floor(Math.random() * e.length);
                if (channel) {
                    channel.send(e[i] + userTag);
                }
            } else if (Hours === 23 && Minutes === 30) {
                let i = Math.floor(Math.random() * f.length);
                if (channel) {
                    channel.send(f[i] + userTag);
                }
            }
        } catch (e) {
            console.error(e);
        }

        const y = `${Hours}${Minutes}`;
        try {
            switch (y) {
                case "530":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
    
                case "930":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "1130":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "1345":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "1430":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "1538":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "1620":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "1730":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "1845":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "2010":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "2120":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "2200":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
                case "2300":
                    if (channel) {
                        channel.send(kpi[0] + userTag);
                    }
                    break;
            }
        } catch (e) {
            console.error(e);
        }
    }, 60000);
});

client.login(TOKEN);
