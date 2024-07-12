function LineBreak({lines})
{
    let content = [];
    for (let i = 0; i < lines; i++) {
      content.push(<br/>);
    }
    return content;
}

export default LineBreak;