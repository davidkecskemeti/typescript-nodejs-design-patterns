import Tweet from "./tweet";

export default interface IObservable {
  sendTweet(tweet: Tweet): any;
}
