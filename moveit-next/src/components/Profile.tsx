import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src='https://github.com/vini3brito.png' alt='' />
            <div>
                <strong>Vinicius Brito</strong>
                <p>
                    <img src='icons/level.svg' alt='Level' />
                    Level 1
                </p>
            </div>
        </div>
    )
}