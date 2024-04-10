export class Serie {
    name: string;
    channel: string;
    season: string;
  
    constructor(indice:any,name: string, channels: string, seasons: string, description: string, link: string, image: string) {
      this.name = name;
      this.channel = channels;
      this.season = seasons;
    }
  }