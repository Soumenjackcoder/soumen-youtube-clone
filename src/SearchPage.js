import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image='https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo'
        channel='Clever Programmer'
        verified
        subs='660K'
        noOfVideos={382}
        description='You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...'
      />

      <hr />
      <VideoRow
        views='97K'
        subs='742K'
        description='In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, NETFLIX CLONE using React, Firebase & Material-UI...'
        timestamp='1 month ago'
        channel='Clever Programmer'
        title='🔴 How to Build a NETFLIX Clone with REACT JS for Beginners (in 3 Hours!)'
        image='https://i.ytimg.com/vi/XtMThy8QKqU/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAcqxmWCJapwqZl__9QArDQPCI_0g'
      />
      <VideoRow
        views='22K'
        subs='742K'
        description='In this FREE LIVE training, Sonny and Frankie will build a Hulu Clone LIVE with REACT JS and firebase!🚀🔥'
        timestamp='1 month ago'
        channel='Clever Programmer'
        title='🔴 Let Build a Hulu Clone with REACT JS for Beginners!'
        image='https://i.ytimg.com/vi/du_FuBTrclo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDO50fwUdwpEWG8gvbsfcI7hZWMg'
      />
      <VideoRow
        views='27K'
        subs='742K'
        description='Do you want to master React JS & learn how to make an income with your new skills? Click here & enroll NOW'
        timestamp='1 day ago'
        channel='Clever Programmer'
        title='4 Steps to Become a Front End Developer in 2021'
        image='https://i.ytimg.com/vi/F3ztn4H6Ftg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAQ-er8PrCucdM9YakD3PUQL7HDYQ'
      />
      <VideoRow
        views='1.5M'
        subs='742K'
        description='Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to ...'
        timestamp='8 month ago'
        channel='Clever Programmer'
        title='Python Tutorial for Beginners - Full Course in 11 Hours [2020]'
        image='https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBhmjZZwsIJmDq23-rDBqfGMoiqIQ'
      />
      <VideoRow
        views='994K'
        subs='742K'
        description='Here is the best free javascript '
        timestamp='9 month ago'
        channel='Clever Programmer'
        title='JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]'
        image='https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD6sGlg7_OLUJZt0TToHw7ROmAbMA'
      />
      <VideoRow
        views='97K'
        subs='742K'
        description='In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, NETFLIX CLONE using React, Firebase & Material-UI...'
        timestamp='1 month ago'
        channel='Clever Programmer'
        title='🔴 How to Build a NETFLIX Clone with REACT JS for Beginners (in 3 Hours!)'
        image='https://i.ytimg.com/vi/XtMThy8QKqU/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAcqxmWCJapwqZl__9QArDQPCI_0g'
      />
      <VideoRow
        views='22K'
        subs='742K'
        description='In this FREE LIVE training, Sonny and Frankie will build a Hulu Clone LIVE with REACT JS and firebase!🚀🔥'
        timestamp='1 month ago'
        channel='Clever Programmer'
        title='🔴 Let Build a Hulu Clone with REACT JS for Beginners!'
        image='https://i.ytimg.com/vi/du_FuBTrclo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDO50fwUdwpEWG8gvbsfcI7hZWMg'
      />
      <VideoRow
        views='27K'
        subs='742K'
        description='Do you want to master React JS & learn how to make an income with your new skills? Click here & enroll NOW'
        timestamp='1 day ago'
        channel='Clever Programmer'
        title='4 Steps to Become a Front End Developer in 2021'
        image='https://i.ytimg.com/vi/F3ztn4H6Ftg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAQ-er8PrCucdM9YakD3PUQL7HDYQ'
      />
      <VideoRow
        views='1.5M'
        subs='742K'
        description='Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to ...'
        timestamp='8 month ago'
        channel='Clever Programmer'
        title='Python Tutorial for Beginners - Full Course in 11 Hours [2020]'
        image='https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBhmjZZwsIJmDq23-rDBqfGMoiqIQ'
      />
      <VideoRow
        views='994K'
        subs='742K'
        description='Here is the best free javascript '
        timestamp='9 month ago'
        channel='Clever Programmer'
        title='JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]'
        image='https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD6sGlg7_OLUJZt0TToHw7ROmAbMA'
      />
    </div>
  );
}

export default SearchPage;
