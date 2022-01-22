export const ExperienceListItem = (props: any) => {
    return (
        <div className="list-item">
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
                            {item}
                        </li>
                    ))
                }
            </ul>
            <div className="flex">
                Tech stack :
                {
                    props.techstack.map((tech: string) => (
                        <p style={{
                            paddingLeft: 2,
                            paddingRight: 2,
                            fontSize: 15,
                            alignItems: "center",
                            justifyContent: 'center'
                        }}>
                            {tech.concat(", ")}
                        </p>
                    ))
                }
            </div>
        </div>
    );
};
