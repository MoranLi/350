import React from 'react';
import './footer.css';
import about from '../about.js';
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

export default class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
           		<ul className="footer-list">
                
        			<li id="follow">Share Us:</li>
                    <li className="social">
                    <FacebookIcon size={32} round={true} />
                    <div class="fb-share-button" data-href="http://interface350.herokuapp.com/home" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Finterface350.herokuapp.com/home%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>                <br/>
                    </li>

                    <li className="social">
                    <TwitterIcon size={32} round={true} />
                    <a class="social"
                      href="https://twitter.com/intent/tweet?text=%20http://interface350.herokuapp.com/home"
                      data-size="large">
                    Tweet</a>
                    </li>

                    <li className="social">
                    <a href="https://plus.google.com/share?url=http://interface350.herokuapp.com/home" onclick="javascript:window.open(this.href,
                      '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><img
                      src="https://www.gstatic.com/images/icons/gplus-32.png" alt="Share on Google+"/></a>
                    </li>
                	<li className="footer-menu-item"><a href="#contact">Contact</a></li>
        			<li className="footer-menu-item"><a href="#store">Store</a></li>
        			<li className="footer-menu-item"><a href="#about">About</a></li>
        		</ul>
        		<p>&#x40; 2016 Atom Ltd. All Rights Reserved.</p>
           	</div>
        )
    }
}