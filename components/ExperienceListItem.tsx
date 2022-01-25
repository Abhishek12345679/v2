export const ExperienceListItem = (props: any) => {
    return (
        <div
            className="list-item"
            key={props.keyProp}
        >
            <div className='row1'>
                <div className="col1">
                    <p className="white-font">{props.position}</p>
                    <p className="subtitle">{props.organisation}</p>
                </div>
                <p className="subtitle">{props.duration}</p>
            </div>
            <ul>
                {
                    props.description.map((item: string, index: number) => (
                        <li
                            key={index}
                            className="exp-desc-item"
                        >
                            <h3>{item}</h3>
                        </li>
                    ))
                }
            </ul>
            <div className="flex">
                <p className="subtitle">Tech stack used: {props.techstack} </p>
            </div>
        </div>
    );
};
