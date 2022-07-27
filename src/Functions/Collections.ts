import { APIUser } from "discord-api-types/v10";

let Collections = Object({
    users: {
        get: (userId: string) => {
            return Collections.users[userId]
        }
    },
    guilds: {
        get(guild_id: string) {
            return Collections.guilds[guild_id]
        }
    },
    levelGuilds: {
        "1": {
            value: 0,
            works: {
                "Caçador de bugs": {
                    value: 0,
                    experience: 0,
                },
                "Caçador de vírus": {
                    value: 1000,
                    experience: 5
                },
            }
        },
        "2": {
            value: 30000,
            works: {
                "Caçador de lendas": {
                    value: 1500,
                    experience: 7,
                    maxEarn: 500
                },
                "Caçador de chapéus":{
                    value: 2000,
                    experience: 10,
                    maxEarn: 650
                }
            }
        },
    },
    messageComponents: {
        get(interaction_id: string){
            return Collections.messageComponents[interaction_id]
        },
        set(interaction_id: string, data: any){
            return Collections.messageComponents[interaction_id] = {
                data
            }
        }
    }
})

export { Collections }