
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Kate Sullivan, CNN",
            "title": "Biden rips GOP for not voting to raise debt limit: 'It's hypocritical, dangerous and disgraceful' - CNN",
            "description": "President Joe Biden on Monday said he couldn't guarantee the debt ceiling would be raised in two weeks as he slammed Republicans for opposing efforts to keep the nation from being unable to pay its debts for the first time in its history.",
            "url": "https://www.cnn.com/2021/10/04/politics/biden-debt-ceiling-remarks/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004115546-01-biden-1004-super-tease.jpg",
            "publishedAt": "2021-10-04T16:11:00Z",
            "content": "(CNN)President Joe Biden on Monday said he couldn't guarantee the debt ceiling would be raised in two weeks as he slammed Republicans for opposing efforts to keep the nation from being unable to pay … [+5167 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Richard Lawler",
            "title": "Facebook is down, along with Instagram, WhatsApp, Messenger, and Oculus VR - The Verge",
            "description": "A global Facebook outage started just before noon ET on Monday. Instagram, WhatsApp, and Messenger all appear to be affected by a DNS routing issue. There’s no estimate for when the services will be restored.",
            "url": "https://www.theverge.com/2021/10/4/22708989/instagram-facebook-outage-messenger-whatsapp-error",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/BX718uWWEZPX7soTgZg9ibvEjKs=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/15948786/acastro_180720_1777_facebook_0001.jpg",
            "publishedAt": "2021-10-04T16:01:29Z",
            "content": "Its DNS\r\nIllustration by Alex Castro / The Verge\r\nJust as Facebooks Antigone Davis was live on CNBCdefending the companys policies and its handling of research data suggesting Instagram is harmful to… [+1691 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Gabrielle Canon",
            "title": "California beaches closed as ‘devastating’ oil spill threatens wildlife - The Guardian",
            "description": "An estimated 126,000 gallons leaked from an underwater pipeline in one of the largest spills in recent state history",
            "url": "https://amp.theguardian.com/us-news/2021/oct/04/california-oil-spill-huntington-beach",
            "urlToImage": null,
            "publishedAt": "2021-10-04T15:59:00Z",
            "content": "CaliforniaAn estimated 126,000 gallons leaked from an underwater pipeline in one of the largest spills in recent state history\r\nTemperatures in southern California surged on Sunday, but Huntington st… [+5757 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Alexandra Garrett",
            "title": "Amazon to start 'Black Friday-worthy' deals today - CNET",
            "description": "Amazon Prime members now can send gifts without having to know the recipient's address.",
            "url": "https://www.cnet.com/home/smart-home/amazon-to-start-black-friday-worthy-deals-today/",
            "urlToImage": "https://www.cnet.com/a/img/LUfKkt1WXUQJmCHm1gzNltOu-ZI=/1200x630/2020/06/03/c19576ff-a3dd-4227-8e9b-549d6c53fed1/amazon-logo.jpg",
            "publishedAt": "2021-10-04T15:43:17Z",
            "content": "Amazon kicks off its holiday shopping deals early. \r\nAngela Lang/CNET\r\nAmazon is kicking off the holiday shopping season earlier than ever. The e-commerce giant said Monday that it will be unveiling … [+1001 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN.co.uk"
            },
            "author": "Michael DiRocco",
            "title": "Urban Meyer apologizes to Jacksonville Jaguars, family after viral video - ESPN.co.uk",
            "description": "Urban Meyer said Monday he apologized to his Jaguars players, his family and the team's owner after a viral video surfaced showing a young woman dancing close to his lap.",
            "url": "https://www.espn.co.uk/nfl/story/_/id/32337895/urban-meyer-apologizes-jacksonville-jaguars-family-viral-video",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0831%2Fr903060_1296x729_16%2D9.jpg",
            "publishedAt": "2021-10-04T15:43:04Z",
            "content": "JACKSONVILLE, Fla. -- Jaguars head coach Urban Meyer said Monday he apologized to his team, his family and owner Shad Khan after a viral video surfaced over the weekend that showed a young woman danc… [+1201 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Chloe Melas, CNN",
            "title": "William Shatner, 90, is headed to space with Audrey Powers on Jeff Bezos' Blue Origin mission - CNN",
            "description": "Captain Kirk is headed to space.",
            "url": "https://www.cnn.com/2021/10/04/entertainment/william-shatner-blue-origin-space-mission/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004113316-blue-origin-william-shatner-audrey-powers-split-super-tease.jpg",
            "publishedAt": "2021-10-04T15:42:00Z",
            "content": "(CNN)Captain Kirk is headed to space.\r\nJeff Bezos' Blue Origin announced Monday actor William Shatner, 90, will be on the next Blue Origin flight alongside Audrey Powers, Blue Origin's vice president… [+1022 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": null,
            "title": "New Zealnd announces plan to ease lockdown restrictions in Auckland : Coronavirus Updates - NPR",
            "description": "Since early in the pandemic, New Zealand had pursued a zero-tolerance approach through strict lockdowns and aggressive contact tracing. Until recently, the strategy had worked remarkably well.",
            "url": "https://www.npr.org/sections/coronavirus-live-updates/2021/10/04/1043050072/new-zealand-acknowledges-it-can-no-longer-completely-get-rid-of-the-coronavirus",
            "urlToImage": "https://media.npr.org/assets/img/2021/10/04/ap21277217610162_wide-286b7d041da062cc5fb22bbb6b7ead01807fa294.jpg?s=1400",
            "publishedAt": "2021-10-04T15:34:50Z",
            "content": "New Zealand Prime Minister Jacinda Ardern addresses a press conference in Wellington, New Zealand, on Oct. 4, 2021. New Zealand's government has acknowledged what most other countries did long ago: i… [+3407 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Staff Writer, Singapore",
            "title": "COVID: Priest saddened church follower hospitalised after taking ivermectin - Yahoo News",
            "description": "The parish priest of Church of the Risen Christ on Monday night (4 October) said he was saddened by reports that one of the church followers had been...",
            "url": "https://news.yahoo.com/priest-saddened-church-follower-hospitalisation-ivermectin-153109417.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/YNvtK.DlpuBTSq.j1E1ceA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-10/26d019c0-2526-11ec-be37-b839f68e2c74",
            "publishedAt": "2021-10-04T15:31:09Z",
            "content": "SINGAPORE The parish priest of Church of the Risen Christ on Monday night (4 October) said he was saddened by reports that one of the church followers had been hospitalised after consuming antiparasi… [+2628 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ryan Gaydos",
            "title": "Ex-Patriots star Asante Samuel rips Bill Belichick after loss to Tom Brady, Bucs - Fox News",
            "description": "Former New England Patriots cornerback Asante Samuel criticized Bill Belichick on Monday after the team’s narrow loss to the Tampa Bay Buccaneers.",
            "url": "https://www.foxnews.com/sports/patriots-asante-samuel-bill-belichick-loss-tom-brady-bucs",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/Bill-Belichick3.jpg",
            "publishedAt": "2021-10-04T15:29:55Z",
            "content": "Former New England Patriots cornerback Asante Samuel criticized Bill Belichick on Monday after the teams narrow loss to the Tampa Bay Buccaneers.\r\nSamuel, whos been one of Belichicks biggest critics … [+2835 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Bill Chappell",
            "title": "Get a fan and get vaccinated, the CDC says in its safety tips for the holidays - NPR",
            "description": "\"When you have something spread by aerosol, you absolutely want more ventilation,\" Dr. Anthony Fauci, chief medical adviser to President Biden, said in an interview with CBS.",
            "url": "https://www.npr.org/sections/coronavirus-live-updates/2021/10/04/1043020857/cdc-tips-for-celebrating-the-holidays-safely-covid",
            "urlToImage": "https://media.npr.org/assets/img/2021/10/04/gettyimages-1293978960_wide-40314e879970d6d5e53e768472e776f2d3433607.jpg?s=1400",
            "publishedAt": "2021-10-04T15:15:41Z",
            "content": "Above, a child walks by a Christmas display in New York City last year. Dr. Anthony Fauci, the nation's top infectious disease expert, says it's \"too soon to tell\" if Americans will be able to gather… [+3488 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The A.V. Club"
            },
            "author": "Gabrielle Sanchez",
            "title": "Time's running out for Andrew Garfield in trailer for Lin-Manuel Miranda's adaptation of tick, tick... BOOM! - The A.V. Club",
            "description": "Tony-winner Andrew Garfield plays Rent creator Jonathan Larson in the autobiographical musical",
            "url": "https://www.avclub.com/times-running-out-for-andrew-garfield-in-trailer-for-li-1847792708",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f5e870b1fa8ee190b3124d250a96d227.png",
            "publishedAt": "2021-10-04T15:14:00Z",
            "content": "In the full trailer for Netflixstick, tick... BOOM!, starring Andrew Garfield, we see young playwright Jonathan Larson grasping for glory with his next musical creation. In addition to the trailer, t… [+2110 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Pam Belluck",
            "title": "A ‘Pacemaker for the Brain’: No Treatment Helped Her Depression — Until This - The New York Times",
            "description": "It’s the first study of individualized brain stimulation to treat severe depression. Sarah’s case raises the possibility the method may help people who don’t respond to other therapies.",
            "url": "https://www.nytimes.com/2021/10/04/health/depression-treatment-deep-brain-stimulation.html",
            "urlToImage": "https://static01.nyt.com/images/2021/10/05/science/04sci-depression1/04sci-depression1-facebookJumbo.jpg",
            "publishedAt": "2021-10-04T15:00:11Z",
            "content": "Dr. Sheth said the first patient, given the device in March 2020, is remarkably well now, maintaining a relationship and becoming a father. To test for a placebo effect, researchers gradually stopped… [+1906 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "MICHAEL KUNZELMAN Associated Press",
            "title": "Henrietta Lacks' estate sues company over use of her cells - ABC News",
            "description": "",
            "url": "https://abcnews.go.com/Health/wireStory/henrietta-lacks-estate-sues-company-cells-80394519",
            "urlToImage": "https://s.abcnews.com/images/Health/WireAP_a9e030dc76bd4a32811e6433b025ed6f_16x9_992.jpg",
            "publishedAt": "2021-10-04T14:04:32Z",
            "content": "COLLEGE PARK, Md. -- The estate of Henrietta Lacks sued a pharmaceutical company on Monday, accusing it of selling cells that doctors at Johns Hopkins Hospital took from the Black woman in 1951 witho… [+2816 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Andrew Murray",
            "title": "Florida Gov. DeSantis' wife diagnosed with breast cancer - Fox News",
            "description": "Casey DeSantis, the wife of Gov. Ron DeSantis of Florida, has been diagnosed with breast cancer.",
            "url": "https://www.foxnews.com/politics/florida-gov-desantis-wife-diagnosed-with-breast-cancer",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/Casey-Ron-DeSantis.jpg",
            "publishedAt": "2021-10-04T13:59:14Z",
            "content": "EXCLUSIVE - Casey DeSantis, the wife of Gov. Ron DeSantis of Florida, has been diagnosed with breast cancer.\r\n\"I am saddened to report that Floridas esteemed First Lady and my beloved wife has been d… [+1394 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Caitlin Caitlin",
            "title": "Bright blue fireball caught on videos over Colorado - CBS News",
            "description": "About six people described hearing a boom during the fireball sighting — one person said it was so bright, it charged his solar lights.",
            "url": "https://www.cbsnews.com/news/bright-blue-fireball-video-colorado/",
            "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2021/10/04/f1678a6e-92f3-47ee-a7a8-11d999bbf845/thumbnail/1200x630/620b9bb7ed36300bb1475d9e7ccbdc35/screen-shot-2021-10-04-at-9-20-08-am.png",
            "publishedAt": "2021-10-04T13:46:47Z",
            "content": "More than 40 people reported a fireball sighting Sunday morning, mainly over Colorado. The fireball was also seen in Wyoming and New Mexico and 12 people submitted videos to the American Meteor Socie… [+3093 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Dennis Overbye",
            "title": "A Nobel Prize for Stephen Hawking That Might Have Been - The New York Times",
            "description": "A recent study of black holes confirmed a fundamental prediction that the theoretical physicist made nearly five decades ago. But the ultimate award is beyond his reach.",
            "url": "https://www.nytimes.com/2021/10/04/science/hawking-nobel-black-hole.html",
            "urlToImage": "https://static01.nyt.com/images/2021/08/25/science/00SCI-OUTTHERE-HAWKING1/00SCI-OUTTHERE-HAWKING1-facebookJumbo.jpg",
            "publishedAt": "2021-10-04T13:46:21Z",
            "content": "The quest to understand what happens to information in a black hole has transformed fundamental physics and energized a generation of young theorists. At stake is whether Einsteinian gravity, which g… [+1796 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Jill Goldsmith",
            "title": "Ozy Media Not Shutting But “Open For Business” Says Carlos Watson; Takes Dig At Sharon Osbourne - Deadline",
            "description": "Embattled Ozy Media continues to make headlines as founder-CEO Carlo Watson told the Today show the company is not in fact shutting down as it had previously announced in the wake of a fast unfolding financial scandal where he had been conspicuously absent. W…",
            "url": "https://deadline.com/2021/10/ozy-media-carlos-watson-youtube-today-show-1234849009/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2020/08/carloswatson.png?w=1024",
            "publishedAt": "2021-10-04T13:27:00Z",
            "content": "Embattled Ozy Media continues to make headlines as founder-CEO Carlo Watson told the Today show the company is not in fact shutting down as it had previously announced in the wake of a fast unfolding… [+4538 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ann Schmidt",
            "title": "National Taco Day: The history behind the handheld, fast food favorite - Fox News",
            "description": "Here’s what you need to know about the history of the taco.",
            "url": "https://www.foxnews.com/food-drink/national-taco-day-history",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/tacos-1-iStock.jpg",
            "publishedAt": "2021-10-04T13:26:42Z",
            "content": "Today marks the 12th anniversary of National Taco Day. \r\nAccording to the Farmers Almanac, National Taco Day, which falls on Oct. 4 every year, was started in 2009 by the restaurant chain Del Taco. \r… [+2473 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Four things we learned from the Carolina Panthers’ 36-28 loss to the Dallas Cowboys - Charlotte Observer",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiVGh0dHBzOi8vd3d3LmNoYXJsb3R0ZW9ic2VydmVyLmNvbS9zcG9ydHMvbmZsL2Nhcm9saW5hLXBhbnRoZXJzL2FydGljbGUyNTQ3MzcwNDIuaHRtbNIBVGh0dHBzOi8vYW1wLmNoYXJsb3R0ZW9ic2VydmVyLmNvbS9zcG9ydHMvbmZsL2Nhcm9saW5hLXBhbnRoZXJzL2FydGljbGUyNTQ3MzcwNDIuaHRtbA?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-10-04T13:20:49Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Phys.Org"
            },
            "author": "Bob Yirka",
            "title": "Simulations suggest an Earth or Mars size planet may be lurking out beyond Neptune - Phys.org",
            "description": "A team of space scientists has published a paper in Annual Review of Astronomy and Astrophysics suggesting that there may be an Earth- or Mars-sized planet orbiting beyond Neptune. They further suggest that simulations of the creation of the solar system show…",
            "url": "https://phys.org/news/2021-10-simulations-earth-mars-size-planet.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2021/neptune.jpg",
            "publishedAt": "2021-10-04T13:18:29Z",
            "content": "A team of space scientists has published a paper in Annual Review of Astronomy and Astrophysics suggesting that there may be an Earth- or Mars-sized planet orbiting beyond Neptune. They further sugge… [+2485 chars]"
        }
    ]
    static defaultProps = {
        category: 'general',
    }
    static propTypes = {
        category: PropTypes.string,
    }
    constructor() {

        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: this.totalResults
        }
    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d932f3bd222a4431bb1c64c189301b6c&page=1`;
        this.setState({
            loading: true,
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, loading: false
        })
    }
    handleupnext = async () => {
        console.log("I am next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d932f3bd222a4431bb1c64c189301b6c&page=${this.state.page + 1}`;
            this.setState({
                loading: true,
            })
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles, page: this.state.page + 1, totalResults: parsedData.totalResults, loading: false
            })
        }
    }
    handleupprev = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d932f3bd222a4431bb1c64c189301b6c&page=${this.state.page - 1}`;
        this.setState({
            loading: true,
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, page: this.state.page - 1, loading: false
        })
    }
    fetchData=async()=>{
        this.setState({page:this.state.page+1})
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d932f3bd222a4431bb1c64c189301b6c&page=${this.state.page - 1}`;
        this.setState({
            loading: true,
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),  loading: false
        })
    }
    render() {
        return (

            <>
               
                <div className="container my-3">
                <div className="row">
                    {this.state.loading && <Spinner/>}
                        
                    { this.state.articles.map((element) => {
                        return <div className="col-md-4"  key={element.url}>
                        <NewsItem title={element.title} description={element.description} newsUrl={element.url} imageurl={element.urlToImage} date={element.publishedAt} author={element.author} source={element.source.name}/>
                        </div>

                    })}
                    {/* !this.state.loading && */}

                </div>
                <div className="container d-flex justify-content-between my-3">
                <button disabled={this.state.page<=1} className="btn-dark" id="btn-prev" onClick={this.handleupprev}>	&larr; Previous</button>
                <button className="btn-dark" id="btn-next" onClick={this.handleupnext}>Next	&rarr; </button>
                </div>
            </div>
            <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length!==this.totalResults}
                    loader={<Spinner/>}>
                </InfiniteScroll>
            </>
        )
    }
}
