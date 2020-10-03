import MainVisual from "../components/MainVisual";
import Message from "../components/Message";
import Notices from "../components/Notices";
import Contents from "../components/Contents";
import Layout from "../components/Layout";
import {getNotices} from "../lib/notices";
import {getFixedContents} from "../lib/contents";
import {getPickUpProject} from "../lib/projects";

export default function Index({fixedContents, pickupProject, notices}) {
    return (
        <div>
            <Layout>
                <MainVisual/>
                <div className="max-w-3xl container ml-auto mr-auto">
                    <Message/>
                    <Notices notices={notices}/>
                    <Contents fixedContents={fixedContents}/>
                    <iframe className="mb-6" width="100%" height="360px"
                            src={pickupProject.movie} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {

    return {
        props: {
            fixedContents: getFixedContents(),
            pickupProject: getPickUpProject(),
            notices: getNotices()
        }
    }
}