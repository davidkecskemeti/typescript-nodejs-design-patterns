import Follower from "./follower";
import IObservable from "./iobservable";
import Tweet from "./tweet";
import tweet from "./tweet";

export default class Author implements IObservable {
  
    protected observers: Follower[] = [];

  notify(tweet: Tweet) {
    this.observers.forEach((observer) => {
      observer.onTweet(tweet);
    });
  }
  subscribe(observer: Follower) {
    this.observers.push(observer);
  }
  sendTweet(tweet: tweet) {
    this.notify(tweet);
  }
}
