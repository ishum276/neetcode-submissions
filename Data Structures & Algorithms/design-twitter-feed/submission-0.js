class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent].time >= this.heap[i].time) break;

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (
                left < this.heap.length &&
                this.heap[left].time > this.heap[largest].time
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].time > this.heap[largest].time
            ) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

            i = largest;
        }

        return top;
    }

    get size() {
        return this.heap.length;
    }
}

class Twitter {
    constructor() {
        this.time = 0;

        // userId -> Set of followeeIds
        this.following = new Map();

        // userId -> [{ tweetId, time }]
        this.tweets = new Map();
    }

    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }

        this.tweets.get(userId).push({
            tweetId,
            time: this.time++
        });
    }

    follow(followerId, followeeId) {
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set());
        }

        this.following.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (!this.following.has(followerId)) return;

        this.following.get(followerId).delete(followeeId);
    }

    getNewsFeed(userId) {
        const heap = new MaxHeap();

        // We need our own tweets
        const users = new Set([userId]);

        // Plus everyone we follow
        if (this.following.has(userId)) {
            for (const followeeId of this.following.get(userId)) {
                users.add(followeeId);
            }
        }

        // Put the most recent tweet of every user into heap
        for (const id of users) {
            const tweets = this.tweets.get(id);

            if (!tweets || tweets.length === 0) continue;

            const index = tweets.length - 1;

            heap.push({
                tweetId: tweets[index].tweetId,
                time: tweets[index].time,
                userId: id,
                index: index
            });
        }

        const result = [];

        while (heap.size > 0 && result.length < 10) {
            const current = heap.pop();

            result.push(current.tweetId);

            // Get the previous tweet from the same user
            const previousIndex = current.index - 1;

            if (previousIndex >= 0) {
                const tweet = this.tweets
                    .get(current.userId)[previousIndex];

                heap.push({
                    tweetId: tweet.tweetId,
                    time: tweet.time,
                    userId: current.userId,
                    index: previousIndex
                });
            }
        }

        return result;
    }
}