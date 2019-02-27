import * as React from 'react'

export default class Social extends React.Component {
  render() {
    return (
      <div className="content-container socialMediaList">
        <a href="https://twitter.com/mattesjup">
          <div className="socialMediaIcon twitterIcon" />
          Twitter
        </a>
        <a href="https://facebook.com/MattesJupWenzel">
          <div className="socialMediaIcon facebookIcon" />
          Facebook
        </a>
        <a href="https://www.linkedin.com/in/mattes-wenzel-9b034216b/">
          <div className="socialMediaIcon linkedInIcon" />
          LinkedIn
        </a>
        <a href="https://soundcloud.com/vimptools">
          <div className="socialMediaIcon soundcloudIcon" />
          SoundCloud
        </a>
      </div>
    )
  }
}
