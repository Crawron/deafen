import { Client } from "discord.js"
import "dotenv/config"

if (process.env.MAIN_USER_ID === undefined) process.exit(1)
if (process.env.ALT_USER_ID === undefined) process.exit(1)

const client = new Client({ intents: ["GUILDS", "GUILD_VOICE_STATES"] })

client.on("voiceStateUpdate", (oldState, newState) => {
	if (newState.id !== process.env.MAIN_USER_ID) return

	if (newState.mute != undefined)
		newState.channel?.members
			.get(process.env.ALT_USER_ID!)
			?.voice.setMute(newState.mute)

	if (newState.deaf != undefined)
		newState.channel?.members
			.get(process.env.ALT_USER_ID!)
			?.voice.setDeaf(newState.deaf)
})

client.login(process.env.TOKEN)
