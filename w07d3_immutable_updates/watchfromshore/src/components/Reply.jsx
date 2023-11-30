export default function Reply(props) {

    const reply = props.reply;
    const incrementReplyCount = props.incrementReplyCount;

    console.log('reply', reply);

// {
//     user: 1,
//     bodyText: 'yes, I see 6',
//     likeCount: 0
// },

    return (
<div className="reply">
<div className="user">User Id:{reply.user}</div>
<div className="reply">Reply Id:{reply.id}</div>
<div className="count">Like Count:{reply.likeCount}</div>
<p>{reply.bodyText}</p>
<div className="counter">
    <button>-</button>
    {reply.likeCount}
    <button onClick={() => {
        incrementReplyCount(reply.id);
    }}>+</button>
    </div>
</div>
    );
}



