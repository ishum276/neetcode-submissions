class MaxHeap{
    constructor(){
        this.heap=[]
    }
    size(){
        return this.heap.length;
    }
    push(value){
        this.heap.push(value)
        let i=this.heap.length-1;
        while(i>0){
            const parent=Math.floor((i-1)/2)
            if(this.heap[i].time<=this.heap[parent].time) break;
            [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]]
            i=parent;
        }
    }
    pop(){
        const max=this.heap[0];
        const last = this.heap.pop()
        if(this.heap.length===0) return max;
        this.heap[0]=last;
        let i=0;
        while(true){
            const left=i*2+1
            const right=i*2+2;
            let largest=i;
            if(left<this.heap.length && this.heap[left].time>this.heap[largest].time)
            largest=left;
            if(right<this.heap.length && this.heap[right].time>this.heap[largest].time) largest=right
            if(i===largest) break;
            [this.heap[i],this.heap[largest]]=[this.heap[largest],this.heap[i]]
            i=largest;
        }
        return max;
    }
}
class Twitter {
    constructor() {
        this.time=0;
        this.following=new Map()
        this.tweets=new Map()
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.tweets.has(userId)) {
            this.tweets.set(userId,[])
        }
        this.tweets.get(userId).push({tweetId,time:this.time++});
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const heap= new MaxHeap();
        const users= new Set([userId]);
        if(this.following.has(userId)){
            for(const followeeId of this.following.get(userId))
            {
                users.add(followeeId)
            }
        }   
        for(const id of users){
            const tweets = this.tweets.get(id);
            if(!tweets || tweets.length===0) continue;
            const index=tweets.length-1;
            heap.push({tweetId:tweets[index].tweetId,
                       time:tweets[index].time,
                       userId:id,
                       index:index})
        }
        const result=[];
        while(heap.size()>0 && result.length<10 ){
            const current=heap.pop();
            result.push(current.tweetId);
            const previousIndex=current.index-1;
            if(previousIndex>=0){
                const tweet = this.tweets.get(current.userId)[previousIndex];
                heap.push({
                    tweetId:tweet.tweetId,
                    time:tweet.time,
                    userId:current.userId,
                    index: previousIndex
                })
            }
        }
        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.following.has(followerId)){
            this.following.set(followerId,new Set())
        }
        this.following.get(followerId).add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(!this.following.has(followerId)) return;
        this.following.get(followerId).delete(followeeId)
    }
}
