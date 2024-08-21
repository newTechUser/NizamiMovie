import "./latestNews.scss";
import NewsPic from "@/assets/imgs/latestNews/news1.png";

const LastestNews = () => {
    return (
        <div className='container__latestNews'>
            <h1 className='container__latestNews__title'>Latest news</h1>
            <div className='container__latestNews__flex'>
                <div className='container__latestNews__flex--img'></div>
                <div className='container__latestNews__flex--news'>
                    <div className='container__latestNews__flex--news-1'>
                        <div>
                            <img src={NewsPic} alt='newsPic' />
                        </div>
                        <div>
                            <i>25.03.2022</i>
                            <p>An event titled "April battles and victory" dedicated to the Armed Forces Day was held at the Nizami Cinema Center</p>
                        </div>
                    </div>
                    <div className='container__latestNews__flex--news-2'>
                        <div>
                            <img src={NewsPic} alt='newsPic' />
                        </div>
                        <div>
                            <i>25.03.2022</i>
                            <p>An event titled "April battles and victory" dedicated to the Armed Forces Day was held at the Nizami Cinema Center</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastestNews;
