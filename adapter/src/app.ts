import AudioPlayer from "./audio-player";
import { AudioType } from "./audio-type";

const audioPlayer = new AudioPlayer();
audioPlayer.play(AudioType.MP3, "beyond the horizon.mp3");
audioPlayer.play(AudioType.MP4, "alone.mp4");
audioPlayer.play(AudioType.VLC, "far far away.vlc");
audioPlayer.play(AudioType.AVI, "mind me.avi");
