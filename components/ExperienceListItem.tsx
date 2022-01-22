export const ExperienceListItem = (props: any) => {
    return (
        <div>
            <p className="white-font">{props.position}</p>
            <p className="white-font">{props.duration}</p>
            <p className="white-font">{props.organisation}</p>
        </div>
    );
};
