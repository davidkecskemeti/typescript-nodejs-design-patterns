import { AudioType } from "./audio-type";
import MediaAdapter from "./mediaadapter";
import MediaPlayer from "./mediaplayer";

export default class AudioPlayer implements MediaPlayer {
  mediaAdapter: MediaAdapter | undefined;

  play(audioType: AudioType, fileName: string): void {
    //inbuilt support to play mp3 music files
    if (audioType === AudioType.MP3) {
      console.log("Playing mp3 file. Name: " + fileName);
    }

    //mediaAdapter is providing support to play other file formats
    else if (audioType === AudioType.MP4 || audioType === AudioType.VLC) {
      this.mediaAdapter = new MediaAdapter(audioType);
      this.mediaAdapter.play(audioType, fileName);
    } else {
      console.log("Invalid media. " + audioType + " format not supported");
    }
  }
}
