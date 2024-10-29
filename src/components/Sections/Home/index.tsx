import Image from 'next/image';
import Container from '@/components/Cards/Container';
import GitHub from '@/resources/svgs/contact-icons/github.svg';
import LinkedIn from '@/resources/svgs/contact-icons/linkedin.svg';
import Mail from '@/resources/svgs/contact-icons/mail.svg';
import Resume from '@/resources/svgs/resume.svg';
import styles from './home.module.scss';
import Code  from '@/resources/svgs/contact-icons/code.svg';

export default function Home() {
    return (
        <Container id={'home'} className={'home'}>
            <div className={styles['home-container']}>
                <div className={styles.status}>
                    <div className={styles['status-circle']}></div>
                    Online.
                </div>
                <div className={styles.introduction}>
                    Hey, I&apos;m Deepanshu Sharma
                    <div className={styles.occupation}>
                        Fullstack Developer.
                    </div>
                </div>
                <div className={styles.contacts}>
                    <a href="https://drive.google.com/file/d/1xu7Ci3Slhm_wRSZ3jXkRYScuJLGxptxW/view?usp=sharing" target="_blank"
                       className={styles['resume-button']}>
                        <Image src={Resume} alt={'GitHub'} className={styles.icon} width={20} height={20}/>
                        <div className={styles.label}>Resume</div>
                    </a>
                    <a href="https://github.com/deepanshuxharry" target="_blank" className={styles.links}>
                        <Image src={GitHub} alt={'GitHub'} className={styles.icon} width={20} height={20}/>
                        <div className={styles.label}>GitHub</div>
                    </a>
                    <a href="https://www.linkedin.com/in/deepanshu-sharma-b7a122236/" target="_blank"
                       className={styles.links}>
                        <Image src={LinkedIn} alt={'LinkedIn'} className={styles.icon} width={18} height={18}/>
                        <div className={styles.label}>LinkedIn</div>
                    </a>
                    <a href="mailto: deepanshu43sharma@gmail.com" className={styles.links}>
                        <Image src={Mail} alt={'Mail'} className={styles.icon} width={22} height={22}/>
                        <div className={styles.label}>Mail</div>
                    </a>
                    <a href="https://www.naukri.com/code360/profile/1e497968-e862-41f5-9003-d2de2205788e" className={styles.links}>
                        <Image src={Code} alt={'Mail'} className={styles.icon} width={22} height={22}/>
                        <div className={styles.label}>Code 360°</div>
                    </a>
                </div>
                <hr className={styles.divider}/>
                <div className={styles.summery}>
                    <p>
                        Hey!, I&apos;m Deepanshu Sharma, <b> Experienced full-stack developer </b>  with
                        over 2
                        years of
                        experience
                        in <b>React</b>,<b> Next</b>,<b> Node</b>.js with<b> MongoDB</b>. Ready to
                        build innovative web applications and always putting out creative solutions to
                        problems.
                    </p><br/>
                  
                    {/* <p>
                        When I’m not at the computer, I’m usually playing football, reading books, watching movies,
                        relaxing at the
                        beach thinking about the next big thing.
                    </p> */}
                </div>
            </div>
        </Container>
    );
}

