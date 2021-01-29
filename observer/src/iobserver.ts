import Tweet from "./tweet";

export default interface IObserver {
  onTweet(tweet: Tweet): string;
}
