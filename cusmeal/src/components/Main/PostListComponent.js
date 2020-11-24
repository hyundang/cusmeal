import style from 'styled-components';
import PostContainer from '../../containers/Main/PostContainer';
import ImgSliderContainer from '../../containers/Main/ImgSliderContainer';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const Wrap = style.div`
    position: absolute;
    top: 70vw;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(248, 246, 250, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImgSliderWrap = style.div`
    width: 100vw;
    height: 25vw;
    position: fixed;
    top: 40vw;
    padding: 3vw 0;
    padding-left: 5vw;
    background-color: rgba(248, 246, 250, 1);

`;

const PostsWrap = style.div`
    width: 100vw;
    height: 150vw;
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    justify-items: center;
    margin-top: 5vw;
`;

const PostList = style.div`
    position: absolute;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Space = style.div`
    width: 100vw;  
    height: 3vw; 
`;

const PostListComponent = ({history}) => {
    return(
        <>
            <ImgSliderWrap>
                <Space />
                <ImgSliderContainer />
            </ImgSliderWrap>
            <Wrap>
                <PostsWrap>
                    <PostContainer history={history} />
                    <PostContainer history={history} />
                    <PostContainer history={history} />
                    <PostContainer history={history} />
                    <PostContainer history={history} />
                    <PostContainer history={history} />
                </PostsWrap>
            </Wrap>
        </>
    );
}

export default PostListComponent;