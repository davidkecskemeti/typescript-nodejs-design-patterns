import AdvancedMediaPlayer from "./advancedmediaplayer";
import { AudioType } from "./audio-type";
import MediaPlayer from "./mediaplayer";
import MP4Player from "./mp4player";
import VlcPlayer from "./vlcplayer";

export default class MediaAdapter implements MediaPlayer {
  advancedMediaPlayer: AdvancedMediaPlayer | undefined;

  constructor(audioType: AudioType) {
    if (audioType === AudioType.VLC) {
      this.advancedMediaPlayer = new VlcPlayer();
    } else if (audioType === AudioType.MP4) {
      this.advancedMediaPlayer = new MP4Player();
    }
  }

  play(audioType: AudioType, fileName: string): void {
    if (audioType === AudioType.VLC) {
      this.advancedMediaPlayer?.playVlc(fileName);
    } else if (audioType === AudioType.MP4) {
      this.advancedMediaPlayer?.playMp4(fileName);
    }
  }
}
