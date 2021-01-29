import { AudioType } from "./audio-type";

export default interface MediaPlayer {
  play(audioType: AudioType, fileName: string): void;
}
