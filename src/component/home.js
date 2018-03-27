import React from 'react';
import './home.css'
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import {Carousel} from 'react-bootstrap';
import about from './about.js';

import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
  TwitterShareCount
} from 'react-share';

import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  EmailShareButton,
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  EmailIcon,
} from 'react-share';

export default class Home extends React.Component {
    render() {
        return (
            <div id="page-wrap">
        	    <Header />
                <Carousel>
                    <Carousel.Item className='slide1'>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='slide2'>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='slide3'>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
                <FacebookShareButton quote='test' hashtag='about' />
                <FacebookShareCount url={about}>
                    {shareCount => (
                    <span className="myShareCountWrapper">{shareCount}</span>
                    )}
                </FacebookShareCount>
                <FacebookIcon size={32} round={true} />

                <div class="fb-share-button" data-href="https://usask.ca" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fusask.ca%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>           		<br/>
           		<TwitterShareButton quote='test' hashtag='about' />
                <TwitterIcon size={32} round={true} />
                <a class="twitter-share-button"
                  href="https://twitter.com/intent/tweet?text=%20www.usask.ca"
                  data-size="large">
                Tweet</a>
           		<br/><br/>
                <a href="https://plus.google.com/share?url=https://usask.ca" onclick="javascript:window.open(this.href,
                  '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><img
                  src="https://www.gstatic.com/images/icons/gplus-32.png" alt="Share on Google+"/></a>
           		<Footer/>
        	</div>
        );
  }
}