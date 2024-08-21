import Timeline from "@/components/TimeLine/TimeLine";
import { users, UserData } from "@/db/timeLine";
import "./pearls.scss";

const Pearls = () => {
    return (
        <div className='container'>
            <h2>Pearls of Azerbaijani cinema</h2>
            <div>
                {users.map((user: UserData) => (
                    <div className='user__container' key={user.id}>
                        <div className='user__container--timeLine'>
                            <Timeline />
                        </div>
                        <div className='user__container--content'>
                            <div className='user__container--content-img'>
                                <img src={user.content.pic} />
                            </div>
                            <div className='user__container--content-info'>
                                <p className='user__container--content-info-type'>{user.content.typeOfPearl}</p>
                                <h2 className='user__container--content-info-header'>{user.content.headerOfPearl}</h2>
                                <p className='user__container--content-info-text'>{user.content.textOfPearl}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pearls;
