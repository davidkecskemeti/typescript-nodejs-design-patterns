import AdvancedMediaPlayer from "./advancedmediaplayer";

export default class VlcPlayer implements AdvancedMediaPlayer {
  playVlc(fileName: string): void {
    console.log("Playing VLC file. Name: " + fileName);
  }
  playMp4(fileName: string): void {
    //do nothing
  }
}
