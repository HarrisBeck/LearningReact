function Message()
{
    const myName = 'Maddie';

    if (myName)
        return <h1>Hello World {myName}</h1>
    else
        return <h1>Hello World</h1>
}

export default Message;