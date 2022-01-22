import styles from '../styles/ExperienceListItem.module.css'

export const ExperienceListItem = (props: any) => {
    return (
        <div className="list-item">
            <div className='row1'>
                <p>{props.position}</p>
                <p>{props.duration}</p>
            </div>
            <p>{props.organisation}</p>
        </div>
    );
};
