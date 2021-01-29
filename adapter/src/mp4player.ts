import AdvancedMediaPlayer from "./advancedmediaplayer";

export default class MP4Player implements AdvancedMediaPlayer {
  playVlc(fileName: string): void {
    //do nothing
  }
  playMp4(fileName: string): void {
    console.log("Playing MP4 file. Name: " + fileName);
  }
}
