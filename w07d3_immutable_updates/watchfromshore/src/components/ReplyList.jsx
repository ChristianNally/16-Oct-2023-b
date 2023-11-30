import Reply from './Reply';

export default function ReplyList(props) {
    const replies = props.replies;
    console.log('replies', replies);

    return (
        <section className="replies">
            <h4>Replies</h4>
            { replies.map((item, index) => {return <Reply key={index} reply={item} incrementReplyCount={props.incrementReplyCount}/>}) }
        </section>
    );
}
