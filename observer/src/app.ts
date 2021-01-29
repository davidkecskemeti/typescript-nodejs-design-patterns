import Author from "./author";
import Follower from "./follower";
import Tweet from "./tweet";

const follower1 = new Follower("david");
const follower2 = new Follower("bob");

const author = new Author();

author.subscribe(follower1);
author.subscribe(follower2);

author.sendTweet(new Tweet("Welcome", "Test"));
