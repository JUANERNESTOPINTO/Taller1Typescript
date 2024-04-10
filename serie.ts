export class Serie {
    name: string;
    channel: string;
    season: number;
  
    constructor(indice:any,name: string, channels: string, seasons: number, description: string, link: string, image: string) {
      this.name = name;
      this.channel = channels;
      this.season = seasons;
    }
  }