import IObserver from "./iobserver";
import Tweet from "./tweet";
import tweet from "./tweet";

export default class Follower implements IObserver {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  onTweet(tweet: Tweet): string {
    console.log(this.name + " you got a tweet =>" + tweet.getMessage());
    return this.name + " you got a tweet =>" + tweet.getMessage();
  }
}
